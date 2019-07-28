import { Component, OnInit } from '@angular/core';

//Services
import { CurrentWeatherService } from '../../services/current-weather.service';

//Animations
import { showUp } from '../../animations/showUp.animation';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  animations: [showUp]
})
export class CurrentWeatherComponent implements OnInit {

  constructor(public weatherService:CurrentWeatherService){

  }

  ngOnInit() {}

}
