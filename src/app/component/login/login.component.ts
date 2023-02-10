import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { UserdashboardComponent } from '../userdashboard/userdashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  type: string ="password";
  isLoggedIn : boolean = false;
  isText:boolean = false;
  eyeIcon:string = "fa-eye-slash";
  constructor(private fb: FormBuilder, private router: Router, private _http : HttpClient, private _localstorage: LocalStorageService){}

  /*onSubmit(){
    if (this.loginForm.valid) {
      console.log(this.loginForm);
    this.router.navigateByUrl('/userdashboard');
    } 
    else {
      window.alert('Please enter valid credentials to login!')
    }
  }*/

  // loginForm = new FormGroup({
  //   email: new FormControl('', Validators.required),
  //   password: new FormControl(''),
  // });

  loginForm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required]]
  });

  hideshowpwd(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-solid fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  logindata(loginForm: FormGroup){
    console.log(this.loginForm.value);
    this._http.get<any>("https://angular-jsonserver.vercel.app/users")
    .subscribe(res =>{
      const user = res.find((a: any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });

      if(user.email === 'admin@gmail.com'){
        alert("Login successful!");
        this._localstorage.store('users',user);
        this.router.navigate(['admin/admindashboard']);
        this.isLoggedIn = true;
        this.loginForm.reset();
      }
      else if(user){
        alert("Login successful!");
        this._localstorage.store('users',user);
        this.router.navigate(['userdashboard']);
        this.isLoggedIn = true;
        this.loginForm.reset();
      }
      else{
        alert("User not found! Make sure to enter the valid credentials!");
        this.router.navigate(['login']);
      }
    }, err=>{
      alert("Something went wrong!");
    })
  }
}
