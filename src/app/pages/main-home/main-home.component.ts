import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from 'feather-icons';

// types
import { ProjectsLists } from './home.model';

// data
import { MAINPROJECTSLIST, } from './data';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {

  mainProjectsList: ProjectsLists[] = [];


  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Mohammed-Aggoun ");
    this._fetchData();
  }

  ngAfterViewInit() {
    // feather icon
    feather.replace();
  }

  _fetchData(): void {
    this.mainProjectsList = MAINPROJECTSLIST;
  }

}
