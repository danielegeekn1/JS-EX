function calculate() {
  // ...
 
  const calculator ={
            base : 0,
            add(num){
              this.base = this.base + num;
              return this;
            },
            multiply(num){
              this.base = this.base * num;
              return this;
            },
            sub(num){
              this.base = this.base - num;
              return this;
            },
            divide(num){
              this.base = this.base / num;
              return this;
            },
            printResult(){
              console.log(this.base);
            }
  }
  return calculator;
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7

