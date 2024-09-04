import { Injectable } from '@angular/core';
import { IProduct, IProductSize, IPgerlands, IPled } from '../modules/productsTree';

@Injectable({
  providedIn: 'root'
})
export class ServiceForTreesService {

  constructor() { }

  private ProductForDetails: any | null = null;
  // private selectedGerlandId: number | null = null;
  private selectedForBuy: any | null = null;

  private trees: IProduct[] = [
    {
      id: 1,
      title: "Лідія з білими кінчиками",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 900,
      image: "../../../assets/image/viktoria zelena.jpg",
      gallery: ["https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200" , "https://lipsum.app/id/64/1600x1200"],
      type: "пвх",
      color: "green",
      bestseller: true,
      sale: false,
      size: [
        {
          id: 1,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Лідія з білими кінчиками",
          size: 1.5,
          price: 2500
        },
        {
          id: 2,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Лідія з білими кінчиками",
          size: 1.8,
          price: 2900
        },
        {
          id: 3,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Лідія з білими кінчиками",
          size: 2.0,
          price: 3200
        },
        {
          id: 4,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Лідія з білими кінчиками",
          size: 2.2,
          price: 3900
        },
        {
          id: 5,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Лідія з білими кінчиками",
          size: 2.5,
          price: 4900
        },
      ]

    },
    {
      id: 2,
      title: "Різдвяна з шишкою та калиною срібна",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 950,
      image: "../../../assets/image/viktoria zelena.jpg",
      gallery: ["https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200" , "https://lipsum.app/id/64/1600x1200"],
      type: "пвх",
      color: "green",
      bestseller: false,
      sale: false,
      size: [
        {
          id: 1,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Різдвяна з шишкою та калиною срібна",
          size: 1.5,
          price: 1500
        },
        {
          id: 2,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Різдвяна з шишкою та калиною срібна",
          size: 1.8,
          price: 2900
        },
        {
          id: 3,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Різдвяна з шишкою та калиною срібна",
          size: 2.0,
          price: 3200
        },
        {
          id: 4,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Різдвяна з шишкою та калиною срібна",
          size: 2.2,
          price: 3900
        },
        {
          id: 5,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Різдвяна з шишкою та калиною срібна",
          size: 2.5,
          price: 4900
        },
      ]

    },
    {
      id: 3,
      title: "Різдвяна з шишкою та калиною золота",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 2900,
      image: "../../../assets/image/viktoria zelena.jpg",
      gallery: ["https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200" , "https://lipsum.app/id/64/1600x1200"],
      type: "пвх",
      color: "green",
      bestseller: false,
      sale: true,
      size: [
        {
          id: 1,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Різдвяна з шишкою та калиною золота",
          size: 1.5,
          price: 2500
        },
        {
          id: 2,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Різдвяна з шишкою та калиною золота",
          size: 1.8,
          price: 2900
        },
        {
          id: 3,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Різдвяна з шишкою та калиною золота",
          size: 2.0,
          price: 3200
        },
        {
          id: 4,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Різдвяна з шишкою та калиною золота",
          size: 2.2,
          price: 3900
        },
        {
          id: 5,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Різдвяна з шишкою та калиною золота",
          size: 2.5,
          price: 4900
        },
      ]

    },
    {
      id: 4,
      title: "Ковалівська Блакитна",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 2200,
      image: "../../../assets/image/viktoria zelena.jpg",
      gallery: ["https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200" , "https://lipsum.app/id/64/1600x1200"],
      type: "лита",
      color: "blue",
      bestseller: true,
      sale: true,
      size: [
        {
          id: 1,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Ковалівська Блакитна",
          size: 1.5,
          price: 2500
        },
        {
          id: 2,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Ковалівська Блакитна",
          size: 1.8,
          price: 2900
        },
        {
          id: 3,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Ковалівська Блакитна",
          size: 2.0,
          price: 3200
        },
        {
          id: 4,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Ковалівська Блакитна",
          size: 2.2,
          price: 3900
        },
        {
          id: 5,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Ковалівська Блакитна",
          size: 2.5,
          price: 4900
        },
      ]

    },
    {
      id: 5,
      title: "Ковалівська Зелена",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 2200,
      image: "../../../assets/image/viktoria zelena.jpg",
      gallery: ["https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200" , "https://lipsum.app/id/64/1600x1200"],
      type: "лита",
      color: "green",
      bestseller: true,
      sale: true,
      size: [
        {
          id: 1,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Ковалівська Зелена",
          size: 1.5,
          price: 2500
        },
        {
          id: 2,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Ковалівська Зелена",
          size: 1.8,
          price: 2900
        },
        {
          id: 3,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Ковалівська Зелена",
          size: 2.0,
          price: 3200
        },
        {
          id: 4,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Ковалівська Зелена",
          size: 2.2,
          price: 3900
        },
        {
          id: 5,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Ковалівська Зелена",
          size: 2.5,
          price: 4900
        },
      ]

    },
    {
      id: 6,
      title: "Бельгійська Блакитна",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 2200,
      image: "../../../assets/image/viktoria zelena.jpg",
      gallery: ["https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200" , "https://lipsum.app/id/64/1600x1200"],
      type: "лита",
      color: "blue",
      bestseller: true,
      sale: true,
      size: [
        {
          id: 1,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Бельгійська Блакитна",
          size: 1.5,
          price: 2500
        },
        {
          id: 2,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Бельгійська Блакитна",
          size: 1.8,
          price: 2900
        },
        {
          id: 3,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Бельгійська Блакитна",
          size: 2.0,
          price: 3200
        },
        {
          id: 4,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Бельгійська Блакитна",
          size: 2.2,
          price: 3900
        },
        {
          id: 5,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Бельгійська Блакитна",
          size: 2.5,
          price: 4900
        },
      ]

    },
    {
      id: 7,
      title: "Бельгійська зелена",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 2200,
      image: "../../../assets/image/viktoria zelena.jpg",
      gallery: ["https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200" , "https://lipsum.app/id/64/1600x1200"],
      type: "лита",
      color: "green",
      bestseller: false,
      sale: false,
      size: [
        {
          id: 1,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Бельгійська зелена",
          size: 1.5,
          price: 2500
        },
        {
          id: 2,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Бельгійська зелена",
          size: 1.8,
          price: 2900
        },
        {
          id: 3,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Бельгійська зелена",
          size: 2.0,
          price: 3200
        },
        {
          id: 4,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Бельгійська зелена",
          size: 2.2,
          price: 3900
        },
        {
          id: 5,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Бельгійська зелена",
          size: 2.5,
          price: 4900
        },
      ]

    },
    {
      id: 8,
      title: "Віденська зелена",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 2200,
      image: "../../../assets/image/viktoria zelena.jpg",
      gallery: ["https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200" , "https://lipsum.app/id/64/1600x1200"],
      type: "лита",
      color: "green",
      bestseller: false,
      sale: false,
      size: [
        {
          id: 1,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Віденська зелена",
          size: 1.5,
          price: 2500
        },
        {
          id: 2,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Віденська зелена",
          size: 1.8,
          price: 2900
        },
        {
          id: 3,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Віденська зелена",
          size: 2.0,
          price: 3200
        },
        {
          id: 4,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Віденська зелена",
          size: 2.2,
          price: 3900
        },
        {
          id: 5,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Віденська зелена",
          size: 2.5,
          price: 4900
        },
      ]

    },
    {
      id: 9,
      title: "Рояль sistem umbrella",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 2200,
      image: "../../../assets/image/viktoria zelena.jpg",
      gallery: ["https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200" , "https://lipsum.app/id/64/1600x1200"],
      type: "лита",
      color: "green",
      bestseller: false,
      sale: false,
      size: [
        {
          id: 1,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Рояль sistem umbrella",
          size: 1.5,
          price: 2500
        },
        {
          id: 2,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Рояль sistem umbrella",
          size: 1.8,
          price: 2900
        },
        {
          id: 3,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Рояль sistem umbrella",
          size: 2.0,
          price: 3200
        },
        {
          id: 4,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Рояль sistem umbrella",
          size: 2.2,
          price: 3900
        },
        {
          id: 5,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Рояль sistem umbrella",
          size: 2.5,
          price: 4900
        },
      ]

    },
    {
      id: 10,
      title: "Ковалівська Засніжена",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 2200,
      image: "../../../assets/image/viktoria zelena.jpg",
      gallery: ["https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200" , "https://lipsum.app/id/64/1600x1200"],
      type: "лита",
      color: "show",
      bestseller: false,
      sale: false,
      size: [
        {
          id: 1,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Ковалівська Засніжена",
          size: 1.5,
          price: 2500
        },
        {
          id: 2,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Ковалівська Засніжена",
          size: 1.8,
          price: 2900
        },
        {
          id: 3,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Ковалівська Засніжена",
          size: 2.0,
          price: 3200
        },
        {
          id: 4,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Ковалівська Засніжена",
          size: 2.2,
          price: 3900
        },
        {
          id: 5,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Ковалівська Засніжена",
          size: 2.5,
          price: 4900
        },
      ]

    },
    {
      id: 11,
      title: "Віденська засніжена",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 2200,
      image: "../../../assets/image/viktoria zelena.jpg",
      gallery: ["https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200" , "https://lipsum.app/id/64/1600x1200"],
      type: "лита",
      color: "snow",
      bestseller: false,
      sale: false,
      size: [
        {
          id: 1,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Віденська засніжена",
          size: 1.5,
          price: 2500
        },
        {
          id: 2,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Віденська засніжена",
          size: 1.8,
          price: 2900
        },
        {
          id: 3,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Віденська засніжена",
          size: 2.0,
          price: 3200
        },
        {
          id: 4,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Віденська засніжена",
          size: 2.2,
          price: 3900
        },
        {
          id: 5,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Віденська засніжена",
          size: 2.5,
          price: 4900
        },
      ]

    }, {
      id: 12,
      title: "Віденська зелена у горщику",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 2200,
      image: "../../../assets/image/viktoria zelena.jpg",
      gallery: ["https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200" , "https://lipsum.app/id/64/1600x1200"],
      type: "лита",
      color: "green",
      bestseller: false,
      sale: false,
      size: [
        {
          id: 1,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Віденська зелена у горщику",
          size: 1.0,
          price: 1200
        }
      ]

    }, {
      id: 13,
      title: "Віденська засніжена у горщику",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 2200,
      image: "../../../assets/image/viktoria zelena.jpg",
      gallery: ["https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200" , "https://lipsum.app/id/64/1600x1200"],
      type: "лита",
      color: "snow",
      bestseller: false,
      sale: false,
      size: [
        {
          id: 1,
          image: "../../../assets/image/viktoria zelena.jpg",
          title: "Віденська засніжена у горщику",
          size: 1.0,
          price: 2500
        }
      ]

    }


  ]

