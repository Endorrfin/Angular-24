import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { IOptionString } from '../../../../models/countries';
import { SettingsService } from '../../../../services/settings.service';

@Component({
  selector: 'kvn-energy-saving',
  templateUrl: './energy-saving.component.html',
  styleUrls: ['./energy-saving.component.scss']
})
export class EnergySavingComponent implements OnInit {

  @Input() public formGroupName!: string;
  public form!: FormGroup;

  public options: IOptionString[] = this.serviceSettings.options;
  public autoShutoffSelected = this.serviceSettings.options.find((c) => c.id == 1);
  public inactivityTimerSelected = this.serviceSettings.options.find((c) => c.id == 1);

  public selectedAutoShutoff = ['On', 'Off'];
  public selectedAutoShutoffByDefault = this.selectedAutoShutoff[0];

  public selectedInactivityTimer = ['On', 'Off'];
  public selectedInactivityTimerByDefault = this.selectedInactivityTimer[0];

  constructor(
    private rootFormGroup: FormGroupDirective,
    public serviceSettings: SettingsService // private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;

    this.form.get('autoShutoff')!.setValue(this.autoShutoffSelected);
    this.form.get('inactivityTimer')!.setValue(this.inactivityTimerSelected);
  }

}
