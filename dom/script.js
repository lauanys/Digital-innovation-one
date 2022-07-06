const div = document.querySelector('div');
const btn = document.querySelector('button');
const title = document.querySelector('h1');

function clique(){
    div.classList.toggle('dark-mode');
    textMode();
    StyleBtn();
};
function textMode(){
  if(div.classList.contains('dark-mode')){
    title.innerHTML = 'Dark Mode ON'
    btn.innerHTML = 'Light Mode'

 }else{
    title.innerHTML = 'Light Mode ON'
    btn.innerHTML = 'Dark Mode'
 }
};

function StyleBtn(){
    if(div.classList.contains('dark-mode')){
      btn.style = 'color:#000;background-color:yellow'
     }else{
        btn.style = 'color:#fff'
     } 
}
