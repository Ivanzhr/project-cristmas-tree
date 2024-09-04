import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceForTreesService } from '../../services/service-for-trees.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-placing-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './placing-order.component.html',
  styleUrl: './placing-order.component.scss'
})
export class PlacingOrderComponent implements OnInit{
  
  productForBuy: any;

  readonly TOKEN = '7411018328:AAHJbitA-yrlo0mEBjRIegQN3hFCR3ikRZI';
  readonly CHAT_ID = '-1002183967208';
  readonly URL_API = `https://api.telegram.org/bot${this.TOKEN}/sendMessage`;

  constructor(private route: ActivatedRoute, private productsTreeService: ServiceForTreesService){}

  ngOnInit(): void {
    this.productForBuy = this.productsTreeService.getSelectedForBuy();
    console.log(this.productForBuy);
  }
  
  async onSubmit(form: NgForm): Promise<void> {
    if (form.valid) {
      const formData = form.value;
      let message = `<b>Заявка з сайту</b>\n`;
          message += `<b>імя</b>: ${formData.Name}\n`;
          message += `<b>прізвище</b>: ${formData.LastName}\n`;
          message += `<b>тел</b>: ${formData.Phone}\n`;
          message += `<b>продукт</b>: ${this.productForBuy?.title}\n`;
          message += `<b>розмір</b>: ${this.productForBuy?.size}\n`;
          message += `<b>ціна</b>: ${this.productForBuy?.price}\n`;
          message += `<b>місто</b>: ${formData.City}\n`;

      try {
        const response = await axios.post(this.URL_API, {
          chat_id: this.CHAT_ID,
          parse_mode: 'html',
          text: message
        });
        console.log('Response:', response.data);
        console.log(formData)
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.log('Form is invalid');
    }
  }
  
}
