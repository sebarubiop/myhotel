import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'orderList',
})
export class OrderListPipe implements PipeTransform {
  transform(value: any[], order: string): any[] {
    if (value) {
      if (order === 'desc') {
        return value.slice().sort((val1, val2) => new Date(val2.creation_date).getTime() - new
          Date(val1.creation_date).getTime())
      }
      if (order === 'asc') {
        return value.slice().sort((val1, val2) => new Date(val1.creation_date).getTime() - new
          Date(val2.creation_date).getTime())
      }
    }
  }
}
