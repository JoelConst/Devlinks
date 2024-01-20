function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');
  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // } else{
  //   html.classList.add('light')
  // }

  //trocar imagem
  const img = document.querySelector('#profile img');
  if (html.classList.contains('light')) {
    img.setAttribute('src', 'assets/Avatar.jpg');
  } else {
    img.setAttribute('src', 'assets/Avatar2.jpg');
  }
}
