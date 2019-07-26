import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, public appService: AppService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(creds) {
    this.appService.signInWithEmailAndPassword(creds.value).subscribe((res) => {
      console.log(res)
    });
  }

}
