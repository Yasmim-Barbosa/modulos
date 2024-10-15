// Importando as funções dos módulos
import { somar } from './somar.mjs';
import { multiplicar } from './multiplicar.mjs';
import { subtrai} from './subtrair.mjs';
import { dividir} from './dividir.mjs';

// Utilizando as funções importadas
const numero1 = 6;
const numero2 = 2;

const resultadoSoma = somar(numero1, numero2);
const resultadoMultiplicacao = multiplicar(numero1, numero2);
const resultadoSubtrai = subtrai(numero1, numero2);
const resultadoDividir = dividir(numero1, numero2);

console.log(`${numero1} + ${numero2} = ${resultadoSoma}`);
console.log(`${numero1} * ${numero2} = ${resultadoMultiplicacao}`);
console.log(`${numero1} - ${numero2} = ${resultadoSubtrai}`);
console.log(`${numero1} / ${numero2} = ${resultadoDividir}`);