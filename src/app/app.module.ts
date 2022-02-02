import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EvenComponent } from './even/even.component';
import { GeneratorService } from './generator.service';
import { OddComponent } from './odd/odd.component';

@NgModule({
  declarations: [AppComponent, OddComponent, EvenComponent],
  imports: [BrowserModule],
  providers: [GeneratorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
