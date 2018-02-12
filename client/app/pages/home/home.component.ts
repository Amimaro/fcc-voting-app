import { Component, OnInit } from '@angular/core';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any = {};

  constructor(public appService: AppService) {
    this.appService.getPolls();
    this.appService.getSession().subscribe(
      res => {
        console.log(res);
        this.user = res;
      },
      err => {
        console.log("Error occured");
        console.log(err);
      });
  }

  ngOnInit() { }

  vote(id) {
    this.appService.routeTo(['/poll/' + id]);
  }

  remove(id, rowClass) {
    this.appService.removePoll(id)
      .subscribe(res => {
        console.log('Poll Deleted')
        console.log(res)
        alert('Poll Deleted!')
        let rows = document.getElementsByClassName('row' + rowClass)
        for (let i = 0; i < rows.length; i++) {
          rows.item(i).remove()
        }
      },
      err => {
        console.log(err)
      });
  }

}
