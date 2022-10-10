
type Texto = {
  text: string,
  align: 'left' | 'right' | 'center',
}

type VerdadeiroOuFalso = true | false;

type Opcoes = {
  width: number, 
  height: number
}

function mostrarTexto(texto: Texto) {
  return `<div style="${texto.align}">${texto.text}</div>`
}

function temNome(nome: string): VerdadeiroOuFalso {
  if(nome !== '')
    return true
  else
    return false
}

function redimencionar(props: Opcoes | 'auto') {
  // .....
}

mostrarTexto({text: 'Antonio', align: 'center'});
mostrarTexto({text: 'Pedro', align: 'left'});
mostrarTexto({text: 'ttt', align: 'right'});


redimencionar({width: 100, height: 200});
redimencionar('auto');