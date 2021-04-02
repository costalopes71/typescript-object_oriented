import { AccountType } from "./account-type";
import { BankingAccount } from "./banking_account";

export class CheckingAccount extends BankingAccount {
    
    accountType: AccountType = AccountType.Checking;
    
    // super constructor will be called even if i dont have any constructors in my child class

}