import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
  {
    src: 'assets/icons/knowledge/html5.svg',
    alt: 'Icone de conhecimento de HTML5',
    title: 'HTML5',
  },
  {
    src: 'assets/icons/knowledge/css3.svg',
    alt: 'Icone de conhecimento de CSS3',
    title: 'CSS3',
  },
  {
    src: 'assets/icons/knowledge/angular.svg',
    alt: 'Icone de conhecimento de Angular',
    title: 'Framework Angular',
  },
  {
  src: 'assets/icons/knowledge/javascript.svg',
  alt: 'Icone de conhecimento de Java Script',
  title: 'Linguagem JavaScript',
  },
  {
    src: 'assets/icons/knowledge/java.svg',
    alt: 'Icone de conhecimento de JAVA',
    title: 'Linguagem Java',
  },
  {
    src: 'assets/icons/knowledge/struts.svg',
    alt: 'Icone de conhecimento de Struts',
    title: 'Framework Struts 1 e 2',
  },
  {
    src: 'assets/icons/knowledge/spring.svg',
    alt: 'Icone de conhecimento de Spring Boot',
    title: 'Framework Spring Boot',
  },
  {
    src: 'assets/icons/knowledge/nodejs.svg',
    alt: 'Icone de conhecimento de NodeJS',
    title: 'NodeJS',
  },
  {
    src: 'assets/icons/knowledge/sass.svg',
    alt: 'Icone de conhecimento de SASS',
    title: 'SASS',
  }


  ]);

}
