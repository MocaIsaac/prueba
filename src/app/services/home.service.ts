import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppConfig} from '../app-config'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private api: string;
  private options: any;
  constructor(
    public http: HttpClient,
    public app: AppConfig
  ) {
    this.api = this.app.getApiPath();
    this.options = this.app.getOptionsHttp();
   }

  getInitTable():Observable<any>{
    return this.http.get(this.api, this.options)
  }
}