  private gerlands: IPgerlands[] = [
    {
      id: 1,
      title: "Віденський засніжений",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 350,
      gallery: ["../../../assets/image/vinok_rozovuy-800x1.jpg", "https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200"],
      color: "snow"
    },
    {
      id: 2,
      title: "Віденський зелений",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 350,
      gallery: ["../../../assets/image/vinok_rozovuy-800x1.jpg", "https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200"],
      color: "green"
    },
    {
      id: 3,
      title: "Ковалівський засніжений",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 350,
      gallery: ["../../../assets/image/vinok_rozovuy-800x1.jpg", "https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200"],
      color: "snow"
    },
    {
      id: 4,
      title: "Ковалівський зелений",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 350,
      gallery: ["../../../assets/image/vinok_rozovuy-800x1.jpg", "https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200"],
      color: "green"
    },
    {
      id: 5,
      title: "Швейцарський засніжений",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 350,
      gallery: ["../../../assets/image/vinok_rozovuy-800x1.jpg", "https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200"],
      color: "snow"
    },
    {
      id: 6,
      title: "Швейцарський зелений",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 350,
      gallery: ["../../../assets/image/vinok_rozovuy-800x1.jpg", "https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200"],
      color: "green"
    },
    {
      id: 7,
      title: "Президентський з калиною зелений",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 350,
      gallery: ["../../../assets/image/vinok_rozovuy-800x1.jpg", "https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200"],
      color: "green"
    },
    {
      id: 8,
      title: "Президентський з калиною засніжений",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 350,
      gallery: ["../../../assets/image/vinok_rozovuy-800x1.jpg", "https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200"],
      color: "snow"
    },
    {
      id: 9,
      title: "Вінок  Лісовий",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 350,
      gallery: ["../../../assets/image/vinok_rozovuy-800x1.jpg", "https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200"],
      color: "green"
    },
    {
      id: 10,
      title: "Мавка",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 350,
      gallery: ["../../../assets/image/vinok_rozovuy-800x1.jpg", "https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200"],
      color: "green"
    }
    
  ]

