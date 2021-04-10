import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storageSub = new Subject<any>();

  constructor() {

  }

  watch(): Observable<any> {
      return this.storageSub.asObservable();
  }

  setItem(key: string, data: any) {
      localStorage.setItem(key, data);
      this.storageSub.next({ key: key, value: data });
  }

  getItem(key: string) {
      return localStorage.getItem(key);
  }

  removeItem(key) {
      const data = this.getItem(key);
      localStorage.removeItem(key);
      this.storageSub.next({ key: key, value: data });
  }

}
