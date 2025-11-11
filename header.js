var style = window.getComputedStyle(document.body);

function toggleNav(){
  const nav = document.querySelector('header .nav');
  let displayStyle = window.getComputedStyle(nav).display;
  nav.classList.toggle('hidden-nav');
}

function onResize(){
  const nav = document.querySelector('header .nav');
  if (window.innerWidth >= 300){
    nav.classList.remove('hidden-nav');
    nav.classList.add('show-nav');
  }
  else {
    nav.classList.remove('show-nav');
    nav.classList.add('hidden-nav');
  }
}