  private leds: IPled[] = [
    {
      id: 1,
      title: "Гірлядна Роса LED",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 1200,
      gallery: ["../../../assets/image/vinok_rozovuy-800x1.jpg", "https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200"],
      color: "warmLight",
      length: "100м" 
    },
    {
      id: 2,
      title: "Гірлядна Роса LED",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 1200,
      gallery: ["../../../assets/image/vinok_rozovuy-800x1.jpg", "https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200"],
      color: "warmLight",
      length: "100м" 
    },
    {
      id: 3,
      title: "Гірлядна Роса LED",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 1200,
      gallery: ["../../../assets/image/vinok_rozovuy-800x1.jpg", "https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200"],
      color: "warmLight",
      length: "100м" 
    },
    {
      id: 4,
      title: "Гірлядна Роса LED",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 1200,
      gallery: ["../../../assets/image/vinok_rozovuy-800x1.jpg", "https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200"],
      color: "warmLight",
      length: "100м" 
    },
    {
      id: 5,
      title: "Гірлядна Роса LED",
      description: "Описа ялинки lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 1200,
      gallery: ["../../../assets/image/vinok_rozovuy-800x1.jpg", "https://lipsum.app/id/60/1600x1200", "https://lipsum.app/id/61/1600x1200", "https://lipsum.app/id/63/1600x1200"],
      color: "warmLight",
      length: "100м" 
    },
  ]

