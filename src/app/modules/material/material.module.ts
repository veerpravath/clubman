import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';


const material =[
     MatIconModule,
     MatToolbarModule,
     MatButtonModule,
     MatCardModule,
     MatTabsModule
]

@NgModule({
  imports: [
    material
  ],
  exports:[
   material
  ]
})
export class MaterialModule { }
