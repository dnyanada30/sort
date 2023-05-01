import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  getInfo: any[] = [];
  order: any;
  showData: any;
  searchTerm: string = '';
  // direction: string = "asc";
  // column: string = "first";
  // type: string = "string";
  // users:any=[...users];

  constructor(private http: HttpService) { }
  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.http.getDataFromSerever("http://universities.hipolabs.com/search?country").subscribe((el: any) => {
      if (el && el.length > 0) {
        this.getInfo = el;
        console.log("getInfo", this.getInfo)
      }
    })
  }
  // sortData(){
  //   if(this.order){
  //     let newarr = this.showData.sort((a:any,b:any)=>a.id.b.id)
  //     this.showData=newarr
  //   }
  //   this.order=!this.order;
  // }

  setSortParams(param:any) {
      this.direction=param.dir;
      this.column=param.col;
      this.type=param.typ;
      }
      
  
}
