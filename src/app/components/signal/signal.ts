import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css'
})
export class Signal {
  
  firstname=signal("Akib");
  lastName=signal<string>("Banna");
  // middleName=signal<string>("");

 fullname=linkedSignal({
  source: this.firstname,
  computation:(newOptons, previous)=> {
      const fullname=newOptons+" "+ this.lastName()
      return fullname;
  }

 })

 changeName(){
  this.firstname.set("Hassanul");
 }

}
