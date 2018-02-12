import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../../services/app.service';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  chart: any;
  option: any;

  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.appService.poll = {};
      this.appService.getPoll(params['id']);
    });

    setTimeout(() => { this.setupChart() }, 250)
  }

  setupChart() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.appService.poll.options,
        datasets: [{
          data: this.appService.poll.count,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        legend: {
          display: false
        },
      }
    });
  }

  addData() {
    let count = this.appService.poll.count;
    count[this.option]++
    this.chart.data.datasets[0].data = count;
    this.chart.update();
  }

  vote() {
    if (this.option == undefined || this.option == 'Select an option') {
      alert('Invalid Option!');
    } else {
      this.appService.setVote(this.option);
      // this.addData();
    }
  }

  select(option) {
    this.option = option;
  }

  share() {
    let appUrl = 'https://fcc-buildvote-app.herokuapp.com/'
    let url = 'https://twitter.com/intent/tweet?url=' + appUrl + '&text=amimaro%20%7C%20FreeCodeCamp%20-%20fcc-voting-app&original_referer=' + appUrl;
    window.open(url, 'mywin',
      'left=20,top=20,width=500,height=250,toolbar=0,resizable=0');
  }

}
