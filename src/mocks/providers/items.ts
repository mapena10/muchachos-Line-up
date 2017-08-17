import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "nroJugador": 9,
    "name": "Miguel Peña",
    "profilePic": "assets/img/speakers/img1.jpg",
    "about": "Manager Jugador.",
    "juego":[{"j": 1, "vb": 2,"h": 1,"h2":0,"h3":0,"hr":0,"ci":0,"ca":2,"bb":1,"k":0,"avg":500},
                         {"j": 2, "vb": 0,"h": 0,"h2":0,"h3":0,"hr":0,"ci":1,"ca":0,"bb":1,"k":0,"avg":0},
                         {"j": 3, "vb": 3,"h": 0,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":0},
                         {"j": 4, "vb": 3,"h": 2,"h2":0,"h3":0,"hr":0,"ci":0,"ca":1,"bb":1,"k":0,"avg":667},   
                         {"j": 5, "vb": 1,"h": 0,"h2":0,"h3":0,"hr":0,"ci":0,"ca":1,"bb":1,"k":0,"avg":500},   
                         {"j": "total", "vb": 9,"h": 3,"h2":0,"h3":0,"hr":0,"ci":1,"ca":4,"bb":4,"k":0,"avg":333},
                          ],
    };


  constructor(public http: Http) {
    let items = [
      {
        "nroJugador": 9,
        "name": "Miguel Peña",
        "profilePic": "assets/img/speakers/img1.jpg",
        "about": "Manager Jugador.",
        "juego":[{"j": 1, "vb": 2,"h": 1,"h2":0,"h3":0,"hr":0,"ci":0,"ca":2,"bb":1,"k":0,"avg":500},
                         {"j": 2, "vb": 0,"h": 0,"h2":0,"h3":0,"hr":0,"ci":1,"ca":0,"bb":1,"k":0,"avg":0},
                         {"j": 3, "vb": 3,"h": 0,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":0},
                         {"j": 4, "vb": 3,"h": 2,"h2":0,"h3":0,"hr":0,"ci":0,"ca":1,"bb":1,"k":0,"avg":667},   
                         {"j": 5, "vb": 1,"h": 0,"h2":0,"h3":0,"hr":0,"ci":0,"ca":1,"bb":1,"k":0,"avg":500}, 
                         {"j": "total", "vb": 9,"h": 3,"h2":0,"h3":0,"hr":0,"ci":1,"ca":4,"bb":4,"k":0,"avg":333},
                ],
      },
      {
        "nroJugador": 8,
        "name": "Leandro Cisnero",
        "profilePic": "assets/img/speakers/LeandroCisnero.jpg",
        "about": "Picher.",
        "juego":[{"j": 1, "vb": 2,"h": 0,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":0},
                         {"j": 2, "vb": 1,"h": 0,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":0},
                         {"j": 3, "vb": 2,"h": 0,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":0},
                         {"j": 4, "vb": 1,"h": 1,"h2":1,"h3":0,"hr":0,"ci":2,"ca":0,"bb":0,"k":0,"avg":1000},   
                         {"j": 5, "vb": 1,"h": 1,"h2":0,"h3":0,"hr":0,"ci":0,"ca":2,"bb":1,"k":0,"avg":1000}, 
                         {"j": "total", "vb": 7,"h": 2,"h2":1,"h3":0,"hr":0,"ci":2,"ca":2,"bb":1,"k":0,"avg":286},
                ],      
       },
      {
        "nroJugador": 2,  
        "name": "Jordan Moreno",
        "profilePic": "assets/img/speakers/JordanMoreno.jpg",
        "about": "Picher.",
        "juego":[{"j": 1, "vb": 1,"h": 0,"h2":0,"h3":0,"hr":0,"ci":0,"ca":1,"bb":0,"k":0,"avg":0},
                         {"j": 2, "vb": 1,"h": 0,"h2":0,"h3":0,"hr":0,"ci":0,"ca":1,"bb":0,"k":0,"avg":0},
                         {"j": 3, "vb": 0,"h": 0,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":0},
                         {"j": 4, "vb": 1,"h": 1,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":1000},   
                         {"j": 5, "vb": 1,"h": 0,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":0}, 
                         {"j": "total", "vb": 4,"h": 1,"h2":0,"h3":0,"hr":0,"ci":0,"ca":2,"bb":0,"k":0,"avg":250},
                ],  
       },
      {
        "nroJugador": 15,
        "name": "Christian Chiacchio",
        "profilePic": "assets/img/speakers/ChristianChiacchio.jpg",
        "about": "Jugador de Cuadro.",
        "juego":[{"j": 1, "vb": 3,"h": 2,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":667},
                         {"j": 2, "vb": 2,"h": 2,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":1000},
                         {"j": 3, "vb": 2,"h": 1,"h2":0,"h3":0,"hr":0,"ci":1,"ca":0,"bb":0,"k":0,"avg":500},
                         {"j": 4, "vb": 2,"h": 1,"h2":0,"h3":0,"hr":0,"ci":0,"ca":1,"bb":0,"k":0,"avg":500},   
                         {"j": 5, "vb": 2,"h": 2,"h2":1,"h3":0,"hr":0,"ci":2,"ca":1,"bb":0,"k":0,"avg":1000}, 
                         {"j": "total", "vb": 11,"h": 8,"h2":1,"h3":0,"hr":0,"ci":3,"ca":2,"bb":0,"k":0,"avg":727},
                ],
      },
      {
        "nroJugador": 11,  
        "name": "Jose Luis Caballero (Cheli)",
        "profilePic": "assets/img/speakers/cheli.jpeg",
        "about": "Jugador de Cuadro.",
        "juego":[{"j": 1, "vb": 4,"h": 2,"h2":0,"h3":0,"hr":0,"ci":3,"ca":0,"bb":0,"k":1,"avg":500},
                         {"j": 2, "vb": 2,"h": 1,"h2":0,"h3":0,"hr":0,"ci":1,"ca":0,"bb":0,"k":0,"avg":500},
                         {"j": 3, "vb": 3,"h": 3,"h2":1,"h3":0,"hr":0,"ci":2,"ca":1,"bb":0,"k":0,"avg":1000},
                         {"j": 4, "vb": 0,"h": 0,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":0},   
                         {"j": 5, "vb": 1,"h": 1,"h2":1,"h3":0,"hr":0,"ci":1,"ca":0,"bb":0,"k":0,"avg":1000}, 
                         {"j": "total", "vb": 10,"h": 7,"h2":2,"h3":0,"hr":0,"ci":7,"ca":1,"bb":0,"k":1,"avg":700},
                ],  
       },
      { "nroJugador": 21,
        "name": "Luis Arriojas",
        "profilePic": "assets/img/speakers/LuisArriojas.jpg",
        "about": "Jugador de Cuadro.",
        "juego":[{"j": 3, "vb": 1,"h": 1,"h2":0,"h3":0,"hr":1,"ci":3,"ca":1,"bb":0,"k":0,"avg":1000},
                         {"j": 5, "vb": 1,"h": 1,"h2":0,"h3":0,"hr":1,"ci":3,"ca":2,"bb":2,"k":0,"avg":1000}, 
                         {"j": "total", "vb": 2,"h": 2,"h2":0,"h3":0,"hr":2,"ci":6,"ca":3,"bb":2,"k":0,"avg":1000},
                ],
      },
      {
        "nroJugador": 6,  
        "name": "Alexander Peña",
        "profilePic": "assets/img/speakers/AlexanderPeña.jpg",
        "about": "Jugador de Cuadro.",
        "juego":[{"j": 4, "vb": 1,"h": 0,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":0},   
                         {"j": 5, "vb": 1,"h": 0,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":0}, 
                         {"j": "total", "vb": 2,"h": 0,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":0}, 
                 ],
      },
      {
        "nroJugador": 23,  
        "name": "Jose Gregorio Caballero",
        "profilePic": "assets/img/speakers/JoseCaballero.jpg",
        "about": "Jugador de Cuadro.",
        "juego":[{"j": 1,  "vb": 3,"h": 1,"h2":0,"h3":0,"hr":0,"ci":0,"ca":1,"bb":0,"k":0,"avg":333},
                         {"j": 2, "vb": 2,"h": 2,"h2":2,"h3":0,"hr":0,"ci":3,"ca":0,"bb":0,"k":0,"avg":1000},
                         {"j": 3, "vb": 2,"h": 1,"h2":0,"h3":0,"hr":0,"ci":1,"ca":0,"bb":1,"k":0,"avg":500},
                         {"j": 4, "vb": 3,"h": 1,"h2":0,"h3":1,"hr":0,"ci":2,"ca":1,"bb":0,"k":0,"avg":333},   
                         {"j": 5, "vb": 1,"h": 0,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":1,"k":0,"avg":0}, 
                         {"j": "total", "vb": 11,"h": 5,"h2":2,"h3":1,"hr":0,"ci":6,"ca":2,"bb":1,"k":0,"avg":455},
                 ],
      },
      {
        "nroJugador": 13,  
        "name": "Frelik Berrios",
        "profilePic": "assets/img/speakers/FrelikBerrios.jpg",
        "about": "Jugador de Cuadro.",
        "juego":[{"j": 1,  "vb": 3,"h": 3,"h2":1,"h3":0,"hr":0,"ci":2,"ca":2,"bb":1,"k":0,"avg":1000},
                         {"j": 2, "vb": 3,"h": 2,"h2":2,"h3":0,"hr":0,"ci":2,"ca":1,"bb":0,"k":0,"avg":667},
                         {"j": 3, "vb": 3,"h": 2,"h2":0,"h3":0,"hr":0,"ci":0,"ca":2,"bb":0,"k":0,"avg":667},
                         {"j": 4, "vb": 4,"h": 1,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":250},   
                         {"j": 5, "vb": 2,"h": 2,"h2":2,"h3":0,"hr":0,"ci":2,"ca":1,"bb":0,"k":0,"avg":1000}, 
                         {"j": "total", "vb": 13,"h": 8,"h2":3,"h3":0,"hr":0,"ci":4,"ca":5,"bb":1,"k":0,"avg":615},  
                 ],
      },
              {
        "nroJugador": 4,          
        "name": "Erick Yepez",
        "profilePic": "assets/img/speakers/ErickYepez.jpg",
        "about": "Jugador de Cuadro.",
        "juego":[{"j": 2, "vb": 2,"h": 1,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":500},
                         {"j": 3, "vb": 2,"h": 0,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":0},
                         {"j": 4, "vb": 3,"h": 1,"h2":0,"h3":0,"hr":0,"ci":1,"ca":1,"bb":0,"k":0,"avg":333},   
                         {"j": "total", "vb": 7,"h": 2,"h2":0,"h3":0,"hr":0,"ci":1,"ca":1,"bb":0,"k":0,"avg":286}, 
                 ],
      },
              {
        "nroJugador": 30,          
        "name": "Dennis Moncada",
        "profilePic": "assets/img/speakers/DennisMoncada.jpg",
        "about": "Jardinero.",
        "juego":[{"j": 1,  "vb": 3,"h": 2,"h2":0,"h3":0,"hr":0,"ci":1,"ca":1,"bb":1,"k":0,"avg":667},
                         {"j": 2, "vb": 2,"h": 0,"h2":0,"h3":0,"hr":0,"ci":1,"ca":0,"bb":0,"k":0,"avg":0},
                         {"j": 3, "vb": 3,"h": 1,"h2":1,"h3":0,"hr":0,"ci":0,"ca":1,"bb":0,"k":0,"avg":333},
                         {"j": 4, "vb": 2,"h": 1,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":1,"k":0,"avg":500},   
                         {"j": 5, "vb": 2,"h": 0,"h2":0,"h3":0,"hr":0,"ci":0,"ca":1,"bb":0,"k":0,"avg":500}, 
                         {"j": "total", "vb": 12,"h": 4,"h2":1,"h3":0,"hr":0,"ci":2,"ca":3,"bb":2,"k":0,"avg":333},  
                 ],
      },
              {
        "nroJugador": 12,          
        "name": "German Jimenez",
        "profilePic": "assets/img/speakers/GermanJimenez.png",
        "about": "Jardinero.",
        "juego":[{"j": 1,  "vb": 3,"h": 2,"h2":0,"h3":0,"hr":0,"ci":2,"ca":1,"bb":0,"k":0,"avg":667},
                         {"j": 2, "vb": 2,"h": 1,"h2":0,"h3":0,"hr":0,"ci":1,"ca":0,"bb":0,"k":0,"avg":500},
                         {"j": 3, "vb": 3,"h": 1,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":333},
                         {"j": 4, "vb": 2,"h": 0,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":0},   
                         {"j": 5, "vb": 1,"h": 0,"h2":0,"h3":0,"hr":0,"ci":0,"ca":1,"bb":1,"k":0,"avg":0}, 
                         {"j": "total", "vb": 11,"h": 4,"h2":0,"h3":0,"hr":0,"ci":2,"ca":2,"bb":1,"k":0,"avg":364}, 
                 ],
       },
              {
        "nroJugador": 20,          
        "name": "Jackson Escalona",
        "profilePic": "assets/img/speakers/JacksonEscalona.jpg",
        "about": "Jardinero.",
        "juego":[{"j": 1,  "vb": 3,"h": 2,"h2":0,"h3":0,"hr":0,"ci":1,"ca":1,"bb":1,"k":0,"avg":667},
                         {"j": 2, "vb": 3,"h": 1,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":333},
                         {"j": 3, "vb": 2,"h": 1,"h2":0,"h3":0,"hr":0,"ci":1,"ca":1,"bb":1,"k":0,"avg":500},
                         {"j": 4, "vb": 3,"h": 0,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":0},   
                         {"j": "total", "vb": 13,"h": 6,"h2":2,"h3":0,"hr":0,"ci":4,"ca":3,"bb":2,"k":0,"avg":462},  
                 ],
                 
      },
              {
        "nroJugador": 16,          
        "name": "Andrick Gonzales",
        "profilePic": "assets/img/speakers/AndrickGonzalez.jpg",
        "about": "Jardinero.",
        "juego":[{"j": 1,  "vb": 4,"h": 0,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":0},
                         {"j": 4, "vb": 2,"h": 2,"h2":0,"h3":0,"hr":0,"ci":1,"ca":0,"bb":1,"k":0,"avg":1000},   
                         {"j": 5, "vb": 1,"h": 1,"h2":0,"h3":0,"hr":0,"ci":0,"ca":1,"bb":1,"k":0,"avg":1000}, 
                         {"j": "total", "vb": 7,"h": 3,"h2":0,"h3":0,"hr":0,"ci":1,"ca":1,"bb":1,"k":0,"avg":429},
                 ],
      },
              {
        "nroJugador": 21,          
        "name": "Jonathan Escobar",
        "profilePic": "assets/img/speakers/JonathanEscobar.jpg",
        "about": "Jardinero.",
        "juego":[{"j": 1,  "vb": 4,"h": 1,"h2":1,"h3":0,"hr":0,"ci":0,"ca":0,"bb":0,"k":0,"avg":250},
                         {"j": 2, "vb": 1,"h": 1,"h2":0,"h3":0,"hr":0,"ci":0,"ca":0,"bb":1,"k":0,"avg":1000},
                         {"j": 3, "vb": 2,"h": 2,"h2":1,"h3":0,"hr":0,"ci":2,"ca":1,"bb":1,"k":0,"avg":1000},
                         {"j": 4, "vb": 3,"h": 2,"h2":1,"h3":0,"hr":0,"ci":0,"ca":1,"bb":0,"k":0,"avg":667},   
                         {"j": 5, "vb": 3,"h": 2,"h2":1,"h3":0,"hr":0,"ci":4,"ca":1,"bb":0,"k":0,"avg":667}, 
                         {"j": "total", "vb": 13,"h": 8,"h2":4,"h3":0,"hr":0,"ci":6,"ca":3,"bb":2,"k":0,"avg":615}, 
                 ],
      }       
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
