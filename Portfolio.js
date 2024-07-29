function toggleanswer() {
  document.querySelector('.navbar').classList.toggle('active');
    document.querySelector('.menu-icon').classList.toggle('active');
  };

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');


    if(top >= offset && top < offset + height) {
      navlinks.forEach(links => {
      links.classList.remove('active');
      document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });   
    };
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
};


/*     Typing script     */
const typed = new Typed('.multiple-text', {
  strings: ['Front-tend разработчик', 'Имею инстаграм канал,', 'Телеграмм канал'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
