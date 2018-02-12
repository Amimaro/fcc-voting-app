import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  option: any;

  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.appService.getPoll(params['id']);
    });
  }

  vote(){
    if(this.option == undefined || this.option == 'Select an option'){
      alert('Invalid Option!');
    } else {
      this.appService.setVote(this.option);
    }
  }

  select(option) {
    this.option = option;
    alert(this.option);
  }

  share() {
    let appUrl = 'http://localhost:8080'
    let url = 'https://twitter.com/intent/tweet?url=' + appUrl + '&text=amimaro%20%7C%20FreeCodeCamp%20-%20fcc-voting-app&original_referer=' + appUrl;
    window.open(url, 'mywin',
      'left=20,top=20,width=500,height=250,toolbar=0,resizable=0');
  }

}
