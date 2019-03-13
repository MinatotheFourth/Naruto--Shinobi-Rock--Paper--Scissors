let userscore = 0;
let compscore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const fire_div = document.getElementById("f");
const light_div = document.getElementById("l");
const wind_div = document.getElementById("wi");
const water_div = document.getElementById("wa");
const earth_div = document.getElementById("e");
const info_div = document.getElementById("explain");
const moreInfo_div = document.getElementById("equal");

function getComputerChoice(){
	const choices = ['f', 'l', 'wi', 'wa', 'e'];
	const randomNumber = (Math.floor(Math.random() * 5));
	return choices[randomNumber];
}

function convertToWord(letter){
	if(letter === 'f') return "Fire";
	if(letter === 'l') return "Lightning";
	if(letter === 'wi') return "Wind";
	if(letter === 'wa') return "Water";
	if(letter === 'e') return "Earth";
	if(letter === 'c') return "None";
}

function win(user, computer){
	const userChoice_div = document.getElementById(user)
	userscore++;
	userScore_span.innerHTML = userscore;
	computerScore_span.innerHTML = compscore;
	const smallUserWord = "(user)".fontsize(3).sub();
	const smallCompWord = "(comp)".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(user)} ${smallUserWord} beats ${convertToWord(computer)} ${smallCompWord}. You win!`;
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

	

function lose(user, computer){
	const userChoice_div = document.getElementById(user)
	compscore++;
	userScore_span.innerHTML = userscore;
	computerScore_span.innerHTML = compscore;
	const smallUserWord = "(user)".fontsize(3).sub();
	const smallCompWord = "(comp)".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(computer)} ${smallCompWord} beats ${convertToWord(user)} ${smallUserWord}. You lose!`;
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow') , 300);
}

function draw(user, computer){	
	const userChoice_div = document.getElementById(user)
	result_p.innerHTML = `${convertToWord(computer)} cancels out with ${convertToWord(user)}. Draw!`;
	userScore_span.innerHTML = userscore;
	computerScore_span.innerHTML = compscore;
	userChoice_div.classList.add('gray-glow');
	setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice){
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
		case "fwi":
		case "le":
		case "wil":
		case "waf":
		case "ewa":
			win(userChoice, computerChoice);
			break;

		case "fwa":
		case "lwi":
		case "wif":
		case "wae":
		case "el":
			lose(userChoice, computerChoice);
			break;
		default:
			draw(userChoice, computerChoice);
			break;
		}

}

function info(){
	myWindow = window.open("images/Elements chart.png", '_blank');
}

function moreInfo(){
	window.alert("Note: When an element is going against itself or one that it isn't strong or weak against (E.g: Earth and Wind), it will cancel out or colaborate.");
		
}

//game('f');

function main(){
//window.alert("This game is similar to Rock, Paper, Scissors except I'm using the Elements from Naruto series");


fire_div.addEventListener('click', () => game('f'));

light_div.addEventListener('click', () => game('l'));

wind_div.addEventListener('click', () => game('wi'));

water_div.addEventListener('click', () => game('wa'));

earth_div.addEventListener('click', () => game('e'));

info_div.addEventListener('click', () => info());

info_div.addEventListener('click', () => moreInfo());

moreInfo_div.addEventListener('click', () => moreInfo());

//window.alert("Note: When an element is going against itself or one that it isn't strong or weak against, it will cancel out or colaborate.");
}

main();
