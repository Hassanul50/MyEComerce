import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {

   isValid:boolean=false;
  
  userForm:FormGroup=new FormGroup({

    firstName:new FormControl("",[Validators.required]),
    lastName:new FormControl("",[Validators.required,Validators.minLength(4)]),
    userName:new FormControl(""),
    city: new FormControl(""),
    state:new FormControl(""),
    zipcode :new FormControl(""),
    isTermAgree:new FormControl(false)
  })
  constructor(){
   this.isValid=this.userForm.valid;
 }
  onSave(){
    const formValue=this.userForm.value;
  }
}
