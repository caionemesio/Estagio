import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   public pets:any[] =[]
  constructor(private apiService: ApiService) {
    this.getData();
  }
  getData(){
    this.apiService.getData().subscribe((data:any)=> {
      console.log(data)
      this.pets = data
    })
  }

  sortBy(key:string){
    this.pets.sort((a,b)=>{
      if(a[key]<b[key]) return -1
      if (a[key]>b[key]) return 1
      return 0
    })
  }
}
