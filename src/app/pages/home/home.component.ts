import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/interfaces/person';
import { OrderListPipe } from 'src/app/pipes/order-list.pipe';
import { COLORS } from 'src/app/data/color.data';

const orderListPipe = new OrderListPipe()

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['position', 'rut', 'name', 'color', 'age', 'address', 'actions'];
  temp = null;
  dataSource = new MatTableDataSource<Person[]>(this.temp);
  pageSizeOptions: Array<number> = [5, 10, 25, 50]
  isError: boolean
  colorList = COLORS

  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
    this.dataSource.paginator = value;
  }

  constructor(
    private router: Router,
    private personService: PersonService,
  ) { }

  ngOnInit(): void {
    this.getPersonas()
  }

  private getPersonas() {
    this.personService.personList.subscribe(list => {
      if (list) {
        console.log(list)
        this.temp = orderListPipe.transform(list, 'desc');
        this.dataSource.data = this.temp;
        this.dataSource.paginator = this.paginator
      }
    })
  }

  onFilterChange(event) {
    console.log(event)
    if (event.value) {
      this.dataSource.data = this.temp.filter((p: Person) => !!p.color.find(c => c.value === event.value))
    }
    else {
      this.dataSource.data = this.temp
    }
  }

  addPerson() {
    // console.log(persona)
    this.router.navigate(['/add', 'new'])
  }

  editPerson(person: Person) {
    this.router.navigate(['/edit', person.id])
  }

  async deletePerson(person: Person) {
  }

}
