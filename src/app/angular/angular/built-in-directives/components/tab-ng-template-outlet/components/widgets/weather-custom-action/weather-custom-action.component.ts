import { Component, inject } from '@angular/core';
import { WeatherWidgetComponent } from '../weather-widget/weather-widget.component';

@Component({
  selector: 'kvn-weather-custom-action',
  template: `<button (click)="onClick()">Reload & Copy</button>`,
  standalone: true,
})
export class WeatherCustomActionComponent {
  weatherWidget = inject(WeatherWidgetComponent);

  onClick() {
    console.log(this.weatherWidget)
    this.weatherWidget.actions.reload();
    this.weatherWidget.actions.copyData();
  }

}
