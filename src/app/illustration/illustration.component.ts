import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.scss']
})
export class IllustrationComponent implements OnInit {

  imagePath = 'assets/images/ilustration/';

  doodles =[{
    name: 'doodle-old-lady',
    alt: `A colorful doodle of an elderly woman's face, her hair spiraling into the background`,
    fileType: '.jpg',
    link: 'none',
    title: 'Doodle of an Elderly Woman',
    description: `A study of an elderly woman's face, this was in response to the fear of aging and death after a series of severe panic attacks. Part of the purpose of this study was to find a peace in absence, the void, or whatever it is that follows us after we die. The somewhat relaxed strain on the figure's face is reminiscent of the face my grandmother held after her passing. The colorful strokes that meld into her hair spiral and wave into unknown territory. All of this while the colors contrast one another in warmth and coolness`,
    date: 20161107
  },{
    name: 'doodle-sans',
    alt: `A piece of fanart of the character "Sans" from the video game Undertale`,
    fileType: '.jpg',
    link: 'none',
    title: 'Doodle of Sans - FanArt',
    description: `One of my rare pieces of fanart, this is a doodle of the character "Sans" from the video game Undertale. Sans is a goofy, cartooney skeleton who cracks jokes. Because he has a permanent smile on his face, I wanted to create a realistic skill that would have that permanent smiling structure. The golden colors contrast with his cool blue sweatshirt.`,
    date: 20160707
  },{
    name: 'doodle-fairy',
    alt: `A doodle of a Wormwood Fairy, with Wormwood leaves for wings`,
    fileType: '.jpg',
    link: 'https://www.instagram.com/p/BXjPNyJl-1N/?hl=en&taken-by=boobitters',
    title: 'WormWood Fairy',
    description: `A doodle based on a friend's idea for a character. This fairy is fond of Wormwood drinks such as absinthe and even has Wormwood leaves for wings. This pencil sketch incorporates some of the culture of said friend, her sharp smirk and punkish hairstyle.`,
    date: 20170807
  },{
    name: 'doodle-heart',
    alt: `A doodle of a decrepit figure with a heart beating out of its chest, uncontained`,
    fileType: '.jpg',
    link: 'none',
    title: 'Doodle of Heart',
    description: `A doodle based on intense emotion, this sketch was recently after a break-up which had recently followed the death of a friend. The zombie-ish style of the figure is representative of the wear and tear emotional distress can cause on a body, despite it not always being apparent. Quite literally, the heart can not be contained despite the strain of the figure.`,
    date: 20170507
  }];

  inks = [{
    name: 'bw-dream-study',
    alt: `Study of brush mechanics - shadows and impressions`,
    fileType: '.jpg',
    link: 'https://www.instagram.com/p/BU6EOJjFCqS/?hl=en&taken-by=boobitters',
    title: 'Dream Study',
    description: `This was a study of brush mechanics, primarily a contrast of brush texture, dry brush versus wet brush. One of my favorite pieces of subject matter is the duality of expression versus internal emotion. Being a person who struggles with reading people's faces, one thing that never seems to elude me is the forced, eerie smiles of people suffering from depression.`,
    date: 20170707
  },{
    name: 'bw-crow-study',
    alt: `Crow Study Two in brush and ink`,
    fileType: '.jpg',
    link: 'https://www.instagram.com/p/BTNzxaUlYMk/?hl=en&taken-by=boobitters',
    title: 'Crow Study Two',
    description: `A casual study of a crow, taken from a photograph. This study is less surreal than my other sketches and was inked to showcase the structure and texture of a real crow. Crows are one of my favorite subjects to sketch from because unlike other animals they tend to study you back.`,
    date: 20170126
  },{
    name: 'bw-crow-invert',
    alt: `Crow Study One in brush and ink`,
    fileType: '.jpg',
    link: 'https://www.instagram.com/p/BWQLdISF_DN/?hl=en&taken-by=boobitters',
    title: 'Crow Study One',
    description: `A casual study of a crow, loosely based on memory. This study is very surreal and was more of a study on how the ink moved with the paper. After scanning this piece, I inverted the colors using a filter, which created an interesting effect with the brush texture. Crows are one of my favorite subjects to sketch from because unlike other animals they tend to study you back.`,
    date: 20170707
  },{
    name: 'bw-sprite',
    alt: `Study of brush mechanics versus pen mechanics - baby with hair`,
    fileType: '.jpg',
    link: 'https://www.instagram.com/p/BWQLdISF_DN/?hl=en&taken-by=boobitters',
    title: 'Baby with Silky Hair',
    description: `This was a study of brush mechanics versus pen mechanics, mixing the thin stiff lines of common pens with the wet marks of an ink brush. This study started with simple shapes with no real form. As the shapes twirled inward, the form of an infant became the most apparent shape and I inked it accordingly.`,
    date: 20170707
  }];

