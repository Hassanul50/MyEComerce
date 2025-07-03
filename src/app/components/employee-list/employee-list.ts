import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {

 

 
  employeeslist: any[] = [
    {empId: 10, name: 'John Doe', position: 'Developer', department: 'IT',phone:'01784'},
    { empId: 20,name: 'Jane Smith', position: 'Designer', department: 'UX',phone:'01784' },
    { empId: 30,name: 'Mike Johnson', position: 'Manager', department: 'HR' ,phone:'01784'}
  ];
}
