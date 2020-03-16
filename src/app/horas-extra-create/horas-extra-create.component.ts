import { Component, OnInit } from '@angular/core';
import { HorasExtraPersona } from '../horas-extra-persona';
import { NgForm } from '@angular/forms';
import { CreateHorasServiceService } from './create-horas-service.service';

@Component({
  selector: 'app-horas-extra-create',
  templateUrl: './horas-extra-create.component.html',
  styleUrls: ['./horas-extra-create.component.css']
})
export class HorasExtraCreateComponent implements OnInit {

  reporteHorasExtra: HorasExtraPersona = new HorasExtraPersona();
  constructor(public  createReporteHorasService: CreateHorasServiceService) { }

  ngOnInit() {
  }

  crearReporteHorasExtra(form: NgForm) {
    if (form.invalid) {
      return;
    }
    else {
      console.log(this.reporteHorasExtra);
      this.createReporteHorasService.createReporte(this.reporteHorasExtra)
      .subscribe(result => {
        console.log(result);
      });
    }
  }

}
