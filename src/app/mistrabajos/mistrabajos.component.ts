import { Component, OnInit } from '@angular/core';
import { Proyectos } from './types';
@Component({
  selector: 'app-mistrabajos',
  templateUrl: './mistrabajos.component.html',
  styleUrls: ['./mistrabajos.component.scss']
})
export class MistrabajosComponent implements OnInit {

  misproyectos:Proyectos[];

  constructor(){ 
   
    this.misproyectos = [{
      titulo: "Efecto Mariposa",
      imagen: "../assets/foto_efecto.jpg",
      descripcion: "El diseño se realizó con el framework Vuetify y CSS. El buscador está asociado a la API de Algolia cuya funcionalidad está basada en JavaScript. Tiene una estructura en HTML.",
      enlace: "https://www.efecto-mariposa.cl"
    },
    {
      titulo: "Portafolio",
      imagen: "../assets/portafolio.jpg",
      descripcion: "Vuetify es la base visual de este proyecto, su estructura es HTML y creado con Vue.js",
      enlace: "https://marialuisa.netlify.app/"
    },
    {
      titulo: "Olivia Ross",
      imagen: "../assets/olivia.ross.jpg",
      descripcion: "El framework empleado es Bootstrap, en base a HTML y CSS",
      enlace: "https://kind-kepler-e132e7.netlify.app/"
    },
    {
      titulo: "Barber Shop",
      imagen: "../assets/barber-shop.jpg",
      descripcion: "El diseño se realizó organizado con SASS y hoja de estilos CSS.",
      enlace: "https://sharp-murdock-6e5fa7.netlify.app/"
    },
    {
      titulo: "Suricata",
      imagen: "../assets/suricata.jpg",
      descripcion: "Está página web de restaurante se realizó con Bootstrap y CSS3.",
      enlace: "https://elastic-lewin-dd2cb2.netlify.app/"
    },
    {
      titulo: "Trecking",
      imagen: "../assets/Trekking.jpg",
      descripcion: "Vuetify es la base visual de este proyecto, su estructura es HTML y creado con Vue.js",
      enlace: "https://wonderful-bohr-9c6914.netlify.app/"
    },
    {
      titulo: "Revista",
      imagen: "../assets/Diario.jpg",
      descripcion: "El desarrollo conjugó el uso del preprocesador SASS, HTML, CSS y el framework Bootstrap.",
      enlace: "https://blissful-wright-d30326.netlify.app/"
    },
    {
      titulo: "Pokeapi",
      imagen: "assets/Pokeapi.jpg",
      descripcion: "Aplicando JavaScript se realizó la conexión a la API de Pokemón cuyos personajes se muestra en una plantilla de Bootstrap",
      enlace: "https://mystifying-mclean-dbb5af.netlify.app/"
    },
    {
      titulo: "Rick and Morty",
      imagen: "../assets/rickandmorty.jpg",
      descripcion: "Acceso a la API de Rick and Morty usando lenguaje JavaScript, la información se despliega en un diseño gestionado con bootstrap",
      enlace: "https://amazing-jang-b200a1.netlify.app/"
    }
  ] 
  
  }
   
   
    ngOnInit(): void {
     
  }

}
