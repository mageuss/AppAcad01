import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosPessoaisPageRoutingModule } from './dados-pessoais-routing.module';

import { DadosPessoaisPage } from './dados-pessoais.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosPessoaisPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DadosPessoaisPage]
})
export class DadosPessoaisPageModule {}
