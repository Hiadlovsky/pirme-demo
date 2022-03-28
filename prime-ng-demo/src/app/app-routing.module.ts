import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTableComponent } from './components/my-table/my-table.component';
import { PrimeTableComponent } from './components/prime-table/prime-table.component';

const routes: Routes = [
  {path: '', component: MyTableComponent},
  {path: 'prime', component: PrimeTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
