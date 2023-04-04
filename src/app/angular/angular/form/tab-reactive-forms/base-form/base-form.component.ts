import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kvn-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss']
})
export class BaseFormComponent implements OnInit {
  public baseForm: FormGroup;
  public submitted = false;

  public get baseFormData() {
    return this.baseForm.controls;
  }

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.buildForm();
    this.baseFormData;
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.baseForm.invalid) {
      return;
    }
  }

  private buildForm() {
    this.baseForm = this.fb.group({
      // GENERAL SETTINGS SECTION
      generalSection: this.fb.group({
        defaultLanguage: new FormControl('', Validators.required),
        availableLanguages: new FormControl('', Validators.required),
        units: new FormControl('', Validators.required),
        sounds: new FormControl('', Validators.required),
        volume: new FormControl('', Validators.required),
        autoUpdates: new FormControl('', Validators.required),
        qrLogin: new FormControl('', Validators.required),
      }),

      // PERFORMANCE RUN SETTINGS SECTION
      performanceSection: this.fb.group({
        switcher: new FormControl('', Validators.required),
        layout: new FormControl('', Validators.required),
        inclineKeysOne: new FormControl('', [Validators.required, Validators.min(0), Validators.max(15)]),
        inclineKeysTwo: new FormControl('', [Validators.required, Validators.min(0), Validators.max(15)]),
        inclineKeysThree: new FormControl('', [Validators.required, Validators.min(0), Validators.max(15)]),
        inclineKeysFour: new FormControl('', [Validators.required, Validators.min(0), Validators.max(15)]),
        inclineKeysFive: new FormControl('', [Validators.required, Validators.min(0), Validators.max(15)]),
        inclineKeysSix: new FormControl('', [Validators.required, Validators.min(0), Validators.max(15)]),
        speedKeysOne: new FormControl('', [Validators.required, Validators.min(1), Validators.max(14)]),
        speedKeysTwo: new FormControl('', [Validators.required, Validators.min(1), Validators.max(14)]),
        speedKeysThree: new FormControl('', [Validators.required, Validators.min(1), Validators.max(14)]),
        speedKeysFour: new FormControl('', [Validators.required, Validators.min(1), Validators.max(14)]),
        speedKeysFive: new FormControl('', [Validators.required, Validators.min(1), Validators.max(14)]),
        speedKeysSix: new FormControl('', [Validators.required, Validators.min(1), Validators.max(14)]),
      }),

      // CUSTOMIZATION SETTINGS SECTION
      customizationSection: this.fb.group({
        defaultLanguage2: new FormControl('', Validators.required),
        availableLanguages2: new FormControl('', Validators.required),
      }),

      // ENERGY SAVING SETTINGS SECTIONS
      energySavingSection: this.fb.group({
        autoShutoff: new FormControl('On', Validators.required),
        inactivityTimer: new FormControl('', Validators.required),
      }),
    });
  }

}
