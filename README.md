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
> Commit: []()

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
> Commit: []()

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