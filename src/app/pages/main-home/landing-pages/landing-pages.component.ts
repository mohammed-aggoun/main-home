import { Component, Input, OnInit } from '@angular/core';

// types
import { ProjectsLists } from '../home.model';

@Component({
  selector: 'app-home-landing-pages-demo',
  templateUrl: './landing-pages.component.html',
  styleUrls: ['./landing-pages.component.scss']
})
export class LandingPagesComponent implements OnInit {

  @Input() mainProjectsList: ProjectsLists[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
