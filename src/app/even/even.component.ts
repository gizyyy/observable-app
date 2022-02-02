import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, Observable, Subscription } from 'rxjs';
import { GeneratorService } from '../generator.service';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css'],
})
export class EvenComponent implements OnInit, OnDestroy {
  private subscribe: Subscription | undefined;
  private observable: Observable<number> | undefined;
  evenList: Array<number> = new Array<number>();
  constructor(private generator: GeneratorService) {}

  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }

  ngOnInit(): void {
    this.observable = this.generator.source;
    this.subscribe = this.observable
      .pipe(filter((num) => num % 2 === 0))
      .subscribe((val) => this.evenList.push(val));
  }
}
