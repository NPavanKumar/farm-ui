import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmRoutingModule } from './farm-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FarmerComponent } from './farmer/farmer.component';
import { VFarmerComponent } from './v-farmer/v-farmer.component';
import { CFarmerComponent } from './c-farmer/c-farmer.component';


@NgModule({
  declarations: [FarmerComponent, VFarmerComponent, CFarmerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FarmRoutingModule
  ]
})
export class FarmModule { }
