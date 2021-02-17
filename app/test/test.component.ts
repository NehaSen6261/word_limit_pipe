import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  // inputs:['Pdata']
  outputs:['childevent']
})
export class TestComponent implements OnInit {
  constructor() { }
  //Pdata:any;
  childevent = new EventEmitter();
  ngOnInit(): void {
  }
  onchange(val: any) {
    this.childevent.emit(val);
  }
}
