import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { HelloComponent } from './hello.component';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [BrowserModule, MatCardModule, MatButtonModule],
  declarations: [HelloComponent],
  entryComponents: [HelloComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    console.log('bootstraping custom element');
    const HelloElement = createCustomElement(HelloComponent, {
      injector: this.injector
    });

    customElements.define('app-hello-world', HelloElement);
  }
}
