import {NgModule} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CommonModule} from '@angular/common';
import {PopupComponent} from './popup.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  declarations: [
    PopupComponent
  ],
  exports: [
    PopupComponent
  ]
})

export class PopupModule {

}
