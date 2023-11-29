import { Component } from '@angular/core';
import * as $ from 'jquery';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  canciones: any[] = [
    {
      nombre: 'Parachutes',
      descripcion: 'Año: 2000',
      imagen: '../../assets/Parachutes.jpeg',
      enlace: 'https://music.youtube.com/watch?v=yWeuUwpEQfs&list=OLAK5uy_mO6LoBQmkXq6ZPyLQ6snqEs_IBlmbZAao'
    },
    {
      nombre: 'Music of the spheres',
      descripcion: 'Año: 2001',
      imagen: '../../assets/Music of the spheres.jpeg',
      enlace: 'https://music.youtube.com/watch?v=_HCCTVGlTOg&list=OLAK5uy_mwyek6fClVOPg6HFjfQ5rvzTf7zwRiE-8'
    },
    {
      nombre: 'A Rush of Blood to the Head',
      descripcion: 'Año: 2002',
      imagen: '../../assets/A Rush of Blood to the Head.jpeg',
      enlace: 'https://music.youtube.com/watch?v=GOrADSEKb_k&list=OLAK5uy_l3yCl4IOFKJ4vpj2jl6_gL3gZQOJPVP3w'
    },
    {
      nombre: 'X&Y',
      descripcion: 'Año: 2005',
      imagen: '../../assets/X&Y.png',
      enlace: 'https://music.youtube.com/watch?v=j37GED-AR3M&list=OLAK5uy_keCXNLV07ZwL19mpKynR-i8jUDdr_8H2s'
    },

  ];

}
