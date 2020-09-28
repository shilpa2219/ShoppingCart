import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { RegistrationService } from 'src/app/registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  submitted = false
  
  constructor(private fb: FormBuilder, private service:RegistrationService) { }

  ngOnInit(): void {
  }
  storeForm = this.fb.group({
    
    name: ['', [Validators.required, Validators.pattern("^[a-zA-Z ]{2,30}$")]],
    email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
    password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]{2,30}$")]],
    mobile: ['', [Validators.required, Validators.pattern("(0/91)?[7-9][0-9]{9}")]],
    dob: ['', [Validators.required, Validators.pattern("((?:19|20)\\d\\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])")]],
    
  })

  register() {
    this.submitted = true
    if (this.storeForm.invalid) {
      return
    }
    else {
      this.service.saveDetails(this.storeForm.value)
      console.log(this.storeForm.value)
    }


  }
  reset() {
    this.submitted = false
    this.storeForm.reset()
  }
  get f() {
    console.log("inside getter",this.storeForm.controls)
    return this.storeForm.controls
  }
}
