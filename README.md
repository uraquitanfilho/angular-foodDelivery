# foodDelivery - Angular

This is an example of a Food Delivery where will explain how to work with Angular.
We will see about:
* Install Angular
* make a new project
* initial config
* components 
* directives
* pipes, pipes async, pipe currency 
* modules, services and how to work with Restful API
* catch directive to work with errors
* reactive programs
* react-form
* comunication between componets
* reuse components
* how to integrate components with form directive
* code based in typescript

> [Install Angular](#install-angular)

> [Clone](#clone)

> [Creating the Project](#creating-the-project)

> [Install some packages](#install-some-packages)

> [Initil page config](#initial-page-config)

> [Components Header and Home](#components-header-and-home)

> [Routes](#routes)

> [Individual Component](#individual-component)

> [Services](#services)

> [Reactive Program and http](#reactive-program-and-http)

> [Catch](#catch)

> [Routes Parameter and Children Routes](#routes-parameter-and-children-routes)

## Install Angular

> To install Angular you just need node, npm and angular-cli
* To install [NodeJS](https://nodejs.org/en/)
 * npm comes with windows node install
* Now you just need go to prompt and type:
```
 npm install -g @angular/cli
```
> How to check ?
```
ng -v
ng serve 
```
_ps:You can work with vscode, atom, sublime, notepad++_

## Clone

> To clone the full project make a new folder and type:

```
git clone https://github.com/uraquitanfilho/angular-foodDelivery.git
```
* go to folder and type:
```
npm install
```
_ps: You need to install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
You can download the zip file too_

## Creating the Project

> To create a new Angular project create a folder and type:
```
ng new foodDelivery --prefix=fd
```
_ps: optional parameter: --prefix=fd will help you to distinct your components.
All new component made by you will start with same "fd" prefix_

## Install some packages

> To our project, let's install some packages using npm or yarn as you prefer.
* Go do project folder **foodDelivery**
```
npm install admin-lte@2.3.11
npm install font-awesome
npm install intl
npm install jquery
npm install reflect-metadata
npm install ts-helpers
npm install -g webdriver-manager
```
> About components installed
* [admin-lte](https://www.npmjs.com/package/admin-lte)
* [font-awesome](https://www.npmjs.com/package/font-awesome)
* [intl](https://www.npmjs.com/package/intl)
* [Jquery](https://www.npmjs.com/package/jquery)
* [reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
* [ts-helpers]()
* [webdriver-manager](https://www.npmjs.com/package/webdriver-manager)

## Initial Page Config
> Commit: [081e111](https://github.com/uraquitanfilho/angular-foodDelivery/tree/081e1117f96e5d6384a86a6e56ce7789cffcd064) 
* Edit **foodDelivery/src/index.html**
```html
<!doctype html>
<html>
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>foodDelivery | Angular</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    </head>
    <body class="hold-transition skin-red layout-top-nav">
        <fd-app>Loading...</fd-app>
    </body>
</html>
```
* assets Images

> Download the [images](http://www.syx.com.br/img.zip) 
* unzip **foodDelivery/src/assets**

* Edit **foodDelivery/src/app/app.component.ts**
```html
<div class="wrapper">
    <!-- Início do header -->
    <header class="main-header">
    <nav class="navbar navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand"><b>Meat</b></a>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
            <i class="fa fa-bars"></i>
          </button>
        </div>
  
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
          <ul class="nav navbar-nav">
              <li class="active"><a href="#">Restaurants</a></li>
              <li><a href="#">About</a></li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
  
      </div>
    </nav>
    </header>
    <!-- Fim do header -->
  
    <!-- Full Width Column -->
    <div class="content-wrapper">
      <div class="container">
  
        {{content}}
  
      </div>
    </div>
  
    <!-- snakbar deve ser aqui -->
  
    <footer class="main-footer">
      <div class="container">
        <div class="pull-right hidden-xs">
          <b>Version</b> 1.0.0
        </div>
        <strong>foodDelivery</strong> Angular Application
      </div>
    </footer>
  </div>
  ```
  * Edit **foodDelivery/.angular-cli.json**
  > Edit the tags styles and scripts
  ```json
  ...
        "styles": [
        "../node_modules/font-awesome/css/font-awesome.min.css",
        "../node_modules/admin-lte/bootstrap/css/bootstrap.min.css",
        "../node_modules/admin-lte/dist/css/AdminLTE.min.css",
        "../node_modules/admin-lte/dist/css/skins/skin-red.min.css",
        "../node_modules/admin-lte/plugins/iCheck/flat/red.css",
        "styles.css"
      ],
      "scripts": [
        "../node_modules/jquery/dist/jquery.min.js",
        "../node_modules/admin-lte/bootstrap/js/bootstrap.min.js",
        "../node_modules/admin-lte/dist/js/app.min.js"
      ],
  ...    
  ```
  * Edit **foodDelivery/src/app/app.component.ts**

  ```javascript
import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'fd-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Welcome do foodDelivery App!'

  constructor() { }

  ngOnInit() {
  }

}
  ```
## Components Header and Home
> Commit: [e704b5a](https://github.com/uraquitanfilho/angular-foodDelivery/tree/e704b5a98bb1ec119929d48fa2e398d46a2e1b42) 

How to create a component ? Very simple. Go to terminal: <br/>
**Directives**: <br/>
**sintax** -> _ng generate component name_component_ <br/>
**ng** -> base command to work with angular <br/>
**generate** -> can be used only **g** <br/>
**component** -> can be used only **c** <br/>
**--spec=false** -> generate without test file 
```
ng g c header --spec=false
```

* Cut the header tag from **foodDelivery/src/app/app.component.html** and paste in the file: **foodeDelivery/src/app/header/header.componenet.html**

```html
    <!-- header start -->
    <header class="main-header">
    <nav class="navbar navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand"><b>foodDelivery</b></a>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
            <i class="fa fa-bars"></i>
          </button>
        </div>
  
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
          <ul class="nav navbar-nav">
              <li class="active"><a href="#">Restaurants</a></li>
              <li><a href="#">About</a></li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
  
      </div>
    </nav>
   </header>
```
* now Let1s create the home component

```
ng g c home --spec=false
```
* Go to home folder and add this html code to **home-componenet.html**
```html
<section class="content-header">
  </section>

  <section class="content">

    <div class="jumbotron welcome-jumbotron">
       <h1>Welcome to Food Delivery!</h1>
       <p>
         Are you hungry? Ask and receive it at home.
       </p>
       <a class="btn btn-primary btn-lg" href="main-restaurants.html">See Restaurants</a>
    </div>
</section>
```

> How to use the componenet ?

> Was created 2 new componets Header and Home. So, on the .ts file by the both components will see a section called: _@componenet_ The directive _selecor_ will show the name of the tag.
> To both example : fd-header and fd-home. So, you need just to call the new tag on the app.component.html

* Edit **app.componenet.html**
```html
<div class="wrapper">

    <fd-header></fd-header>
    
    <!-- Full Width Column -->
    <div class="content-wrapper">
      <div class="container">
  
       <fd-home></fd-home>
  
      </div>
    </div>
  
    <!-- snakbar deve ser aqui -->
  
    <footer class="main-footer">
      <div class="container">
        <div class="pull-right hidden-xs">
          <b>Version</b> 1.0.0
        </div>
        <strong>foodDelivery</strong> Angular Application
      </div>
    </footer>
  </div>
```
## Routes
> Commit: [e704b5a](https://github.com/uraquitanfilho/angular-foodDelivery/commit/e704b5a98bb1ec119929d48fa2e398d46a2e1b42)

> Route is an array that contains a path for each component. It's possible to use parameters

Using routerLink it's possible to call a route.

* Let's do an example: 
 * For this example we will create a new component about
 ```
 ng g c about --spec=false
 ```
 Edit the file: **about.componenet.html**
 ```html
 <section class="content-header">
  <h1>About</h1>
</section>

<section class="content">
    <p class="lead">
      foodDelivery | Angular
    </p>
    <p class="lead">
      MIT license
    </p>
    <p class="lead">Copyright 2018 Uraquitan Filho (<a href="https://github.com/uraquitanfilho">Git Hub</a>)</p>
    <p class="lead">Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
    <p class="lead">The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.            </p>
    <p class="lead">
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
    <p class="lead">
      Images for this project was uploaded at <a href="http://www.freepik.com" target="_blank">freepik.com</a>
    </p>
  </section>
 ```
 * Let's create the restaurant componenet
 ```
 ng g c restaurant --spec=false
 ```

 * Now let create a route
  * create a new file: **src/app/app.routes.ts**
  ```javascript
import { Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'restaurants', component: RestaurantComponent},
];
  ```
* We need import the **app.routes.ts** on the **app.modules.ts**
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// was imported to work with route
// ==========================================
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
// ==========================================

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES) //was imported
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
* Now we need edit our principal componenet **src/app/app.componenet.html**
  * remove the tag: <fd-home></fd-home>
  * add: <router-outlet></router-outlet> 
* Let's edit the link on the page **src/app/header/header.component.html**
```html
    <!-- header start -->
    <header class="main-header">
    <nav class="navbar navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <a [routerLink]="['/']" class="navbar-brand"><b>foodDelivery</b></a>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
            <i class="fa fa-bars"></i>
          </button>
        </div>
  
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
          <ul class="nav navbar-nav">
              <li routerLinkActive="active"><a [routerLink]="['/restaurants']">Restaurants</a></li>
              <li routerLinkActive="active"><a [routerLink]="['/about']">About</a></li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
  
      </div>
    </nav>
   </header>
```
   _routerLinkActive receives as parameter the class css to control the active click_ 
* Edit **src/app/home.component.html** to add the link to Restaurant route.
```html
   <a class="btn btn-primary btn-lg" [routerLink]="['/restaurants']">See Restaurants</a>
```
## Individual Component
> Commit: [152b8dd](https://github.com/uraquitanfilho/angular-foodDelivery/commit/152b8dd50d3e6cba64c6366c3f4957c5bef81100)

> We will learn how to work with properties inside the componenet using the **decorator @Input()**
using an **interface** to represent the type of the propertie.
> We will learn too about the command ***ngFor**

* lets create a new componenet inside restaurant
```
ng g c restaurant/store --spec=false
```
* Inside store folder, create a new **INTERFACE** file called: **store.model.ts**

```javascript
export interface Store {
  id: string;
  name: string;
  category: string;
  deliveryEstimate: string;
  rating: number;
  imagePath: string;
}
```

* Edit **src/app/restaurant/store/store.componenet.ts**
```javascript
import { Component, OnInit, Input } from '@angular/core';

import {Store} from './store.model';

@Component({
  selector: 'fd-store',
  templateUrl: './store.component.html'
})
export class StoreComponent implements OnInit {
 
  @Input() store: Store;
  constructor() { }

  ngOnInit() {
  }
}
```
* We don't have the back-end yet. So let's create a temporary array list to represent the back-end data. Go to **resaurant.component.ts**. After we will make the back-end. Not now. Step by step :)

```javascript
import { Component, OnInit } from '@angular/core';
import { Store } from './store/store.model';

@Component({
  selector: 'fd-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  restaurants: Store[] = [
    {
      id: "bread-bakery",
      name: "Bread & Bakery",
      category: "Bakery",
      deliveryEstimate: "25m",
      rating: 4.9,
      imagePath: "assets/img/restaurants/breadbakery.png"
    },
    {
      id: "burger-house",
      name: "Burger House",
      category: "Hamburgers",
      deliveryEstimate: "100m",
      rating: 3.5,
      imagePath: "assets/img/restaurants/burgerhouse.png"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
```
* Now you will to learn how to use the command ***ngFor**. Go to restaurant.component.html
```html
<section class="content-header">
  <h1>
    All Restaurants
  </h1>
</section>
<section class="content">

  <div class="row">
      <div *ngFor="let restaurant of restaurants" class="col-sm-6 col-xs-12">
         <fd-store [store]="restaurant"></fd-store>
      </div>
  </div>

</section>
```
## services
> Commit: [26b9f53](https://github.com/uraquitanfilho/angular-foodDelivery/tree/26b9f536c14ac9dd869dcbbd98e13876964598bf)

> Service is a simple class. Generaly used to encapsule the back-end API.
Can be Singletons

> There are 3 scopes to declare a service:
* Module -> providers: [] **global access to all components**
* Component and child components -> providers:[] **Only to local component**
* Only component -> viewProviders: [] **Child components without access**

> Services can injectable other services, so need to use the decorator: **@Injectable()**
_We will work with class too_ 

* Let's create a service class to declare the back-end of the application.
 * Create a service file inside restaurant folder called: **restaurant.service.ts**
* For now our service class have static data YET.
```javascript
import {Store} from './store/store.model';

export class ResturantService {
    rests: Store[] = [
        {
          id: "bread-bakery",
          name: "Bread & Bakery",
          category: "Bakery",
          deliveryEstimate: "25m",
          rating: 4.9,
          imagePath: "assets/img/restaurants/breadbakery.png"
        },
        {
          id: "burger-house",
          name: "Burger House",
          category: "Hamburgers",
          deliveryEstimate: "100m",
          rating: 3.5,
          imagePath: "assets/img/restaurants/burgerhouse.png"
        }
      ];    
    constructor() {

    }
    restaurants(): Store[] {
      return this.rests;
    }
}
```
* Edit **restaurant.component.ts**

```javascript
import { Component, OnInit } from '@angular/core';
import { Store } from './store/store.model';
import {RestaurantService} from './restaurant.service';

@Component({
  selector: 'fd-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  restaurants: Store[] = [];
  constructor(private restaurantService: RestaurantService) { }
//inicialization of the component
  ngOnInit() {
    this.restaurants = this.restaurantService.restaurants();
  }

}
``` 
* Now we need to inject the service on the **app.module.ts**

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { StoreComponent } from './restaurant/store/store.component';
import { RestaurantService } from './restaurant/restaurant.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  /*Inject service here*/
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Reactive Program and http
> Commit: [b6b7353](https://github.com/uraquitanfilho/angular-foodDelivery/tree/b6b735340daa561551c35f662672b21e0d4642e4)

> Based in Events. We will to use observers, listeners. The events comes in streams form(event sequences). Each event will do a notification to be consummed.
> Iterator + Observer. In Angular the library used to work with reactive program is **RXJS**

* Let's start with back-end application.
 * Let's install the json-server
 ```
 npm install -g json-server
 ```
 * create a file called **db.json** in the folder: **/foodDelivery/**
 ```json
 {
  "restaurants": [
    {
      "id": "bread-bakery",
      "name": "Bread & Bakery",
      "category": "Bakery",
      "deliveryEstimate": "25m",
      "rating": 4.9,
      "imagePath": "assets/img/restaurants/breadbakery.png",
      "about": "A Bread & Brakery tem 40 anos de mercado. Fazemos os melhores doces e pães. Compre e confira.",
      "hours": "Funciona de segunda à sexta, de 8h às 23h"
    },
    {
      "id": "burger-house",
      "name": "Burger House",
      "category": "Hamburgers",
      "deliveryEstimate": "100m",
      "rating": 3.5,
      "imagePath": "assets/img/restaurants/burgerhouse.png",
      "about": "40 anos se especializando em trash food.",
      "hours": "Funciona todos os dias, de 10h às 22h"
    },
    {
      "id": "coffee-corner",
      "name": "Coffee Corner",
      "category": "Coffee Shop",
      "deliveryEstimate": "30-40m",
      "rating": 4.8,
      "imagePath": "assets/img/restaurants/coffeecorner.png",
      "about": "A Coffe Corner foi eleita a melhor cafeteria da cidade.",
      "hours": "Funciona de segunda à sábado, de 6h às 22h"
    },
    {
      "id": "green-food",
      "name": "Green Food",
      "category": "Saudável",
      "deliveryEstimate": "75m",
      "rating": 4.1,
      "imagePath": "assets/img/restaurants/greenfood.png",
      "about": "Comida saudável é no Green Food. Compramos barato, vendemos caro. ;)",
      "hours": "Somente em horário de almoço, das 11h às 15h"
    },
    {
      "id": "ice-cream",
      "name": "Ice Cream",
      "category": "Ice Creams",
      "deliveryEstimate": "40-65m",
      "rating": 4.5,
      "imagePath": "assets/img/restaurants/icy.png",
      "about": "A Ice Cream é uma sorveteria inovadora.",
      "hours": "Funciona todos os dias, de 10h às 1h"
    },
    {
      "id": "tasty-treats",
      "name": "Tasty Treats",
      "category": "Doces",
      "deliveryEstimate": "20m",
      "rating": 4.4,
      "imagePath": "assets/img/restaurants/tasty.png",
      "about": "A doceria com mais tradição da cidade",
      "hours": "Funciona de segunda à sábado, de 8h às 23h"
    }
  ],
  "menu": [
    {
      "id": "cup-cake",
      "imagePath": "assets/img/foods/cupcake.png",
      "name": "Cup Cake",
      "description": "Cup Cake recheado de Doce de Leite",
      "price": 8.7,
      "restaurantId": "bread-bakery"
    },
    {
      "id": "donut",
      "imagePath": "assets/img/foods/donut.png",
      "name": "Donut",
      "description": "Coberto com chantilly",
      "price": 2.5,
      "restaurantId": "bread-bakery"
    },
    {
      "id": "bread",
      "imagePath": "assets/img/foods/bread.png",
      "name": "Pão Artesanal Italiano",
      "description": "Pão artesanal com queijos italianos",
      "price": 15.9,
      "restaurantId": "bread-bakery"
    },
    {
      "id": "burger",
      "imagePath": "assets/img/foods/burger.png",
      "name": "Classic Burger",
      "description": "O clássico. Não tem como errar.",
      "price": 18.5,
      "restaurantId": "burger-house"
    },
    {
      "id": "fries",
      "imagePath": "assets/img/foods/fries.png",
      "name": "Batatas Fritas",
      "description": "Batatas fritas crocantes",
      "price": 5.5,
      "restaurantId": "burger-house"
    },
    {
      "id": "coke.png",
      "imagePath": "assets/img/foods/coke.png",
      "name": "Refrigerante",
      "description": "O refri mais gelado da cidade.",
      "price": 4.5,
      "restaurantId": "burger-house"
    },
    {
      "id": "capp",
      "imagePath": "assets/img/foods/capp.png",
      "name": "Cappuccino com Chantilly",
      "description": "Tradicional cappuccino com chantilly",
      "price": 9.9,
      "restaurantId": "coffee-corner"
    },
    {
      "id": "espreso",
      "imagePath": "assets/img/foods/espreso.png",
      "name": "Super Espreso",
      "description": "Café espresso duplo. ",
      "price": 12.5,
      "restaurantId": "coffee-corner"
    },
    {
      "id": "starb",
      "imagePath": "assets/img/foods/starb.png",
      "name": "Starbucks Copycat",
      "description": "O mais pedido da casa. O verdadeiro café americano pura água.",
      "price": 15.6,
      "restaurantId": "coffee-corner"
    },
    {
      "id": "zlasagna",
      "imagePath": "assets/img/foods/zlasagna.png",
      "name": "Lasagna de Zucchini",
      "description": "Lasagna deliciosa que se salva por causa do queijo",
      "price": 14.9,
      "restaurantId": "green-food"
    },
    {
      "id": "greensandwich",
      "imagePath": "assets/img/foods/greensandwich.png",
      "name": "Sanduíche de Frango",
      "description": "Frango grelhado e salada",
      "price": 10.5,
      "restaurantId": "green-food"
    },
    {
      "id": "ceasar",
      "imagePath": "assets/img/foods/ceasar.png",
      "name": "Salada Ceasar",
      "description": "Clássica salada ceasar.",
      "price": 33.9,
      "restaurantId": "green-food"
    },
    {
      "id": "sunday",
      "imagePath": "assets/img/foods/sunday.png",
      "name": "Mega Sunday",
      "description": "Sunday com várias bolas de sorvete a sua escolha",
      "price": 21.5,
      "restaurantId": "ice-cream"
    },
    {
      "id": "chocpop",
      "imagePath": "assets/img/foods/chocpop.png",
      "name": "Picolé de Brigadeiro",
      "description": "Picolé de brigadeiro recheado com côco.",
      "price": 8.5,
      "restaurantId": "ice-cream"
    },
    {
      "id": "icestd.png",
      "imagePath": "assets/img/foods/icestd.png",
      "name": "Sorvete Simples",
      "description": "Clássico sorvete de rua onde todos os sabores são idênticos.",
      "price": 1.5,
      "restaurantId": "ice-cream"
    },
    {
      "id": "cup",
      "imagePath": "assets/img/foods/cup.png",
      "name": "Cup Cake de Choc. Branco",
      "description": "Cup Cake de chocolate branco",
      "price": 5.5,
      "restaurantId": "tasty-treats"
    },
    {
      "id": "straw",
      "imagePath": "assets/img/foods/straw.png",
      "name": "Bolo de Morango",
      "description": "Bolo recheado e coberto com morangos",
      "price": 40.5,
      "restaurantId": "tasty-treats"
    },
    {
      "id": "cake",
      "imagePath": "assets/img/foods/cake.png",
      "name": "Fatia de Bolo",
      "description": "Fatia de bolo de morango",
      "price": 5.9,
      "restaurantId": "tasty-treats"
    }
  ],
  "reviews": [
    {
      "name": "Julia",
      "date": "2017-01-23T18:25:43",
      "rating": 4.5,
      "comments": "Tudo muito bom, entrega no tempo certo",
      "restaurantId": "bread-bakery"
    },
    {
      "name": "Aline",
      "date": "2016-12-12T18:25:43",
      "rating": 3,
      "comments": "NÃO recomendo. O recheio é só um creme, não tem camarão e nem carne",
      "restaurantId": "bread-bakery"
    },
    {
      "name": "Renata",
      "date": "2016-12-12T18:25:43",
      "rating": 2,
      "comments": "Não foi muito agradável ao nosso paladar, e eu e meu esposo no outro dia passamos super mal. Pode até ter sido outra coisa, mas...",
      "restaurantId": "bread-bakery"
    },
    {
      "name": "Renata",
      "date": "2016-12-12T18:25:43",
      "rating": 5,
      "comments": "Nunca deixou na mão, comida sempre deliciosa.",
      "restaurantId": "bread-bakery"
    },
    {
      "name": "Daniela",
      "date": "2017-01-23T18:25:43",
      "rating": 4,
      "comments": "Sanduíche muito bom! Já pedi diversas vezes sempre bom!",
      "restaurantId": "burger-house"
    },
    {
      "name": "Laila",
      "date": "2017-02-02T18:25:43",
      "rating": 5,
      "comments": "Melhor hambúrguer que já provei. Vai ser difícil voltar para mc e bk",
      "restaurantId": "burger-house"
    },
    {
      "name": "Suzana",
      "date": "2016-12-12T18:25:43",
      "rating": 3.5,
      "comments": "Meu sanduíche chegou frio e todo desmontado =\\",
      "restaurantId": "burger-house"
    },
    {
      "name": "Eric",
      "date": "2017-01-23T18:25:43",
      "rating": 4.5,
      "comments": "Excelente opção! Recomendo!",
      "restaurantId": "coffee-corner"
    },
    {
      "name": "Amanda",
      "date": "2017-02-02T18:25:43",
      "rating": 2.5,
      "comments": "Demorou muito e o café veio gelado",
      "restaurantId": "coffee-corner"
    },
    {
      "name": "Carla",
      "date": "2016-12-12T18:25:43",
      "rating": 4.8,
      "comments": "Tudo perfeito. Entrega, embalagem, comida. Resultado? Melhor custo beneficio",
      "restaurantId": "coffee-corner"
    },
    {
      "name": "Rodrigo",
      "date": "2016-12-12T18:25:43",
      "rating": 4,
      "comments": "Muito rápida a entrega, mas é caro.",
      "restaurantId": "coffee-corner"
    },
    {
      "name": "André",
      "date": "2016-12-12T18:25:43",
      "rating": 4.5,
      "comments": "Excelente como sempre!",
      "restaurantId": "coffee-corner"
    },
    {
      "name": "João",
      "date": "2017-01-23T18:25:43",
      "rating": 5,
      "comments": "Excelente. Fiz o pedido com outro endereço e quando vi o erro liguei avisando. O motoqueiro cortou a cidade todinha e a comida ainda chegou quentinha (e deliciosa). Estou sempre pedindo e recomendando",
      "restaurantId": "green-food"
    },
    {
      "name": "Marcelo",
      "date": "2017-02-02T18:25:43",
      "rating": 4.5,
      "comments": "Chegou muito rápido, antes mesmo da previsão",
      "restaurantId": "green-food"
    },
    {
      "name": "Fatinha",
      "date": "2017-01-23T18:25:43",
      "rating": 2,
      "comments": "Ñ gostei dos sabores q pedi e achei o preço muito elevado",
      "restaurantId": "ice-cream"
    },
    {
      "name": "Lucas",
      "date": "2017-02-02T18:25:43",
      "rating": 2.5,
      "comments": "Esperar 1:45hr pra receber o pedido é INACEITÁVEL",
      "restaurantId": "ice-cream"
    },
    {
      "name": "Jacira",
      "date": "2017-02-01T18:25:43",
      "rating": 4.5,
      "comments": "Veio OK!",
      "restaurantId": "ice-cream"
    },
    {
      "name": "Ana",
      "date": "2017-01-23T18:25:43",
      "rating": 5,
      "comments": "Rápido e sempre uma delicia!! Ja pedi 3x e sempre veio rapido e tudo certinho.",
      "restaurantId": "tasty-treats"
    },
    {
      "name": "Larissa",
      "date": "2017-02-02T18:25:43",
      "rating": 2.5,
      "comments": "A taxa de entrega poderia ser mais barata.",
      "restaurantId": "tasty-treats"
    },
    {
      "name": "Jarbas",
      "date": "2016-12-15T18:25:43",
      "rating": 4.7,
      "comments": "Excelente e chegou muito rápido!",
      "restaurantId": "tasty-treats"
    },
    {
      "name": "Rafaela",
      "date": "2017-01-12T18:25:43",
      "rating": 5,
      "comments": "Chegou rápido e perfeito!",
      "restaurantId": "tasty-treats"
    },
    {
      "name": "Julia",
      "date": "2016-12-12T18:25:43",
      "rating": 1.5,
      "comments": "Sempre gostei muito dos pedidos que eu fiz, mas dessa vez foi péssimo e decepcionou muito. Demorou 30min a mais pra chegar do que o tempo máximo esperado.",
      "restaurantId": "tasty-treats"
    },
    {
      "name": "Marília",
      "date": "2016-12-20T18:25:43",
      "rating": 4.5,
      "comments": "Taxa de entrega bastante elevada e precisa colocar no app se a pessoa quer porção adicional de algo (calda, crocante etc)",
      "restaurantId": "tasty-treats"
    }
  ],
  "orders": []
}
 ```
 * Now type:
 ```
 json-server db.json
 ``` 
 * the output will come something like:
 ```
   \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/restaurants
  http://localhost:3000/menu
  http://localhost:3000/reviews
  http://localhost:3000/orders

  Home
  http://localhost:3000

 ```
 * So, now we have a simple back-end restFul API test to be used in our example to make tests :)  
 _This is an awesome easy form to make tests_ 

 * Now we will work with **http**. Create a new file called **app.api.ts** path: **src/app/**
  * To work with **Constants** using angular. 
 ```javascript
 export const URL_API = "http://localhost:3000";
 ```
 * Let's edit **restaurant/restaurant.service.ts**
  * We don't need more the JSON inside the file. Let's remove it to use the call to **REST API**
  ```javascript
/*We will use another service "Http service" inside a service, so.. 
  VERY IMPORTANT: TO use service inside service you need to use the decorator @Injectable()
*/
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Store} from './store/store.model';

import { URL_API } from '../app.api'; //Was imported the CONST URL_API
//WE will to use OBSERVABLE. REMEMBER? To work with REST API need to use RXJS
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantService {
     
    constructor(private http: Http) {

    }
    restaurants(): Observable<Store[]> {
      //.map convert the result in a list of JSON 
      //Response will return many informations but we need only the JSON.
      return this.http.get(`${URL_API}/restaurants`)
        .map(response => response.json());
    }
}
  ```
  * Now go to **restaurant.component.ts** 
   * We need to edit the call of this **observable**
   ```javascript
   import { Component, OnInit } from '@angular/core';
import { Store } from './store/store.model';
import {RestaurantService} from './restaurant.service';

@Component({
  selector: 'fd-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  restaurants: Store[] = [];
  constructor(private restaurantService: RestaurantService) { }
//inicialization of the component
  ngOnInit() {
    //async method
    //Using the subscible we will have the access to the return of the service method using the observable
    this.restaurantService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

}
```
> Done :) Just it to work with http access

## Catch
> Commit: [c3bea0e](https://github.com/uraquitanfilho/angular-foodDelivery/tree/c3bea0e84aa2f031468c67f5bf39cd9fa3f20484) 

> we will learn to use the operator catch from **RXJS** and to use the command **instanceof**

* First let's create a new **class** to work with our errors
 * create a new class file **src/app/app.error-handler.ts**
```javascript
import {Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class ErrorHandler {
    static handleError(error: Response | any) {
        let errorMessage: string;
        
        if (error instanceof Response) {
            errorMessage = `Error ${error.status} trying to access the URL ${error.url} - ${error.statusText}`;
        } else {
            errorMessage = error.toString();
        }
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }
}
```

* Let's refactor our service file **restaurant.service.ts**
```javascript
import {Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class ErrorHandler {
    static handleError(error: Response | any) {
        let errorMessage: string;
        
        if (error instanceof Response) {
            errorMessage = `Error ${error.status} trying to access the URL ${error.url} - ${error.statusText}`;
        } else {
            errorMessage = error.toString();
        }
        //sure, we are only show on the console. But you can to use other forms to alert the message to user.
        //Was just to you understand how to work.
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }
}
```
##  Routes Parameter and Children Routes
> Commit: [2d88f07](https://github.com/uraquitanfilho/angular-foodDelivery/tree/2d88f0793c336ca75fbc058189cbef8284f620b3) 

> Warning: I forgot to declare HttpModule to our modules so please, first go to **app.modules.ts**
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { StoreComponent } from './restaurant/store/store.component';
import { RestaurantService } from './restaurant/restaurant.service';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { HttpModule } from '@angular/http'; //added



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantComponent,
    StoreComponent,
    RestaurantDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpModule //added
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

> Sometimes we need to pass parameters. So for it you will work using **/:param_name**

> To access can be used 2 forms
 - SNAPSHOT - More used. Case we have a static route
 - SUBSCRIBE - dynamic routes. Example details of the restaurants

* for it let's first create some components to make the router parameter example.
* Let's create the component **restaurant-detail**
```
ng g c restaurant-detail --spec=false
```
* Add this code to **restaurant-detail.componenet.html**
```html
<section class="content-header">
  <h1>

  </h1>
</section>
<section class="content">
  <div class="row">
      <div class="col-xs-12">
        <div class="box box-solid">
          <div class="box-header with-border">
            <i class="fa fa-home"></i>

            <h3 class="box-title">{{restaurant?.name}}</h3><span class="pull-right"><i class="fa fa-star"></i>{{restaurant?.rating}}</span>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="col-sm-3 col-xs-12" *ngIf="restaurant"> <!-- only will show if exist imagePath -->
              <img class="box-img-detail" [src]="restaurant?.imagePath" />
            </div>

            <dl class="col-sm-9 col-xs-12">
              <dt>Category</dt>
              <dd>{{restaurant?.category}}</dd>
              <dt>About us</dt>
              <dd>{{restaurant?.about}}</dd>
              <dt>Operating Hours</dt>
              <dd>{{restaurant.hours}}</dd>
            </dl>
          </div>
          <!-- /.box-body -->
          <div class="box-footer detail-footer">
          <a class="pull-left" routerLinkActive="detail-active" [routerLink]="['menu']">
             Menu
          </a>
          <a class="pull-right" routerLinkActive="detail-active" [routerLink]="['reviews']">
             Assessments
          </a>
        </div>
        </div>
      </div>
      <!-- /.col-xs-12 -->
  </div>
  <div class="row">
      <router-outlet></router-outlet>
  </div>
</section>
```
* lets Create 3 new componenet inside **restaurant-detail**
```
ng g c restaurant-detail/menu --spec=false
ng g c restaurant-detail/shopping-cart --spec=false
ng g c restaurant-detail/menu-item --spec=false
```
* Now go to **restaurant/store/store.component.html** to add the call of the route
```html
<a [routerLink]="['/restaurants', store.id]"> <!-- was added the call to a route with parameter -->
  <div class="place-info-box">
    <span class="place-info-box-icon"><img [src]="store.imagePath" /></span>

    <div class="place-info-box-content">
      <span class="place-info-box-text">{{store.name}}</span>
      <span class="place-info-box-star"><i class="fa fa-star"></i> {{store.rating}}</span>
      <span class="place-info-box-detail">{{store.category}}</span>
      <span class="place-info-box-detail">{{store.deliveryEstimate}}</span>
    </div>
    <!-- /.info-box-content -->
  </div>
</a>
```
* Let's create a new method in our service **src/app/restaurant/restaurant.service.ts**
```javascript
    restaurantById(id: string): Observable<Store> {
      return this.http.get(`${URL_API}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }
```
* Now let's inject the service inside the restaurant-detail to have access to new method.
 * Go to **src/app/restaurant-detail/restaurant-detail.componenet.ts**
 ```javascript
 
 ```
##Now it's time to learn how to navigate between two children Components

* Let's create a new componenet called **reviews**
```
ng g c restaurant-detail/reviews --spec=false
```
> ##Children Route and Parameter

* Edit **src/app/app.routes.ts** 
```javascript
import { Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'restaurants', component: RestaurantComponent},
    //parameter
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
    //children
    children: [
      //case add any word after restaurants, will redirect to menu  
      {path: '', redirectTo: 'menu', pathMatch: 'full'},  
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent},
    ]
  } 
];
```
> To call a link for children you can't to use the **/**
 - Not Correct : [routerLink]="['/reviews']"
 - Correct form : [routerLink]="['reviews']"
