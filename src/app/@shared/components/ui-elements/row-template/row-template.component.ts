import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'kvn-row-template',
  templateUrl: './row-template.component.html',
  styleUrls: ['./row-template.component.scss']
})
export class RowTemplateComponent implements OnInit {

  @Input() autoWith: boolean;
  @Input() autoLabelWidth: boolean;
  @Input() customLabelWidth: string;
  @Input() customControlWidth: string;
  @Input() label: string;
  @Input() labelBold: boolean = false;
  @Input() align: boolean;
  @Input() customControlClass: string;
  @Input() customInfoIconClass: string;
  @Input() subLabel: string;
  @Input() labelRequired: boolean;
  @Input() tooltiptext: string;
  @Input() tooltipInEdu: boolean;
  @Input() inEdu: boolean;
  @Input() inEduOldStyle: boolean;
  @Input() error: string;
  @Input() translateParams: any = {};
  @Input() tooltipClass: string;
  @Input() errorRequired: boolean;
  @Input() checkMark: boolean;
  @Input() defaultRequiredErrorMsg: boolean;
  @Input() isMatTooltip: boolean;
  @Input() customActionText: string;

  @Output() customActionClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

}
