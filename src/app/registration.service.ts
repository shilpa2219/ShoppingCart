import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private obj:AngularFirestore) { }

  saveDetails(details){
    console.log("inside service ",details)
    this.obj.collection("userdata").add({...details})
  }
  readDetails(){
    return this.obj.collection("userdata").snapshotChanges() 
  }
}
