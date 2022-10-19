class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    // throw an exception if amount is negative
    if (amount < 0) {
      throw new Error("negative amount -  operation is not allowed");
    }
    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0 || this.#amount < amount) {
      throw new Error("red account - your account is blocked");
    }
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();
