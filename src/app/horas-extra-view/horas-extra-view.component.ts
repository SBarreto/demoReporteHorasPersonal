import { Component, OnInit } from '@angular/core';
import { CreateHorasServiceService } from '../horas-extra-create/create-horas-service.service';
import { HorasExtraPersona } from '../horas-extra-persona';

@Component({
  selector: 'app-horas-extra-view',
  templateUrl: './horas-extra-view.component.html',
  styleUrls: ['./horas-extra-view.component.css']
})
export class HorasExtraViewComponent implements OnInit {

  reportes: HorasExtraPersona[] = [];

  constructor(private reportesService: CreateHorasServiceService) { }

  ngOnInit() {
    this.getReportes();
  }

  getReportes() {
    this.reportesService.getReportes().subscribe(data => {
      this.reportes = JSON.parse(JSON.stringify(data));
      console.log('reportes encontrados: ');
      console.log(this.reportes);
    }), error => {
      console.log(error);
    }
  }

}
