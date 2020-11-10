import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { OrderListPipe } from './order-list.pipe'

const pipes = [
  OrderListPipe,
  ]


@NgModule({
  declarations: [
    pipes,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    pipes,
  ],
})
export class PipesModule { }
