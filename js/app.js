window.addEventListener("scroll", () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const navigation = document.querySelector('nav');
document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
};

const btnToggle = document.querySelector('.toggle');
document.querySelector('ul').onclick = function(){
    navigation.classList.remove('active');
    btnToggle.classList.remove('active');
};
