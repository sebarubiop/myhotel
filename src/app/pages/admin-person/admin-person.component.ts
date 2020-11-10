import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-admin-person',
  templateUrl: './admin-person.component.html',
  styleUrls: ['./admin-person.component.scss']
})
export class AdminPersonComponent implements OnInit {

  id: number
  isAdd: boolean
  isEdit: boolean
  processing: boolean
  isError: boolean
  person: Person

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private personService: PersonService,
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get("id")
    const urlArray = this.router.url.substr(1).split('/')
    this.isAdd = urlArray[0].includes('add')
    this.isEdit = urlArray[0].includes('edit')
    if (this.id && this.isEdit) {
      this.getPerson()
    }
  }

  private getPerson() {
    this.person = this.personService.getSinglePerson(this.id)
  }

}
