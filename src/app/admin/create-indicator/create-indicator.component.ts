import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-indicator',
  templateUrl: './create-indicator.component.html',
  styleUrls: ['./create-indicator.component.css']
})
export class CreateIndicatorComponent implements OnInit {

  formService!: FormGroup;
  tipos: Array<string> = ['Resistencia', 'Velocidad', 'Fuerza'];
  deportes: Array<string> = ['Ciclismo', 'Atletismo'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formService = this.formBuilder.group({
      tipoIndicador: ['', [Validators.required]],
      deporte: ['', [Validators.required]],
      formula: ['', [Validators.required]],
    });
  }

}
