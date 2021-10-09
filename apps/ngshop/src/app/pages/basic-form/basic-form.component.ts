import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'ngshop-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[2];
  hide = true;
  myForm: FormGroup;



  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
      message: ['', [
        Validators.required,
      ]],
      career: 'software-developer', 'desginer': 'engineer',
      age: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.min(18),
        Validators.max(65)
      ]],
      agree: [false, [
        Validators.requiredTrue
      ]]
    })
  }

  ngOnInit(): void {


    this.myForm.valueChanges.subscribe(console.log)
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  get age() {
    return this.myForm.get('age');
  }

  get agree() {
    return this.myForm.get('agree');
  }


}
