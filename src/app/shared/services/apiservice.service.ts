import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:3000';

  getOrders() {
    return this.http.get(this.rootURL + '/order');
  }

  getFood() {
    return this.http.get(this.rootURL + '/food');
  }

  postOrders(foodid:any,userid:any,date:any){
    const body={foodid,userid,date}
    return this.http.post(this.rootURL + '/order',body)
  }
  // addUser(user: any) {
  //   return this.http.post(this.rootURL + '/user', {user});
  // }

}