let ord = document.querySelectorAll('.ord');
let next = document.querySelector('.next');
console.log(ord)
let arr = ["O","X"];
const pat = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let i = 0;
let c = 0;
let flag;
ord.forEach((e) => {
    e.addEventListener('click',()=>{
        e.innerText = arr[i];
        next.innerHTML = "'"+arr[(i+1)%2]+"'" + '<span> &nbsp is next </span>';
        i++;
        c++;
        let message = document.querySelector('.message');
        let res = document.querySelector('.res');
        i = i%2;
        for(let i = 0 ; i <pat.length ; i++){
            if((ord[pat[i][0]].innerText == "O" || ord[pat[i][0]].innerText == "X") && ord[pat[i][0]].innerText == ord[pat[i][1]].innerText && ord[pat[i][1]].innerText == ord[pat[i][2]].innerText){
                ord[pat[i][0]].classList.add('win');
                ord[pat[i][1]].classList.add('win');
                ord[pat[i][2]].classList.add('win');
                res.innerHTML =" ' "+ ord[pat[i][0]].innerText+" ' " + " is WON";
                message.classList.add('mes-win');
                c = 1;
                break;
            }
        }
        if(c == 9){
            mes();
        }
        e.classList.add('active');
    })
});

const mes = ()=>{
    let res = document.querySelector('.res');
    let message = document.querySelector('.message');
    res.innerHTML = "&nbsp Draw Match";
    let emoji = document.querySelector('.emoji');
    emoji.innerHTML = '&nbsp; 😇' ;
    message.classList.add('mes-win');
}
