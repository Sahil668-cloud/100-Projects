const countSpan = document.getElementById('count');
let add = document.getElementById('increment');
let sub = document.getElementById('decrement');

let count = 0;

add.addEventListener('click', () => {
    count++;
    countSpan.textContent = count;
});

sub.addEventListener('click', () => {
    count--;
    countSpan.textContent = count;
});