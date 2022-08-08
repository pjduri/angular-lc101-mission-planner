import { Component, OnInit } from '@angular/core';
import { BrowserPlatformLocation } from '@angular/platform-browser/src/browser/location/browser_platform_location';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  memberBeingEdited: object = null
  inCrew: boolean = false

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    for (let i=0; i < this.crew.length; i++) {
      if (this.crew[i]['name'] === memberName) {
        this.inCrew = true
      }
    }
    if (!this.inCrew) {
      this.crew.push({name: memberName, firstMission: isFirst})
    }
    this.inCrew = false
  }

  remove (member: object) {
    let index = this.crew.indexOf(member)
    this.crew.splice(index, 1)
  }

  edit (member: object) {
    this.memberBeingEdited = member
  }

  save (name: string, member: object) {
    member['name'] = name
    this.memberBeingEdited = null
  }

}