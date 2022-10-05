class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
    try {
      if (this.#amount >= 0) {
        console.log(amount);
      }
    } catch (error) {
      if (this.#amount <= 0) {
        console.log(error, "red account");
      }
    }
    // throw an exception if amount is negative
  }

  withdraw(amount) {
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    this.#amount -= amount;
    try {
      if ((this.#amount >= 0) | (this.#amount <= amount)) {
        console.log(amount);
      }
    } catch (error) {
      if ((this.amount <= 0) | (this.#amount >= amount)) {
        console.log(error, "red account");
      }
    }
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
