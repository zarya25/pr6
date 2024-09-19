'use strict'
// 1 задание
console.log(document.querySelector('div'));
console.log(document.querySelector('ul'));
console.log(document.querySelectorAll('li')[1]);
// 2 задание
const a = document.querySelectorAll('li');

a.forEach(lia => {
    lia.classList.add('list-item');
    console.log(lia);
});
// 3 задание

let number=Number(prompt('Введите число',''));

if(number && number>0){
const container = document.createElement('div');
container.className='container'
  
for(let i=0;i<number;i++){
    const block=document.createElement('div');
    block.className='block';
    block.style.backgroundColor='pink';
    block.style.height='100px';
    block.style.width='100px';
    block.style.margin='10px'
    container.appendChild(block);
}
document.body.appendChild(container);
}else{
    alert('Введите другое число');
}

// 4 задание
let forma=document.createElement('forma');

forma.style.display='flex';
forma.style.flexDirection='column';
forma.style.gap='50px';
forma.style.width='500px';

let inpEmail=document.createElement('input');
inpEmail.style.padding='40px';
inpEmail.placeholder='Email';


let inpName=document.createElement('input');
inpName.style.padding='40px';
inpName.placeholder='Name';


let btnSub=document.createElement('button');
btnSub.innerHTML='Submit';
btnSub.style.backgroundColor='pink';
btnSub.style.fontSize='20px';
btnSub.style.padding='25px';
forma.append(inpName, inpEmail, btnSub);


document.body.appendChild(forma);

