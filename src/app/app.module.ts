import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatiensTestimonialComponent } from './patiens-testimonial/patiens-testimonial.component';
import { TestimonialStartComponent } from './patiens-testimonial/testimonial-start/testimonial-start.component';
import { TestimonialSelectTypeComponent } from './patiens-testimonial/testimonial-select-type/testimonial-select-type.component';
import { AddContentVideoComponent } from './patiens-testimonial/testimonial-add/add-content-video/add-content-video.component';
import { AddContentTextComponent } from './patiens-testimonial/testimonial-add/add-content-text/add-content-text.component';
import { TestimonialAddComponent } from './patiens-testimonial/testimonial-add/testimonial-add.component';
import { AddContentFileUploadComponent } from './patiens-testimonial/testimonial-add/add-content-file-upload/add-content-file-upload.component';
import { AddSelectHospitalComponent } from './patiens-testimonial/testimonial-add/add-select-hospital/add-select-hospital.component';
import { AddSelectMediatypeComponent } from './patiens-testimonial/testimonial-add/add-select-mediatype/add-select-mediatype.component';
import { AddContentRecordVideoComponent } from './patiens-testimonial/testimonial-add/add-content-record-video/add-content-record-video.component';
import { AddContentPublishComponent } from './patiens-testimonial/testimonial-add/add-content-publish/add-content-publish.component';

@NgModule({
  declarations: [
    AppComponent,
    PatiensTestimonialComponent,
    TestimonialStartComponent,
    TestimonialSelectTypeComponent,
    AddContentVideoComponent,
    AddContentTextComponent,
    TestimonialAddComponent,
    AddContentFileUploadComponent,
    AddSelectHospitalComponent,
    AddSelectMediatypeComponent,
    AddContentRecordVideoComponent,
    AddContentPublishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
