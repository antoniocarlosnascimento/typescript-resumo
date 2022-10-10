                                                // Tipo de Retorno
type MatchFunction = (n1: number, n2: number) => number;

const somar: MatchFunction = (n1, n2) => {
  return n1 + n2;
}

const subtrair: MatchFunction = (n1, n2) => {
  return n1 - n2;
}

const multiplicar: MatchFunction = (n1, n2) => {
  return n1 * n2;
}


// Retorno Void
function removerElement(element: HTMLElement): void {
  if(element.classList.contains('asdas'))
    return;

  element.remove();
}