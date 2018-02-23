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
> Commit: []() 

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

