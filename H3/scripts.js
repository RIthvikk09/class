// Homework 3: Do you love me? [2]

// Requirements
// there should be 2 stages to this homework

// Stage 1:
// 1- move 'NO' button to a random location on the screen when havering overit with the mouse or when clicking
// 2- show an alert to the user when clicking "YES" button with the message "I love you too!!"
// 3- after certen number of times the 'NO' button should be positioned above the 'YES' button and we start stage 2

// Stage 2:
// 1- when hovering over the 'NO' button the button should go below the 'YES' button with 200 ms delay
// 2- show an alert to the user when clicking "YES" button with the message "I love you too!!"

// Dont edit the .html or .css files

// ##########################################
// write your code here


document.getElementById('yes-button').addEventListener('click', function () {
    alert('I love you too!!');
    console.log('yes-button')
});

const CHANCE = 0.3;
const noButton = document.getElementById('no-button');
let stage = 1

function changeloction() {
    if (stage == 1) {
        let h = Math.floor(Math.random() * 80) + 10;
        let w = Math.floor(Math.random() * 80) + 10;

        noButton.style.top = h + 'vh';
        noButton.style.left = w + 'vw';

        if (Math.random() < CHANCE) {
            noButton.style.top = '40vh';
            noButton.style.left = '40vw';

            stage = 2;
        }
    } else {
        setTimeout(function () {
            noButton.style.zIndex = "-1";
        }, 200);
    }

}
noButton.addEventListener('mouseover', changeloction);