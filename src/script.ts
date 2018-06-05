// Global DOM behaviors, separate from all dynamically generated content behaviors
//Regarding the main content header behavior
document.addEventListener('DOMContentLoaded', function(){
  window.addEventListener('load', headerHeight);
  window.addEventListener('resize', headerHeight);
  window.addEventListener('scroll', headerSkillsPos);
  window.addEventListener('resize', headerSkillsPos);
  //regarding the hamburger menu

  document.getElementById('hamburger').addEventListener('click', openMenu);

  window.addEventListener('resize', changeMenu);
});

//global variable for hamburger menu
var menu = false;

function headerHeight(){
  let sPos = document.getElementById('skills');
  let hMainH = document.getElementById('page-header').clientHeight;
  let pCHeight = document.getElementById('portfolio-content').clientHeight;
  let bodHeight = hMainH + pCHeight;
  let winHeight = window.innerHeight;

  if(winHeight > bodHeight){
    sPos.style.height = `${pCHeight}px`;
  }else{
    sPos.style.height = '';
  }
}

function headerSkillsPos() {
  let sPos = document.getElementById('skills');
  //Used to calcuate header height and scroll positioning
  let yPos = window.pageYOffset;
  let hMainH = document.getElementById('page-header').clientHeight;
  //Used to calcuate footer height and scroll positioning
  let fMainH = document.getElementById('page-footer').clientHeight;
  let docH = document.body.scrollHeight - document.body.clientHeight;
  let docDiff = docH-fMainH;
  //Used to see if page-footer is viewable on load. Will affect scrolling later
  let pCHeight = document.getElementById('portfolio-content').clientHeight;
  let bodHeight = hMainH + pCHeight;
  let winHeight = window.innerHeight;

  if(window.innerWidth <= 768){
    sPos.style.top=`${hMainH}px`
  }else{
    if(yPos<hMainH){
      //will keep the top position just under the header
      let diff = hMainH - yPos;
      sPos.style.top = `${diff}px`;
    } 
    if(yPos>=hMainH && yPos < docDiff){
      //header is no longer viewable, will keep top position at 0
      sPos.style.top = `0px`;
    }
    if(yPos >=hMainH && yPos>=docDiff){
      if(winHeight > bodHeight){
        let diff = hMainH - yPos;
      sPos.style.top = `${diff}px`;
      }else{
        //footer is viewable, will keep top at negative value of yoffset of footer
        let diff = docDiff - yPos;
        sPos.style.top =`${diff}px`;
      }
    }
  }
}

function openMenu() {
  // let navList = document.getElementById('route-menu');
  // let hamMenu = document.getElementById('hamburger');

  if (menu === false){
    let navList = document.getElementById('route-menu');
    let hamMenu = document.getElementById('hamburger');

    navList.classList.add('open');
    hamMenu.classList.add('clickEvent');
    menu = true;
  } else{
    let navList = document.getElementById('route-menu');
    let hamMenu = document.getElementById('hamburger');

    navList.classList.remove('open');
    hamMenu.classList.remove('clickEvent');
    menu = false;
  }
}

function changeMenu(){
  // let navList = document.getElementById('route-menu');
  // let hamMenu = document.getElementById('hamburger');

  if (window.innerWidth >= 720){
    let navList = document.getElementById('route-menu');
    let hamMenu = document.getElementById('hamburger');

    menu = false;
    navList.classList.remove('open');
    hamMenu.classList.remove('clickEvent');
  }
}