import { Component, OnInit } from '@angular/core';
import { TableModel, TableItem } from 'carbon-components-angular';
import { UIShellModule } from 'carbon-components-angular/ui-shell/ui-shell.module';

@Component({
  selector: 'app-ui-dev',
  templateUrl: './ui-dev.component.html',
  styleUrls: ['./ui-dev.component.scss']
})
export class UiDevComponent implements OnInit {


  model = new TableModel();

  constructor() {
  }

  ngOnInit(): void {
  }

}
