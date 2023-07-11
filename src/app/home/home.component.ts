import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import { UsermodalComponent } from '../usermodal/usermodal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AuthService } from '../shared/services/auth.service';
import { AppService } from '../shared/services/apiservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('multi') multi!: ElementRef;
  @ViewChild('range') range!: ElementRef;

  modalRef: MdbModalRef<UsermodalComponent> | null = null;

  constructor(private modalService: MdbModalService,public authService: AuthService,public appservice:AppService) {}
  
  public dup_dates:any;
  public dates:any;
  public userdata=JSON.parse(localStorage.getItem('user')!);
  public coption='multi'
  public orderarray:any;
  public foodarray:any;
  public dupdates:any;
  public duporderarray:any;
  
  public openModal() {
      this.modalRef = this.modalService.open(UsermodalComponent, {
        modalClass: 'modal-dialog-centered'
      })
    }
  public onSelection(dates: any) {
    this.dupdates=[]
    dates.forEach((date:any) => {
      this.dupdates.push(date.toLocaleDateString())
    });
    console.log(this.dupdates)
    this.duporderarray=[]
    this.orderarray.forEach((order:any)=>{
      const food=this.foodarray.find((item:any) => item.id == order.foodid)
      if(this.dupdates.includes(order.date)){
        this.duporderarray.push({
          id:order.id,
          name:food.name,
          ftype:food.ftype,
          date:order.date
        })
      }
    })
    console.log(this.duporderarray)

  }
  public onmulticlick(){
    this.coption='multi'

    this.multi.nativeElement.style.height='70%'
    this.range.nativeElement.style.height='30%'
    this.multi.nativeElement.style.color='white'
    this.range.nativeElement.style.color='black'
    this.multi.nativeElement.style.backgroundColor='red'
    this.range.nativeElement.style.backgroundColor='#F0F0F0'
  }
  public onrangeclick(){
    this.coption='range'

    this.multi.nativeElement.style.height='30%'
    this.range.nativeElement.style.height='70%'
    this.multi.nativeElement.style.color='black'
    this.range.nativeElement.style.color='white'
    this.multi.nativeElement.style.backgroundColor='#F0F0F0'
    this.range.nativeElement.style.backgroundColor='red'
  }

  ngOnInit(): void {
    this.appservice.getOrders().subscribe((data) => {
      this.orderarray=data
      this.orderarray=this.orderarray.message
      console.log(this.orderarray)
    });
    this.appservice.getFood().subscribe((data) => {
      this.foodarray=data
      this.foodarray=this.foodarray.message
      console.log(this.foodarray)
    });
  }

}


