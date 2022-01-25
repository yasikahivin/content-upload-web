import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-testimonial-select-type',
  templateUrl: './testimonial-select-type.component.html',
  styleUrls: ['./testimonial-select-type.component.scss']
})
export class TestimonialSelectTypeComponent {

  form: FormGroup;

  //Admited data 
  AdmitedFor: Array<any> = [
    { name: 'Cardiology ', value: 'cardiology ' },
    { name: 'Intensive care', value: 'intensive care' },
    { name: 'Radiology', value: 'radiology' },
    { name: 'Outpatient', value: 'outpatient' }
  ];

  constructor(private fb: FormBuilder,private route: ActivatedRoute,private router:Router) {    
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required])
    });
  }
  
  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitForm() {
    console.log(this.form.value);
    setTimeout(() => this.goToNext());
  }

  goToNext() {
    this.router.navigate(['/add/selectmediatype'], { relativeTo: this.route });
  }

}
