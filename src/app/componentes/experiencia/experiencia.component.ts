import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  experiencia: Experiencia[] = [];

  constructor(private datosExperiencia:ExperienciaService,private ruta:Router) {}

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.datosExperiencia.listar().subscribe(data => {
      this.experiencia = data;
    });
  }

  public editar(id: number) {
    this.ruta.navigate(['editar-experiencia', id]);
  }

  public eliminar(id: number) {
    this.datosExperiencia.eliminar(id).subscribe(data => {
      console.log(data);
      this.listar();
    });
  }

}
