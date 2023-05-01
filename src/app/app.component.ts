import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'dnyanadatask';
  // constructor(private router: Router){}
  ngOnInit(): void {
    
  }
  
  // submit(form:any){
  //   console.log(form);
  //   console.log(form.value);
  //   this.router.navigate(['/Data'])

  // }

}
