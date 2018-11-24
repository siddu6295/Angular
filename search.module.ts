import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDatepickerPopup } from '../datepicker-popup';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter'
import {MatButtonModule} from '@angular/material/button';


const routes: Routes = [{path:'',component:SearchComponent}];
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,NgbModule, MatRadioModule,MatFormFieldModule, 
    MatInputModule,MatDatepickerModule, MatMomentDateModule,MatButtonModule
  ],
  declarations: [SearchComponent,NgbdDatepickerPopup]
})
export class SearchModule { }