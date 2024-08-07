import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceForTreesService {

  constructor() { }

  trees = [
    {
        "id": 1,
        "title": "Еліт",
        "price": 2900,
        "image": "aaa",
        "type": "Лита",
        "configure": {
          "colors":[
            "green",
            "blue"
          ],
          "size":[
            1.5,
            1.8,
            2.0,
            2.2,
            2.5
          ]
        }
    },
    {
      "id": 2,
      "title": "СК",
      "price": 950,
      "image": "aaa",
      "type": "Плівка ПВХ",
      "configure": {
        "colors":[
          "green",
          "blue"
        ],
        "size":[
          1.5,
          1.8,
          2.0,
          2.2,
          2.5
        ]
      }
  },
  {
    "id": 3,
    "title": "Еліт",
    "price": 2900,
    "image": "aaa",
    "type": "Лита",
    "configure": {
      "colors":[
        "green",
        "blue"
      ],
      "size":[
        1.5,
        1.8,
        2.0,
        2.2,
        2.5
      ]
    }
},
{
  "id": 4,
  "title": "СК",
  "price": 900,
  "image": "aaa",
  "type": "Плівка ПВХ",
  "configure": {
    "colors":[
      "green",
      "blue"
    ],
    "size":[
      1.5,
      1.8,
      2.0,
      2.2,
      2.5
    ]
  }
}
    
    
]

getTrees() {
  return this.trees;
}
}
