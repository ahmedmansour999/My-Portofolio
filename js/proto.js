const openBtn = document.getElementById('open-btn');
const overlay = document.getElementById('overlay');

openBtn.addEventListener('click', () => {
  document.body.classList.add('overlay-active');
  overlay.style.display = 'block';
});

document.addEventListener('click', (event) => {
  if (document.body.classList.contains('overlay-active') && !overlay.contains(event.target) && event.target !== openBtn) {
    document.body.classList.remove('overlay-active');
    overlay.style.display = 'none';
    console.log('run');
  }
});



const instCard = document.getElementById('instcard');
const faceCard = document.getElementById('facecard');
const githubCard = document.getElementById('githubcard');
const twitterCard= document.getElementById('twittercard');


faceCard.addEventListener('click', ()=>{
  window.open("https://www.facebook.com/teremixo" , '_blank'  )
})  

instCard.addEventListener('click', ()=>{
  window.open("https://www.instagram.com/ahmed_mans_0ur/reels/" , '_blank'  )
})  

githubCard.addEventListener('click', ()=>{
  window.open("https://github.com/ahmedmansour999" , '_blank'  )
})  

