import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import {Lote} from './lote.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lotes: Lote[];
  error: any;
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.api.getLote().subscribe(
      (lotes: Lote[])  => this.lotes = lotes,
      (error: any) => error
    );

    console.log(this.lotes);
  }
}
