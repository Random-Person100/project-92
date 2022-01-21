player1_name=localStorage.getItem("player1_name")
player2_name=localStorage.getItem("player2_name")
player1_score=0
player2_score=0
question_turn = "player1";
answer_turn = "player2"
document.getElementById("player1_name").innerHTML=player1_name+" : "
document.getElementById("player2_name").innerHTML=player2_name+" : "
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score
document.getElementById("player_question").innerHTML="question turn - "+player1_name
document.getElementById("player_answer").innerHTML="answer turn - "+player2_name
function send(){
    n1=document.getElementById("number1").value;
    n2=document.getElementById("number2").value;
    answer=parseInt(n1)*parseInt(n2)
    question_word="<h4>"+n1+"x"+n2+"</h4>";
    input_box="<br>answer: <input type='text' id='input'>";
    check_button="<br></br><button class='btn btn-info' onclick='check()'>check</button>"
    row=question_word+input_box+check_button
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value=""
    document.getElementById("number2").value=""
}
function check(){
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer==actual_answer){
        if(answerTurn=="player1"){
            update_player1_score = player1_score++;
            document.getElementById("player1_score").innerHTML=update_player1_score;
        }
        else{
            update_player2_score =player2_score++;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
        if(questionTurn=="player1"){
            questionTurn="player2"
            document.getElementById("player_question").innerHTML="question Turn- "+player2_name;
        }
        else{
            questionTurn="player1"
            document.getElementById("player_question").innerHTML="question Turn- "+player1_name;
        }
    }
}