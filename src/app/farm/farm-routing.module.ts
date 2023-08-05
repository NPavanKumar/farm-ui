import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VFarmerComponent } from './v-farmer/v-farmer.component';
import { CFarmerComponent } from './c-farmer/c-farmer.component';

const routes: Routes = [
  {path: '', redirectTo:'farmer', pathMatch: 'full'},
  {path: 'farmer', component: VFarmerComponent, pathMatch: 'full'},
  {path: 'farmer-details/:id', component: CFarmerComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmRoutingModule { }
