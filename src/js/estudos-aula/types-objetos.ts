type UserObject = {
  nome: string,
  idade: number
}

let userObject = {
  nome: 'Antonio',
  idade: 90
}

function resumoObject(usuario: UserObject): string {
  return `Olá ${usuario.nome} você tem ${usuario.idade} anos`;
}

console.log(resumoObject(userObject))