const count = document.getElementById('count');
const sub = document.getElementById('sub');
const reset = document.getElementById('reset');
const add = document.getElementById('add');

sub.addEventListener('click', () => {
    count.innerHTML--;
    applyColor();
});

reset.addEventListener('click', () => {
    count.innerHTML = 0;
    applyColor();
});

add.addEventListener('click', () => {
    count.innerHTML++;
    applyColor();
});

function applyColor(){
    //const countValue = parseInt(count.innerHTML);
    if(count.innerHTML > 0){
        count.style.color = 'green';
    } else if(count.innerHTML < 0){
        count.style.color = 'red';
    } else {
        count.style.color = 'gray';
    }
}