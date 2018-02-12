import { Component, OnInit } from '@angular/core';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {

  option: string = "";
  form: any = {};

  constructor(public appService: AppService) {
    this.form.name = "";
    this.form.options = [];
  }

  ngOnInit() {
    this.appService.getSession().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
        console.log(err);
        this.appService.routeTo(['/'])
      });
  }

  addOption() {
    if(this.option != ""){
      this.form.options.push(this.option);
      this.option = "";
    } else {
      alert('Invalid option!')
    }

  }

  removeOption(i) {
    this.form.options.splice(i, 1);
  }

  createPoll() {
    if(this.form.name == ""){
      alert('Invalid name!')
    } else if(this.form.options.length == 0){
      alert('Invalid options! Add more options')
    } else {
      this.appService.createPoll(this.form);
    }
  }

}
