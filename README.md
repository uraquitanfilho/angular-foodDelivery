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
* template-forms
* reactive-form
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

> [Pipes](#pipes)

> [Shopping Cart](#shopping-cart)

> [Template Forms and Validation](#template-forms-and-validation)

> [Component using Control Value Accessor](#component-using-control-value-accessor)

> [Rating](#rating)

> [Reactive Forms](#reactive-forms)

> [Lazy-Loading](#lazy-loading)

> [Shared Module](#shared-module)

> [Lazy Loading - Order](#lazy-loading-order)

> [Core Module to isolate Providers](#core-module-to-isolate-providers)

> [Preloading](#preloading)

> [Animation](#animation)

 > [Observable with Snackbar](#observable-with-snackbar)

 > [Using Do and SwitchMap](#using-do-and-switchmap)

 > [Transition styles and void](#transition-styles-and-void)

 > [Keyframes animation](#keyframes-animation)

 > [Not Found](#not-found)

 > [Search Restaurant](#search-restaurant)
 
 > [HTTPClient](#httpclient)

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
             Ratting
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

## Pipes
> Commit: [51472cd](https://github.com/uraquitanfilho/angular-foodDelivery/tree/51472cde77e64fdb00b4e33d7e7267d8ab552d87) 

> Used to data transformations to show a different form. It's possible to format date, numbers, money, array JSON..

> Pipes Examples:
 * {{0.5 | percent}}
 * {{birthday | date: 'dd/MM/yyyy'}}
 * {{user.name | uppercase}}
 * {{user.name | lowercase}}
 * {{price | currency}} //default USD
 * {{price | currency: 'BRL': true}}
 * {{user.name | slice: 0:4}} //will return first 4 characters by string
 * {{['one', 'two'] | slice: 0:1 | json | uppercase}} //will return ['ONE']

 **Let's back to our project to use some pipes.**
 
 > We will learn to use **pipe async** and **EventEmitter**
  - pipe async will do the subscrible, take the data and will interate. So, more clean

 * Let's create a new method to our service: **restaurant.service.ts**
 ```javascript

    reviewsOfRestaurant(id: string):Observable<any>{
      return this.http.get(`${URL_API}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }
 ```
* Let's edit **reviews.component.ts**
```javascript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../restaurant/restaurant.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'fd-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {
  
  reviews: Observable<any>;

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //ATTENTION: was used parent.snapshot WHY?
    //because we are inside a children, so need to get the father route using parent.
    this.reviews = this.restaurantService
       .reviewsOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}

```

* Let's edit **reviews.component.html**
```html
<div class="col-xs-12 col-sm-6" *ngFor="let review of reviews | async">
    <div class="box box-solid">
      <div class="box-header with-border">
        <span class="review-score pull-right"><i class="fa fa-star"></i> {{review.rating}}</span>
        <div class="user-block">
          <img *ngIf="review.rating < 3" alt="User Image" class="img-circle" src="assets/img/reactions/pissed.png">
          <img *ngIf="review.rating >= 3 && review.rating < 4" alt="User Image" class="img-circle" src="assets/img/reactions/soso.png">
          <img *ngIf="review.rating >=4" alt="User Image" class="img-circle" src="assets/img/reactions/loved.png">
          <span class="username">{{review.name}}</span>
          <span class="description">{{review.date | date:'MM/dd/yyyy'}}</span>
        </div>
      </div>

      <div class="box-body">
        <p>{{review.comments}}</p>
      </div>
    </div>
</div>
```
* Let's create an interface **src/app/restaurant-detail/menu-item/menu-item.model.ts**
```javascript
export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    imagePath: string;
}
```
* Edit **menu-item.component.ts**
```javascript
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'fd-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {
  
  @Input() menuItem: MenuItem;
  //All event need to be used the decorator @Output
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.menuItem);
  }
}
```
* **Edit menu-item.component.html**
```html
   <div class="menu-item-info-box">
      <span class="menu-item-info-box-icon">
        <img [src]="menuItem.imagePath">
      </span>

      <div class="menu-item-info-box-content">
        <span class="menu-item-info-box-text">{{menuItem.name}}</span>
        <span class="menu-item-info-box-detail">{{menuItem.description}}</span>
        <span class="menu-item-info-box-price">{{menuItem.price | currency: 'BRL': true}}</span>
        <a (click)="emitAddEvent()" class=""><i class="fa fa-plus-circle"></i> Add</a>
      </div>
  </div>
```

* Let's add a new method in our **restaurant.service.ts**
```javascript
    menuOfRestaurant(id: string): Observable<MenuItem[]> {
      return this.http.get(`${URL_API}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }
```

* Edit **menu.componenet.ts**
```javascript
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../restaurant/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'fd-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  
  menu: Observable<MenuItem[]>

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantService
      .menuOfRestaurant(this.route.parent.snapshot.params['id']);
  }
  
  addMenuItem(item: MenuItem) {
    console.log(item);
  }
}

```

* Edit **menu.component.html**
```html
<div class="col-md-9 col-xs-12">
  <fd-menu-item *ngFor="let item of menu | async" 
  [menuItem]="item"
  (add)="addMenuItem($event)"></fd-menu-item> 
  <!-- $event is an object passed as parameter-->
</div>
<div class="col-md-3 col-xs-12">
    <fd-shopping-cart></fd-shopping-cart>
</div>
```
## Shopping Cart
> Commit: [b508644](https://github.com/uraquitanfilho/angular-foodDelivery/tree/b508644af4125822db5f6ffaac4115c9798663c3)

* First let's create a class model to cart. **src/app/restaurant-detail/shopping-cart/cart-item.model.ts**
```javascript
import {MenuItem} from '../menu-item/menu-item.model';

export class CartItem {
    constructor(public menuItem: MenuItem,
                public quantity: number = 1) {}
    
    value(): number {
        return this.menuItem.price * this.quantity;
    }
}
```

* Let's create a new service **src/app/restaurant-detail/shopping-cart/shopping-cart.service.ts**

```javascript
import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {
    
    items: CartItem[] = [];

    clear() {
      this.items = [];
    }
    
    addItem(item:MenuItem) {
       let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
       if(foundItem) {
         foundItem.quantity = foundItem.quantity + 1;  
       } else {
           this.items.push(new CartItem(item));
       }
    }

    removeItem(item: CartItem) {
       this.items.splice(this.items.indexOf(item), 1);
    }

    total(): number {
        return this.items
          .map(item => item.value())
          .reduce((prev, value) => prev + value, 0); // reduce will adds two parametes, prev + value and will start with 0
    }
}
```

* Edit **shopping-cart-component.ts**
```javascript
import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from './shopping-cart.service';

@Component({
  selector: 'fd-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total();
  }
}
```
> Go to **app.modules.ts** to add our new service do same as **RestaurantService**

* Time to edit **shopping-cart-componenet.html**
```html
<div class="box box-solid">
  <div class="box-header">
    <i class="fa fa-shopping-cart"></i>

    <h3 class="box-title">Cart Delivery</h3>
  </div>
  <!-- /.box-header -->
  <div class="box-body">
    <div *ngIf="!items().length">
       <p class="text-center">Empty shopping cart</p>
    </div>
    <div class="table-responsive" *ngIf="items().length">
        <table class="table">
          <tbody>
          <tr *ngFor="let item of items()">
            <th>({{item.quantity}}x) {{item.menuItem.name}}</th>
            <td class="text-right">{{item.value() | currency: 'BRL': true}}</td>
            <td class="text-right">
              <a (click)="removeItem(item)" class="btn btn-sm danger"><i class="fa fa-remove"></i></a>
            </td>
          </tr>
          <tr>
            <th>Total:</th>

            <td class="text-right">{{total() | currency: 'BRL': true}}</td>
          </tr>
        </tbody></table>
      </div>
  </div>
  <div class="box-footer" *ngIf="items().length">
    <div class="pull-right">
      <button (click)="clear()" type="button" class="btn btn-danger"><i class="fa fa-trash"></i> Clear</button>
      <a href="order.html" class="btn btn-success"><i class="fa fa-credit-card"></i> Close Order</a>
    </div>
  </div>
</div>
```

* Now We need to create the events.
 * event clear, removeItem, addItem to add the button click Clear. Edit the **shopping-cart.componenet.ts** to add the new method:
 ```javascript
  
  clear() {
    return this.shoppingCartService.clear();
  }

  removeItem(item: any) {
    this.shoppingCartService.removeItem(item);
  }

  addItem(item: any) {
    this.shoppingCartService.addItem(item);
  }
 ```
* We need do a refactor. Go to **menu.componenet.html** to refer the Event addItem
```html
<div class="col-md-9 col-xs-12">
  <fd-menu-item *ngFor="let item of menu | async" 
  [menuItem]="item"
  (add)="shoppingCart.addMenuItem($event)"></fd-menu-item> 
 
</div>
<div class="col-md-3 col-xs-12">
    <fd-shopping-cart #shoppingCart></fd-shopping-cart>
</div>
```
## Template Forms and Validation
> Commit: [616d01e](https://github.com/uraquitanfilho/angular-foodDelivery/tree/616d01e5b3cb6db23a0009e5a88c8652f0f1a12b) 

* First we need to create a new componenet to make the template Forms example.
 ** Lets create a new component
 ```
 ng g c order --spec=false
 ```
 * Go to **app.routes.ts** to add the new route

 ```javascript
 {path: 'order', component: OrderComponent}
 ```

 * Edit **shopping-cart-component.ts** 

 > change the line **39**: 

 ```html
 <a [routerLink]="['/order']" class="btn btn-success"><i class="fa fa-credit-card"></i> Close Order</a>
 ```
 > To work with forms you need disable the browser's validation using the directive **novalidate** on the tag form and call **ngForm**
 ```html
   <form #form="ngForm" novalidate>
 ```
 _ps: You need first inject the **FormsModule** than, go to **app.module.ts** to import.
 ```javascript
 ...
 import {FormsModule} from '@angular/forms';

 ...
 imports: [
   ...
   FormsModule
 ]
 ```
 > the name of need to be declared and the directive ngModel. Example:
 ```html
   <input type="text" name="address" ngModel placeHolder="Address" />
 ```
 > To **validation** you can use
  - required
  - minlength
  - maxlength
  - pattern - works with regular expression

 > than, to disable the submit button case form not valid you need add the attribute **[disabled]** 
 ```html
<button class="btn btn-success pull-right" [disabled]="!form.valid"><i class="fa fa-credit-card"></i> Finish Order </button>
 ```
## How to know if the information was wrotten on the form ?

> We can use a template variable ex:
```html
 <input type="text" name="address" #my_variable="ngModel" ngModel placeHolder="Address" />
```

* Let's create a componenet to represent the **Input Text**
 * First lets create a new folder called **src/app/shared**
```
ng g c shared/input --spec=false
``` 
* Input works inside the form. A componenet is outside. So the form no more has the control about the input.
For it, we have 2 forms to solve it. The first is about to make a **component container**. Let's refactor our **input.component.ts**
```javascript
import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel} from '@angular/forms';

@Component({
  selector: 'fd-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {
  
  @Input() label: string;
  @Input() errorMessage: string;
  @Input() inputId: string;

  input: any;
  //using contentChild, the Angular can inject references to the component.
  //To make it, we need the interface AfterContentInit
  @ContentChild(NgModel) model: NgModel;

  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit() {
    this.input = this.model;
    if(this.input === undefined) {
      throw new Error("this componenet need to be used with a ngModel Directive");
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}

```
* **input.component.html**
```html
<div class="form-group" [class.has-success]="hasSuccess()"
[class.has-error]="hasError()">
<label class="control-label sr-only" for="{{inputId}}"><i class="fa fa-check"></i> {{label}}</label>

<ng-content></ng-content>

<span class="help-block" *ngIf="hasSuccess()"><i class="fa fa-check"></i> Ok</span>
<span class="help-block" *ngIf="hasError()"><i class="fa fa-remove"></i>{{errorMessage}}</span>
</div>
```


## Component using Control Value Accessor

_To control the check events we need to extends the interface **ControlValueAccessor**_

> Let's create a new component to represent radio box.
```
ng g c shared/radio --spec=false
```
* Let's create a new class **/src/app/shared/radio/radio-option.model.ts**
```javascript
export class RadioOption {
    constructor(public label: string, public value: any) {}
}
```
* **radio.component.ts**
```javascript
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption} from './radio-option.model';
import {NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'fd-radio',
  templateUrl: './radio.component.html',

  providers: [
    {
      //this is necessary to register as a value accessor component
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[];

  value: any;

  onChange: any;

  constructor() { }

  ngOnInit() {
  }

  setValue(value:any) {
    this.value = value;
    this.onChange(this.value);
  }

  /*ControlValueAccessor Interface */
  //used to send value to component
  writeValue(obj:any): void {
     this.value = obj;
  }
  //if interval value to changes, this method will be called
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {

  }

  setDisabledState?(isDisabled: boolean): void {

  }
}

```

* **radio.component.html**
```html
<div *ngFor="let option of options">
    <label>
      <div (click)="setValue(option.value)" class="iradio_flat-red" [class.checked]="option.value===value" aria-checked="false" aria-disabled="false"
          style="position: relative;">
          <ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
      </div>
      {{option.label}}
    </label>
</div>
```

* **order.componenent.ts**
```javascript
import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';

@Component({
  selector: 'fd-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label: "Cache", value: "MON"},
    {label: "Debit Card", value: "DEB"},
    {label: "Credit Card", value: "CRE"}
  ];
  constructor() { }

  ngOnInit() {
  }
}
```

* Time to create a new component to list the items
```javascript
ng g c order/order-items --spec=false
```
* add 2 new methods to **src/app/restaurant-detail/shopping-cart/shopping-cart.service.ts**
```javascript
    increaseQty(item: CartItem) {
      item.quantity = item.quantity + 1;
    }

    deCreaseQty(item: CartItem) {
      item.quantity = item.quantity - 1;
      if(item.quantity === 0) {
        this.removeItem(item);
      }
    }
```

* Let's create a new service **src/app/order/order.service.js**
_ps: Don't forget to inject **OrderService** on the file: **app.module.ts**_

```javascript

```

* **order.items.component.ts**
```javascript
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'fd-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {
  
  @Input() items: CartItem[];
  
  @Output() increaseQty = new EventEmitter<CartItem>();
  @Output() decreaseQty = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem) {
    this.increaseQty.emit(item);
  }

  emitDecreaseQty(item: CartItem) {
    this.decreaseQty.emit(item);
  }

  emitRemove(item: CartItem) {
    this.remove.emit(item);
  }

}
```

* **order.items.component.html**
```html
<div class="col-xs-12" *ngIf="items.length <= 0">
   <p>
     Your shopping cart is empty.
     What about start <a [routerLink]="['/restaurants']">here</a> !
   </p>
</div>
<div class="col-xs-12 table-responsive" *ngIf="items.length > 0">
  <table class="table table-striped">
    <thead>
    <tr>
      <th class="text-center">Quantity</th>
      <th>Item</th>
      <th>Description</th>
      <th class="text-right">Subtotal</th>
      <th class="text-right"></th>
    </tr>
    </thead>
    <tbody>
    <tr *ngFor="let item of items">
      <td class="text-center">
        <a (click)="emitDecreaseQty(item)" class="btn btn-sm"><i class="fa fa-minus"></i></a>
        {{item.quantity}}
        <a (click)="emitIncreaseQty(item)" class="btn btn-sm"><i class="fa fa-plus"></i></a>
      </td>
      <td>{{item.menuItem.name}}</td>

      <td>{{item.menuItem.description}}</td>
      <td class="text-right">{{item.value() | currency: 'BRL': true}}</td>
      <td class="text-right">
        <a (click)="emitRemove(item)" class="btn btn-sm danger"><i class="fa fa-remove"></i></a>
      </td>
    </tr>
    </tbody>
  </table>
</div>
```

* Now lets make the delivery cost component
```
 ng g c order/delivery-cost --spec=false
```

* Sending data to back-end
 * Go to **order.component.ts** Add a new method
```javascript
   checkOrder(order: any) {
     console.log(order);
   }
```

* create a new class model called : **src/app/order/order.model.ts**
> This object will send to back-end the data form.

```javascript
class Order {
   constructor(
       public address: string,
       public number: number,
       public optionalAddress: string,
       public paymentOption: string,
       public orderItems: OrderItem[]
   ) {}
}

class OrderItem {
    constructor(public quantity: number, public menuId: string){}
}

export { Order, OrderItem}
```

* Add 2 new methods to **order.service.ts**
```javascript
    checkOrder(order): Observable<string>{
     const headers = new Headers();
     headers.append('Content-Type','application/json');
     //To work with post method, need to send the header. So to work with headers need send an object by RequestOptions
     return this.http.post(`${URL_API}/orders`, 
                           JSON.stringify(order), 
                           new RequestOptions({headers: headers})
                         ).map(response => response.json());
    }

    clear() {
        this.cartService.clear();
    }
```

* Let's create the **order-sumary** component to send a message to user after finished the order
```
 ng g c order-summary --spec=false
```

go to **app.routes.ts**
```javascript
...
import { OrderSummaryComponent } from './order-summary/order-summary.component';
...
{path: 'order-summary', component: OrderSummaryComponent} 
```

* **src/app/order/order.component.ts**
```javascript
import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import {Order, OrderItem} from './order.model';

//another form to work with routes.
import {Router} from '@angular/router';
@Component({
  selector: 'fd-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  //fixed on the code. But it can be called by a RestAPI.
  //for this example our cost delivery = 8 always.
  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    {label: "Cache", value: "MON"},
    {label: "Debit Card", value: "DEB"},
    {label: "Credit Card", value: "CRE"}

  ];
  constructor(private orderService: OrderService, private router: Router ) { }

  ngOnInit() {
  }
  itemsValue(): number {
    return this.orderService.itemsValue();
  }
  //to show the items
  cartItems (): CartItem[]{
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item:CartItem) {
    this.orderService.remove(item);
  }
 
  checkOrder(order: any) {
    order.OrderItem = this.cartItems()
      .map((item:CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order).subscribe((orderId)=> {
      this.router.navigate(['/order-summary']); //direct router call without routerLink
      console.log(`finished payment: ${orderId}`);
      this.orderService.clear();
    });  
    console.log(order);
  }
}

```

* **src/app/order/order.component.html**
```html
<section class="content-header">
  </section>

  <section class="content">
    <section class="invoice">
          <form #form="ngForm" novalidate>
            <div class="row">
              <div class="col-xs-12">
                <h2 class="page-header">
                  <i class="fa fa-shopping-cart"></i> Finish your order
                </h2>
              </div>
            </div>                

            <div class="row invoice-info">
              <div class="col-xs-12">
                <p class="lead">Delivery address:</p>
              </div>
              <div class="col-sm-6 col-xs-12">
                 <fd-input-container errorMessage="required and min 5 characters" inputId="address" label="Address">
                   <input class="form-control" name="address" id="address" placeholder="Address" ngModel required minlength="5" autocomplete="false" />
                 </fd-input-container>
              </div>
              <div class="col-sm-3 col-xs-6">
                  <fd-input-container errorMessage="required and only number" inputId="number" label="Number">
                      <input class="form-control" name="number" id="number" ngModel placeHolder="Number" pattern="^[0-9]*$" required autocomplete="false" />
                  </fd-input-container>
              </div>
              <div class="col-sm-3 col-xs-6">
                  <fd-input-container inputId="optionalAddress">
                      <input type="text" class="form-control" name="optionalAddress" ngModel id="optionalAddress" placeholder="Optional Address">
                  </fd-input-container>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->

            <!-- Table row -->
            <div class="row">
              <div class="col-xs-12">
                <p class="lead">Order Items:</p>
              </div>
              
                <fd-order-items [items]="cartItems()"
                   (increaseQty)="increaseQty($event)"
                   (decreaseQty)="decreaseQty($event)"
                   (remove)="remove($event)"></fd-order-items>
              
              <!-- /.col -->
            </div>
            <!-- /.row -->

            <div class="row">
              <!-- accepted payments column -->
              <div class="col-sm-6 col-xs-12">
                <p class="lead">Payment</p>

                  <div class="form-group">

                    <fd-radio [options]="paymentOptions" name="paymenetOption" ngModel required></fd-radio>

                  </div>

              </div>
              <!-- /.col -->
              <div class="col-sm-6 col-xs-12">
                <p class="lead">Delivery Cost and Total:</p>
                <fd-delivery-cost [delivery]="delivery"
                  [itemsValue]="itemsValue()"></fd-delivery-cost>
              </div>
              <!-- /.col -->
            </div>
          </form>
          <div class="row">
            <div class="col-xs-12">
              <button (click) ="checkOrder(form.value)" class="btn btn-success pull-right" 
                      [disabled]="!form.valid || cartItems().length===0">
                      <i class="fa fa-credit-card"></i> Finish Order
              </button>
            </div>
          </div>

      </section>
  </section>
```
## Rating
> Commit: [e35ab32](https://github.com/uraquitanfilho/angular-foodDelivery/tree/e35ab32d196513b4e7e2702072109f9085dcad2f)

> After finish an order, the user can do a rating to inform your experience with the delivery

* Let's create a new component
```
ng g c rating --spec=false
```

* **rating.componenet.ts**
```javascript

import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'fd-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {
  
  @Output() rated = new EventEmitter<number>();
  rates: number[] = [1,2,3,4,5];
  rate: number = 0;

  previousRate: number;

  constructor() { }

  ngOnInit() {
  }
  
  setRate(r: number) {
    this.rate = r;
    this.previousRate = undefined;
    this.rated.emit(this.rate);
  }

  setTemporyRate(r: number) {
    if (this.previousRate === undefined) {
      this.previousRate = this.rate;
    }
    this.rate = r;
  }
  
  clearTemporaryRate() {
    if(this.previousRate !== undefined) {
      this.rate = this.previousRate;
      this.previousRate = undefined;
    }
  }
}
```

* **rating.component.html**
```html

  <i *ngFor="let r of rates" class="fa"
     [class.fa-star]="r <= rate" 
     [class.fa-star-o]="r > rate"
     (click)="setRate(r)"
     (mouseenter)="setTemporyRate(r)"
     (mouseleave)="clearTemporaryRate()"></i>
```
* now let's edit **order-summary.component.html**
```html
<section class="content-header">
  </section>

  <section class="content">
    <div class="jumbotron">
      <h2>Order Completed</h2>
      <p>
          Your request was received by the restaurant. Prepare the table that the food is coming!</p>
      <p><b>Avalie</b> Your Experience:</p>
      <p><fd-rating (rated) = "rated = true"></fd-rating></p>
      <p [hidden]="!rated">
        Thank your to your feedback!
      </p>
    </div>
  </section>
```

## Reactive Forms
> Commit: [a6c97e6](https://github.com/uraquitanfilho/angular-foodDelivery/tree/a6c97e6dcabe7f052872d2a659c5374ca49cf093) 

> New form to angular implements forms. We will no more work with ngModel. There is a new directive.

#Let's START the REFACTOR#

* refactor **order.component.ts**
```javascript
import {FormGroup, FormBuilder} from '@angular/forms';

```
* refactor **input.component.ts**
```javascript
import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import {Order, OrderItem} from './order.model';
//to work with reactive forms
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

//another form to work with routes.
import {Router} from '@angular/router';
@Component({
  selector: 'fd-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

   emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   numberPattern = /^[0-9]*$/;
   orderForm: FormGroup;

  //fixed on the code. But it can be called by a RestAPI.
  //for this example our cost delivery = 8 always.
  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    {label: "Cache", value: "MON"},
    {label: "Debit Card", value: "DEB"},
    {label: "Credit Card", value: "CRE"}

  ];
  constructor(private orderService: OrderService, 
              private router: Router,
              private formBuilder: FormBuilder ) { }

  ngOnInit() {
    //Added to use reative forms
    this.orderForm = this.formBuilder.group({
        name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
        email: this.formBuilder.control('',[Validators.required, Validators.pattern(this.emailPattern)]),
        emailConfirmation: this.formBuilder.control('',[Validators.required, Validators.pattern(this.emailPattern)]),
        address: this.formBuilder.control('',[Validators.required, Validators.minLength(5)]),
        number: this.formBuilder.control('',[Validators.required, Validators.pattern(this.numberPattern)]),
        optionalAddress: this.formBuilder.control(''),
        paymentOption: this.formBuilder.control('',[Validators.required])
    }, {validator: OrderComponent.equalsTo});
  }
//this is used to custom validations
  static equalsTo(group: AbstractControl): {[key:string]: boolean} {
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');
    if(!email || !emailConfirmation) {
      return undefined;
    }
    if(email.value !== emailConfirmation.value) {
      return{emailsNotMatch: true} //emailsNotMatch can be any name
    }
    return undefined;
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }
  //to show the items
  cartItems (): CartItem[]{
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item:CartItem) {
    this.orderService.remove(item);
  }
 
  checkOrder(order: any) {
    order.OrderItem = this.cartItems()
      .map((item:CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order).subscribe((orderId)=> {
      this.router.navigate(['/order-summary']); //direct router call without routerLink
      console.log(`finished payment: ${orderId}`);
      this.orderService.clear();
    });  
    console.log(order);
  }
}

```
* refactor **order.component.html**

> changes **<form #form="ngForm" novalidate>** to **<form [formGroup]="orderForm" novalidate>**
> form.valid and form.value will be changed to orderForm.valid and orderForm.value
 * orderForm is a reference created on the file **order.component.ts**
```html
<section class="content-header">
  </section>

  <section class="content">
    <section class="invoice">
          <form [formGroup]="orderForm" novalidate>
            <div class="row">
              <div class="col-xs-12">
                <h2 class="page-header">
                  <i class="fa fa-shopping-cart"></i> Finish your order
                </h2>
              </div>
            </div>                

            <div class="row">
              <div class="col-xs-12 col-sm-9">
                  <p class="lead">Client Info:</p>
              </div>

              <div class="col-xs-12 col-sm-3">
                  <span class="help-block pull-right has-error-block" *ngIf="orderForm.hasError('emailsNotMatch')"><i class="fa fa-remove"></i>Different Email</span>
              </div>

              <div class="col-sm-6 col-xs-12">
                  <fd-input-container errorMessage="required and min 5 characters" inputId="name" label="Name">
                    <input class="form-control" formControlName="name" id="name" placeholder="name" autocomplete="false" />
                  </fd-input-container>
               </div>
            
              <div class="col-sm-3 col-xs-6">
                  <fd-input-container errorMessage="Invalid email" inputId="email" label="email">
                      <input class="form-control" formControlName="email" id="email" autocomplete="false" />
                  </fd-input-container>
              </div>
              <div class="col-sm-3 col-xs-6">
                  <fd-input-container errorMessage="Invalid email" inputId="emailConfirmation" label="Email Confirmation">
                      <input class="form-control" formControlName="emailConfirmation" id="emailConfirmation" placeHolder="E-Mail Confirmation" autocomplete="false" />
                  </fd-input-container>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <p class="lead">Delivery address:</p>
              </div>
              <div class="col-sm-6 col-xs-12">
                 <fd-input-container errorMessage="required and min 5 characters" inputId="address" label="Address">
                   <input class="form-control" formControlName="address" id="address" placeholder="Address" autocomplete="false" />
                 </fd-input-container>
              </div>
              <div class="col-sm-3 col-xs-6">
                  <fd-input-container errorMessage="required and only number" inputId="number" label="Number">
                      <input class="form-control" formControlName="number" id="number" placeHolder="Number" autocomplete="false" />
                  </fd-input-container>
              </div>
              <div class="col-sm-3 col-xs-6">
                  <fd-input-container inputId="optionalAddress">
                      <input type="text" class="form-control" formControlName="optionalAddress" id="optionalAddress" placeholder="Optional Address">
                  </fd-input-container>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->

            <!-- Table row -->
            <div class="row">
              <div class="col-xs-12">
                <p class="lead">Order Items:</p>
              </div>
              
                <fd-order-items [items]="cartItems()"
                   (increaseQty)="increaseQty($event)"
                   (decreaseQty)="decreaseQty($event)"
                   (remove)="remove($event)"></fd-order-items>
              
              <!-- /.col -->
            </div>
            <!-- /.row -->

            <div class="row">
              <!-- accepted payments column -->
              <div class="col-sm-6 col-xs-12">
                <p class="lead">Payment</p>

                  <div class="form-group">

                    <fd-radio [options]="paymentOptions" formControlName="paymentOption"></fd-radio>

                  </div>

              </div>
              <!-- /.col -->
              <div class="col-sm-6 col-xs-12">
                <p class="lead">Delivery Cost and Total:</p>
                <fd-delivery-cost [delivery]="delivery"
                  [itemsValue]="itemsValue()"></fd-delivery-cost>
              </div>
              <!-- /.col -->
            </div>

          </form>

          <div class="row">
            <div class="col-xs-12">
              <button (click) ="checkOrder(orderForm.value)" class="btn btn-success pull-right" 
                      [disabled]="!orderForm.valid || cartItems().length===0">
                      
                      <i class="fa fa-credit-card"></i> Finish Order
              </button>
            </div>
          </div>

      </section>
  </section>
```



* Edit **app.module.ts**
```javascript
...
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
...
imports: [
  ...
  ReactiveFormsModule
]
```
## Lazy Loading
> Commit: [a05ccf3](https://github.com/uraquitanfilho/angular-foodDelivery/commit/a05ccf32ee0cd68a83e5f3835305f724b9c99233)

> Module with Lazy Loading will be load only after section route access.

* Let's do a Lazy Loading with about component.
 * Create a new module file **src/app/about/about.module.ts**
  * To create a module, we need import **NgModule**
  * Remove all references from **AboutComponent** on the **app.module.ts**
  * Need remove the reference about **AboutComponent** on the **app.routes.ts** and need 
  config a different form to **lazy loading** works.

  * Let's see **about.module.ts**
 ```javascript
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about.component';

const ROUTES: Routes = [
  {path: '', component: AboutComponent}
];

@NgModule({
   declarations: [AboutComponent],
   imports:[RouterModule.forChild(ROUTES)]
})

export class AboutModule {}
 ``` 
  * Refactor **app.routes.ts** 
  ```javascript
  ...
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  ...

  ```
## Shared Module
> Commit: [a981b40](https://github.com/uraquitanfilho/angular-foodDelivery/tree/a981b40866737d8c6051a60b2ae431d3aabe66ba)

> Module to shared with other modules.

* Go to **app.module.ts** and **REMOVE** references by:
 * InputComponent
 * RadioComponent
 * RatingComponent
 * FormsModule -> exported on the shared module
 * ReactiveFormsModule -> exported on the shared module
* Now we will Import our **shared.module.ts** in **app.module.ts** 

* Let's create a new module **src/app/shared/shared.module.ts**
```javascript
import {NgModule} from '@angular/core';
//basic directive
import {CommonModule} from '@angular/common';
//used by components input, radio and rating
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {InputComponent} from './input/input.component';
import {RadioComponent} from './radio/radio.component';
import {RatingComponent} from './rating/rating.component';

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent,
              CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
```
## Lazy Loading-Order
> Commit: [85e1d62](https://github.com/uraquitanfilho/angular-foodDelivery/tree/85e1d626c768533fa3e41851fbaa68f7ddb26fc4) 

> Let's do another feature module to our order. Will be a Lazy Loading as about. But now, there are more components.

* Let's create a new module **src/app/order/order.module.ts**

```javascript
import {NgModule} from '@angular/core';
//cause we need FormsModule, ReactiveForms...
import {SharedModule} from '../shared/shared.module';

//Lazy Loading need import Routes too
import {RouterModule, Routes} from '@angular/router';

import {OrderComponent} from './order.component';
import {OrderItemsComponent} from './order-items/order-items.component';
import {DeliveryCostComponent} from './delivery-cost/delivery-cost.component';

const ROUTES: Routes = [
    {path: '', component: OrderComponent}
]
@NgModule({
  declarations:[OrderComponent, OrderItemsComponent, DeliveryCostComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

export class OrderModule {}
```

* Go to **app.module.ts** to remove more references:
 * OrderComponent
 * OrderItemsComponent
 * DeliveryCostComponent

* Go to **app.routes.ts** to edit the **order** path to be called as children.
 * Remove the reference **OrderComponent** from imports
```javascript
 {path: 'order', loadChildren: './order/order.module#OrderModule'},
``` 

## Core Module to isolate Providers
> Commit: [1698407](https://github.com/uraquitanfilho/angular-foodDelivery/tree/1698407abf3e05ff0f96c8d3204a4a21e550924e)

> Sounds good to have a core module to add all providers and declare only the core on the **app.module.ts**

* Create a new folder **src/app/core** and create a new module called: **core.module.ts**
```javascript
import {NgModule} from '@angular/core';

import {OrderService} from '../order/order.service';
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service';
import {RestaurantService} from '../restaurant/restaurant.service'

@NgModule({
    providers:[OrderService, ShoppingCartService, RestaurantService]
})

export class CoreModule {}
```
* Edit **app.module.ts**
 * Remove References to:
  * OrderService
  * ShoppingCartService
  * RestaurantService
 * Import CoreModule
 ```javascript
  import { CoreModule } from './core/core.module';
  ...
  imports: [
    ...
    CoreModule
  ]
 ``` 

 ## Module With Providers
> Commit: [f8fdf82](https://github.com/uraquitanfilho/angular-foodDelivery/tree/f8fdf82f49e439d2c211107ccbece1a93f1136e0)

> core module obsolete when we works with Module declaring providers. So
* Let's remove the Folder and all references to **app/core** 
 * Remove from **app.module.ts**
 * Go to **app.module.ts**
  * Edit SharedModule to SharedModule.forRoot()

 * Edit **shared/shared.module.ts** to:
 ```javascript
 import {NgModule, ModuleWithProviders} from '@angular/core';
//basic directive
import {CommonModule} from '@angular/common';
//used by components input, radio and rating
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {InputComponent} from './input/input.component';
import {RadioComponent} from './radio/radio.component';
import {RatingComponent} from './rating/rating.component';

import { RestaurantService } from '../restaurant/restaurant.service';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { OrderService } from '../order/order.service';

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent,
              CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: SharedModule,
          providers: [OrderService, ShoppingCartService, RestaurantService]
      }
  }
}
 ```
## Preloading
> Commit: [b293af5](https://github.com/uraquitanfilho/angular-foodDelivery/tree/b293af5f505bfb7344cfe6c121db41da1e8361d9)

> good to be used to pre load lazy loading component in background.

* Go to **app.module.ts**
let's import **PreLoadAllModules**
```javascript
  ...
  import { RouterModule, PreloadAllModules } from '@angular/router';

  imports:[
    ...
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
  ]
```

## Animation
> Commit: [2c8b761](https://github.com/uraquitanfilho/angular-foodDelivery/tree/2c8b76122b7bcbea42b019fef5e65187d5375552)

> Let's install the dependences

```
npm install --save @angular/animation
npm install --save web-animations-js
```
* Edit **src/app/polyfills.ts**
```javascript
import 'web-animations-js/web-animations.min.js'
```
* Go to **app.module.ts** to import the **BrowserAnimationsModule**
```javascript
...
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
...
imports:[
  ...
   BrowserAnimationsModule
]
```
* Let's create a new component **src/app/shared/messages/snackbar.component.ts**
```
ng g c shared/messages/snackbar --spec=false
```
* Edit **shared.module.ts** to export **SnackbarComponent**
```javascript
...
exports:[SnackbarComponent]
```
* **snackbar.component.css**
```css
.snackbar {
    min-width: 250px;
    margin-left: -125px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
}
```
* **snackbar.component.html**
```html
<div class="snackbar" [@snack-visibility]="snackVisibility">
  {{message}}
</div>
```
* **snackbar.component.ts**
```javascript
import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'fd-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility',[
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'        
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hiden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {
  
  message: string = "testing snackbar";
  snackVisibility: string = "hidden";

  constructor() { }

  ngOnInit() {
  }
}
```

* Edit **app.component.ts**
 * changes: **<!-- snakbar deve ser aqui -->** to **<fd-snackbar></fd-snackbar>**

## Observable with Snackbar

> We need create a notification to snackbar knows the correct time to show the messages.

* Let's create a new service **src/app/shared/messages/notification.service.ts**
```javascript
import { EventEmitter } from "@angular/core";

export class NotificationService {
    notifier = new EventEmitter<string>();

    notify(message: string) {
        this.notifier.emit(message);
    }
}
```
* Now let's edit **shared.module.ts** to add our new service.
```javascript
 ...
 import {NotificationService} from './messages/notification.service';
 ...
 providers:[NotificationService]
```
* Let's edit **shopping-cart.service.ts**
 * we will add the NotificationService
 * We will learn to use the operators **Do** and **SwithMap**
```javascript

import {Injectable} from '@angular/core'

import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";
import { NotificationService } from '../../shared/messages/notification.service';

@Injectable()
export class ShoppingCartService {
    
    items: CartItem[] = [];

    constructor(private notificationService: NotificationService) {

    }

    clear() {
      this.items = [];
    }
    
    addItem(item:MenuItem) {
       let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
       if(foundItem) {
         this.increaseQty(foundItem);  
       } else {
           this.items.push(new CartItem(item));
       }
       this.notificationService.notify(`${item.name} was added to your cart delivery`);
    }

    removeItem(item: CartItem) {
       this.items.splice(this.items.indexOf(item), 1);
       this.notificationService.notify(`${item.menuItem.name} was removed to your cart delivery`);
    }

    total(): number {
        return this.items
          .map(item => item.value())
          .reduce((prev, value) => prev + value, 0); // reduce will adds two parametes, prev + value and will start with 0
    }

    increaseQty(item: CartItem) {
      item.quantity = item.quantity + 1;
    }

    deCreaseQty(item: CartItem) {
      item.quantity = item.quantity - 1;
      if(item.quantity === 0) {
        this.removeItem(item);
      }
    }
}
```
* Edit **snackbar.component.ts**
```javascript
import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { NotificationService } from '../notification.service';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'fd-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility',[
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'        
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hiden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {
  
  message: string = "testing snackbar";
  snackVisibility: string = "hidden";

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notifier.subscribe(message => {
      this.message = message;
      this.snackVisibility = 'visible';
      Observable.timer(3000).subscribe(timer => this.snackVisibility="hidden");
    });
  }

}
```

## Using Do and SwitchMap

> We have a problem now. The Observable.Timer don't works fine case you try to add many items
at same time. Fast Touched... So we will do next steps to solve it.

* Let's edit again our **snackbar.component.ts**
```javascript
...
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchmap';
//reafactor the method ngOnInit()
  ngOnInit() {
    //do permit to execute a configuration
    this.notificationService.notifier
      .do(message => {
        this.message = message;
        this.snackVisibility = 'visible';
      
      }).switchMap(message =>  Observable.timer(3000))
        .subscribe(timer => this.snackVisibility='hidden');
  }
```
## Transition styles and void

> We will do a screen transition.
* Let's Edit **store.component.ts**
```javascript
import { Component, OnInit, Input } from '@angular/core';

import {Store} from './store.model';
//to make screen animation transition
import {trigger, state, style, transition, animation, animate} from '@angular/animations';

@Component({
  selector: 'fd-store',
  templateUrl: './store.component.html',
  animations: [
    trigger('restaurantAppeared', [
       state('ready', style({opacity:1})),
       transition('void => ready',[
         style({opacity:0, transform: 'translate(-30px, -10px)'}),
         animate('300ms 0s ease-in-out')
       ])
    ])
  ]
})
export class StoreComponent implements OnInit {
  restaurantState = 'ready'; //added to make animation
  @Input() store: Store;
  constructor() { }

  ngOnInit() {
  }

}

 ...
 import {trigger, state, style, transition, animation} from '@angular/animations';
```
* Edit **store.component.html**
```html
...<!-- edit first div -->
  <div class="place-info-box" [@restaurantAppeared]="restaurantState">
...    
```

* Let's do same to **menu-item.component.ts**
```javascript
...
import {trigger, state, style, transition, animation, animate} from '@angular/animations';
...
  animations: [
    trigger('menuItemAppeared', [
       state('ready', style({opacity:1})),
       transition('void => ready',[
         style({opacity:0, transform: 'translateY(-20px)'}),
         animate('300ms 0s ease-in-out')
       ])
    ])
  ]
})
//add a new property:
menuItemState = 'ready'
```

* Edit too **menu-item.component.html**
```html
<!--edit first div-->
   <div class="menu-item-info-box" [@menuItemAppeared]="menuItemState">
```
## Keyframes animation

> more complex animations
* Let's do this example on the delivery cart items
 * Let's edit **shopping-cart.component.ts**
```javascript
 ...
 import {trigger, state, style, transition, animation, animate, keyframes} from '@angular/animations';

 ...
   animations: [
    trigger('row', [
       state('ready', style({opacity:1})),
       transition('void => ready', animate('300ms 0s ease-in', keyframes([
        style({opacity:0, transform: 'translateX(-30px)', offset:0}),
        style({opacity:0.8, transform: 'translateX(10px)', offset:0.8}),
        style({opacity:1, transform: 'translateX(-0px)', offset:1}),
       ]))),
       transition('ready => void', animate('300ms 0s ease-out', keyframes([
        style({opacity:1, transform: 'translateX(0px)', offset:0}),
        style({opacity:0.8, transform: 'translateX(-10px)', offset:0.2}),
        style({opacity:0, transform: 'translateX(30px)', offset:1}),
       ])))
    ])
  ]
  ...
  //add the property
  rowState = 'ready';
```
 * Edit **shopping-cart-component.html**
 ```html
   ...
   <tr *ngFor="let item of items()" [@row]="rowState">
 ``` 

## Not Found
> Commit: [f5d4d45](https://github.com/uraquitanfilho/angular-foodDelivery/tree/f5d4d453963a761a7a1416024d5f083f06be4d09)

> Lets work to make a component to prevent page not found to be redirect 

* Create a new component
```
ng g c not-found --spec=false
``` 
* **src/app/not-found/not-found.component.html**
```html
<section class="content-header">
</section>

<!-- Main content -->
<section class="content">

  <div class="jumbotron">
    <img src="assets/img/404.png" /><h2>Page Not Found</h2>
    <p>
      Are you hungry? go to our <a [routerLink]="['/restaurants']">Restaurants</a>.
    </p>
  </div>
</section>
```
* Now we need edit our **app.routes.ts**
```javascript
import { NotFoundComponent } from './not-found/not-found.component';
...
{path: '**', component: NotFoundComponent} 
```
> To represent our not found page we need to use **

## Search Restaurant
> Commit: [8c4d727](https://github.com/uraquitanfilho/angular-foodDelivery/commit/8c4d7270c588f5911e32ca63ba6e0429b9df12d7) 

* Edit **restaurant.component.html**
```html
<section class="content-header">
  <h1>
    All Restaurants
    <a (click)="toggleSearch()" class="search-link pull-right">
      <span *ngIf="iptSearch.value"><small>{{iptSearch.value}}</small></span><i class="fa fa-search"></i></a>
  </h1>
  <div class="row">
    <div class="col-xs-12 search-bar" [@toggleSearch]="searchBarState">
       <form [formGroup]="searchForm">
           <div class="form-group">
              <input type="text" #iptSearch formControlName="searchControl" class="form-control" placeholder="What are you looking for?" />
           </div>
       </form>
    </div>
  </div>
</section>


<section class="content">

  <div class="row">
      <div *ngFor="let restaurant of restaurants" class="col-sm-6 col-xs-12">
         <fd-store [store]="restaurant"></fd-store>
      </div>
      <div *ngIf="restaurants?.length === 0" class="col-xs-12">
          <p class="lead text-center">
            Restaurant not found to your search.
          </p>
        </div>
  </div>

</section>

```

* Edit **restaurant.component.ts**
```javascript
import { Component, OnInit } from '@angular/core';
import { Store } from './store/store.model';
import {RestaurantService} from './restaurant.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {trigger, state, style, transition, animation, animate} from '@angular/animations';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/from'
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'fd-restaurant',
  templateUrl: './restaurant.component.html',
  animations: [
    trigger('toggleSearch', [
       state("hidden", style({
         opacity: 0,
         "max-height": "0px"
       })),
       state("visible", style({
         opacity: 1,
         "max-height": "70px",
         "margin-top": "20px"
       })),
       transition('* => *', animate('259ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantComponent implements OnInit {
  
  searchBarState = 'hidden';
  restaurants: Store[] = [];
  
  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(private restaurantService: RestaurantService,
              private fb: FormBuilder) { }
//inicialization of the component
ngOnInit() {

  this.searchControl = this.fb.control('')
  this.searchForm = this.fb.group({
    searchControl: this.searchControl
  })

  this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(searchTerm =>
        this.restaurantService
          .restaurants(searchTerm)
          .catch(error=>Observable.from([])))
      .subscribe(restaurants => this.restaurants = restaurants)

  this.restaurantService.restaurants()
    .subscribe(restaurants => this.restaurants = restaurants)
}

toggleSearch(){
  this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
}
}

```

* **Edit restaurant.service.ts**
```javascript
...
 restaurants(search?:string): Observable<Store[]> {
      //.map convert the result in a list of JSON 
      //Response will return many informations but we need only the JSON.
      return this.http.get(`${URL_API}/restaurants`, {params: {q: search}})
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }
```

* Edit **src/app/styles.css**
```css
...
  /* restaurant search */
  .search-link {
    cursor: pointer;
    color: #555;
  }
  .search-link: hover {
    color: #dd4b39;
  }
```

## HttpClient
> Commit: []()

> Lets do a refactor to work with **HttpClient**

* **app.module.ts**
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';
//import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { StoreComponent } from './restaurant/store/store.component';
//import { RestaurantService } from './restaurant/restaurant.service';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
//import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';
//import { OrderService } from './order/order.service';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

import { SharedModule } from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantComponent,
    StoreComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    HttpClientModule,
    SharedModule.forRoot(),
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
* **restaurant.service.ts**
```javascript
/*We will use another service "Http service" inside a service, so.. 
  VERY IMPORTANT: TO use service inside service you need to use the decorator @Injectable()
*/
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Store} from './store/store.model';

import { URL_API } from '../app.api'; //Was imported the CONST URL_API
//WE will to use OBSERVABLE. REMEMBER? To work with REST API need to use RXJS
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//to work with errors
import 'rxjs/add/operator/catch';
//our error class
import {ErrorHandler} from '../app.error-handler';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantService {
     
    constructor(private http: HttpClient) {

    }
    restaurants(search?:string): Observable<Store[]> {
      let params: HttpParams = undefined;
      if(search) {
        params = new HttpParams().set('q', search);
      }
      //.map convert the result in a list of JSON 
      //Response will return many informations but we need only the JSON.
      return this.http.get<Store[]>(`${URL_API}/restaurants`, {params: params})
        //.map(response => response.json())
        //.catch(ErrorHandler.handleError);
    }

    restaurantById(id: string): Observable<Store> {
      return this.http.get<Store>(`${URL_API}/restaurants/${id}`)
       // .map(response => response.json())
        //.catch(ErrorHandler.handleError);
    }

    reviewsOfRestaurant(id: string):Observable<any>{
      return this.http.get(`${URL_API}/restaurants/${id}/reviews`)
       // .map(response => response.json())
       // .catch(ErrorHandler.handleError);
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {
      return this.http.get<MenuItem[]>(`${URL_API}/restaurants/${id}/menu`)
      //  .map(response => response.json())
       // .catch(ErrorHandler.handleError);
    }
}
```
* **order.services.ts**
```javascript
import {Injectable} from '@angular/core';
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Order, OrderItem} from './order.model';
import {URL_API} from '../app.api';

@Injectable()
export class OrderService {
   
    constructor(private cartService: ShoppingCartService, private http: HttpClient) {}

    cartItems(): CartItem[] {
        return this.cartService.items;
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item);
    }
    
    decreaseQty(item: CartItem) {
        this.cartService.deCreaseQty(item);
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item);
    }
    itemsValue(): number {
        return this.cartService.total();
    }

    checkOrder(order: Order): Observable<string>{
    // const headers = new Headers();
    // headers.append('Content-Type','application/json');
     //To work with post method, need to send the header. So to work with headers need send an object by RequestOptions
     return this.http.post<Order>(`${URL_API}/orders`, order)

                           .map(order => order.id);
     }

    clear() {
        this.cartService.clear();
    }
}
```
* **order.model**
```javascript
class Order {
   constructor(
       public address: string,
       public number: number,
       public optionalAddress: string,
       public paymentOption: string,
       public orderItems: OrderItem[],
       public id: string
   ) {}
}

class OrderItem {
    constructor(public quantity: number, public menuId: string){}
}

export { Order, OrderItem}
```

* **app.error.handler.ts**
```javascript
import {HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
export class ErrorHandler {
    static handleError(error: HttpErrorResponse | any) {
        let errorMessage: string;
        
        if (error instanceof HttpErrorResponse) {
            const body = error.error;
            errorMessage = `${error.url}: ${error.status} - ${error.statusText || ''} ${body}`
        }else{
          errorMessage = error.message ? error.message : error.toString()
        }
        //sure, we are only show on the console. But you can to use other forms to alert the message to user.
        //Was just to you understand how to work.
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }
}
```