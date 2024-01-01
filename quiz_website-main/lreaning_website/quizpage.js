function randomNUm(n) {
    var array = [];
    while (array.length < n) {
      let randomNum = Math.floor(Math.random() * n) + 1;
      if (array.indexOf(randomNum) === -1) {
        array.push(randomNum);
      }
    }
    return array;
}

function quiz_system(){
    input = document.querySelector("#input").value
    document.querySelector("py-script").innerHTML = input
    // output = document.querySelector(".py-terminal").textContent
    // if (ipnut == output){
    //     i++
    //     quizElement.innerHTML += easy_quiz[numlist[i]].question;
    // }
}

const easy_quiz = [
    {
        question : '"123456" 을 출력하세요',
        answer : '123456'
    },
    {
        question : '"hello world" 을 출력하세요',
        answer : 'hello world'
    },
    {
        question : '1 을 출력하세요',
        answer : '1'
    },
    {
        question : 'A + B 를 출력하세요',
        answer : '1',
        python : "A = 3.343\nB= 7.2439"
    },
    {
        question : '1 을 출력하세요',
            answer : '1'
    },
    {
        question : '1 을 출력하세요',
            answer : '1'
    },
    {
        question : '1 을 출력하세요',
            answer : '1'
    },
    {
        question : '1 을 출력하세요',
            answer : '1'
    },
]


var i = 0
numlist = randomNUm(8)
const quizElement = document.querySelector("#quiz");

quizElement.innerHTML += easy_quiz[numlist[i]].question;
 

// function easy_quiz() {
//     listnum = randomNum(8);

//     for (var i = 0; i < 8; i++) {
//         document.body.appendChild(easy_quiz[listnum[i] - 1].question + "<br>");
//     }
// }

// easy_quiz()
// document.write("SSS")
// page = document.location.pathname.toString
