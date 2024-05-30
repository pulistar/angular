import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { peliculas } from './peliculas';

@Injectable({
  providedIn: 'root'
})
export class ApiPeliculasService {

  constructor(private http: HttpClient) { }

  obtenerPeliculas(): Observable<peliculas[]> {
    return this.http.get<peliculas[]>('http://127.0.0.1:8000/api/peliculas/listar-peliculas');
  }

  crearPelicula(pelicula: peliculas): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/peliculas/crear-pelicula', pelicula);
  }

  actualizarPelicula(pelicula: peliculas): Observable<any> {
    const url = `http://127.0.0.1:8000/api/peliculas/actualizar-pelicula/${pelicula.pkid}`;
    return this.http.put(url, pelicula);
  }

  eliminarPelicula(pkid: number): Observable<any> {
    const url = `http://127.0.0.1:8000/api/peliculas/eliminar-pelicula/${pkid}`;
    return this.http.delete(url);
  }
}
