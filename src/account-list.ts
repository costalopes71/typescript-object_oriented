import { BankingAccount } from "./banking_account";

export class AccountList {

    private _accountList: BankingAccount[] = [];

    add(account: BankingAccount) {
        this._accountList.push(account);
    }

    getAccounts(): BankingAccount[] {
        return this._accountList;
    }

}