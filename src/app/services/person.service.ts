import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  personList = new BehaviorSubject<Person[]>([]);

  constructor( ) { }

  getPersonListValue() {
    return this.personList.value
  }

  getSinglePerson(id: number) {
    const personListValue = this.getPersonListValue()
    return personListValue.find(p => p.id === id)
  }

  addPerson(data: Person) {
    const personListValue = this.getPersonListValue()
    if(personListValue?.length > 0) {
      console.log('here')
      personListValue.unshift(data)
      this.personList.next(personListValue)
    } else {
      console.log('else')
      this.personList.next([data])
    }

    // this.personList.next()
  }

  updatePerson(id: number, data: Person) {
    const personListValue = this.getPersonListValue()
    this.personList.next(personListValue.map(p => p.id === id ? data : p))
  }

  deletePerson(id: number) {
    const personListValue = this.getPersonListValue()
    this.personList.next(personListValue.filter(p => p.id !== id))
  }
}
