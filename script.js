// display div
const firstDisplay = document.querySelector('.firstDisplay');
const secondDisplay = document.querySelector('.secondDisplay');

// buttons
const agreeBtn = document.querySelectorAll('button')[0];
const disagreeBtn = document.querySelectorAll('button')[1];

//disagree button container
const disagreeBtnContainer = document.querySelectorAll('.answerBtn div')[1];

agreeBtn.addEventListener('click',()=>{
    firstDisplay.style.display='none'   
    secondDisplay.style.display='flex'
})

disagreeBtn.addEventListener('click',()=>{
    disagreeBtn.style.top=`${Math.floor(Math.random()*(disagreeBtnContainer.offsetHeight-disagreeBtn.offsetHeight))}px`
    disagreeBtn.style.right=`${Math.floor(Math.random()*(disagreeBtnContainer.offsetWidth-disagreeBtn.offsetWidth))}px`
})