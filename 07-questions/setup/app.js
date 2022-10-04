//using selectors inside the element
// traversing the dom

// usando selectores: 

const questions= document.querySelectorAll(".question");

questions.forEach(function(question){
    const btn = question.querySelector('.question-btn');

    btn.addEventListener("click", function(){

        //para cerrar una seccion de preguntas cuando se abre otra seccion
        
        questions.forEach(function (item){
        if(item !== question){
            item.classList.remove("show-text");
        }
        });

        question.classList.toggle('show-text');
    });
});

 /* 

 Con DOM

 const btns = document.querySelectorAll(".question-btn");

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    });
});
 */

