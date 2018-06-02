// Global DOM behaviors, separate from all dynamically generated content behaviors

console.log(`I am being activated`);

window.addEventListener('scroll', headerSkillsPos);
window.addEventListener('resize', headerSkillsPos);

function headerSkillsPos() {
  let sPos = document.getElementById('skills');
  //Used to calcuate header height and scroll positioning
  let yPos = window.pageYOffset;
  let hMainH = document.getElementById('page-header').clientHeight;
  //Used to calcuate footer height and scroll positioning
  let fMainH = document.getElementById('page-footer').clientHeight;
  let docH = document.body.scrollHeight - document.body.clientHeight;
  let docDiff = docH-fMainH;

  console.log(fMainH, docH, docDiff, yPos);

  if(yPos<hMainH){
    let diff = hMainH - yPos;
    sPos.style.top = `${diff}px`;
  } 
  if(yPos>=hMainH && yPos < docDiff){
    sPos.style.top = `0px`;
  }
  if(yPos >=hMainH && yPos>=docDiff){
    let diff = docDiff - yPos;
    sPos.style.top =`${diff}px`;
  }

}