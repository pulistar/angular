export class peliculas{
    id: number;
    titulo: string;
    sinopsis: String;
    genero: string;
    director: string;
    actores: string;
    fecha_estreno:Date;
    duracion:number;

   


    public constructor(id: number, titulo: string, sinopsis:string, genero: string, director: string, actores: string, fecha_estreno:Date, duracion:number){
        this.id=id;
        this.titulo=titulo;
        this.sinopsis=sinopsis;
        this.genero=genero;
        this.director=director;
        this.actores=actores;
        this.fecha_estreno=fecha_estreno;
        this.duracion=duracion;

        
    }


}