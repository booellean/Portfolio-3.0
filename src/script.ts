// Global DOM behaviors, separate from all dynamically generated content behaviors

window.addEventListener('load', headerHeight);
window.addEventListener('resize', headerHeight);
window.addEventListener('scroll', headerSkillsPos);
window.addEventListener('resize', headerSkillsPos);

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
  console.log(yPos);

}