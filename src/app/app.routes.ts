import { Routes } from '@angular/router';
import { EmployeeList } from './components/employee-list/employee-list';
import { AddEmployee } from './components/add-employee/add-employee';
import { Signal } from './components/signal/signal';
import { TemplateForm } from './components/template-form/template-form';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'emp-list',
        pathMatch:'full'
    },
    {
        path:'Add-Employee',
        component:AddEmployee
    },
    {
        path:'emp-list',
        component:EmployeeList
    },
     {
        path:'signal',
        component:Signal
    },
    {
        path:'template-form',
        component:TemplateForm
    }
];
