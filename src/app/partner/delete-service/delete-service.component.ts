import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-service',
  templateUrl: './delete-service.component.html',
  styleUrls: ['./delete-service.component.css']
})
export class DeleteServiceComponent implements OnInit {

  formService!: FormGroup;
  services: Array<string> = ['Lavado de útiles deportivos', 'Transporte a lugar de eventos', 'Transporte de biciletas'];

  constructor(private snackbar: MatSnackBar, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formService = this.formBuilder.group({
      serviceName: ['', [Validators.required,]],
    });
  }

  deleteService(service:any){
    this.formService.reset()
    this.snackbar.open(`Servico de socio eliminado exitosamente`, 'Close', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    })
    this.router.navigate(['../../partner/activities']);
  }

  public cancel(){
    this.router.navigate(['../../partner/activities']);
  }

}
