import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  imagePath = 'assets/images/design/';

  banners =[{
     name: 'banner-circuit-board',
     alt: 'A quirky design of a fake circuit board, made so the processor component looks like a heart',
     fileType: '.png',
     link: 'https://www.linkedin.com/in/elle-pope-dev',
     title: 'I <3 Circuit Board',
     description: `A general, all-purpose banner to be used in social media and other personal advertising platforms. This banner is designed to illustrate my love for programming and my love for the aesthetic arts. Because I have trouble with "technical" shapes by nature, I made this image by first taking a picture of a tree, masking it to a high contrast black and white format, and then using Photoshop's mosaic filter to "pixelate" the image. By having black and white sections to visualize, I was then able to see the composition I was looking for. Each shape and line was made indivudally using Adobe Illustrator, and ultimately the composition, space, and color balance are all made to direct your eyes to a small heart-shaped object in the lower left hand corner.`,
     date: 20180420
  },{
    name: 'banner-thevulpeventure',
    alt: 'This banner is for a vegan blogging site and showcases various foods and images of Ms. Vulpe.',
    fileType: '.jpg',
    link: 'https://thevulpeventure.com',
    title: 'The Vulpe Venture Banner',
    description: `A banner for Ms. Victoria Vulpe for her wordpress site, thevulpeventure.com. This banner is composed from left to right of a blueberry snack, Ms. Vulpe drinking coffee, beet burgers, Ms. Vulpe holding her favorite veggies, and vegan cinnamon rolls. The particular challening part of this piece was matching the resolutions and quality of the 5 images since these were all taken with different devices at different sizes. Using Adobe Camera RAW, I was able to "trick" the program into matching the qualities after resizing thanks to the luminosity tool.`,
    date: 20180228
  },{
    name: 'uihi-hero-banner',
    alt: `This banner is for the Seattle Indian Health Board's donation page.`,
    fileType: '.jpg',
    link: 'http://www.sihb.org/get-involved-donate',
    title: 'Seattle Indian Health Board - Donation Banner',
    description: `The Urban Indian Health Institute is a division of the Seattle Indian Health Board (SIHB), a nonprofit that provides free health care to Native American People. This banner is for the site's donation page. This donation banner encapsulates the services of SIHB, such as the synchronization of both western and traditional medicine to the Native community, youth services, and of course community. With the excpetion of the far left image, these images were taken during SIHB community activities.`,
    date: 20170728
  },{
    name: 'design-uihi-about-banner',
    alt: `This banner is for the Urban Indian Health Institute's about page.`,
    fileType: '.jpg',
    link: 'http://www.uihi.org/about/',
    title: 'Urban Indian Health Institute - About Banner',
    description: `The Urban Indian Health Institute's about section was in need of an updated banner that encapsulated all that UIHI does for American Indians and Alaska Natives. This banner was divided into four sections to represent the four corners and the four sections of the medicine wheel. The colors of the dividers are the primary UIHI brand colors. From far left clockwise, the images represent family, community outreach, identity, and data collection. It is a fantastic organization to work with.`,
    date: 20170728
  }];

  logos =[{
    name: 'trefoil-agriculture-logo',
    alt: 'The logo for Trefoil Cultural and Environmental. It is composed of its 3 intials as a trefoil',
    fileType: '.png',
    link: 'https://trefoilcultural.com/',
    title: 'Trefoil Cultural and Environmental',
    description: `As it's name implies, this logo is a trefoil composed of its own initials T C and E. This was part of a larger website project where the author, Richard Rothaus, wanted to combine his personal site "Isaacisms" with his business site "WhiteWashed Tomb". Because he enjoys minimalistic designs, I created the logo with as few colors and shapes and possible, all while conveying the original message of his first logo: a trefoil.  However, the author prefered an even simpler logo, just the T C and E for his personal site.`,
    date: 20180318
  },{
    name: 'the-vulpe-venture',
    alt: 'The logo for thevulpeventure.com. Composed of a fox, compass, beats and kale to represent the journy of Ms. Vulpe',
    fileType: '.png',
    link: 'https://thevulpeventure.com',
    title: 'Vulpe Venture Logo',
    description: `Unlike my other logos and designs, this logo is more illustrative in nature. Although the colors are relatively flat, there is a soft depth thanks to small strokes found through the bodies of the subject. These strokes allude to the patterns often found in wood-block prints; woodblocking is a craft quite popular amongst the clean eating community due to it's "back to nature" aesthetic from the wood-grain and shave marks. Because this blog is a lifestyle blog and not just a clean eating blog, the compass points slightly off North, towards a slightly different direction than a straight and narrow path.`,
    date: 20171218
  },{
    name: 'poly-entertainment-logo',
    alt: 'The logo for Poly entertainment, a trefoil composed of 3 spinning Es that clip a rainbow spectrum.',
    fileType: '.png',
    link: 'http://www.missellepope.com',
    title: 'Poly entertainment Logo',
    description: `This logo is more complicated than my personal logo. The 3 e's in entertainment are arranged in a trefoil that spins and glows when animated. Quite literally there are poly e's, that is to say many e's. This is not too represent the literal 3 e's in entertainment, but the many ways of entertainment that we as people can bring to each other. The blue glow is representative of new ideas (or a lightbulb from an overhead view), and the rainbow specturm that is clipped by the 3 e's represent the diversity of what it is to be people. My company is dedicated to this idea of representation and diversity.`,
    date: 20171118
  },{
    name: 'logo-personal-site',
    alt: 'My personal logo of an E and P shaped to look like a butterfly, which is my favorite insect for its metamorphosis cycle.',
    fileType: '.png',
    link: 'http://www.polyentertainment.com',
    title: 'Personal EP Logo',
    description: `Because this logo is relatively simple, let me explain the reasoning behind it. The butterfly is my favorite insect, and one of my favorite creatures in general. When I was a child, I use to collect caterpillars to observer their metamorphosis cycle, and as an adult I've come to appreciate its poetic history. Most of myself today is a change from who I was and who I wanted to be. I am happy for this chagne and where it has taken me. For this reason, I composed my first and last initials E and P into the shape of the butterfly.`,
    date: 20171020
  },{
    name: 'uihi-pride-feather-heart',
    alt: '2017 Pride Logo for the Urban Indian Health Institute. This logo is composed of two feathers that form a heart with the pride flag colors.',
    fileType: '.png',
    link: 'http://www.uihi.org/wpfb-file/two-spirit-handout_online-pdf/',
    title: 'UIHI Pride Logo',
    description: `The Urban Indian Health Institute commissionsed this logo as a general purpose logo for all forms of Pride: primarily Trans-Pride, and Two-Spirit awareness. Similar to Trans, Two-Spirit is a non-binary identity of the American Indian and Alaska Native people that was written out of history during western colonization. The two feathers joining to form one heart is representative of the multiple identities that encompass a single person, and people as a single nation.`,
    date: 20170620
  },{
    name: 'uihi-pride-feather-dna',
    alt: '2017 Alternate Pride Logo for the Urban Indian Health Institute. This logo is composed of two feathers that wrap around to form a double helix with the Trans Pride Colors.',
    fileType: '.png',
    link: 'http://www.uihi.org/wpfb-file/two-spirit-handout_online-pdf/',
    title: 'UIHI Trans Pride Logo',
    description: `The Urban Indian Health Institute commissionsed a general purpose logo for all forms of Pride. However, prior to that commission, this logo was created for Trans-Pride, and in particular Two-Spirit awareness. Similar to Trans, Two-Spirit is a non-binary identity of the American Indian and Alaska Native people that was written out of history during western colonization. The two feathers joining to form a double helix is representative of the multiple identities that encompass a single person, and how these identities are ingrained in us and our being.`,
    date: 20170620
  }];

  icons =[{
    name: 'uihi-icon-PA-education',
    alt: 'Diabetes Report Iconography - Physical Education',
    fileType: '.png',
    link: 'http://www.uihi.org/wp-content/uploads/2017/11/2016_Diabetes_Update_Electronic.pdf',
    title: 'Diabetes Report Iconogarphy - Physical Education',
    description: `The Urban Indian Health Institute needed 12 icons with a 4 color palette in 48 hours. These icons are for their 2017 Aggregate Diabetes Report. This was one of the most challenging projects I have worked on due to the tight deadline. Overall, I am very happy with the final product. I urge you to click on the report link to see how the icons flow with the report composition. This infographic is used for physical activity, physical education, and exercise.`,
    date: 20171107
  },{
    name: 'uihi-icon-oral-care',
    alt: 'Diabetes Report Iconography - Oral Care',
    fileType: '.png',
    link: 'http://www.uihi.org/wp-content/uploads/2017/11/2016_Diabetes_Update_Electronic.pdf',
    title: 'Diabetes Report Iconogarphy - Oral Care',
    description: `The Urban Indian Health Institute needed 12 icons with a 4 color palette in 48 hours. These icons are for their 2017 Aggregate Diabetes Report. This was one of the most challenging projects I have worked on due to the tight deadline. Overall, I am very happy with the final product. I urge you to click on the report link to see how the icons flow with the report composition. This infographic is used for oral hygiene/oral care.`,
    date: 20171107
  },{
    name: 'uihi-icon-tobacco-screening',
    alt: 'Diabetes Report Iconography - Tobacco Screening',
    fileType: '.png',
    link: 'http://www.uihi.org/wp-content/uploads/2017/11/2016_Diabetes_Update_Electronic.pdf',
    title: 'Diabetes Report Iconogarphy - Tobacco Screening',
    description: `The Urban Indian Health Institute needed 12 icons with a 4 color palette in 48 hours. These icons are for their 2017 Aggregate Diabetes Report. This was one of the most challenging projects I have worked on due to the tight deadline. Overall, I am very happy with the final product. I urge you to click on the report link to see how the icons flow with the report composition. This infographic is used for tobacco screening.`,
    date: 20171107
  },{
    name: 'uihi-icon-kidneys',
    alt: 'Diabetes Report Iconography - Kidneys',
    fileType: '.png',
    link: 'http://www.uihi.org/wp-content/uploads/2017/11/2016_Diabetes_Update_Electronic.pdf',
    title: 'Diabetes Report Iconogarphy - Kidneys',
    description: `The Urban Indian Health Institute needed 12 icons with a 4 color palette in 48 hours. These icons are for their 2017 Aggregate Diabetes Report. This was one of the most challenging projects I have worked on due to the tight deadline. Overall, I am very happy with the final product. I urge you to click on the report link to see how the icons flow with the report composition. This infographic is used kidney care/urinary monitorization.`,
    date: 20171107
  },{
    name: 'uihi-icon-heart',
    alt: 'Diabetes Report Iconography - Heart Health',
    fileType: '.png',
    link: 'http://www.uihi.org/wp-content/uploads/2017/11/2016_Diabetes_Update_Electronic.pdf',
    title: 'Diabetes Report Iconogarphy - Heart Health',
    description: `The Urban Indian Health Institute needed 12 icons with a 4 color palette in 48 hours. These icons are for their 2017 Aggregate Diabetes Report. This was one of the most challenging projects I have worked on due to the tight deadline. Overall, I am very happy with the final product. I urge you to click on the report link to see how the icons flow with the report composition. This infographic is used for cardiac control/heart health.`,
    date: 20171107
  },{
    name: 'uihi-icon-foot-exam',
    alt: 'Diabetes Report Iconography - Foot Exam',
    fileType: '.png',
    link: 'http://www.uihi.org/wp-content/uploads/2017/11/2016_Diabetes_Update_Electronic.pdf',
    title: 'Diabetes Report Iconogarphy - Foot Exam',
    description: `The Urban Indian Health Institute needed 12 icons with a 4 color palette in 48 hours. These icons are for their 2017 Aggregate Diabetes Report. This was one of the most challenging projects I have worked on due to the tight deadline. Overall, I am very happy with the final product. I urge you to click on the report link to see how the icons flow with the report composition. This infographic is for foot care and podiatry.`,
    date: 20171107
  },{
    name: 'uihi-icon-depression-screening',
    alt: 'Diabetes Report Iconography - Depression Screening',
    fileType: '.png',
    link: 'http://www.uihi.org/wp-content/uploads/2017/11/2016_Diabetes_Update_Electronic.pdf',
    title: 'Diabetes Report Iconogarphy - Depression Screening',
    description: `The Urban Indian Health Institute needed 12 icons with a 4 color palette in 48 hours. These icons are for their 2017 Aggregate Diabetes Report. This was one of the most challenging projects I have worked on due to the tight deadline. Overall, I am very happy with the final product. I urge you to click on the report link to see how the icons flow with the report composition. This infographic is used for Depression and Depression Screening.`,
    date: 20171107
  },{
    name: 'uihi-icon-education',
    alt: 'Diabetes Report Iconography - Education',
    fileType: '.png',
    link: 'http://www.uihi.org/wp-content/uploads/2017/11/2016_Diabetes_Update_Electronic.pdf',
    title: 'Diabetes Report Iconogarphy - Education',
    description: `The Urban Indian Health Institute needed 12 icons with a 4 color palette in 48 hours. These icons are for their 2017 Aggregate Diabetes Report. This was one of the most challenging projects I have worked on due to the tight deadline. Overall, I am very happy with the final product. I urge you to click on the report link to see how the icons flow with the report composition. This infographic is used for education of community and education of medical practices.`,
    date: 20171107
  }];

  layouts =[{
    name: 'uihi-award-art-mart-1st-place',
    alt: `Part of The Urban Indian Health Institute's Spirit Walk festival, an award certificate for 1st Place in the Art Mart.`,
    fileType: '.png',
    link: 'http://www.uihi.org/',
    title: 'SpiritWalk Art Mart 1st Place Award',
    description: `The Urban Indian Health Institute's annual SpiritWalk and Spirit of Indigenous People Festival has several activities that award certificates to its participants. This certificate is awarded to participating vendors at Art Mart. Because native art has changed to incorporate all tools and techniques that are available and useful, a fact that non-native people are sometimes not fully aware of, I placed a contemporary chisel and paintbrush within a dream catcher weave to represent the beautiful traditions of all native people.`,
    date: 20170620
  },
  {
    name: 'uihi-award-most-money-individual',
    alt: `Part of The Urban Indian Health Institute's Spirit Walk festival, an award certificate for the individual who has earned the most money from pledges.`,
    fileType: '.png',
    link: 'http://www.uihi.org/',
    title: 'SpiritWalk Most Money Earned Award',
    description: `The Urban Indian Health Institute's annual SpiritWalk and Spirit of Indigenous People Festival has several activities that award certificates to its participants. This certificate is awarded to the individual who collects the most money per mile walked for the SpiritWalk route. There are two major themes in this certificate, both of which are central to the idea of wealth for some Pacific Northwest tribes. The first is water, which motifs the border of the certificate. Water is central to the health and wellness of many Pacific Northwest tribes and was often used to symbolize wealth(although not monetary) in narratives. The second is Komokwa who was known as "copper-maker". His domain was underseas, and those who were able to reach it were rewarded with wealth and spirit magic. For his face, I referenced several contemporary native american artist representations and artifacts to keep true to Komokwa's image.`,
    date: 20170620
  },
  {
    name: 'uihi-award-grandma-helen-award',
    alt: `Part of The Urban Indian Health Institute's Spirit Walk festival, an award certificate for all senior citizens that walk for the festival.`,
    fileType: '.png',
    link: 'http://www.uihi.org/',
    title: 'SpiritWalk Helen Sage Award',
    description: `The Urban Indian Health Institute's annual SpiritWalk and Spirit of Indigenous People Festival has several activities that award certificates to its participants. This certificate is awarded to SpirtWalk participants that are over the age of 65 and completed the path. Grandma Helen was an active member of SpirtWalk and was loved by all. The patterns and colors for this certificate were all derived from her weavings. Since she was quite fond of laurels, I used them to surround her image, even adding a drop shadow for extra depth. Though she has passed on, her spirit is never forgotten.`,
    date: 20170620
  },{
    name: 'uihi-PrEP-Postcard-v5_Page_1',
    alt: `PrEP Postcard for HIV Preventative Care, provided by the Urban Indian Health Institute and Project Inform.`,
    fileType: '.jpg',
    link: 'http://www.uihi.org/projects/hiv-sti-and-hepatitis-c-prevention-project/uihi-materials/',
    title: 'PrEP Postcard Side One',
    description: `The Urban Indian Health Institute in conjuction with Project Inform have created an informational postcard that describes, in depth, how to use Pre-exposure prophylaxis(PrEP) as well as its effectiveness in varying sexual environments. This is the informative side of the postcard, designed for both print and digital. The final version of the postcard has since been modified to include the Seattle Indian Health Board's colors as well as imagery of the PrEP pill.`,
    date: 20170720
  },{
    name: 'uihi-PrEP-Postcard-v5_Page_2',
    alt: `PrEP Postcard for HIV Preventative Care, provided by the Urban Indian Health Institute and Project Inform.`,
    fileType: '.jpg',
    link: 'http://www.uihi.org/projects/hiv-sti-and-hepatitis-c-prevention-project/uihi-materials/',
    title: 'PrEP Postcard Side One',
    description: `The Urban Indian Health Institute in conjuction with Project Inform have created an informational postcard that describes, in depth, how to use Pre-exposure prophylaxis(PrEP) as well as its effectiveness in varying sexual environments. This is the graphical side of the postcard, designed for both print and digital. The final version of the postcard has since been modified to include the Seattle Indian Health Board's colors as well as imagery of the PrEP pill.`,
    date: 20170720
  }];

  constructor() { }

  ngOnInit() {
  }

}
