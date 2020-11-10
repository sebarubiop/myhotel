import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { Person } from 'src/app/interfaces/person';
import { ValidRut } from './customvalidator.validator'
import { PersonService } from 'src/app/services/person.service';
import { COLORS } from 'src/app/data/color.data';

@Component({
  selector: 'app-admin-person-form',
  templateUrl: './admin-person-form.component.html',
  styleUrls: ['./admin-person-form.component.scss']
})
export class AdminPersonFormComponent implements OnInit {

  @Input() person: Person
  personaForm: FormGroup
  id: string
  isAdd: boolean
  isEdit: boolean
  processing: boolean
  isError: boolean
  rutInvalid: boolean
  colorList = COLORS

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private personService: PersonService,
  ) {

  }

  ngOnInit() {
    const urlArray = this.router.url.substr(1).split('/')
    this.isAdd = urlArray[0].includes('add')
    this.isEdit = urlArray[0].includes('edit')
    this.createForm(this.person)
    // console.log(this.rutValidator({value:'16476473-6'}))
  }

  private createForm(data: Person) {
    this.personaForm = this.formBuilder.group({
      rutCtrl: [data?.rut, [
        Validators.required
      ]],
      nameCtrl: [data?.name, Validators.compose([
        Validators.required,
        Validators.maxLength(50),
      ])],
      colorCtrl: [data?.color],
      ageCtrl: [data?.age, Validators.compose([
        Validators.min(18),
      ])],
      addressCtrl: [data?.address, Validators.compose([
        Validators.required,
        Validators.maxLength(400),
      ])],
    },
    {
      validator: ValidRut("rutCtrl")
    })
  }

  submitPersona() {
    this.processing = true
    const today = new Date()
    let selectedColors
    if(this.personaForm.value.colorCtrl) {
      selectedColors = this.colorList.filter(c => !!this.personaForm.value.colorCtrl.find(v => v === c.value))
    }
    let personData = {
      id: today.getTime(),
      creation_date: today.toLocaleString(),
      rut: this.personaForm.value.rutCtrl,
      name: this.personaForm.value.nameCtrl,
      color: this.personaForm.value.colorCtrl,
      age: this.personaForm.value.ageCtrl,
      address: this.personaForm.value.addressCtrl
    }
    try {
      if(this.isAdd){
        this.personService.addPerson(personData)
        this.goToHome()
      }
      else if(this.isEdit){
        delete personData.id
        delete personData.creation_date
        personData = {
          ...personData,
          id: this.person.id,
          creation_date: this.person.creation_date
        }
        this.personService.updatePerson(this.person.id, personData)
        this.goToHome()
      }
    }catch(e) {
      this.processing = false
      this.isError = true
    }
  }

  goToHome() {
    this.router.navigate(['/'])
    this.processing = false
  }

}
