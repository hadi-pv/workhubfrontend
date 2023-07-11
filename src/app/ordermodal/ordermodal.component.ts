import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { AppService } from '../shared/services/apiservice.service';
import { ModalDataService } from '../shared/services/modal-data-service.service';


@Component({
  selector: 'app-ordermodal',
  templateUrl: './ordermodal.component.html',
  styleUrls: ['./ordermodal.component.scss'],
  providers:[ModalDataService]
})
export class OrdermodalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<OrdermodalComponent>,public appservice:AppService, public modalDataService:ModalDataService) {}
  public userdata=JSON.parse(localStorage.getItem('user')!);

  public food={id: '2', name: 'veg2', ftype: 'veg', description: 'It is a veg food', imgsrc: ''};
  public checkboxValues = {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false
  };

  onOrderSubmit(){
    this.modalRef.close()
    if(this.checkboxValues.monday){
      this.appservice.postOrders(this.food.id,this.userdata.uid,'7/10/2023').subscribe((data:any)=>{
        console.log(data)
      })  
    }
    if(this.checkboxValues.tuesday){
      this.appservice.postOrders(this.food.id,this.userdata.uid,'7/11/2023').subscribe((data:any)=>{
        console.log(data)
      })  
    }
    if(this.checkboxValues.wednesday){
      this.appservice.postOrders(this.food.id,this.userdata.uid,'7/12/2023').subscribe((data:any)=>{
        console.log(data)
      })  
    }
    if(this.checkboxValues.thursday){
      this.appservice.postOrders(this.food.id,this.userdata.uid,'7/13/2023').subscribe((data:any)=>{
        console.log(data)
      })  
    }
    if(this.checkboxValues.friday){
      this.appservice.postOrders(this.food.id,this.userdata.uid,'7/14/2023').subscribe((data:any)=>{
        console.log(data)
      })  
    }
  }

  ngOnInit(): void {
    
    this.food = JSON.parse(localStorage.getItem('food')!);
    console.log(this.food)
  }

}

