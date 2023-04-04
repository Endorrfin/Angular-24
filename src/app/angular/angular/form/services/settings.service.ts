import { Injectable } from '@angular/core';
import { ICountries, IOptionsNumber, IOptionString } from '../models/countries';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  countries: ICountries[] = [
    { country: 'United States', language: 'English (US)' },
    { country: 'United Kingdom', language: 'English (UK)' },
    { country: 'Spain', language: 'Spanish (ES)' },
    { country: 'France', language: 'French (FR)' },
    { country: 'Germany', language: 'German (DE)' },
    { country: 'Italy', language: 'Italian (IT)' },
    { country: 'China', language: 'Chinese (CN)' },
    { country: 'India', language: 'Hindi (IN)' },
    { country: 'Japan', language: 'Japanese (JA)' },
    { country: 'Turkey', language: 'Turkish (TR)' },
    { country: 'Sweden', language: 'Swedish (SE)' },
    { country: 'Poland', language: 'Polish (PL)' },
    { country: 'South Korea', language: 'Korean (KR)' },
    { country: 'Ukraine', language: 'Ukrainian (UA)' },
    { country: 'Russia', language: 'Russian (RU)' },
    { country: 'Israel', language: 'Hebrew (IL)' },
    { country: 'Greece', language: 'Greek (EL)' },
    { country: 'Netherlands', language: 'Dutch (NL)' },
    { country: 'Denmark', language: 'Danish (DK)' },
    { country: 'United Arab Emirates', language: 'Arabic (AR)' },
  ];

  options: IOptionString[] = [
    { id: 1, value: 'On' },
    { id: 2, value: 'Off' },
  ];

  volume: IOptionsNumber[] = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
    { id: 6, value: 6 },
    { id: 7, value: 7 },
    { id: 8, value: 8 },
    { id: 9, value: 9 },
    { id: 10, value: 10 },
  ];

  layout: IOptionsNumber[] = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
    { id: 6, value: 6 },
  ];
}
