import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiPeliculasService } from '../api-peliculas.service';
import { peliculas } from '../peliculas';

@Component({
  selector: 'app-listar-peliculas',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './listar-peliculas.component.html',
  styleUrl: './listar-peliculas.component.css'
})
export class ListarPeliculasComponent implements OnInit{
  peliculas:Array<peliculas>=[];
  constructor(private routerPath: Router, private apipeliculasservice: ApiPeliculasService){

  }
  ngOnInit() {
      this.obtenerPeliculas();
  }
  obtenerPeliculas(){

    this.apipeliculasservice.obtenerPeliculas().subscribe(vs=>{
      this.peliculas=vs;
      console.log(this.peliculas)
    });
  }
  onEditarNavigate(id: number) {
    this.routerPath.navigate([`/actualizar-pelicula/${id}`]);
  }


}
