import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('gen-figure',[
      transition('* => *',[
        query(':enter', style({opacity: 0}), {optional: true}),

        query(':enter', stagger('150ms', [
          animate('.25s ease-in', keyframes([
            style({opacity: 0, transform: 'translateX(100%)', offset: 0}),
            style({opacity: 1, transform: 'translateX(0%)', offset: 1}),
          ]))
        ]), {optional: true}), //end :enter query

        query(':leave', stagger('150ms', [
          animate('.25s ease-out', keyframes([
            style({opacity: 1, transform: 'translateX(0%)', offset: 0}),
            style({opacity: 0, transform: 'translateX(100%)', offset: 1}),
          ]))
        ]), {optional: true}) //end :leave query
      ])  //end transition
    ])  //end trigger
  ]  //end animation
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
