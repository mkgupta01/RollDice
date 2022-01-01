//setting initial values to zero
let score = 0;
let user_input=0;
var random_num=0;
let time=6;
setInterval(start, 4000);


function start() {
     //pause the program
    setInterval(updateCountDown, 1000);
   
}

//update timer
function updateCountDown(){
    if(time==-1){
        update_input();
        rolldice();
        check();
        time=6;      
    }else{
        setTimeout(document.querySelector(".status").innerHTML=`Game will start in ${time} sec.`,1000);
        time--;
    }
}


//function to get input
function update_input() {
    setTimeout(() => {
        var user = document.getElementsByName('choice');
        for (let index = 0; index < user.length; index++) {
            if (user[index].checked) {
                user_input = user[index].value;
            }
        }
         //updating variable in DOM
        document.getElementById("variable").innerHTML = user_input;
    }, 1000);
}

// function to roll the dice 
function rolldice() {
    setTimeout(() => {
        random_num = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".dice_img").setAttribute("src", "/img/dice" + random_num + ".jpg");
    }, 1000);
}

//check result
function check(){
    setTimeout(() => {
        if(user_input == random_num && user_input!=0){
            score=score+1;
            document.querySelector(".result").innerHTML="Your guess was right!";
        }else{
            document.querySelector(".result").innerHTML="Your guess was wrong!";
        }
        document.getElementById("score").innerHTML = score;
    }, 1000);
}



