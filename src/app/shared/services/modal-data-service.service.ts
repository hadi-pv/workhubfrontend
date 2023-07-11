import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ModalDataService {
  private dataSubject: Subject<any> = new Subject<any>();

  setData(data: any) {
    localStorage.setItem('food',JSON.stringify(data))
    this.dataSubject.next(data);

  }

  getData(): Observable<any> {
    return this.dataSubject.asObservable();
  }
}
