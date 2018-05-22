import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ButtonComponent } from './button/button.component';
import { Button2Component } from './button2/button2.component';

@NgModule({
  declarations: [ButtonComponent, Button2Component],
  imports: [BrowserModule],
  entryComponents: [ButtonComponent,Button2Component]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(ButtonComponent, { injector });
    customElements.define('custom-button', customButton);
    const customButton2 = createCustomElement(Button2Component, { injector });
    customElements.define('custom-button2', customButton2);
  }

  ngDoBootstrap() {}
}
