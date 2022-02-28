//setting initial values to zero
let score = 0;
let user_input=0;
let random_num=0;
let time=10;

// comment this line to stop the game 
setInterval(startCountDown, 1000);

//update timer
function startCountDown(){
    setTimeout(() => {
        document.querySelector(".result").innerHTML="";
        update_input();
        if(time==-1){
            rolldice();
            check();
            time=10;//updating timer value      
        }else{
            setTimeout(document.querySelector(".status").innerHTML=`Dice will roll in ${time} sec.`,1000);
            time--;
        }
    }, 1000);
}

//function to get choice of user 
function update_input() {
        var user = document.getElementsByName('choice');
        for (let index = 0; index < user.length; index++) {
            if (user[index].checked) {
                user_input = user[index].value;
            }
        }
         //updating variable in DOM
        document.getElementById("variable").innerHTML = user_input;
}

// function to roll the dice 
function rolldice() {
    random_num = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".dice_img").setAttribute("src", "img/dice" + random_num + ".jpg");
}

//function to check and show result result and update score
function check(){
    setTimeout(() => {
        if(user_input == 0){
            document.querySelector(".result").innerHTML="You did not made your choice."
        }else if(user_input == random_num && user_input!=0){
            score=score+1;
            document.querySelector(".result").innerHTML="Your guess was right!";
        }else{
            document.querySelector(".result").innerHTML="Your guess was wrong!";
        }
        document.getElementById("score").innerHTML = score;
        setTimeout(() => {
            document.querySelector(".dice_img").setAttribute("src", "img/dice0.jpg");
        }, 1000);
    }, 1000);
}

//function to show instructions
function show_instructions(){
    document.getElementById('instructions-box').style.display='flex';
}

//function to hide instructions
function hide_instructions(){
    document.getElementById('instructions-box').style.display='none';
}




