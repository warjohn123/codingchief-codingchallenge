import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { DragAndDropModule } from 'angular-draggable-droppable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DragAndDropModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    CartItemComponent
  ]
})
export class HomePageModule {}
