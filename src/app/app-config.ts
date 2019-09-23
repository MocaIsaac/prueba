import { HttpHeaders } from '@angular/common/http';

export class AppConfig {
    private APISERVICE: string = 'https://eshop-deve.herokuapp.com/api/v2/orders/1365481586732';
    private TOKEN: string = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJqNENWdUR6R0RpQTJzeHUwWVlPWW5kaUU0WGtvbnNGYiIsImlhdCI6MTU2NTA0MjE1NDg5N30.7fhKSn_S18AMA8T12Ne1iK_O0yRZvvMd17J7unGGnuwN2MjjxZB306VSDqk3pQ1I-wj3iutJLhVyR3kHWkhxFw'
    private httpOptions: any ={
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization' : this.TOKEN
          })
    }
    constructor(){

    } 
    public getApiPath():string{
        return this.APISERVICE;
    }
    public getOptionsHttp():string{
        return this.httpOptions;
    }

}