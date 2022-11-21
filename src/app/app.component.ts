import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'APIs';
  constructor(private service: AppService) { }
  response:any;
  countries:any;

  searchText!: string;
  
  ngOnInit(){
    this.service.getContryStates().subscribe(
      (res)=>{
        this.response=res;
        console.log(res);
        this.countries=this.response.data;
        // console.log(this.countries[0].states.length);
        
      }
    )
  }
}
