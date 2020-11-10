import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from 'src/utils/material.module';
import { AdminPersonComponent } from './admin-person.component';
import { AdminPersonFormComponent } from './admin-person-form/admin-person-form.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPersonComponent
  }
];

@NgModule({
  declarations: [AdminPersonComponent, AdminPersonFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminPersonaModule { }
