let numero1 = document.getElementById('numero1') as HTMLInputElement;
let numero2 = document.getElementById('numero2') as HTMLInputElement;
let btnCalcular = document.getElementById('calcular') as HTMLButtonElement;
let resultado = document.getElementById('resultado') as HTMLDivElement;

function calcular(n1: number, n2: number): number {
  return n1 + n2;
}

btnCalcular.addEventListener('click', ()=> {
  resultado.innerHTML = calcular(+numero1.value, +numero2.value).toString()
});


// =====================
let nomes: string[] = ['nome1', 'nome2', 'nome3'];
let carros: Array<string> = ['nome1', 'nome2', 'nome3'];

let idades: number[] = [90, 15, 20];
let numeros: Array<Number> = [15, 23, 90, 11];

let pesoa: any[] = ['Pedro', 20, true];
// =====================


function firstLetterUpperCase(name: string): string {
  let firstLetter = name.charAt(0).toUpperCase();

  return firstLetter+name.substring(1);
}

let nome = firstLetterUpperCase('antonio');

nomes.forEach((nome) => console.log(nome.toUpperCase()))