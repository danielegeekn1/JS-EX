//creazione classe
class BankAccount  {
     fund = [];
     deposit (funds){
        this.fund.push(funds);
     }
     withdraw (funds){
        this.fund.pop(funds);
     }
     view (){
        return this.fund;
     }
    }



const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();