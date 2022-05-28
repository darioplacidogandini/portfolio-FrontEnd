import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  listaExperiencia: Observable<Experiencia[]> | undefined;

  constructor(private datosExperiencia:ExperienciaService) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.listaExperiencia = this.datosExperiencia.listar();
  }

}
