//Для использывания в разных компонентах
// выносим интерфес в отдеоьный файл

// export interface User{
//   id:number, nameUser:string, age:number, email:string
// }

// Или можем реализовать это в виде классов.
// Для этого в конструкторе передаем переменные в виде аргументов.

export class User{
  constructor(
    public id:number,
    public nameUser:string,
    public age:number,
    public email:string
  ){}
}


