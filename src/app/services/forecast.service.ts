import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

//Services
import { GeolocationService } from './geolocation.service';

//Structures
import { Coords } from 'src/structures/coords.structure';
import { Weather } from 'src/structures/weather.structure';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  public weatherSubject:Subject<any> = new Subject<any>();
  public weather$:Observable<any>;
  endpoint:string = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private http:HttpClient, private geolocationService:GeolocationService) {
    this.weather$ = this.weatherSubject.asObservable().pipe(map(this.structureData));

    this.geolocationService.coords$.subscribe((coords)=>{
      this.get(coords);
    });
  }

  structureData(data:any){

    let minMaxPerDay = {};
    data.list.forEach(weatherObject => {
      let date = new Date(weatherObject.dt * 1000);
      let hours = date.getHours();
      let month = date.getMonth();
      let day = date.getDate();
      let key = `${month}-${day}`;

      let temPerDay:Weather = minMaxPerDay[key] || {
        minMaxTemp: {}
      };

      if(!temPerDay.cod || hours == 16){
        let source = weatherObject.weather[0];
        temPerDay = { ...temPerDay, ...source};
        temPerDay.cod = source.id;
        temPerDay.name = data.city.name;
      }

      if(!temPerDay.minMaxTemp.min || weatherObject.main.temp_min < temPerDay.minMaxTemp.min){
        temPerDay.minMaxTemp.min = weatherObject.main.temp_min;
      }

      if(!temPerDay.minMaxTemp.max || weatherObject.main.temp_max > temPerDay.minMaxTemp.max){
        temPerDay.minMaxTemp.max = weatherObject.main.temp_max;
      }

      minMaxPerDay[key] = temPerDay;
    });
    return Object.values(minMaxPerDay);
  }

  get(coords:Coords){
    let args:string = `?lat=${coords.lat}&lon=${coords.lon}&APPID=${environment.key}&units=metric`;
    let url = this.endpoint + args;

    if(isDevMode()){
      url = 'assets/forecast.json';
    }
    this.http.get(url).subscribe(this.weatherSubject);
  }
}
