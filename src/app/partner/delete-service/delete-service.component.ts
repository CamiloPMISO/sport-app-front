import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-delete-service',
  templateUrl: './delete-service.component.html',
  styleUrls: ['./delete-service.component.css']
})
export class DeleteServiceComponent implements OnInit {

  formService!: FormGroup;
  services: Array<string> = ['Lavado de útiles deportivos', 'Transporte a lugar de eventos', 'Transporte de biciletas'];

  constructor(private snackbar: MatSnackBar,) { }

  ngOnInit(): void {
  }

  deleteService(service:any){
    this.formService.reset()
    this.snackbar.open(`Servico de socio eliminado exitosamente`, 'Close', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    })
  }

}
