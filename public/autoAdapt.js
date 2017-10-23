export default function(){
  function autoAdapt() {
    var clientW = window.innerWidth;
    document.querySelector('html').style.fontSize = clientW + 'px';
  }

  document.querySelector('body').style.fontSize = 'medium';
  autoAdapt();

  window.addEventListener('resize', autoAdapt);

}
