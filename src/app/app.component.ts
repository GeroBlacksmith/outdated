import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibreriaService } from './libreria.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  libros;
  libro$:Subscription;
  constructor(private libreria:LibreriaService){}
  ngOnInit(): void {
    this.libro$ = this.libreria.get().subscribe(
      response => {
        console.log(response);
        this.libros = response;
      }
      )
    }
  ngOnDestroy(): void {
      this.libro$.unsubscribe();
  }
  title = 'outdated';

}
