import { AfterViewInit, Component, inject, Injector, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { WidgetState } from '../widget-state.service';
import { WidgetActions } from '../widget-actions.service';

@Component({
  selector: 'kvn-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  standalone: true,
  imports: [NgTemplateOutlet],
  providers: [WidgetState, WidgetActions],
})
export class WeatherWidgetComponent implements AfterViewInit {
  @Input()
  headerTemplate: TemplateRef<any>;

  @Input()
  actionTemplate: TemplateRef<any>;

  @Input()
  contentTemplate: TemplateRef<{ $implicit: WidgetState }>;


  state = inject(WidgetState);
  actions = inject(WidgetActions);
  injector = inject(Injector);


  // -------- Alternative variant --------
  // @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef
  // @ViewChild('defaultWidgetHeaderAlternative') headerTemplateAlternative: TemplateRef<any>;

  ngAfterViewInit () {
    // this.container.createEmbeddedView(this.headerTemplateAlternative)
  }
}
