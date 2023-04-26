import { Component } from '@angular/core';
import { WeatherWidgetComponent } from '../widgets/weather-widget/weather-widget.component';
import { WeatherCustomActionComponent } from '../widgets/weather-custom-action/weather-custom-action.component';

@Component({
  selector: 'kvn-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss'],
  standalone: true,
  imports: [
    WeatherWidgetComponent,
    WeatherCustomActionComponent
  ]
})
export class WidgetWrapperComponent {

}