  //-------------------// function for tree

  getTrees(): IProduct[] {
    return this.trees;
  }

  getTreeById(id: number): IProduct | undefined {
    return this.trees.find(tree => tree.id === id);
  }

  setSelectedProductDetails(obj: any): void {
    this.ProductForDetails = obj;
    console.log(this.ProductForDetails)
  }

  getSelectedProductDetails() {
    return this.ProductForDetails
  }

  getSale() {
    return this.trees.filter(obj => obj.sale === true);
  }

  getBestseller() {
    return this.trees.filter(obj => obj.bestseller === true);
  }

  // getTreeByIdForOrder(sizeId: number): IProductSize | undefined {
  //   const product = this.trees.find(tree => tree.id === this.selectedProductId);
  //   if (product) {
  //     return product.size.find(size => size.id === sizeId);
  //   }
  //   return undefined;
  // }

  //-------------------// function for gerlands

  getGerlands(): IPgerlands[] {
    return this.gerlands
  }

  getGerlandById(id: number): IPgerlands | undefined {
    return this.gerlands.find(gerland => gerland.id === id);
  }
  //-------------------// function for led


  getLed(): IPled[] {
    return this.leds
  }

  getLedById(id: number): IPled | undefined {
    return this.leds.find(led => led.id === id);
  }


  //-------------------// function for ordering

  setSelectedForBuy(obj: any){
    this.selectedForBuy = obj
    console.log(this.selectedForBuy)
  }

  getSelectedForBuy(): any {
    return this.selectedForBuy
  }

}
