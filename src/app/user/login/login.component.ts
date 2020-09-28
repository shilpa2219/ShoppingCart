import { Component, OnInit } from '@angular/core';
import { Login } from '../../login';
import { RegistrationService } from '../../registration.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model=new Login()
  user:any
  pass:any
  constructor(private service: RegistrationService) { }

  reglist:Login[];
  
  ngOnInit(): void {
    this.service.readDetails().subscribe(data => {
      console.log("Data Received.........", data)
      this.reglist = data.map((doc) => {
        return {
          did: doc.payload.doc.id,
          ...doc.payload.doc.data() as {}
        } as Login
      })
    })
  }
  submit(){
    this.user = this.model.name
    this.pass = this.model.password
    console.log(this.user)
    console.log(this.pass)
    for (let i = 0; i < this.reglist.length; i++) {
      console.log(this.reglist[i].name)
      console.log(this.reglist[i].password)
      if (this.user == this.reglist[i].name && this.pass == this.reglist[i].password) {
        console.log("Login Success")
      }
      else{
        console.log("Login Failed")
      }
    }
  }
}
