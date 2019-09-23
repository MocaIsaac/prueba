import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public productList: any;
  public productForm: FormGroup;
  public pathIMG:string = '../../../assets/img/payment_success.png';
  public order: any;

  constructor(
    public homeService: HomeService,
    public formBuild: FormBuilder,
  ) { }

  ngOnInit() {
    this.getInfo();
    this. formProduct();
  }
  public formProduct(){
      this.productForm = this.formBuild.group({
        sku: ['',Validators.required],
        name: ['', Validators.required],
        quantity : ['', Validators.required],
        price: ['', Validators.required]
      })
  }
  public addData(formData:any){
    this.productList.push(formData);
  }
  private getInfo(){
    this.homeService.getInitTable().subscribe(data=>{
      this.productList = data.order.items;
      this.order = data.order.number;
    });
  }

}
