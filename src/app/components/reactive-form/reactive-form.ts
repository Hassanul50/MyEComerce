import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {

  userForm:FormGroup=new FormGroup({

    firstName:new FormControl(""),
    lastName:new FormControl(""),
    userName:new FormControl(""),
    city: new FormControl(""),
    state:new FormControl(""),
    zipcode :new FormControl(""),
    isTermAgree:new FormControl(false)
  })

  onSave(){
    const formValue=this.userForm.value;
  }
}