  colorPencil = [{
    name: 'album-color-1',
    alt: `Album Cover "Wasting Time" by Steven Pope. Yellow version`,
    fileType: '.jpg',
    link: 'https://www.linkedin.com/in/stevenjpope/',
    title: 'Wasting Time Album Cover - Version One',
    description: `A part of the "Wasting Time" album, this cover is made to wrap around the cd case so the arm spills the sands of time upwards and through his hands. The sands can be read as both a metaphor for time or a literal representation of the struggles of cocaine and similar substances. This version of the cover is yellow with minimal highlights, the paper made to emulate the rough florescent lights of a hospital room.`,
    date: 20170120
 },{
  name: 'album-color-2',
  alt: `Album Cover "Wasting Time" by Steven Pope. Brown version`,
  fileType: '.jpg',
  link: 'https://www.linkedin.com/in/stevenjpope/',
  title: 'Wasting Time Album Cover - Version Two',
  description: `A part of the "Wasting Time" album, this cover is made to wrap around the cd case so the arm spills the sands of time upwards and through his hands. The sands can be read as both a metaphor for time or a literal representation of the struggles of cocaine and similar substances. This version of the cover is brown to emulate a dirtier environment than the prior version. This paper also allows for a lot more color contrast and increased depth.`,
  date: 20170120
},{
  name: 'album-color-3',
  alt: `Album Cover "Wasting Time" by Steven Pope. Black version`,
  fileType: '.jpg',
  link: 'https://www.linkedin.com/in/stevenjpope/',
  title: 'Wasting Time Album Cover - Version Three',
  description: `A part of the "Wasting Time" album, this cover is made to wrap around the cd case so the arm spills the sands of time upwards and through his hands. The sands can be read as both a metaphor for time or a literal representation of the struggles of cocaine and similar substances. This version of the cover is black to emulate a a hollowness in drug use. Unlike the previous versions, the contrast is stark and the highlights on the form are the primary focus. Unlike before, the white on black allows the figure to meld into the sands of time, his matter emptying alongside it.`,
  date: 20170120
}];

  characterStudy = [{
    name: 'colors-claire-newman',
    alt: `Character Study of game character Claire Newman, a mid-20s white woman who has a bit of a complex.`,
    fileType: '.jpg',
    link: 'https://www.cdc.gov/tuskegee/timeline.htm',
    title: 'Colors - Claire Newman',
    description: `A character study for the video game Colors: The Tuskegee Studies. This is a piece of historical fiction, that takes a "clear" look into the sinister side of America's history. Main character Claire Newman is a slacktivist who, through a combination of spite for her father and relative ignorance of the world, decides to get a degree in nursing and moves to Tuskegee, Alabama after being kicked out. However, something is going on in Tuskegee that's not quite right. And Claire's addiction to substances is causing a strange reaction with the locals.`,
    date: 20161220
  },{
    name: 'colors-clementine',
    alt: `Character Study of game character Clementine Turner, a middle-aged white woman who has a big heart under a snide smile.`,
    fileType: '.jpg',
    link: 'https://www.cdc.gov/tuskegee/timeline.htm',
    title: 'Colors - Clementine Turner',
    description: `A character study for the video game Colors: The Tuskegee Studies. This is a piece of historical fiction, that takes a "clear" look into the sinister side of America's history. Support character Clementine Turner takes in Claire Newman to spite her brother, Claire's father. A hermit who refuses to interact with anyone, Clementine has her own secrets that she'd rather not share. But first, what's going on in Tuskegee?`,
    date: 20161220
  },{
    name: 'colors-eunice-rivers',
    alt: `Character Study of game character Eunice Rivers, an elderly black nurse who harvors a terrible secret.`,
    fileType: '.jpg',
    link: 'https://www.cdc.gov/tuskegee/timeline.htm',
    title: 'Colors - Eunice Rivers',
    description: `A character study for the video game Colors: The Tuskegee Studies. This is a piece of historical fiction, that takes a "clear" look into the sinister side of America's history. Based on a real person of the same name, Eunice Rivers took part in a horrible "study" by the CDC. The biggest question about Eunice; why did she do it and what for?`,
    date: 20161220
  },{
    name: 'doodle-bhictoria-bhickie-darlene-beattie',
    alt: `Character Study of expressions on faces, character Bhickie is a fiesty person`,
    fileType: '.jpg',
    link: 'https://www.cdc.gov/tuskegee/timeline.htm',
    title: 'My oh M.I. - Bhickie Darlene Beattie',
    description: `A character study for a now debunk comic, Bhictoria, or Bhickie for short, is an emotional, proud person who has a bit of problem fitting in. My oh M.I. is a critical look at mental illness, the causes and effects of it, and how it plays into society. More importantly, My Oh M.I. asks the critical question, what constitutes a mental illness and who has the right to define that?`,
    date: 20170220
  },{
    name: 'doodle-sage-markus-easom',
    alt: `Character Study of expressions on faces, character Markus is a passive, calm person`,
    fileType: '.jpg',
    link: 'https://www.cdc.gov/tuskegee/timeline.htm',
    title: 'My oh M.I. - Sage Markus Easom',
    description: `A character study for a now debunk comic, Sage, or better known as Markus, is a quite and timid person whose generosity is often taken for granted. My oh M.I. is a critical look at mental illness, the causes and effects of it, and how it plays into society. More importantly, My Oh M.I. asks the critical question, what constitutes a mental illness and who has the right to define that?`,
    date: 20170220
  }];

  constructor() { }

  ngOnInit() {
  }

}
