import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimonialAddComponent } from './patiens-testimonial/testimonial-add/testimonial-add.component';
import { TestimonialSelectTypeComponent } from './patiens-testimonial/testimonial-select-type/testimonial-select-type.component';
import { TestimonialStartComponent } from './patiens-testimonial/testimonial-start/testimonial-start.component';

const routes: Routes = [
  { path: '',  redirectTo: 'start', pathMatch: 'full'},
  //{ path: 'home', component: TestimonialAddComponent},
  { path: 'start', component: TestimonialStartComponent},
  { path: 'add', component: TestimonialAddComponent},
  { path: 'type', component: TestimonialSelectTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
