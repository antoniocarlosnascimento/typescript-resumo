interface User {
  nome: string,
  idade: number
}

let user = {
  nome: 'Antonio',
  idade: 90
}

function resumo(usuario: User): string {
  return `Olá ${usuario.nome} você tem ${usuario.idade} anos`;
}

console.log(resumo(user))