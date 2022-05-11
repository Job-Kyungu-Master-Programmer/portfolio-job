let figma          = document.querySelector('#figma');
let frontEnd       = document.querySelector('#frontEnd');
let backEnd        = document.querySelector('#backEnd');
let backPhp        = document.querySelector('#backPhp');
let backNodeJs     = document.querySelector('#backNodeJs');


backEnd.addEventListener('click' , () => {
     document.querySelector('#backPhp').style.display='block';
     document.querySelector('#backNodeJs').style.display='block';
});


console.log(backEnd);