import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { InputModule } from '../../shared/ui/input/input.module';
import { ButtonModule } from '../../shared/ui/button/button.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccountRoutingModule,
    InputModule,
    ButtonModule
  ]
})
export class AccountModule { }
