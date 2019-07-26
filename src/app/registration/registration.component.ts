import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, public appService: AppService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(registerForm) {
    console.log(registerForm.value)
    this.appService.createUserWithEmailAndPassword(registerForm.value).subscribe((res) => {
      console.log(res)
    })
  }
}
