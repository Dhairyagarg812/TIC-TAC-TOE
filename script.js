let button = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let newbtn = document.querySelector(".newbtn")
let msgcont = document.querySelector(".msgcont")
let msg = document.querySelector(".msg")
let turnO = true;
let count = 0;
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
            box.innerHTML
            turnO = true
        }
        box.disabled = true;
        count++;
        let winner = checkwinner();
        if (count === 9 && !winner) {
            gamedrawn();
        }
    })
})
const gamedrawn = () => {
    msg.innerText = `Game is drawn`;
    msgcont.classList.remove('hide');
    disablebutton();
}
const disablebutton = () => {
    for (let box of button) {
        box.disabled = true;
    }
}
const showWinner = (winner) => {
    msg.innerText = `congo winner is ${winner}`
    msgcont.classList.remove("hide")
    disablebutton();
}
const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1 = button[pattern[0]].innerText
        let pos2 = button[pattern[1]].innerText
        let pos3 = button[pattern[2]].innerText

        if (pos1 != '' && pos1 === pos2 && pos2 === pos3) {
            showWinner(pos1);
            return true;
        }
    }
    return false;
}
const enablebutton = () => {
    for (let box of button) {
        box.disabled = false
        box.innerText = '';
    }
}

const resetgame = () => {
    turnO = true;
    count=0;
    enablebutton();
    msg.innerText = ""
    msgcont.classList.add("hide")
}
newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame)