import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import AppendixData from '../../../assets/db-appendix.json';
import { I_Appendix } from './model/appendix';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css'],
})
export class ReferencesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'Reference', 'Link', 'Comments'];
  appendixData: I_Appendix[] = AppendixData;
  dataSource = new MatTableDataSource(this.appendixData);

  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
