import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades: Habilidades[] = [];

  constructor(private datosHabilidades:HabilidadesService) {}

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.datosHabilidades.listar();
  }

  public eliminar(id: number) {
    this.datosHabilidades.eliminar(id);
    this.listar();
  }
  
}
