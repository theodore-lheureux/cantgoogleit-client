import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { CantgoogleitService } from '../services/cantgoogleit.service';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CantgoogleitService
  ],
})
export class CoreModule { }
