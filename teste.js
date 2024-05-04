alert ('Bem vindos ao jogo de adivinhar numeros');

let chute = prompt('Escolha um numero: ');

let numeroSecreto = 4;

if (chute == numeroSecreto)
{ 
alert('Acertou ' + numeroSecreto);
}
else
{ 
alert('Errou, o numero era ' + numeroSecreto);
}