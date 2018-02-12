import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  user: any;
  poll: any = {};
  polls: any = [];
  message: string = "";
  apiUrl: string = 'http://localhost:8080/api/';
  isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.getIsLoggedIn();
  }

  setVote(option){
    this.http.post(this.apiUrl + 'poll/vote', {
      _id: this.poll._id,
      option: option
    })
      .subscribe(res => {
        console.log(res)
        alert('Thanks for your vote!')
      },
      err => {
        alert('Sorry, already voted once!')
        console.log(err)
      });
  }

  createPoll(form) {
    this.http.post(this.apiUrl + 'poll', form)
      .subscribe(res => {
        console.log(res)
        this.getPolls()
      },
      err => {
        console.log(err)
      });
  }

  getPolls() {
    this.http.get(this.apiUrl + 'poll')
      .subscribe(res => {
        console.log(res)
        this.polls = res;
      },
      err => {
        console.log(err)
      });
  }

  getPoll(id) {
    this.http.get(this.apiUrl + 'poll/' + id)
      .subscribe(res => {
        this.poll = res;
      },
      err => {
        console.log(err)
      });
  }

  routeTo(route) {
    this.router.navigate(route);
  }

  getIsLoggedIn() {
    this.getSession()
      .subscribe(
      res => {
        this.isLoggedIn = true;
        console.log(this.isLoggedIn)
      },
      err => {
        this.isLoggedIn = false;
        console.log(this.isLoggedIn)
      });
  }

  getUser() { return this.user; }

  getSession() {
    return this.http.get(this.apiUrl + 'user/auth/session');
  }

  login() {
    window.location.href = '/api/user/auth/twitter/login';
  }

}
