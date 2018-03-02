import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';
import {User} from './user.model';
import { NotificationService } from '../../shared/messages/notification.service';


@Component({
  selector: 'fd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  navigateTo: string;
  constructor(private fb: FormBuilder, 
              private loginService: LoginService, 
              private notificationService: NotificationService,
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
        email: this.fb.control('',[Validators.required, Validators.email]),
        password: this.fb.control('',[Validators.required])
      });
      this.navigateTo = this.activatedRouter.snapshot.params['to'] || btoa('/');
  }
  login() {
    this.loginService.login(this.loginForm.value.email, 
                            this.loginForm.value.password)
                     .subscribe(user => this.notificationService.notify(`Welcome, ${user.name}`), 
                     //HttpErrorResponse
                    response => this.notificationService.notify(response.error.message),
                    () => {
                       this.router.navigate([atob(this.navigateTo)]);
                    })
                    
                     
  }

}
