import { AccountType } from "./account-type";
import { Constants } from "./constants";
import { Account, AccountInfo, AccountSettings } from "./interfaces";

export abstract class BankingAccount implements Account {
    
    private _balance: number = 0;
    id: number;
    title: string;
    abstract accountType: AccountType;

    constructor(accountSettings: AccountSettings) {
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this._balance = accountSettings.balance;
    }

    getAccountInfo(): AccountInfo<string,number> {
        return {
            routingNumber: Constants.ROUTING_NUMBER,
            bankNumber: Constants.BANK_NUMBER
        }
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdrawal(amount: number): void {
        this.balance -= amount;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(newBalance: number) {
        
        if (newBalance >= 0) {
            this._balance = newBalance;
        } else {
            throw new Error("Balance cannot be negative");
        }
        
    }

}