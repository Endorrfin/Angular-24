import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ICountries, IOptionsNumber } from '../../../../models/countries';
import { SettingsService } from '../../../../services/settings.service';

@Component({
  selector: 'kvn-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  @Input() public formGroupName: string;

  public form!: FormGroup;
  public countries: ICountries[] = this.serviceSettings.countries;
  public selectedLanguage = this.countries[0].language;
  public selectedLanguageByDefault = this.countries[1].language;
  public volume: IOptionsNumber[] = this.serviceSettings.volume;

  constructor(public serviceSettings: SettingsService, private rootFormGroup: FormGroupDirective) {}

  public ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;

    // this.form = this.rootFormGroup.control.get(this.generalFormGroup) as FormGroup;
    // console.log('SECTION 1 general -> form', this.form);
  }

  public formatLabel(value: number): string {
    return `${value}`;
  }

  public selectedDefaultLanguage(event: Event) {
    this.selectedLanguageByDefault = (event.target as HTMLSelectElement).value;
  }
}
