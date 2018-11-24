import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { SearchmoduleModule } from './search/searchmodule.module';
const routes: Routes = [{path:'',loadChildren:"./search/search.module#SearchModule"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
