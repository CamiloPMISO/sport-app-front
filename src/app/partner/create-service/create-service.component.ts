import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {

  formService!: FormGroup;
  sports: Array<string> = ['Atletismo', 'Ciclismo'];
  typeServices: Array<string> = ['Alimentación', 'Transporte', 'Deportología'];

  constructor( private formBuilder: FormBuilder, private snackbar: MatSnackBar,) { }

  ngOnInit(): void {
    this.formService = this.formBuilder.group({
      serviceName: ['', [Validators.required, Validators.minLength(2)]],
      sport: ['', [Validators.required]],
      serviceType: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  createService(service:any){
    this.formService.reset()
    this.snackbar.open(`Servico de socio creado exitosamente`, 'Close', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    })
  }

}
