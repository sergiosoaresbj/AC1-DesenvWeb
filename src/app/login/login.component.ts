import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router : Router){}

user : string = "";
pass : number = 0;
msg:string = "";

login(){
  if(this.user=="admin" && this.pass==123){
    this.router.navigate(['/home']);
  }else{
    this.msg = "erro"
  }
}
}


