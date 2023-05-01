import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signIn!:FormGroup
  constructor(private fb:FormBuilder){
    
  }
   ngOnInit(): void {
     this.regFromData();
   }
   regFromData(){
    this.signIn=this.fb.group({
      "Name":['',[Validators.required]],
      "PhoneNumber":['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      "Address":['',[Validators.required]],
      "Country":['',[Validators.required]],
      "City":['',[Validators.required]],
      "State":['',[Validators.required]],
      "Gender":['',[Validators.required]],
      
    
    
    })
  }
  showPopUp(){
    // alert("Sign In Successful")
  }
}
