function getComputerChoice() {
    const randomChoice = Math.random();

    if (randomChoice <= 0.33) {
        return "Pedra";
    } else if (randomChoice <= 0.66) {
        return "Papel";
    } else {
        return "Tesoura";
    }
    }

    function getHumanChoice() {
        while (true) { 
        let choice = prompt('Selecione um: "Pedra", "Papel" ou "Tesoura"', '');

        choice = choice.toLowerCase(); // Convertendo a escolha para minúsculas

        if (choice === 'pedra' || choice === 'papel' || choice === 'tesoura') {
            return choice.charAt(0).toUpperCase() + choice.slice(1); // Converte a primeira letra para maiúscula
        } else {
            alert('Opção incorreta! Escolha uma das três opções.');
        }
    }
    }

    function getFinalMessage(humanScore, computerScore) {
        if (humanScore > computerScore) {
            return `A partida terminou com a sua vitória! Parabéns!\n\nScore:\nYou: ${humanScore} | Computer: ${computerScore}`;
        } else if (humanScore < computerScore) {
            return `A partida terminou com a vitória do Computador. :c \n\nScore:\nYou: ${humanScore} | Computer: ${computerScore}`;
        } else {
            return `A partida terminou empatada. \n\nScore:\nYou: ${humanScore} | Computer: ${computerScore}`
        }
    }

    function playRound(humanChoice, computerChoice) {
    let humanWon = undefined;
    
    if (humanChoice === computerChoice) {
        return humanWon; // Retorna undefined para indicar empate
    } else if ( 
        (humanChoice === 'Pedra' && computerChoice === 'Tesoura') ||
        (humanChoice === 'Papel' && computerChoice === 'Pedra') ||
        (humanChoice === 'Tesoura' && computerChoice === 'Papel')
    ) {
        humanWon = true; // Se o jogador humano ganhar
    } else {
        humanWon = false; // Se o computador ganhar
    }
    
    return humanWon;
    }

    function playGame() {
        let humanScore = 0;
        let computerScore = 0;

        let roundsPlayed = 0;

        while (roundsPlayed < 5) {
            const computerChoice = getComputerChoice();
            const humanChoice = getHumanChoice();

            const humanWon = playRound(humanChoice, computerChoice);

            let alertMessage;

            if (humanWon === true) {
                humanScore += 1;
                alertMessage = `Você ganhou! ${humanChoice} X ${computerChoice}. \n\n Pontuação:\nYou: ${humanScore} | Computer: ${computerScore}`;
            } else if (humanWon === false) {
                computerScore += 1;
                alertMessage = `Você perdeu! ${computerChoice} X ${humanChoice}. \n\n Pontuação:\nYou: ${humanScore} | Computer: ${computerScore}`;
            } else {
                alertMessage = `Empate! \n\ Pontuação:\nYou: ${humanScore} | Computer: ${computerScore}`;
            }

            alert(alertMessage);
            roundsPlayed += 1;
        }
        let finalMessage = getFinalMessage(humanScore, computerScore);


    alert(finalMessage);
    }

    while (true) {
        playGame();

        let restartChoice = confirm('Pressione "OK" para reiniciar.');
        if (restartChoice === false) break;
    }
