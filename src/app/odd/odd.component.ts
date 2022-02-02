import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, Observable, Subscription } from 'rxjs';
import { GeneratorService } from '../generator.service';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css'],
})
export class OddComponent implements OnInit, OnDestroy {
  private subscribe: Subscription | undefined;
  private observable: Observable<number> | undefined;
  oddList: Array<number> = new Array<number>();
  constructor(private generator: GeneratorService) {}

  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }

  ngOnInit(): void {
    this.observable = this.generator.source;
    this.subscribe = this.observable
      .pipe(filter((num) => num % 2 !== 0))
      .subscribe((val) => this.oddList.push(val));
  }
}
