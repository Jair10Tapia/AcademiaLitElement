const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
// se selecciona por el id que se les asigno en el html

toggleBtn.addEventListener('click', function(){
    /**if(sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar');
    }
    else{
        sidebar.classList.add('show-sidebar');
    }*/
    sidebar.classList.toggle('show-sidebar');
})

closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
})