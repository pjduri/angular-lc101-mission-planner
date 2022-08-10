import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5, buttonPressed: true},
       {name: 'Space Camera', mass: 20, buttonPressed: true},
       {name: 'Food', mass: 150, buttonPressed: true},
       {name: 'Oxygen Tanks', mass: 400, buttonPressed: true},
       {name: 'AE-35 Unit', mass: 5, buttonPressed: true},
       {name: 'ISS Supplies', mass: 800, buttonPressed: true},
       {name: 'Water', mass: 250, buttonPressed: true},
       {name: 'Satellite', mass: 1200, buttonPressed: true},
       {name: 'R2 Unit', mass: 32, buttonPressed: true}
   ];

   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   remainingMass: number = 2000
   clearButton: boolean = false
   maxReached: boolean = false

   constructor() { }

   ngOnInit() { }

  addItem (itemToEquip: object) : boolean {
    this.cargoHold.push(itemToEquip)
    this.cargoMass += itemToEquip['mass']
    this.remainingMass -= itemToEquip['mass']
    itemToEquip['buttonPressed'] = false
    return itemToEquip['buttonPressed']
  }
   
  clearCargo () {
    for (let i=0; i < this.equipmentItems.length; i++) {
      this.equipmentItems[i]['buttonPressed'] = true
    }
  }
  
}