import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css'
})
export class TemplateForm {
  
  userObj: any={
    firsrName :'',
    lastName : '',
    userName : '',
    city: '',
    state:'',
    zipcode :'',
    isTermAgree:false
  }

  onSave(){
   
    debugger;
    const formValue=this.userObj;
  }

}
