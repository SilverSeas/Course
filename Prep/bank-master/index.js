class Bank {
    constructor() {
      this.customers = {};
    }
  
    addCustomer(customer) {
      this.customers[customer] = 0;
    }
  
    printAccount(customer) {
      console.log(`${customer} account is ${this.customers[customer]}`);
    }
  
    deposit(customer, amount) {
      this.customers[customer] += amount;
    }
  
    withdraw(customer, amount) {
      this.customers[customer] -= amount;
    }
  }
  