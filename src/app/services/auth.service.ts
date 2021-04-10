import { StorageService } from './storage.service';
import { ConfigService } from './config.service';
// //import { User } from './../model/user.model';
 import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

//   protected user = new User();

  constructor(
      private config: ConfigService, 
      private storage: StorageService) {

  }

//   authenticate(data: any) {
//     this.storage.setItem(this.config.getAccessTokenStorageKey(), data.access_token);
//     this.storage.setItem(this.config.getRefreshTokenStorageKey(), data.refresh_token);
//     this.storage.setItem(this.config.getAccessTokenExpirationStorageKey(), data.expires_in + Date.now());
//   }

//   setUser(user: User) {
//     this.storage.setItem(this.config.getUserStorageKey(), JSON.stringify(user));
//   }

//   getUser(): User {
//     var _data = JSON.parse(this.storage.getItem(this.config.getUserStorageKey()));

//     if (_data == null) {
//       return new User();
//     }

//     this.user = new User();
//     this.user.loadFromMap(_data);
//     return this.user;
//   }

//   isAuthenticated(): boolean {
//     if (this.getAccessToken()) {
//       return true;
//     }
//     else {
//       return false;
//     }
//   }

  getAccessToken(): string {
    //var expiration = this.storage.getItem(this.config.getAccessTokenExpirationStorageKey());
    var token = this.storage.getItem(this.config.getAccessTokenStorageKey());

    if (!token ) {
      return null;
    }

    // if (Date.now() > parseInt(expiration)) {
    //   this.destroyToken();
    //   return null;
    // }

    return token;
  }

//   getExpiration(): string {
//     return this.storage.getItem(this.config.getAccessTokenExpirationStorageKey());
//   }

  private destroyToken() {
    this.storage.removeItem(this.config.getAccessTokenStorageKey());
    // this.storage.removeItem(this.config.getRefreshTokenStorageKey());
    // this.storage.removeItem(this.config.getAccessTokenExpirationStorageKey());
    // this.storage.removeItem(this.config.getUserStorageKey());
  }

//   isLoggedIn(): boolean {
//     return this.getAccessToken() != null;
//   }

//   signOut() {
//     this.destroyToken();
//   }

 }
