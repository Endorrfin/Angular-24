import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { IOptionsNumber, IOptionString } from '../../../../models/countries';
import { SettingsService } from '../../../../services/settings.service';

@Component({
  selector: 'kvn-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {

  @Input() public formGroupName!: string;
  // @Input() performanceFormGroup!: FormGroup;
  public form!: FormGroup;

  public options: IOptionString[] = this.serviceSettings.options;
  public layoutOptions: IOptionsNumber[] = this.serviceSettings.layout;
  public switcherSelected = this.serviceSettings.options.find((c) => c.id == 1);

  public selectedSwitcher = ['OFF', 'NO'];
  public selectedSwitcherByDefault = this.selectedSwitcher[1];

  constructor(private rootFormGroup: FormGroupDirective, public serviceSettings: SettingsService) {}

  public ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;

    // this.form = this.rootFormGroup.control.get(this.performanceFormGroup) as FormGroup;
    // console.log('SECTION 2 performance -> form', this.form);

    this.form.get('switcher')!.setValue(this.switcherSelected);
  }

}
