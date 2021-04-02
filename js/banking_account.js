"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankingAccount = void 0;
var BankingAccount = /** @class */ (function () {
    function BankingAccount(accountSettings) {
        this._balance = 0;
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this._balance = accountSettings.balance;
    }
    Object.defineProperty(BankingAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (newBalance) {
            if (newBalance >= 0) {
                this._balance = newBalance;
            }
            else {
                throw new Error("Balance cannot be negative");
            }
        },
        enumerable: false,
        configurable: true
    });
    return BankingAccount;
}());
exports.BankingAccount = BankingAccount;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFua2luZ19hY2NvdW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYmFua2luZ19hY2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBO0lBT0ksd0JBQVksZUFBb0I7UUFMeEIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQU16QixJQUFJLENBQUMsRUFBRSxHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQztJQUM1QyxDQUFDO0lBRUQsc0JBQUksbUNBQU87YUFBWDtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBRUQsVUFBWSxVQUFrQjtZQUUxQixJQUFJLFVBQVUsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO2FBQzlCO2lCQUFNO2dCQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQzthQUNqRDtRQUVMLENBQUM7OztPQVZBO0lBWUwscUJBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDO0FBM0JZLHdDQUFjIn0=