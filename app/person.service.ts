import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  persons = [
    { id: 1, name: 'Chandan Kumar' },
    { id: 2, name: 'Ajeet Kumar' },
    { id: 3, name: 'Rahul Gupta' }, 
    { id: 4, name: 'Mohan Kumar' },
    { id: 5, name: 'Sohan Kumar' },
    { id: 6, name: 'Neha Kumari' },
    { id: 7, name: 'Rita Kumari' },
  ];
  constructor() { }

  getallpersons():Promise<any>{
    return new Promise(resolve=>resolve(this.persons));
  }
}
