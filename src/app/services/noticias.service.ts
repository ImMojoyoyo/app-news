import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';


// Interfaces
import { RespuestaTopHeadLines } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  // Declaramos dentro del constructor que esto será un servicio HTTP privado.
                    // private http : HttpClient
    /* Para poder usar el HttpClient primero tenemos que importar dentro de 
      app.module.ts (general) -> nuestro servidor HttpClientModule*/ 

  constructor( private http : HttpClient ) { }

  // Creamos el método HTTP que vamos nos proporcionará este servicio.
  getTopHeadLines() {
    // Devuelve 'ESTE' método 'HTTP' -> GET - de la API ->
        // El metodo get obtiene la interfaz JSON <RespuestaTopHeadLines>
    return this.http.get<RespuestaTopHeadLines>(`http://newsapi.org/v2/everything?q=tesla&from=2020-12-30&sortBy=publishedAt&apiKey=5f2c2bb3fcfd476f9bdda7aceaaceb9c`);
  }
}
