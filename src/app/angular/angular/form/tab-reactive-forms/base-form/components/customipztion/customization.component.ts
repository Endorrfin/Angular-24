import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ICountries } from '../../../../models/countries';
import { SettingsService } from '../../../../services/settings.service';

@Component({
  selector: 'kvn-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.scss']
})
export class CustomizationComponent {

  @Input() public formGroupName!: string;
  public form!: FormGroup;
  public countries: ICountries[] = this.serviceSettings.countries;
  public selectedLanguage = this.countries[0].language;
  public selectedLanguageByDefault = this.countries[1].language;

  constructor(private rootFormGroup: FormGroupDirective, private serviceSettings: SettingsService) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

}
