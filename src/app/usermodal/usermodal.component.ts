import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './usermodal.component.html',
})
export class UsermodalComponent {
  constructor(public modalRef: MdbModalRef<UsermodalComponent>) {}
  public userdata=JSON.parse(localStorage.getItem('user')!);

}