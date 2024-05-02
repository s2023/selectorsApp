import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CountriesRoutingModule } from './countries-routing.module';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';

@NgModule({
  declarations: [
    SelectorPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ /* services here if are not provided in root  */]
})
export class CountriesModule { }
