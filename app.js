const bot = () => {
	const num = Math.floor(Math.random() * 3);
	let guess = 0;

	if (num === 0) {
		guess = 'rock';
	} else if (num === 1) {
		guess = 'paper';
	} else {
		guess = 'scissors'; 
	}

	return guess;
};

const game = (human, bot) => {

	const rock = (bot) => {
		if (bot === 'rock') {
			return `It's a draw, you both played rock`;
		} else if (bot === 'paper') {
			return `Bot wraps rock with paper`;
		} else {
			return `You crushed bot's scissors`;
		}
	};

	const paper = () => {
		if (bot === 'rock') {
			return `You wrap bot's rock!`;
		} else if (bot === 'paper') {
			return `It's a draw, you both played paper`;
		} else {
			return `Bot cuts your paper with scissors.`;
		}
	};

	const scissors = () => {
		if (bot === 'rock') {
			return `Bot crushed your scissors with rock.`;
		} else if (bot === 'paper') {
			return `You cut bot's paper!`;
		} else {
			return `It's a draw, you both picked scissors`;
		}
	};

	const bomb = () => {
		return `You brought a bomb to a f***ing child's game?
		You win, but you're a monster.`;
	};

	switch (human) {
		case 'rock':
			return rock(bot);
			break;
		case 'paper':
			return paper(bot);
			break;
		case 'scissors':
			return scissors(bot);
			break;
		case 'bomb':
			return bomb();
			break;
		default:
			return 'Not a valid play, you most pick rock, paper, or scissors';
	}

};

const play = () => {
	let player_input = document.getElementById('input').value;
	let formated_input = player_input.toLowerCase();

	const play_game = game(formated_input, bot());
	document.getElementById('text').innerHTML = play_game;
};