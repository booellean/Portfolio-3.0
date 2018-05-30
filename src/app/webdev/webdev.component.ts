import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-webdev',
  templateUrl: './webdev.component.html',
  styleUrls: ['./webdev.component.scss']
})
export class WebdevComponent implements OnInit {

  imagePath = 'assets/images/webdev/';

  wordpress = [{
    name: 'trefoil-cultural',
    alt: 'Website Link for Trefoil Cultural and Environmental',
    fileType: '.jpg',
    link: 'https://trefoilcultural.com/',
    title: 'Trefoil Cultural and Environmental',
    description: `This is a WordPress theme derived from the twentysixteen theme, with custom code and css. This website was commissioned to combine two of the client's former websites. This involved exporting the WordPress SQL database, creating custom categories from the old sites to control how data was dynamically generated, and transferring ownership of domain.`
   },{
     name: 'mr-ecology',
     alt: 'Website Link for Matt Rothaus Ecology',
     fileType: '.jpg',
     link: 'http://www.mr-ecology.com',
     title: 'Matt Rothaus Blog',
     description: `This is a custom WordPress website designed without a theme template. The Form is all custom PHP code. The structure of the the DOM content proved to be a difficult case for Edge and IE browsers due to a high reliance on fixed positioning. I was able to correct this by also fixing the position of all container tags and having overflow for child elements. With clever styling, I was able to style the overflow scrollbar to look natural with the browser's window scroll.`
    },{
      name: 'vulpe-venture',
      alt: `Website Link for Victoria Vulpe's Blog`,
      fileType: '.jpg',
      link: 'http://thevulpeventure.com',
      title: 'Victoria Vulpe Blog',
      description: `This is a custom WordPress theme derived from the twentyseventeen theme with custom css and code. One part I am most proud of with this code was by using WordPress' custom preview images to generate wrapper backgrounds based on individual blog posts.`
    }];

    staticPages = [{
      name: 'poly-entertainment',
      alt: 'Website Link for Poly entertainment',
      fileType: '.jpg',
      link: 'http://www.polyentertainment.com',
      title: 'Poly entertainment',
      description: 'This is a static website for Poly entertainment. This website incorporates JQuery, canvas animations, hamburger menus, and custom svg graphics.'
    },{
      name: 'map-mothers-card',
      alt: `Website link for Mother's Day Card with Map`,
      fileType: '.jpg',
      link: 'https://booellean.github.io/map/',
      title: `Map Mother's Day Card`,
      description: `This is a static website for a digital mother's day card. This card utilizes google's map API to "bring" my mother to my favorite locations in Seattle. When the map coordinates are loaded, an associated video plays with that location so my mother can see where that location is.`
     },{
      name: 'dnd-form',
      alt: `Website link for D'n'D character sheet form`,
      fileType: '.jpg',
      link: 'https://booellean.github.io/database-handlebars/',
      title: `Character Form with Handlebars and AJAX`,
      description: `This is a static website that utilizes a heroku server to save user inputted data. This form has a JQuery AJAX call to post and get data, and then generates that data into a grid table using Handlebars.`
     },{
      name: '8-ball',
      alt: `Website link for a sarcastic Magic 8-ball`,
      fileType: '.jpg',
      link: 'https://booellean.github.io/8-ball/',
      title: `Magic 8-ball with Integrated UX`,
      description: `This is a static website that utilizes a user's microphone and gyroscope to create a unique user experiece where they can ask the ball a question and then "shake" for an answer. Some answers are pre-determined based on the question asked, despite if it's asked in an input field or microphone.`
     }];

  constructor() { }

  ngOnInit() {
  }

}
