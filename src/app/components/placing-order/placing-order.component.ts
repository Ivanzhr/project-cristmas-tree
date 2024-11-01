import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ServiceForTreesService} from '../../services/service-for-trees.service';
import {CommonModule} from '@angular/common';
import {FormsModule, NgForm} from '@angular/forms';
import axios from 'axios';
import {IPgarlands, IPled, IProduct, IProductSize} from "../../modules/productsTree";

const apiKey = 'f46bfd60c85502508d4e8a97fad18f26';

@Component({
  selector: 'app-placing-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './placing-order.component.html',
  styleUrl: './placing-order.component.scss'
})
export class PlacingOrderComponent implements OnInit {

  public product: IProduct | IPled | IPgarlands | IProductSize | any = undefined;
  private productType: string = '';
  private productId: number | null = null;
  private productSizeId: number | null = null;

  readonly TOKEN = '7411018328:AAHJbitA-yrlo0mEBjRIegQN3hFCR3ikRZI';
  readonly CHAT_ID = '-1002183967208';
  readonly URL_API = `https://api.telegram.org/bot${this.TOKEN}/sendMessage`;
  // TELEGRAM

  title = 'testone';
  cityName: string = ''; // Змінна для введеного міста
  suggestedCities: any[] = []; // Масив для зберігання варіантів міст
  warehouses: any[] = []; // Масив для зберігання відділень
  selectedWarehouse: string | null = null; // Збереження вибраного відділення
  // NOVA POSTA

  deliveryMethod: string = '';
  paymentMethod: string = ''; 

  @ViewChild('modal') modal: ElementRef | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsTreeService: ServiceForTreesService
  ) {
  }

  ngOnInit(): void {
  
    this.route.params.subscribe({
      next: (r: Params) => {
        this.productId = Number(r['id']);
        this.productType = String(r['type']).trim();
        this.productSizeId = Number(r['size'] || 0);
        if (this.productId <= 0 || this.productType === '') {
          this.notFound();
        } else {
          this.getProductInfo();
        }
      }
    });
  }

  async onSubmit(form: NgForm): Promise<void> {
    if (form.valid) {
      const formData = form.value;
      let message = `<b>Заявка з сайту</b>\n`;
      message += `<b>імя</b>: ${formData.Name}\n`;
      message += `<b>прізвище</b>: ${formData.LastName}\n`;
      message += `<b>тел</b>: ${formData.Phone}\n`;
      message += `<b>продукт</b>: ${this.product?.title}\n`;
      message += `<b>розмір</b>: ${this.product?.size}\n`;
      message += `<b>ціна</b>: ${this.product?.price}\n`;
      message += `<b>місто</b>: ${formData.City}\n`;
      message += `${this.selectedWarehouse}\n`;
      message += `${this.deliveryMethod}\n`;
      message += `${this.paymentMethod}\n`;

      try {
        const response = await axios.post(this.URL_API, {
          chat_id: this.CHAT_ID,
          parse_mode: 'html',
          text: message
        });
        console.log('Response:', response.data);
        console.log(formData)
        this.openModal();
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.log('Form is invalid');
    }
  }

  private getProductInfo() {
    let product: IProduct | IPled | IPgarlands | IProductSize | undefined;

    switch (this.productType) {
      case 'tree':
        product = this.productsTreeService.getTreeById(<number>this.productId);
        if (product !== undefined && <number>this.productSizeId > 0) {
          if ("size" in product) {
            product = product.size.find(size => size.id === this.productSizeId);
          }
        }
        break;

      case 'garland':
        product = this.productsTreeService.getGarlandById(<number>this.productId);
        break;

      case 'wreath':
        product = this.productsTreeService.getLedById(<number>this.productId);
        break;
    }

    if (product === undefined) {
      this.notFound();
    } else {
      this.product = product
    }
    console.log(this.product)
  }

  private notFound() {
    this.router.navigate(['/']).then();
  }

  protected hasSize() {
    return this.product !== undefined && "size" in this.product && this.product.size;
  }

  openModal() {
    if (this.modal) {
      this.modal.nativeElement.style.display = "block";
    }
  }

  closeModal() {
    if (this.modal) {
      this.modal.nativeElement.style.display = "none";
    }
    this.router.navigate(['/']);
  } 

  // NOVAPOSTA

  async getWarehouses(cityRef: string) {
    try {
      const response = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
        apiKey: apiKey,
        modelName: 'AddressGeneral',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityRef: cityRef
        }
      });
      this.warehouses = response.data.data;
    } catch (error) {
      console.error('Помилка при отриманні відділень:', error);
    }
  }

  async onCityInput() {
    if (this.cityName.length > 2) { // Пошук міст тільки після 3 символів
      try {
        const response = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
          apiKey: apiKey,
          modelName: 'Address',
          calledMethod: 'getCities',
          methodProperties: {
            FindByString: this.cityName
          }
        });
        this.suggestedCities = response.data.data; // Оновлюємо список варіантів міст
      } catch (error) {
        console.error('Помилка при пошуку міст:', error);
      }
    } else {
      this.suggestedCities = []; // Очищуємо список варіантів, якщо введено менше 3 символів
    }
  }

  selectCity(city: any) {
    this.cityName = city.Description; // Заповнюємо поле з містом вибраним значенням
    this.suggestedCities = []; // Очищуємо підказки після вибору
    this.getWarehouses(city.Ref); // Отримуємо відділення вибраного міста
  }
}


