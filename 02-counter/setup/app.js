// inicializar el contador
let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn"); // se seleccionan todos los botones con class Btn

btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count--;
        }
    
        else if(styles.contains('increase')){
            count++;
        }

        else{
            count = 0;
        }

        if(count  > 0){
            value.style.color = "green";
        }
        
        if (count < 0){
            value.style.color = "red";
        }

        if(count === 0){
            value.style.color = "222";
        }

        value.textContent = count;
    });
})