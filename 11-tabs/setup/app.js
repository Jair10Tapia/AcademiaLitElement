const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    if(id){
        // remove active for other butt
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        });

        // hide articles or info
        articles.forEach(function(article){
            article.classList.remove('active');
        })
        const element = document.getElementById(id)
        element.classList.add('active');
    }
})

/* Con estas funciones se puede cambiar el elemento activo que se tenga dentro del html
ya que se extrae el id y con esto se puede obtener que elemento tuvo un click para hacer el cambio
*/