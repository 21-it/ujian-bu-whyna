/**
 * A digital wallet application stores information about a user's account.
 *
 * A wallet has:
 * - Owner name
 * - Wallet ID
 * - Balance
 *
 * For example, Jude Bellingham creates a wallet with:
 * | Property        | Value           |
 * | --------------- | --------------- |
 * | Wallet ID       | WAL001          |
 * | Owner           | Harry Maguire   |
 * | Initial Balance | Rp500,000       |
 *
 * The application allows the user to:
 * - Deposit money
 * - Withdraw money
 * - Check the current balance
 * However, the balance must not be changed directly from outside the class.
 *
 * Student Tasks:
 * Create: class DigitalWallet
 * Use:
 * - private balance: number;
 *
 * The class should provide public methods:
 * - deposit(amount)
 * - withdraw(amount)
 * - getBalance()
 * - showWalletInfo()
 *
 * Business Rules
 * deposit():
 * - Amount must be greater than 0.
 *
 * withdraw():
 * - Amount must be greater than 0.
 * - Amount cannot exceed the current balance.
 */

class Gopay {
  public gopayId: string;
  public owner: string;
  private balance: number;

  constructor(gopayId: string, owner: string, balance: number) {
    this.gopayId = gopayId;
    this.owner = owner;
    this.balance = balance;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposit berhasil: Rp.${amount}`);
    } else {
      console.log(`Error: Jumlah deposit harus lebih dari 0.`);
    }
  }

  public withdraw(amount: number): void {
    if (amount <= 0) {
      console.log(`Error: Jumlah withdrawal harus lebih dari 0.`);
      return;
    }

    if (amount > this.balance) {
      console.log(`Error: Saldo tidak mencukupi.`);
      return;
    }

    this.balance -= amount;
    console.log(`Withdrawal berhasil: Rp.${amount}`);
  }

  public getBalance(): number {
    return this.balance;
  }

  public showWalletInfo(): void {
    console.log(`Wallet ID: ${this.gopayId}`);
    console.log(`Owner: ${this.owner}`);
    console.log(`Current Balance: Rp.${this.balance}`);
  }
}

const gopayWallet = new Gopay("SB001", "Asril Ilham N.F", 1000000);

gopayWallet.showWalletInfo();
gopayWallet.deposit(500000);
console.log(`Current Balance: Rp.${gopayWallet.getBalance()}`);
gopayWallet.withdraw(250000);
console.log(`Current Balance: Rp.${gopayWallet.getBalance()}`);
gopayWallet.showWalletInfo();
