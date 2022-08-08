import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string[] = [
    'Mars soil sample', 'Plant growth in habitat', 'Human bone density'
  ]

  testBeingEdited: string = ''
  onAgenda: boolean = false

  constructor() { }

  ngOnInit() {
  }

  add(test: string) {
    for (let i=0; i < this.experiments.length; i++) {
      if (this.experiments[i] === test) {
        this.onAgenda = true
      }
    }
    if (!this.onAgenda) {
      this.experiments.push(test)
    }
    this.onAgenda = false
  }

  remove (test: string) {
    let index = this.experiments.indexOf(test)
    this.experiments.splice(index, 1)
  }

  edit (test: string) {
    this.testBeingEdited = test
  }

  save (newTest: string, test: string) {
    let index = this.experiments.indexOf(test)
    this.experiments[index] = newTest
    this.testBeingEdited = null
  }
  
}
