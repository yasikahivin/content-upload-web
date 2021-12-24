import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimonialAddComponent } from './patiens-testimonial/testimonial-add/testimonial-add.component';
import { AddContentFileUploadComponent } from './patiens-testimonial/testimonial-select-type/add-content-file-upload/add-content-file-upload.component';
import { AddContentVideoComponent } from './patiens-testimonial/testimonial-select-type/add-content-video/add-content-video.component';
import { TestimonialSelectTypeComponent } from './patiens-testimonial/testimonial-select-type/testimonial-select-type.component';
import { TestimonialStartComponent } from './patiens-testimonial/testimonial-start/testimonial-start.component';

const routes: Routes = [
  { path: '',  redirectTo: 'start', pathMatch: 'full'},
  //{ path: 'home', component: TestimonialAddComponent},
  { path: 'start', component: TestimonialStartComponent},
  { path: 'add', component: TestimonialAddComponent},
  { path: 'type', component: TestimonialSelectTypeComponent},
  { path: 'record', component: AddContentVideoComponent},
  { path: 'upload', component: AddContentFileUploadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
