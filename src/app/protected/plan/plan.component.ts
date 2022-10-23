import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { PlanService } from './plan.service';
import { PlanEnum } from './plan.enum';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
})
export class PlanComponent implements OnInit {
  planActual: string = '';

  constructor(private planService: PlanService) {}

  ngOnInit() {
    this.planActual = 'Gratuito';
  }

  cambiarPlan(plan: string): void {
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: '¿Estás seguro?',
        text: `Vas a suscribirte al plan ${plan}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        reverseButtons: true,
      })
      .then(result => {
        if (result.value) {
          var nuevoPlan = this.obtenerPlan(plan);
          this.planService.updatePlan(nuevoPlan).subscribe((response: any) => {
            this.planActual = plan;
            swalWithBootstrapButtons.fire(
              '¡Actualizado!',
              `El plan ha cambiado a ${plan}`,
              'success'
            );
          });
        }
      });
  }

  private obtenerPlan(plan: string): string {
    let nuevoValor: string = '';
    switch (plan) {
      case 'Gratuito':
        nuevoValor = PlanEnum.FREE;
        break;
      case 'Intermedio':
        nuevoValor = PlanEnum.MEDIUM;
        break;
      case 'Premium':
        nuevoValor = PlanEnum.PREMIUM;
        break;
    }
    return nuevoValor;
  }
}
