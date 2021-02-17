import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
 
  constructor() { }
  getmessage():Promise<string>{
    let message="Hello Sahosoft Solution";
    return new Promise(resolve=>{
      //delay by 3 second
      setTimeout(() =>resolve(message),3000)
    });
  }
}
