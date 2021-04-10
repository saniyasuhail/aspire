//import { TechlifyConfig } from './../model/techlify-config.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public static BASE_ACCESS_TOKEN_KEY = "access_token";
  public static BASE_REFRESH_TOKEN_KEY = "refresh_token";
  public static BASE_ACCESS_TOKEN_EXPIRATION_KEY = "access_token_expiration";
  public static BASE_USER_KEY = "user_store";

  private config: any;

  constructor(
    //   config: TechlifyConfig
    )
     {
    //   this.config = config;
  }

//   getConfigsRaw() {
//       return this.config.rawConfigs;
//   }

//   getProjectKey() {
//       return this.config.projectKey;
//   }

//   getApiUrl() {
//       return this.config.apiUrl;
//   }

//   getAuthClientSecret() {
//       return this.config.authClientSecret;
//   }

//   getAuthGrantType() {
//       return this.config.authGrantType;
//   }

  getAccessTokenStorageKey() {
      //return this.config.projectKey + "_" + ConfigService.BASE_ACCESS_TOKEN_KEY;
      return 'eyJhbGciOiJIUzUxMiJ9';
  }

//   getRefreshTokenStorageKey() {
//       return this.config.projectKey + "_" + ConfigService.BASE_REFRESH_TOKEN_KEY;
//   }

//   getAccessTokenExpirationStorageKey() {
//       return this.config.projectKey + "_" + ConfigService.BASE_ACCESS_TOKEN_EXPIRATION_KEY;
//   }

//   getUserStorageKey() {
//       return this.config.projectKey + "_" + ConfigService.BASE_USER_KEY;
//   }

}
