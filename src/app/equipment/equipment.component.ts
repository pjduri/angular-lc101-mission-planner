import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = [
    'Habitat dome', 
    'Drones', 
    'Food containers', 
    'Oxygen Tanks'
  ]

  itemBeingEdited: string = ''
  equipped: boolean = false

  constructor() { }

  ngOnInit() {
  }

  add(item: string) {
    for (let i=0; i < this.equipment.length; i++) {
      if (this.equipment[i] === item) {
        this.equipped = true
      }
    }
    if (!this.equipped) {
      this.equipment.push(item)
    }
    this.equipped = false
  }

  remove (item: string) {
    let index = this.equipment.indexOf(item)
    this.equipment.splice(index, 1)
  }

  edit (item: string) {
    this.itemBeingEdited = item
  }

  save (newName: string, item: string) {
    let index = this.equipment.indexOf(item)
    this.equipment[index] = newName
    this.itemBeingEdited = null
  }
  
}