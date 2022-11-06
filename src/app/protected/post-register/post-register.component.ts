import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/public/auth/auth.service';
import { Gender, IDType, NutritionType } from './post-register.enums';
import {
  City,
  Country,
  PostRegisterRequest,
  Sport,
} from './post-register.interfaces';
import { PostRegisterService } from './post-register.service';

@Component({
  selector: 'app-post-register',
  templateUrl: './post-register.component.html',
  styleUrls: ['./post-register.component.css'],
})
export class PostRegisterComponent implements OnInit {
  formGeneralInfo!: FormGroup;
  formDemograficInfo!: FormGroup;
  formSportInfo!: FormGroup;
  formNutritionInfo!: FormGroup;

  genders: Array<string> = ['Masculino', 'Femenino'];
  identificationTypes: Array<string> = ['TI', 'CC', 'CE', 'Pasaporte'];
  countries: Array<Country> = [];
  citiesOfCountryBirth: Array<City> = [];
  citiesOfCountryRecidence: Array<City> = [];
  sports: Array<Sport> = [];
  preferences: Array<string> = ['vegetariano', 'vegano', 'ninguno'];
  alergies: Array<string> = [];

  constructor(
    private formBuilder: FormBuilder,
    private postRegisterService: PostRegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formGeneralInfo = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      identificationType: ['', [Validators.required]],
      identificationNumber: [
        '',
        [Validators.required, Validators.minLength(8)],
      ],
      gender: ['', [Validators.required]],
    });

    this.formDemograficInfo = this.formBuilder.group({
      OriginCountry: ['', [Validators.required]],
      OriginCity: ['', [Validators.required]],
      CurrentCountry: ['', [Validators.required]],
      CurrentCity: ['', [Validators.required]],
      yearInCurrentCity: ['', [Validators.required, Validators.minLength(2)]],
    });

    this.formSportInfo = this.formBuilder.group({
      age: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      height: ['', [Validators.required]],
      sports: this.formBuilder.array([], [Validators.required]),
    });

    this.formNutritionInfo = this.formBuilder.group({
      alergies: ['', []],
      preferences: ['', [Validators.required]],
    });

    this.postRegisterService.getCountriesAndCities().subscribe(countries => {
      this.countries = countries;
    });

    this.postRegisterService.getSports().subscribe(sports => {
      this.sports = sports;
    });
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.formSportInfo.get('sports') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  addAlergy(alergie: string) {
    if (alergie !== '' && !this.alergies.includes(alergie)) {
      this.alergies.push(alergie);
      this.formNutritionInfo.reset();
    }
  }
  submit() {
    let athletePostRegister: PostRegisterRequest = {
      name: this.formGeneralInfo.value.name,
      lastName: this.formGeneralInfo.value.lastName,
      age: this.formSportInfo.value.age,
      idType: this.getDocumentType(
        this.formGeneralInfo.value.identificationType
      ),
      idNumber: this.formGeneralInfo.value.identificationNumber,
      gender: this.getGender(this.formGeneralInfo.value.gender),
      weight: this.formSportInfo.value.weight,
      height: this.formSportInfo.value.height,
      cityOfBirth: this.formDemograficInfo.value.OriginCity,
      cityOfResidence: this.formDemograficInfo.value.CurrentCity,
      sports: this.formSportInfo.value.sports,
      nutritionType: this.getPreferences(
        this.formNutritionInfo.value.preferences
      ),
    };

    this.postRegisterService
      .addAthletePosRegisterData(athletePostRegister)
      .subscribe((response: any) => {
        this.postRegisterService
          .createTrainingPlan()
          .subscribe((response: any) => {
            this.router.navigate(['../../protected/risk']);
          });
      });
  }

  private getDocumentType(documentType: string): string {
    let docType: string = '';
    switch (documentType) {
      case 'TI':
        docType = IDType.TI;
        break;
      case 'CC':
        docType = IDType.CC;
        break;
      case 'CE':
        docType = IDType.CE;
        break;
      case 'Pasaporte':
        docType = IDType.PASSPORT;
        break;
    }
    return docType;
  }

  private getGender(gender: string): string {
    let gen: string = '';
    switch (gender) {
      case 'Masculino':
        gen = Gender.MALE;
        break;
      case 'Femenino':
        gen = Gender.FEMALE;
        break;
    }
    return gen;
  }

  private getPreferences(preferences: string): string {
    let prefer: string = '';
    switch (preferences) {
      case 'vegetariano':
        prefer = NutritionType.VEGETARIAN;
        break;
      case 'vegano':
        prefer = NutritionType.VEGAN;
        break;
      case 'ninguno':
        prefer = NutritionType.NORMAL;
        break;
    }
    return prefer;
  }

  onSelectedCountryOrigin(countryId: string) {
    this.citiesOfCountryBirth =
      this.countries.find(country => country.id === countryId)?.cities || [];
  }

  onSelectedCountryResidence(countryId: string) {
    this.citiesOfCountryRecidence =
      this.countries.find(country => country.id === countryId)?.cities || [];
  }
}
