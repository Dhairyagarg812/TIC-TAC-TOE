let button = document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset-btn")
let newbtn=document.querySelector(".newbtn")
let msgcont=document.querySelector(".msgcont")
let msg=document.querySelector(".msg")
let turnO = true;
const winpatterns = [[0, 1, 2],
                    [0, 3, 6], 
                    [0, 4, 8], 
                    [1, 4, 7], 
                    [2, 5, 8], 
                    [2, 4, 6], 
                    [3, 4, 5], 
                    [6, 7, 8]]
button.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "O"
            turnO = false;
        }
        else {
            box.innerHTML = "X"
            turnO = true
        }
        box.disabled = true;
        checkwinner();
    })
})
const disablebutton=() =>{
    for (let box of button) {
        box.disabled=true;
    }
    }
const showWinner=(winner)=>{
    msg.innerText=`congo winner is ${winner}`
    msgcont.classList.remove("hide")
    disablebutton();
}
const checkwinner=()=>{
    for (let pattern of winpatterns) {
        let pos1=button[pattern[0]].innerText
        let pos2=button[pattern[1]].innerText
        let pos3=button[pattern[2]].innerText

        if(pos1!='' && pos2!='' && pos3!='' ){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
            } 
        }
    }
    const enablebutton=()=>{
        for (let box of button) {
            box.disabled=false
            box.innerText='';
            
            
        }
    }

    const resetgame=()=>{
        turnO=true;
        enablebutton();
        msg.innerText=""
        msgcont.classList.add("hide")
    }
}
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame)