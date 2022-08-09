
fetch("./Json.json").then(res => res.json()).then((rea) => {
    let c = 1;
    let Qc = 0;
    let footerConter = document.querySelector(".footer-conter").innerHTML = rea.length
    let score = 0
    addtoPage(rea,Qc ,c ,score)
}
);
//slect Items

let finaly = document.querySelector(".finally")
let score = document.querySelector(".score")
let questionNumber = document.querySelector(".question-number")
let rulesModal = document.querySelector(".Rules-modal");
let startNoe = document.querySelector(".start")
let quizArea = document.querySelector(".quiz-area")
let answerArea = document.querySelector(".answer-area")
let answers =document.querySelector(".answers")
let answer =document.querySelector(".answer")
let nextQ = document.querySelector(".btn-next")
let quetionCounter = document.querySelector(".Q-C")
let spanC =document.querySelector(".qC")
console.log(answers.children[1])
let arr=[]
for (let i = 0; i < 4; i++){
    arr.push(answers.children[i])
}
arr.forEach((ele) => {
    ele.onclick = function () {
         if (ele.id === "right") {
                ele.style.backgroundColor = "#b3ffb3";
                ele.style.color = "green";
            }
            else{
                ele.style.backgroundColor = "#ff7070";
        }
        clearInterval(TimerOne)
    }
})
console.log(arr)
let time = 15;
//quetionCounter.innerHTML =1
// show ruleslet startNoe = document.querySelector(".start")
let startBtn = document.querySelector(".btn")
startBtn.addEventListener("click", function () {
    startNoe.style.display = "none"
    rulesModal.style.display ="block"
})

// show question or exit
let exitButn = document.querySelector(".exit-butn").addEventListener("click", function () {
    rulesModal.style.display = "none"
    startNoe.style.display = "flex"
});
let Continue = document.querySelector(".continue").addEventListener("click", function () {
    rulesModal.style.display = "none"
    quizArea.style.display = "block"
    Starttimer(15)
})
function addtoPage(obj, conuter ,c ,score) {
    conuter = 0
    score=0
    nextQ.addEventListener('click', function () {

        conuter++
        answerArea.innerHTML = ""
        answers.innerHTML=""
        console.log(obj[conuter])
        let question = document.createElement("h2")
        question.appendChild(document.createTextNode(obj[conuter].title))
        answerArea.appendChild(question)
        let array=[]
        for (let i = 0; i < 4; i++){
            let answer = document.createElement('div')
            answer.className="answer"
            answer.appendChild(document.createTextNode(obj[conuter].answer[i]))
            if (obj[conuter].answer[i] == obj[conuter].right_answer) {
                answer.id=obj[conuter].right_answer
            }
            answers.appendChild(answer)
            answerArea.appendChild(answers)
            array.push(answer)
        }
        toCheckAnswer(array, obj, conuter,score)
        if (c < obj.length) {
            c++
            quetionCounter.innerHTML = c;
        }
        Starttimer(time)
        if (c === obj.length) {
            finaly.style.display = "block"
            quizArea.style.display = "none"

            
        }
    })
}
function toCheckAnswer(answer, obj, conuter ,score) {
    answer.forEach(ele => {
        ele.onclick = function () {
            if (ele.id === obj[conuter].right_answer) {
                console.log(ele)
                ele.style.backgroundColor = "#b3ffb3";
                ele.style.color = "green";
                score++
                console.log(score)
            }
            else{
                ele.style.backgroundColor = "#ff7070";
            }
            clearInterval(TimerOne)
        }
    });
}

let TimerOne;
function Starttimer(time) {
    TimerOne = setInterval(function () {
        spanC.innerHTML = time;
        time--;
        if (time<0) {
            clearInterval (TimerOne)
        }
    }, 1000)
}
nextQ.addEventListener("click", function () {
        clearInterval(TimerOne)
    })