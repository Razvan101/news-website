if (innerWidth < 600){
  let imgEl = document.getElementById('top-img').src = 'images/image-web-3-mobile.jpg';
}
let menuEl = document.getElementById('menu-icon');
let listEl = document.getElementById('navigation-bar');
let closeEl = document.createElement('img');
menuEl.addEventListener('click', displayMenu);
function displayMenu(){
  menuEl.style.display = 'none';
  listEl.style.display = 'block';
  closeEl.src = 'images/icon-menu-close.svg';
  closeEl.id = 'close-menu';
  listEl.appendChild(closeEl);
  document.getElementById('close-menu').onclick = function(){
    menuEl.style.display = 'block';
    listEl.style.display = 'none';
  }
  console.log(listEl);
}


