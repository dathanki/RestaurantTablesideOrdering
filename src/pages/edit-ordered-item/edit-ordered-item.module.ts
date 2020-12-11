import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditOrderedItemPage } from './edit-ordered-item';

@NgModule({
  declarations: [
    EditOrderedItemPage,
  ],
  imports: [
    IonicPageModule.forChild(EditOrderedItemPage),
  ],
})
export class EditOrderedItemPageModule {}
