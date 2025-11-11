var style = window.getComputedStyle(document.body);

window.onLoad(setupHeader());

function setupHeader(){
  if (window.innerWidth > 300){
    document.querySelector('header .nav').classList.add('show-nav');
    document.querySelector('header .nav').classList.remove('hidden-nav');
  }
  else {
    document.querySelector('header .nav').classList.add('hidden-nav');
    document.querySelector('header .nav').classList.remove('show-nav');
  }
}

function toggleNav(){
  const nav = document.querySelector('header .nav');
  let displayStyle = window.getComputedStyle(nav).display;
  nav.classList.toggle('hidden-nav');
  nav.classList.toggle('show-nav');
}

function onResize(){
  const nav = document.querySelector('header .nav');
  if (window.innerWidth > 300){
    nav.classList.remove('hidden-nav');
    nav.classList.add('show-nav');
  }
  else {
    nav.classList.remove('show-nav');
    nav.classList.add('hidden-nav');
  }
}