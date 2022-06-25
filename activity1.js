var score=0;

function updateScore(){
    score=score+1;
    document.getElementById("score").innerHTML=score
}

 function saveScore(){
    localStorage.setItem("score",score)
}

function nextPage(){
    window.location="D:/Om's%20All%20Project/Om's%20Project%2089/guess_the_word_game/index.html";
}