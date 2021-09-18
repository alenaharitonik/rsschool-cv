const btn = document.querySelector('.nav_toggle'),
    menu = document.querySelector('.header_nav');

btn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    btn.classList.toggle('active');
});

console.log('Выполнила все кроме видео. Итоговая оценка 160-10=150 баллов.');