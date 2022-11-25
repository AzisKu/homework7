// Создать рабочий класс с методами и приватизировать их
class Worker {
  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) throw new Error("Отсутвует зарплата");
    this.#waterAmount = value;
  }
  #name ='Азис';
  #surname ='Кудашев';
  #rate ='13';
  #days ='11';


get getSalary(){
  return this.#rate*this.#days;
}
get getWorkerinfo(){
  return "Имя:"+ this.#name +
      '\nФамилия:'+ this.#surname +
      '\nЗарплата:'+ this.getSalary
 }
}

const me = new Worker()

let machine = new Worker();

console.log(me.getWorkerinfo)
machine.waterAmount = 11;

alert(machine.waterAmount); //Error