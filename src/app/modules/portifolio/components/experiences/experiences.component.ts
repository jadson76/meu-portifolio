import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';



@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Desenvolvedor Java Web",
        p: "Detran RJ | junho 2014 - dezembro 2020",
      },
      text: "<p>Desenvolvimento e manutenção em aplicações web Java. Tecnologias Servlets, JSP, Vraptor, Spring Boot, Oracle 11, Tortoise SVN  </p>",
    },
    {
      summary: {
        strong: "Analista de Sistemas",
        p: "ebix Latinamerica | outubro 2020 - ",
      },
      text: "<p>Desenvolvimento e manutenção em aplicações web Java. APIs de serviços, aplicações batch. Tecnologias Struts 1 e 2, JSP, Spring Boot,Angular.JS e Angular, DB2, MongoDB, CI CD Jenkins, Gitlab </p>",
    },
  ])
}
