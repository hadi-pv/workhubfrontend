import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { OrdermodalComponent } from '../ordermodal/ordermodal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AuthService } from '../shared/services/auth.service';
import { AppService } from '../shared/services/apiservice.service';
import { UsermodalComponent } from '../usermodal/usermodal.component';
import { ModalDataService } from '../shared/services/modal-data-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers:[ModalDataService]
})
export class OrderComponent implements OnInit {

  @Input() food: any;
  modalRef: MdbModalRef<OrdermodalComponent> | null = null;
  modelRef2:MdbModalRef<UsermodalComponent> | null = null;
  @ViewChild('myModal') myModal: any;

  constructor(private modalService: MdbModalService,public authService:AuthService,public appservice:AppService,public modalDataService: ModalDataService) {}
  public slides :any;
  
  openModal2() {
    this.modelRef2 = this.modalService.open(UsermodalComponent, {
      modalClass: 'modal-lg'    
    })
  }

  openModal(food:any) {
    this.modalDataService.setData(food);
    this.modalRef = this.modalService.open(OrdermodalComponent, {
      modalClass: 'modal-lg'
    })
  }

  ngOnInit(): void {
    this.appservice.getFood().subscribe((data) => {
      this.slides=data
      this.slides=this.slides.message
      console.log(this.slides)
    });  }

}
