//creazione classe
class BankAccount  {
   
   constructor (Funds){
     this.funds = Funds;

   }
   
   Account = [];
    deposit (funds){
    this.funds = funds;
    this.Account.push(funds++);
    return this.deposit;
    }
    withdraw (funds){
   
    }
    view (funds){

    }
   
   }



const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();