import { Component, OnInit } from '@angular/core';

// Interfaces
import { Article } from 'src/app/interfaces/interfaces';

// Servicios
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{

  // Objeto llamado -> 'noticias' para obtener las noticias de nuestra interfaz.
      // Es de tipo 'Article' -> importado de nuestra interfaz. De tipo 'array'
          // Y lo declaramos como un array vacío.
  noticias : Article[] = [];


  // Llamamos al servicio que hemos creado para obtener la respuesta.
      // Nos creará un import desde el servicio que requerimos. -> NoticiasService
  constructor( private noticiasService : NoticiasService) {}


  /* OnInit es un ciclo de vida que actuará cuando hayan obtenido todos los datos
     de una directiva -> En este caso el servicio.*/
  ngOnInit(){

    /*
        Llamamos al servicio dentro del ngOnInit ->

        Queremos que 'ESTE' -> servicio de noticias 'noticiasService'
        obtenga la ruta HTTP dentro del servicio 'getTopHeadLines'
    */
    this.noticiasService.getTopHeadLines()
      // Nos suscribimos al servicio para obtener una respuesta, mediante una funcion.
      .subscribe( resp => {
        
        // Mostramos la respuesta por consola.
          /*
            Al tener importado las intefaces en los servicios podremos llamar a la columna
            del JSON
           */
        console.log( 'noticias', resp);

        this.noticias.push( ...resp.articles );
                                         
    });  
  }

}
