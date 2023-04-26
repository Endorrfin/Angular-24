import { Injectable } from '@angular/core';

export interface WeatherData {
  temperature: number;
  windSpeed: number;
  skyCondition: 'sunny' | 'cloudy'
}

@Injectable()
export class WidgetState {

  data: WeatherData = {
    temperature: 20,
    windSpeed: 5,
    skyCondition: 'sunny'
  }

  lastUpdateAt = new Date();

}
