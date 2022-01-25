import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSelectHospitalComponent } from './patiens-testimonial/testimonial-add/add-select-hospital/add-select-hospital.component';
import { AddSelectMediatypeComponent } from './patiens-testimonial/testimonial-add/add-select-mediatype/add-select-mediatype.component';
import { TestimonialAddComponent } from './patiens-testimonial/testimonial-add/testimonial-add.component';
import { AddContentFileUploadComponent } from './patiens-testimonial/testimonial-add/add-content-file-upload/add-content-file-upload.component';
import { AddContentVideoComponent } from './patiens-testimonial/testimonial-add/add-content-video/add-content-video.component';
import { TestimonialSelectTypeComponent } from './patiens-testimonial/testimonial-select-type/testimonial-select-type.component';
import { TestimonialStartComponent } from './patiens-testimonial/testimonial-start/testimonial-start.component';
import { AddContentRecordVideoComponent } from './patiens-testimonial/testimonial-add/add-content-record-video/add-content-record-video.component';
import { AddContentPublishComponent } from './patiens-testimonial/testimonial-add/add-content-publish/add-content-publish.component';
import { TestimonialEndComponent } from './patiens-testimonial/testimonial-end/testimonial-end.component';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  //{ path: 'home', component: TestimonialAddComponent},
  { path: 'start', component: TestimonialStartComponent },
  { path: 'selecthospital', component: TestimonialSelectTypeComponent },
  {
    path: 'add',
    component: TestimonialAddComponent,
    children: [
      
      { path: 'selectmediatype', component: AddSelectMediatypeComponent },
      { path: 'selectvideotype', component: AddContentVideoComponent },
      { path: 'record', component: AddContentRecordVideoComponent },
      { path: 'upload', component: AddContentFileUploadComponent },
      { path: 'publish', component:  AddContentPublishComponent },
    ],
  },
  { path: 'thankyou', component: TestimonialEndComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
