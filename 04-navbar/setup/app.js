
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
   // if(links.classList.contains('show-links')){
     //   links.classList.remove('show-links');
    //} else{
      //  links.classList.add('show-links')
    //}
    // sentencia mas corta con toggle y hace lo mismo.
    links.classList.toggle('show-links');

})

// height : auto; para mejor acomodo de los elementos.

