const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const boxMessage = screen2.querySelector('.box');
const mensagensBiscoitoDaSorte = [
   "Acredite em si mesmo e os outros o seguirão.",
   "O sucesso chegará quando você menos esperar.",
   "A vida é uma jornada, não um destino.",
   "Seja proativo. Deixe sua mente criar o futuro, em vez de ser refém do passado.",
   "A paciência é amarga, mas seu fruto é doce.",
   "Você é o arquiteto de sua própria vida. Construa-a com cuidado.",
   "Oportunidades vêm raramente; quando ela bate, esteja pronto para abrir a porta.",
   "Sua sorte está na maneira como você pensa.",
   "A melhor maneira de prever o futuro é criá-lo.",
   "A vida é uma série de mudanças naturais e espontâneas. Não se resista a elas; isso só cria tristeza. Deixe a realidade ser realidade. Deixe as coisas fluírem naturalmente para frente da maneira que elas gostam."
];
const figureCookie = document.querySelector('#biscuitUnopened');
const btnReset = document.querySelector('#btnReset');
let randomNumber = Math.round(Math.random() * 10);

figureCookie.addEventListener('click', handleClickCookie);
btnReset.addEventListener('click', handleClickCookie);

function handleClickCookie() {
  toggleScreen();
  boxMessage.innerText = mensagensBiscoitoDaSorte[randomNumber];
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
   screen1.classList.toggle('hide');
   screen2.classList.toggle('hide');
   boxMessage.classList.toggle('box-apparence')
}