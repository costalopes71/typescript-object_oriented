import { AccountType } from "./account-type";
import { BankingAccount } from "./banking_account";
import { AccountSettings } from "./interfaces";

export class SavingsAccount extends BankingAccount {
    
    private _interestRate: number;
    accountType = AccountType.Savings; // implementing superclass abstract property
    
    constructor(accountSettings: AccountSettings) {
        super(accountSettings);
        this._interestRate = accountSettings.interestRate === undefined ? 0 : accountSettings.interestRate;
        
        // simulate interest over time
        setInterval(() => {
            this.addInterest();
        }, 60000);
        
    }
    
    // overiding concrete method defined in the super class
    deposit(amount: number): void {
        let newAmount: number = amount + (amount * (this._interestRate / 100));
        this.balance += newAmount;
    }

    private addInterest() {
        this.balance = this.balance + (this.balance * (this._interestRate / 100));
    }

}