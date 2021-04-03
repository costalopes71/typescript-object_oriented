/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/account-list.ts":
/*!*****************************!*\
  !*** ./src/account-list.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountList": () => (/* binding */ AccountList)
/* harmony export */ });
var AccountList = /** @class */ (function () {
    function AccountList() {
        this._accountList = [];
    }
    AccountList.prototype.add = function (account) {
        this._accountList.push(account);
    };
    AccountList.prototype.getAccounts = function () {
        return this._accountList;
    };
    return AccountList;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FjY291bnQtbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtJQUFBO1FBRVksaUJBQVksR0FBcUIsRUFBRSxDQUFDO0lBVWhELENBQUM7SUFSRyx5QkFBRyxHQUFILFVBQUksT0FBdUI7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELGlDQUFXLEdBQVg7UUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUMifQ==

/***/ }),

/***/ "./src/account-type.ts":
/*!*****************************!*\
  !*** ./src/account-type.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountType": () => (/* binding */ AccountType)
/* harmony export */ });
var AccountType;
(function (AccountType) {
    AccountType[AccountType["Savings"] = 0] = "Savings";
    AccountType[AccountType["Checking"] = 1] = "Checking";
})(AccountType || (AccountType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC10eXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FjY291bnQtdHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQU4sSUFBWSxXQUtYO0FBTEQsV0FBWSxXQUFXO0lBRW5CLG1EQUFPLENBQUE7SUFDUCxxREFBUSxDQUFBO0FBRVosQ0FBQyxFQUxXLFdBQVcsS0FBWCxXQUFXLFFBS3RCIn0=

/***/ }),

/***/ "./src/atm.ts":
/*!********************!*\
  !*** ./src/atm.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ATM": () => (/* binding */ ATM)
/* harmony export */ });
var ATM = /** @class */ (function () {
    function ATM(account) {
        this.account = account;
    }
    ATM.prototype.deposit = function (amount) {
        this.account.deposit(amount);
    };
    ATM.prototype.withdrawal = function (amount) {
        this.account.withdrawal(amount);
    };
    return ATM;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2F0bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtJQUVJLGFBQW9CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7SUFBSSxDQUFDO0lBRXpDLHFCQUFPLEdBQVAsVUFBUSxNQUFjO1FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCx3QkFBVSxHQUFWLFVBQVcsTUFBYztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUwsVUFBQztBQUFELENBQUMsQUFaRCxJQVlDIn0=

/***/ }),

/***/ "./src/banking_account.ts":
/*!********************************!*\
  !*** ./src/banking_account.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankingAccount": () => (/* binding */ BankingAccount)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");

var BankingAccount = /** @class */ (function () {
    function BankingAccount(accountSettings) {
        this._balance = 0;
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this._balance = accountSettings.balance;
    }
    BankingAccount.prototype.getAccountInfo = function () {
        return {
            routingNumber: _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.ROUTING_NUMBER,
            bankNumber: _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.BANK_NUMBER
        };
    };
    BankingAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankingAccount.prototype.withdrawal = function (amount) {
        this.balance -= amount;
    };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFua2luZ19hY2NvdW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JhbmtpbmdfYWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3hDO0lBT0ksd0JBQVksZUFBZ0M7UUFMcEMsYUFBUSxHQUFXLENBQUMsQ0FBQztRQU16QixJQUFJLENBQUMsRUFBRSxHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQztJQUM1QyxDQUFDO0lBRUQsdUNBQWMsR0FBZDtRQUNJLE9BQU87WUFDSCxhQUFhLEVBQUUsU0FBUyxDQUFDLGNBQWM7WUFDdkMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxXQUFXO1NBQ3BDLENBQUE7SUFDTCxDQUFDO0lBRUQsZ0NBQU8sR0FBUCxVQUFRLE1BQWM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxNQUFjO1FBQ3JCLElBQUksQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDO0lBQzNCLENBQUM7SUFFRCxzQkFBSSxtQ0FBTzthQUFYO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7YUFFRCxVQUFZLFVBQWtCO1lBRTFCLElBQUksVUFBVSxJQUFJLENBQUMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO2FBQ2pEO1FBRUwsQ0FBQzs7O09BVkE7SUFZTCxxQkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0MifQ==

/***/ }),

/***/ "./src/checking-account.ts":
/*!*********************************!*\
  !*** ./src/checking-account.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckingAccount": () => (/* binding */ CheckingAccount)
/* harmony export */ });
/* harmony import */ var _account_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-type */ "./src/account-type.ts");
/* harmony import */ var _banking_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banking_account */ "./src/banking_account.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.accountType = _account_type__WEBPACK_IMPORTED_MODULE_0__.AccountType.Checking;
        return _this;
        // super constructor will be called even if i dont have any constructors in my child class
    }
    return CheckingAccount;
}(_banking_account__WEBPACK_IMPORTED_MODULE_1__.BankingAccount));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tpbmctYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGVja2luZy1hY2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQ7SUFBcUMsbUNBQWM7SUFBbkQ7UUFBQSxxRUFNQztRQUpHLGlCQUFXLEdBQWdCLFdBQVcsQ0FBQyxRQUFRLENBQUM7O1FBRWhELDBGQUEwRjtJQUU5RixDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBcUMsY0FBYyxHQU1sRCJ9

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Constants": () => (/* binding */ Constants)
/* harmony export */ });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "ROUTING_NUMBER", {
        get: function () {
            return '1231A4433Y2';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "BANK_NUMBER", {
        get: function () {
            return 100008374;
        },
        enumerable: false,
        configurable: true
    });
    return Constants;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUFBO0lBU0EsQ0FBQztJQVBHLHNCQUFXLDJCQUFjO2FBQXpCO1lBQ0ksT0FBTyxhQUFhLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx3QkFBVzthQUF0QjtZQUNJLE9BQU8sU0FBUyxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQyJ9

/***/ }),

/***/ "./src/renderer.ts":
/*!*************************!*\
  !*** ./src/renderer.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Renderer": () => (/* binding */ Renderer)
/* harmony export */ });
var Renderer = /** @class */ (function () {
    function Renderer(viewTemplate) {
        this.viewTemplate = viewTemplate;
        this.viewTemplate.innerHTML = "\n            <h2>Welcome to Acme Bank!</h2>\n            <image src=\"src/images/acmebank.jpg\" height=\"150\">\n            <br /><br />\n            <h5>Your Accounts:</h5><br />";
    }
    Renderer.prototype.render = function (html) {
        this.viewTemplate.innerHTML = html;
    };
    Renderer.prototype.renderError = function (message) {
        this.viewTemplate.innerHTML += "<br /><br /><div class=\"alert alert-danger\">" + message + "</div>";
    };
    return Renderer;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBb0IsWUFBNEI7UUFBNUIsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLHVMQUlJLENBQUM7SUFDdkMsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxJQUFZO1FBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw4QkFBVyxHQUFYLFVBQVksT0FBZTtRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsSUFBSSxtREFBK0MsT0FBTyxXQUFRLENBQUM7SUFDbEcsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDIn0=

/***/ }),

/***/ "./src/savings-account.ts":
/*!********************************!*\
  !*** ./src/savings-account.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavingsAccount": () => (/* binding */ SavingsAccount)
/* harmony export */ });
/* harmony import */ var _account_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-type */ "./src/account-type.ts");
/* harmony import */ var _banking_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banking_account */ "./src/banking_account.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountSettings) {
        var _this = _super.call(this, accountSettings) || this;
        _this.accountType = _account_type__WEBPACK_IMPORTED_MODULE_0__.AccountType.Savings; // implementing superclass abstract property
        _this._interestRate = accountSettings.interestRate === undefined ? 0 : accountSettings.interestRate;
        // simulate interest over time
        setInterval(function () {
            _this.addInterest();
        }, 60000);
        return _this;
    }
    // overiding concrete method defined in the super class
    SavingsAccount.prototype.deposit = function (amount) {
        var newAmount = amount + (amount * (this._interestRate / 100));
        this.balance += newAmount;
    };
    SavingsAccount.prototype.addInterest = function () {
        this.balance = this.balance + (this.balance * (this._interestRate / 100));
    };
    return SavingsAccount;
}(_banking_account__WEBPACK_IMPORTED_MODULE_1__.BankingAccount));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2aW5ncy1hY2NvdW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NhdmluZ3MtYWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR25EO0lBQW9DLGtDQUFjO0lBSzlDLHdCQUFZLGVBQWdDO1FBQTVDLFlBQ0ksa0JBQU0sZUFBZSxDQUFDLFNBUXpCO1FBWEQsaUJBQVcsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsNENBQTRDO1FBSTNFLEtBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLFlBQVksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQztRQUVuRyw4QkFBOEI7UUFDOUIsV0FBVyxDQUFDO1lBQ1IsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzs7SUFFZCxDQUFDO0lBRUQsdURBQXVEO0lBQ3ZELGdDQUFPLEdBQVAsVUFBUSxNQUFjO1FBQ2xCLElBQUksU0FBUyxHQUFXLE1BQU0sR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBRU8sb0NBQVcsR0FBbkI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFTCxxQkFBQztBQUFELENBQUMsQUExQkQsQ0FBb0MsY0FBYyxHQTBCakQifQ==

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checking_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checking-account */ "./src/checking-account.ts");
/* harmony import */ var _savings_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./savings-account */ "./src/savings-account.ts");
/* harmony import */ var _account_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-list */ "./src/account-list.ts");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderer */ "./src/renderer.ts");
/* harmony import */ var _account_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account-type */ "./src/account-type.ts");
/* harmony import */ var _atm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./atm */ "./src/atm.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var Main = /** @class */ (function () {
    function Main(renderer) {
        this.renderer = renderer;
    }
    Main.prototype.loadAccounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('/data.json')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        this.checkingAccount = new _checking_account__WEBPACK_IMPORTED_MODULE_0__.CheckingAccount(__assign({}, data.checkingAccount));
                        this.savingsAccount = new _savings_account__WEBPACK_IMPORTED_MODULE_1__.SavingsAccount(__assign({}, data.savingsAccount));
                        this.atm = new _atm__WEBPACK_IMPORTED_MODULE_5__.ATM(this.checkingAccount);
                        html = this.renderAccounts();
                        this.renderer.render("\n            <h2>Welcome to Acme Bank!</h2><br />\n            <image src=\"src/images/acmebank.jpg\" height=\"150\">\n            <br /><br />\n            <h5>Your Accounts:</h5><br />\n            " + html + "\n        ");
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.changeView = function (view) {
        switch (view) {
            case 'checking':
                this.currentAccount = this.checkingAccount;
                break;
            case 'savings':
                this.currentAccount = this.savingsAccount;
                break;
            case 'atm':
                this.currentAccount = this.checkingAccount;
                this.renderAtm();
                return;
        }
        this.renderAccount(this.currentAccount);
    };
    Main.prototype.renderAtm = function () {
        var html = "\n                <h3>ATM</h3>\n                <image src=\"src/images/atm.jpg\" height=\"150\">\n                <br /><br />\n                Current Checking Account Balance: $" + this.checkingAccount.balance + "\n                <br /><br />\n                $<input type=\"text\" id=\"depositWithdrawalAmount\">&nbsp;&nbsp;\n                <button onclick=\"main.depositWithDrawal(true, true)\">Deposit</button>&nbsp;\n                <button onclick=\"main.depositWithDrawal(false, true)\">Withdrawal</button>&nbsp;\n            ";
        this.renderer.render(html);
    };
    Main.prototype.renderAccounts = function () {
        var acctsHtml = '';
        var accList = new _account_list__WEBPACK_IMPORTED_MODULE_2__.AccountList();
        accList.add(this.checkingAccount);
        accList.add(this.savingsAccount);
        accList.getAccounts().forEach(function (acct, index) {
            acctsHtml += acct.title + '<br />';
        });
        return acctsHtml;
    };
    Main.prototype.renderAccount = function (account) {
        var accountType = _account_type__WEBPACK_IMPORTED_MODULE_4__.AccountType[account.accountType];
        var html = "\n                <h3>" + accountType + " Account</h3>\n                <image src=\"src/images/" + accountType.toLowerCase() + ".jpg\" height=\"150\">\n                <br /><br />\n                <span class=\"label\">Owner:</span> " + account.title + "\n                <br />\n                <span class=\"label\">Balance:</span> $" + account.balance.toFixed(2) + "\n                <br /><br />\n                $<input type=\"text\" id=\"depositWithdrawalAmount\">&nbsp;&nbsp;\n                <button onclick=\"main.depositWithDrawal(true)\">Deposit</button>&nbsp;\n                <button onclick=\"main.depositWithDrawal(false)\">Withdrawal</button>&nbsp;\n            ";
        this.renderer.render(html);
    };
    Main.prototype.depositWithDrawal = function (deposit, atm) {
        var amountInput = document.querySelector('#depositWithdrawalAmount');
        var amount = +amountInput.value;
        var error;
        try {
            if (deposit) {
                if (atm) {
                    this.atm.deposit(amount);
                }
                else {
                    this.currentAccount.deposit(amount);
                }
            }
            else {
                if (atm) {
                    this.atm.withdrawal(amount);
                }
                else {
                    this.currentAccount.withdrawal(amount);
                }
            }
        }
        catch (e) {
            error = e;
        }
        (atm) ? this.renderAtm() : this.renderAccount(this.currentAccount);
        if (error) {
            this.renderer.renderError(error.message);
        }
    };
    return Main;
}());
// Create main object and add handlers for it
var renderer = new _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer(document.querySelector('#viewTemplate'));
var main = new Main(renderer);
main.loadAccounts();
// Quick and easy way to expose a global API that can hook to the Main object
// so that we can get to it from click and events and others.
// Yes, there are other ways but this gets the job done for this demo.
window.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUU1QjtJQU1JLGNBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBSSxDQUFDO0lBRXJDLDJCQUFZLEdBQWxCOzs7Ozs0QkFDcUIscUJBQU0sS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFBOzt3QkFBcEMsUUFBUSxHQUFHLFNBQXlCO3dCQUM3QixxQkFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUE1QixJQUFJLEdBQUcsU0FBcUI7d0JBQ2xDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxlQUFlLGNBQU0sSUFBSSxDQUFDLGVBQWUsRUFBRyxDQUFDO3dCQUN4RSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksY0FBYyxjQUFNLElBQUksQ0FBQyxjQUFjLEVBQUcsQ0FBQzt3QkFDckUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7d0JBRXJDLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLDhNQUtmLElBQUksZUFDVCxDQUFDLENBQUM7Ozs7O0tBQ047SUFFRCx5QkFBVSxHQUFWLFVBQVcsSUFBYTtRQUNwQixRQUFRLElBQUksRUFBRTtZQUNWLEtBQUssVUFBVTtnQkFDWCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7Z0JBQzNDLE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1YsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO2dCQUMxQyxNQUFNO1lBQ1YsS0FBSyxLQUFLO2dCQUNOLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixPQUFPO1NBQ2Q7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsd0JBQVMsR0FBVDtRQUNJLElBQU0sSUFBSSxHQUFHLHlMQUlnQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sc1VBS3BFLENBQUM7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsNkJBQWMsR0FBZDtRQUNJLElBQUksU0FBUyxHQUFXLEVBQUUsQ0FBQztRQUMzQixJQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWpDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztZQUN0QyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQsNEJBQWEsR0FBYixVQUFjLE9BQXVCO1FBQ2pDLElBQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckQsSUFBTSxJQUFJLEdBQUcsMkJBQ0MsV0FBVywrREFDUSxXQUFXLENBQUMsV0FBVyxFQUFFLGtIQUVkLE9BQU8sQ0FBQyxLQUFLLHlGQUVWLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQywwVEFLcEUsQ0FBQztRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxnQ0FBaUIsR0FBakIsVUFBa0IsT0FBZ0IsRUFBRSxHQUFhO1FBQzdDLElBQUksV0FBVyxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDdkYsSUFBSSxNQUFNLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksS0FBSyxDQUFDO1FBQ1YsSUFBSTtZQUNBLElBQUksT0FBTyxFQUFFO2dCQUNULElBQUksR0FBRyxFQUFFO29CQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUM1QjtxQkFDSTtvQkFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDdkM7YUFDSjtpQkFDSTtnQkFDRCxJQUFJLEdBQUcsRUFBRTtvQkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDL0I7cUJBQ0k7b0JBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzFDO2FBQ0o7U0FDSjtRQUNELE9BQU8sQ0FBQyxFQUFFO1lBQ04sS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNiO1FBRUQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsRSxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxBQW5IRCxJQW1IQztBQUVELDZDQUE2QztBQUM3QyxJQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFDdkUsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBRXBCLDZFQUE2RTtBQUM3RSw2REFBNkQ7QUFDN0Qsc0VBQXNFO0FBQ2hFLE1BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDIn0=
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LWNyZWF0aW5nX29vX3R5cGVzY3JpcHRjb2RlLy4vc3JjL2FjY291bnQtbGlzdC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWNyZWF0aW5nX29vX3R5cGVzY3JpcHRjb2RlLy4vc3JjL2FjY291bnQtdHlwZS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWNyZWF0aW5nX29vX3R5cGVzY3JpcHRjb2RlLy4vc3JjL2F0bS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWNyZWF0aW5nX29vX3R5cGVzY3JpcHRjb2RlLy4vc3JjL2JhbmtpbmdfYWNjb3VudC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWNyZWF0aW5nX29vX3R5cGVzY3JpcHRjb2RlLy4vc3JjL2NoZWNraW5nLWFjY291bnQudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1jcmVhdGluZ19vb190eXBlc2NyaXB0Y29kZS8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1jcmVhdGluZ19vb190eXBlc2NyaXB0Y29kZS8uL3NyYy9yZW5kZXJlci50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWNyZWF0aW5nX29vX3R5cGVzY3JpcHRjb2RlLy4vc3JjL3NhdmluZ3MtYWNjb3VudC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWNyZWF0aW5nX29vX3R5cGVzY3JpcHRjb2RlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHQtY3JlYXRpbmdfb29fdHlwZXNjcmlwdGNvZGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHQtY3JlYXRpbmdfb29fdHlwZXNjcmlwdGNvZGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWNyZWF0aW5nX29vX3R5cGVzY3JpcHRjb2RlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1jcmVhdGluZ19vb190eXBlc2NyaXB0Y29kZS8uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDc0I7QUFDdkIsMkNBQTJDLCtjOzs7Ozs7Ozs7Ozs7OztBQ2JwQztBQUNQO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0NBQWtDO0FBQ25DLDJDQUEyQyxtVDs7Ozs7Ozs7Ozs7Ozs7QUNMM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDYztBQUNmLDJDQUEyQywyZTs7Ozs7Ozs7Ozs7Ozs7O0FDYkg7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdFQUF3QjtBQUNuRCx3QkFBd0IsNkRBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDeUI7QUFDMUIsMkNBQTJDLG1wQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDM0MsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLDhFQUE4RTtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQzRDO0FBQ007QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0RBQW9CO0FBQ2hEO0FB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QTtBQUNBO0FBQ0EsbURBQW1ELDhEQUFlLFlBQVk7QUFDOUUsa0RBQWtELDREQUFjLFlBQVk7QUFDNUUsdUNBQXVDLHFDQUFHO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdVZBQXVWLE1BQU0sK0ZBQStGLG1HQUFtRztBQUMvaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsc0RBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHNEQUFXO0FBQ3JDLGtmQUFrZixNQUFNLHlGQUF5Riw2RkFBNkY7QUFDOXFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLG1CQUFtQiwrQ0FBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdWlJIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBBY2NvdW50TGlzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBY2NvdW50TGlzdCgpIHtcbiAgICAgICAgdGhpcy5fYWNjb3VudExpc3QgPSBbXTtcbiAgICB9XG4gICAgQWNjb3VudExpc3QucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChhY2NvdW50KSB7XG4gICAgICAgIHRoaXMuX2FjY291bnRMaXN0LnB1c2goYWNjb3VudCk7XG4gICAgfTtcbiAgICBBY2NvdW50TGlzdC5wcm90b3R5cGUuZ2V0QWNjb3VudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY2NvdW50TGlzdDtcbiAgICB9O1xuICAgIHJldHVybiBBY2NvdW50TGlzdDtcbn0oKSk7XG5leHBvcnQgeyBBY2NvdW50TGlzdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVdOamIzVnVkQzFzYVhOMExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMkZqWTI5MWJuUXRiR2x6ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkZRVHRKUVVGQk8xRkJSVmtzYVVKQlFWa3NSMEZCY1VJc1JVRkJSU3hEUVVGRE8wbEJWV2hFTEVOQlFVTTdTVUZTUnl4NVFrRkJSeXhIUVVGSUxGVkJRVWtzVDBGQmRVSTdVVUZEZGtJc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkRjRU1zUTBGQlF6dEpRVVZFTEdsRFFVRlhMRWRCUVZnN1VVRkRTU3hQUVVGUExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTTdTVUZETjBJc1EwRkJRenRKUVVWTUxHdENRVUZETzBGQlFVUXNRMEZCUXl4QlFWcEVMRWxCV1VNaWZRPT0iLCJleHBvcnQgdmFyIEFjY291bnRUeXBlO1xuKGZ1bmN0aW9uIChBY2NvdW50VHlwZSkge1xuICAgIEFjY291bnRUeXBlW0FjY291bnRUeXBlW1wiU2F2aW5nc1wiXSA9IDBdID0gXCJTYXZpbmdzXCI7XG4gICAgQWNjb3VudFR5cGVbQWNjb3VudFR5cGVbXCJDaGVja2luZ1wiXSA9IDFdID0gXCJDaGVja2luZ1wiO1xufSkoQWNjb3VudFR5cGUgfHwgKEFjY291bnRUeXBlID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlXTmpiM1Z1ZEMxMGVYQmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJGalkyOTFiblF0ZEhsd1pTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRU5CUVU0c1NVRkJXU3hYUVV0WU8wRkJURVFzVjBGQldTeFhRVUZYTzBsQlJXNUNMRzFFUVVGUExFTkJRVUU3U1VGRFVDeHhSRUZCVVN4RFFVRkJPMEZCUlZvc1EwRkJReXhGUVV4WExGZEJRVmNzUzBGQldDeFhRVUZYTEZGQlMzUkNJbjA9IiwidmFyIEFUTSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBVE0oYWNjb3VudCkge1xuICAgICAgICB0aGlzLmFjY291bnQgPSBhY2NvdW50O1xuICAgIH1cbiAgICBBVE0ucHJvdG90eXBlLmRlcG9zaXQgPSBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgIHRoaXMuYWNjb3VudC5kZXBvc2l0KGFtb3VudCk7XG4gICAgfTtcbiAgICBBVE0ucHJvdG90eXBlLndpdGhkcmF3YWwgPSBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgIHRoaXMuYWNjb3VudC53aXRoZHJhd2FsKGFtb3VudCk7XG4gICAgfTtcbiAgICByZXR1cm4gQVRNO1xufSgpKTtcbmV4cG9ydCB7IEFUTSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVhSdExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMkYwYlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkZRVHRKUVVWSkxHRkJRVzlDTEU5QlFXZENPMUZCUVdoQ0xGbEJRVThzUjBGQlVDeFBRVUZQTEVOQlFWTTdTVUZCU1N4RFFVRkRPMGxCUlhwRExIRkNRVUZQTEVkQlFWQXNWVUZCVVN4TlFVRmpPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRMnBETEVOQlFVTTdTVUZGUkN4M1FrRkJWU3hIUVVGV0xGVkJRVmNzVFVGQll6dFJRVU55UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTndReXhEUVVGRE8wbEJSVXdzVlVGQlF6dEJRVUZFTEVOQlFVTXNRVUZhUkN4SlFWbERJbjA9IiwiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG52YXIgQmFua2luZ0FjY291bnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmFua2luZ0FjY291bnQoYWNjb3VudFNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX2JhbGFuY2UgPSAwO1xuICAgICAgICB0aGlzLmlkID0gYWNjb3VudFNldHRpbmdzLmlkO1xuICAgICAgICB0aGlzLnRpdGxlID0gYWNjb3VudFNldHRpbmdzLnRpdGxlO1xuICAgICAgICB0aGlzLl9iYWxhbmNlID0gYWNjb3VudFNldHRpbmdzLmJhbGFuY2U7XG4gICAgfVxuICAgIEJhbmtpbmdBY2NvdW50LnByb3RvdHlwZS5nZXRBY2NvdW50SW5mbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvdXRpbmdOdW1iZXI6IENvbnN0YW50cy5ST1VUSU5HX05VTUJFUixcbiAgICAgICAgICAgIGJhbmtOdW1iZXI6IENvbnN0YW50cy5CQU5LX05VTUJFUlxuICAgICAgICB9O1xuICAgIH07XG4gICAgQmFua2luZ0FjY291bnQucHJvdG90eXBlLmRlcG9zaXQgPSBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgIHRoaXMuYmFsYW5jZSArPSBhbW91bnQ7XG4gICAgfTtcbiAgICBCYW5raW5nQWNjb3VudC5wcm90b3R5cGUud2l0aGRyYXdhbCA9IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgdGhpcy5iYWxhbmNlIC09IGFtb3VudDtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCYW5raW5nQWNjb3VudC5wcm90b3R5cGUsIFwiYmFsYW5jZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2JhbGFuY2U7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0JhbGFuY2UpIHtcbiAgICAgICAgICAgIGlmIChuZXdCYWxhbmNlID49IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iYWxhbmNlID0gbmV3QmFsYW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJhbGFuY2UgY2Fubm90IGJlIG5lZ2F0aXZlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEJhbmtpbmdBY2NvdW50O1xufSgpKTtcbmV4cG9ydCB7IEJhbmtpbmdBY2NvdW50IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZbUZ1YTJsdVoxOWhZMk52ZFc1MExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMkpoYm10cGJtZGZZV05qYjNWdWRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZEUVN4UFFVRlBMRVZCUVVVc1UwRkJVeXhGUVVGRkxFMUJRVTBzWVVGQllTeERRVUZETzBGQlIzaERPMGxCVDBrc2QwSkJRVmtzWlVGQlowTTdVVUZNY0VNc1lVRkJVU3hIUVVGWExFTkJRVU1zUTBGQlF6dFJRVTE2UWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExHVkJRV1VzUTBGQlF5eEZRVUZGTEVOQlFVTTdVVUZETjBJc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eGxRVUZsTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUTI1RExFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NaVUZCWlN4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVNMVF5eERRVUZETzBsQlJVUXNkVU5CUVdNc1IwRkJaRHRSUVVOSkxFOUJRVTg3V1VGRFNDeGhRVUZoTEVWQlFVVXNVMEZCVXl4RFFVRkRMR05CUVdNN1dVRkRka01zVlVGQlZTeEZRVUZGTEZOQlFWTXNRMEZCUXl4WFFVRlhPMU5CUTNCRExFTkJRVUU3U1VGRFRDeERRVUZETzBsQlJVUXNaME5CUVU4c1IwRkJVQ3hWUVVGUkxFMUJRV003VVVGRGJFSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1NVRkJTU3hOUVVGTkxFTkJRVU03U1VGRE0wSXNRMEZCUXp0SlFVVkVMRzFEUVVGVkxFZEJRVllzVlVGQlZ5eE5RVUZqTzFGQlEzSkNMRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzVFVGQlRTeERRVUZETzBsQlF6TkNMRU5CUVVNN1NVRkZSQ3h6UWtGQlNTeHRRMEZCVHp0aFFVRllPMWxCUTBrc1QwRkJUeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETzFGQlEzcENMRU5CUVVNN1lVRkZSQ3hWUVVGWkxGVkJRV3RDTzFsQlJURkNMRWxCUVVrc1ZVRkJWU3hKUVVGSkxFTkJRVU1zUlVGQlJUdG5Ra0ZEYWtJc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFZRVUZWTEVOQlFVTTdZVUZET1VJN2FVSkJRVTA3WjBKQlEwZ3NUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXcwUWtGQk5FSXNRMEZCUXl4RFFVRkRPMkZCUTJwRU8xRkJSVXdzUTBGQlF6czdPMDlCVmtFN1NVRlpUQ3h4UWtGQlF6dEJRVUZFTEVOQlFVTXNRVUV4UTBRc1NVRXdRME1pZlE9PSIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBBY2NvdW50VHlwZSB9IGZyb20gXCIuL2FjY291bnQtdHlwZVwiO1xuaW1wb3J0IHsgQmFua2luZ0FjY291bnQgfSBmcm9tIFwiLi9iYW5raW5nX2FjY291bnRcIjtcbnZhciBDaGVja2luZ0FjY291bnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENoZWNraW5nQWNjb3VudCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDaGVja2luZ0FjY291bnQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5hY2NvdW50VHlwZSA9IEFjY291bnRUeXBlLkNoZWNraW5nO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIC8vIHN1cGVyIGNvbnN0cnVjdG9yIHdpbGwgYmUgY2FsbGVkIGV2ZW4gaWYgaSBkb250IGhhdmUgYW55IGNvbnN0cnVjdG9ycyBpbiBteSBjaGlsZCBjbGFzc1xuICAgIH1cbiAgICByZXR1cm4gQ2hlY2tpbmdBY2NvdW50O1xufShCYW5raW5nQWNjb3VudCkpO1xuZXhwb3J0IHsgQ2hlY2tpbmdBY2NvdW50IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMmhsWTJ0cGJtY3RZV05qYjNWdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlqYUdWamEybHVaeTFoWTJOdmRXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096dEJRVUZCTEU5QlFVOHNSVUZCUlN4WFFVRlhMRVZCUVVVc1RVRkJUU3huUWtGQlowSXNRMEZCUXp0QlFVTTNReXhQUVVGUExFVkJRVVVzWTBGQll5eEZRVUZGTEUxQlFVMHNiVUpCUVcxQ0xFTkJRVU03UVVGRmJrUTdTVUZCY1VNc2JVTkJRV003U1VGQmJrUTdVVUZCUVN4eFJVRk5RenRSUVVwSExHbENRVUZYTEVkQlFXZENMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU03TzFGQlJXaEVMREJHUVVFd1JqdEpRVVU1Uml4RFFVRkRPMGxCUVVRc2MwSkJRVU03UVVGQlJDeERRVUZETEVGQlRrUXNRMEZCY1VNc1kwRkJZeXhIUVUxc1JDSjkiLCJ2YXIgQ29uc3RhbnRzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbnN0YW50cygpIHtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0YW50cywgXCJST1VUSU5HX05VTUJFUlwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICcxMjMxQTQ0MzNZMic7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RhbnRzLCBcIkJBTktfTlVNQkVSXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gMTAwMDA4Mzc0O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIENvbnN0YW50cztcbn0oKSk7XG5leHBvcnQgeyBDb25zdGFudHMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXVjM1JoYm5SekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMk52Ym5OMFlXNTBjeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUdEpRVUZCTzBsQlUwRXNRMEZCUXp0SlFWQkhMSE5DUVVGWExESkNRVUZqTzJGQlFYcENPMWxCUTBrc1QwRkJUeXhoUVVGaExFTkJRVU03VVVGRGVrSXNRMEZCUXpzN08wOUJRVUU3U1VGRlJDeHpRa0ZCVnl4M1FrRkJWenRoUVVGMFFqdFpRVU5KTEU5QlFVOHNVMEZCVXl4RFFVRkRPMUZCUTNKQ0xFTkJRVU03T3p0UFFVRkJPMGxCUTB3c1owSkJRVU03UVVGQlJDeERRVUZETEVGQlZFUXNTVUZUUXlKOSIsInZhciBSZW5kZXJlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZW5kZXJlcih2aWV3VGVtcGxhdGUpIHtcbiAgICAgICAgdGhpcy52aWV3VGVtcGxhdGUgPSB2aWV3VGVtcGxhdGU7XG4gICAgICAgIHRoaXMudmlld1RlbXBsYXRlLmlubmVySFRNTCA9IFwiXFxuICAgICAgICAgICAgPGgyPldlbGNvbWUgdG8gQWNtZSBCYW5rITwvaDI+XFxuICAgICAgICAgICAgPGltYWdlIHNyYz1cXFwic3JjL2ltYWdlcy9hY21lYmFuay5qcGdcXFwiIGhlaWdodD1cXFwiMTUwXFxcIj5cXG4gICAgICAgICAgICA8YnIgLz48YnIgLz5cXG4gICAgICAgICAgICA8aDU+WW91ciBBY2NvdW50czo8L2g1PjxiciAvPlwiO1xuICAgIH1cbiAgICBSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgdGhpcy52aWV3VGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICB9O1xuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJFcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMudmlld1RlbXBsYXRlLmlubmVySFRNTCArPSBcIjxiciAvPjxiciAvPjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+XCIgKyBtZXNzYWdlICsgXCI8L2Rpdj5cIjtcbiAgICB9O1xuICAgIHJldHVybiBSZW5kZXJlcjtcbn0oKSk7XG5leHBvcnQgeyBSZW5kZXJlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY21WdVpHVnlaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmNtVnVaR1Z5WlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3U1VGRFNTeHJRa0ZCYjBJc1dVRkJORUk3VVVGQk5VSXNhVUpCUVZrc1IwRkJXaXhaUVVGWkxFTkJRV2RDTzFGQlF6VkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVTBGQlV5eEhRVUZITEhWTVFVbEpMRU5CUVVNN1NVRkRka01zUTBGQlF6dEpRVVZFTEhsQ1FVRk5MRWRCUVU0c1ZVRkJUeXhKUVVGWk8xRkJRMllzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRE8wbEJRM1pETEVOQlFVTTdTVUZGUkN3NFFrRkJWeXhIUVVGWUxGVkJRVmtzVDBGQlpUdFJRVU4yUWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGTkJRVk1zU1VGQlNTeHRSRUZCSzBNc1QwRkJUeXhYUVVGUkxFTkJRVU03U1VGRGJFY3NRMEZCUXp0SlFVTk1MR1ZCUVVNN1FVRkJSQ3hEUVVGRExFRkJhRUpFTEVsQlowSkRJbjA9IiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IEFjY291bnRUeXBlIH0gZnJvbSBcIi4vYWNjb3VudC10eXBlXCI7XG5pbXBvcnQgeyBCYW5raW5nQWNjb3VudCB9IGZyb20gXCIuL2JhbmtpbmdfYWNjb3VudFwiO1xudmFyIFNhdmluZ3NBY2NvdW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTYXZpbmdzQWNjb3VudCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTYXZpbmdzQWNjb3VudChhY2NvdW50U2V0dGluZ3MpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgYWNjb3VudFNldHRpbmdzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5hY2NvdW50VHlwZSA9IEFjY291bnRUeXBlLlNhdmluZ3M7IC8vIGltcGxlbWVudGluZyBzdXBlcmNsYXNzIGFic3RyYWN0IHByb3BlcnR5XG4gICAgICAgIF90aGlzLl9pbnRlcmVzdFJhdGUgPSBhY2NvdW50U2V0dGluZ3MuaW50ZXJlc3RSYXRlID09PSB1bmRlZmluZWQgPyAwIDogYWNjb3VudFNldHRpbmdzLmludGVyZXN0UmF0ZTtcbiAgICAgICAgLy8gc2ltdWxhdGUgaW50ZXJlc3Qgb3ZlciB0aW1lXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFkZEludGVyZXN0KCk7XG4gICAgICAgIH0sIDYwMDAwKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvLyBvdmVyaWRpbmcgY29uY3JldGUgbWV0aG9kIGRlZmluZWQgaW4gdGhlIHN1cGVyIGNsYXNzXG4gICAgU2F2aW5nc0FjY291bnQucHJvdG90eXBlLmRlcG9zaXQgPSBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgIHZhciBuZXdBbW91bnQgPSBhbW91bnQgKyAoYW1vdW50ICogKHRoaXMuX2ludGVyZXN0UmF0ZSAvIDEwMCkpO1xuICAgICAgICB0aGlzLmJhbGFuY2UgKz0gbmV3QW1vdW50O1xuICAgIH07XG4gICAgU2F2aW5nc0FjY291bnQucHJvdG90eXBlLmFkZEludGVyZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmJhbGFuY2UgPSB0aGlzLmJhbGFuY2UgKyAodGhpcy5iYWxhbmNlICogKHRoaXMuX2ludGVyZXN0UmF0ZSAvIDEwMCkpO1xuICAgIH07XG4gICAgcmV0dXJuIFNhdmluZ3NBY2NvdW50O1xufShCYW5raW5nQWNjb3VudCkpO1xuZXhwb3J0IHsgU2F2aW5nc0FjY291bnQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMyRjJhVzVuY3kxaFkyTnZkVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwzTmhkbWx1WjNNdFlXTmpiM1Z1ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3UVVGQlFTeFBRVUZQTEVWQlFVVXNWMEZCVnl4RlFVRkZMRTFCUVUwc1owSkJRV2RDTEVOQlFVTTdRVUZETjBNc1QwRkJUeXhGUVVGRkxHTkJRV01zUlVGQlJTeE5RVUZOTEcxQ1FVRnRRaXhEUVVGRE8wRkJSMjVFTzBsQlFXOURMR3REUVVGak8wbEJTemxETEhkQ1FVRlpMR1ZCUVdkRE8xRkJRVFZETEZsQlEwa3NhMEpCUVUwc1pVRkJaU3hEUVVGRExGTkJVWHBDTzFGQldFUXNhVUpCUVZjc1IwRkJSeXhYUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNORU5CUVRSRE8xRkJTVE5GTEV0QlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1pVRkJaU3hEUVVGRExGbEJRVmtzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zWlVGQlpTeERRVUZETEZsQlFWa3NRMEZCUXp0UlFVVnVSeXc0UWtGQk9FSTdVVUZET1VJc1YwRkJWeXhEUVVGRE8xbEJRMUlzUzBGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUTNaQ0xFTkJRVU1zUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXpzN1NVRkZaQ3hEUVVGRE8wbEJSVVFzZFVSQlFYVkVPMGxCUTNaRUxHZERRVUZQTEVkQlFWQXNWVUZCVVN4TlFVRmpPMUZCUTJ4Q0xFbEJRVWtzVTBGQlV5eEhRVUZYTEUxQlFVMHNSMEZCUnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOMlJTeEpRVUZKTEVOQlFVTXNUMEZCVHl4SlFVRkpMRk5CUVZNc1EwRkJRenRKUVVNNVFpeERRVUZETzBsQlJVOHNiME5CUVZjc1IwRkJia0k3VVVGRFNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpsRkxFTkJRVU03U1VGRlRDeHhRa0ZCUXp0QlFVRkVMRU5CUVVNc1FVRXhRa1FzUTBGQmIwTXNZMEZCWXl4SFFUQkNha1FpZlE9PSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBDaGVja2luZ0FjY291bnQgfSBmcm9tICcuL2NoZWNraW5nLWFjY291bnQnO1xuaW1wb3J0IHsgU2F2aW5nc0FjY291bnQgfSBmcm9tICcuL3NhdmluZ3MtYWNjb3VudCc7XG5pbXBvcnQgeyBBY2NvdW50TGlzdCB9IGZyb20gJy4vYWNjb3VudC1saXN0JztcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgeyBBY2NvdW50VHlwZSB9IGZyb20gJy4vYWNjb3VudC10eXBlJztcbmltcG9ydCB7IEFUTSB9IGZyb20gJy4vYXRtJztcbnZhciBNYWluID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1haW4ocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIH1cbiAgICBNYWluLnByb3RvdHlwZS5sb2FkQWNjb3VudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgZGF0YSwgaHRtbDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2goJy9kYXRhLmpzb24nKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzcG9uc2UuanNvbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tpbmdBY2NvdW50ID0gbmV3IENoZWNraW5nQWNjb3VudChfX2Fzc2lnbih7fSwgZGF0YS5jaGVja2luZ0FjY291bnQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2aW5nc0FjY291bnQgPSBuZXcgU2F2aW5nc0FjY291bnQoX19hc3NpZ24oe30sIGRhdGEuc2F2aW5nc0FjY291bnQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXRtID0gbmV3IEFUTSh0aGlzLmNoZWNraW5nQWNjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sID0gdGhpcy5yZW5kZXJBY2NvdW50cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoXCJcXG4gICAgICAgICAgICA8aDI+V2VsY29tZSB0byBBY21lIEJhbmshPC9oMj48YnIgLz5cXG4gICAgICAgICAgICA8aW1hZ2Ugc3JjPVxcXCJzcmMvaW1hZ2VzL2FjbWViYW5rLmpwZ1xcXCIgaGVpZ2h0PVxcXCIxNTBcXFwiPlxcbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxcbiAgICAgICAgICAgIDxoNT5Zb3VyIEFjY291bnRzOjwvaDU+PGJyIC8+XFxuICAgICAgICAgICAgXCIgKyBodG1sICsgXCJcXG4gICAgICAgIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNYWluLnByb3RvdHlwZS5jaGFuZ2VWaWV3ID0gZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgc3dpdGNoICh2aWV3KSB7XG4gICAgICAgICAgICBjYXNlICdjaGVja2luZyc6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudCA9IHRoaXMuY2hlY2tpbmdBY2NvdW50O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2F2aW5ncyc6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudCA9IHRoaXMuc2F2aW5nc0FjY291bnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhdG0nOlxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFjY291bnQgPSB0aGlzLmNoZWNraW5nQWNjb3VudDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckF0bSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlckFjY291bnQodGhpcy5jdXJyZW50QWNjb3VudCk7XG4gICAgfTtcbiAgICBNYWluLnByb3RvdHlwZS5yZW5kZXJBdG0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBodG1sID0gXCJcXG4gICAgICAgICAgICAgICAgPGgzPkFUTTwvaDM+XFxuICAgICAgICAgICAgICAgIDxpbWFnZSBzcmM9XFxcInNyYy9pbWFnZXMvYXRtLmpwZ1xcXCIgaGVpZ2h0PVxcXCIxNTBcXFwiPlxcbiAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cXG4gICAgICAgICAgICAgICAgQ3VycmVudCBDaGVja2luZyBBY2NvdW50IEJhbGFuY2U6ICRcIiArIHRoaXMuY2hlY2tpbmdBY2NvdW50LmJhbGFuY2UgKyBcIlxcbiAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cXG4gICAgICAgICAgICAgICAgJDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwiZGVwb3NpdFdpdGhkcmF3YWxBbW91bnRcXFwiPiZuYnNwOyZuYnNwO1xcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XFxcIm1haW4uZGVwb3NpdFdpdGhEcmF3YWwodHJ1ZSwgdHJ1ZSlcXFwiPkRlcG9zaXQ8L2J1dHRvbj4mbmJzcDtcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVxcXCJtYWluLmRlcG9zaXRXaXRoRHJhd2FsKGZhbHNlLCB0cnVlKVxcXCI+V2l0aGRyYXdhbDwvYnV0dG9uPiZuYnNwO1xcbiAgICAgICAgICAgIFwiO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcihodG1sKTtcbiAgICB9O1xuICAgIE1haW4ucHJvdG90eXBlLnJlbmRlckFjY291bnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYWNjdHNIdG1sID0gJyc7XG4gICAgICAgIHZhciBhY2NMaXN0ID0gbmV3IEFjY291bnRMaXN0KCk7XG4gICAgICAgIGFjY0xpc3QuYWRkKHRoaXMuY2hlY2tpbmdBY2NvdW50KTtcbiAgICAgICAgYWNjTGlzdC5hZGQodGhpcy5zYXZpbmdzQWNjb3VudCk7XG4gICAgICAgIGFjY0xpc3QuZ2V0QWNjb3VudHMoKS5mb3JFYWNoKGZ1bmN0aW9uIChhY2N0LCBpbmRleCkge1xuICAgICAgICAgICAgYWNjdHNIdG1sICs9IGFjY3QudGl0bGUgKyAnPGJyIC8+JztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2N0c0h0bWw7XG4gICAgfTtcbiAgICBNYWluLnByb3RvdHlwZS5yZW5kZXJBY2NvdW50ID0gZnVuY3Rpb24gKGFjY291bnQpIHtcbiAgICAgICAgdmFyIGFjY291bnRUeXBlID0gQWNjb3VudFR5cGVbYWNjb3VudC5hY2NvdW50VHlwZV07XG4gICAgICAgIHZhciBodG1sID0gXCJcXG4gICAgICAgICAgICAgICAgPGgzPlwiICsgYWNjb3VudFR5cGUgKyBcIiBBY2NvdW50PC9oMz5cXG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cXFwic3JjL2ltYWdlcy9cIiArIGFjY291bnRUeXBlLnRvTG93ZXJDYXNlKCkgKyBcIi5qcGdcXFwiIGhlaWdodD1cXFwiMTUwXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJsYWJlbFxcXCI+T3duZXI6PC9zcGFuPiBcIiArIGFjY291bnQudGl0bGUgKyBcIlxcbiAgICAgICAgICAgICAgICA8YnIgLz5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImxhYmVsXFxcIj5CYWxhbmNlOjwvc3Bhbj4gJFwiICsgYWNjb3VudC5iYWxhbmNlLnRvRml4ZWQoMikgKyBcIlxcbiAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cXG4gICAgICAgICAgICAgICAgJDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwiZGVwb3NpdFdpdGhkcmF3YWxBbW91bnRcXFwiPiZuYnNwOyZuYnNwO1xcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XFxcIm1haW4uZGVwb3NpdFdpdGhEcmF3YWwodHJ1ZSlcXFwiPkRlcG9zaXQ8L2J1dHRvbj4mbmJzcDtcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVxcXCJtYWluLmRlcG9zaXRXaXRoRHJhd2FsKGZhbHNlKVxcXCI+V2l0aGRyYXdhbDwvYnV0dG9uPiZuYnNwO1xcbiAgICAgICAgICAgIFwiO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcihodG1sKTtcbiAgICB9O1xuICAgIE1haW4ucHJvdG90eXBlLmRlcG9zaXRXaXRoRHJhd2FsID0gZnVuY3Rpb24gKGRlcG9zaXQsIGF0bSkge1xuICAgICAgICB2YXIgYW1vdW50SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVwb3NpdFdpdGhkcmF3YWxBbW91bnQnKTtcbiAgICAgICAgdmFyIGFtb3VudCA9ICthbW91bnRJbnB1dC52YWx1ZTtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGRlcG9zaXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXRtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXRtLmRlcG9zaXQoYW1vdW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFjY291bnQuZGVwb3NpdChhbW91bnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChhdG0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdG0ud2l0aGRyYXdhbChhbW91bnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudC53aXRoZHJhd2FsKGFtb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgIH1cbiAgICAgICAgKGF0bSkgPyB0aGlzLnJlbmRlckF0bSgpIDogdGhpcy5yZW5kZXJBY2NvdW50KHRoaXMuY3VycmVudEFjY291bnQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNYWluO1xufSgpKTtcbi8vIENyZWF0ZSBtYWluIG9iamVjdCBhbmQgYWRkIGhhbmRsZXJzIGZvciBpdFxudmFyIHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3VGVtcGxhdGUnKSk7XG52YXIgbWFpbiA9IG5ldyBNYWluKHJlbmRlcmVyKTtcbm1haW4ubG9hZEFjY291bnRzKCk7XG4vLyBRdWljayBhbmQgZWFzeSB3YXkgdG8gZXhwb3NlIGEgZ2xvYmFsIEFQSSB0aGF0IGNhbiBob29rIHRvIHRoZSBNYWluIG9iamVjdFxuLy8gc28gdGhhdCB3ZSBjYW4gZ2V0IHRvIGl0IGZyb20gY2xpY2sgYW5kIGV2ZW50cyBhbmQgb3RoZXJzLlxuLy8gWWVzLCB0aGVyZSBhcmUgb3RoZXIgd2F5cyBidXQgdGhpcyBnZXRzIHRoZSBqb2IgZG9uZSBmb3IgdGhpcyBkZW1vLlxud2luZG93Lm1haW4gPSBtYWluO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldGcGJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTl0WVdsdUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCUVVFc1QwRkJUeXhGUVVGRkxHVkJRV1VzUlVGQlJTeE5RVUZOTEc5Q1FVRnZRaXhEUVVGRE8wRkJRM0pFTEU5QlFVOHNSVUZCUlN4alFVRmpMRVZCUVVVc1RVRkJUU3h0UWtGQmJVSXNRMEZCUXp0QlFVTnVSQ3hQUVVGUExFVkJRVVVzVjBGQlZ5eEZRVUZGTEUxQlFVMHNaMEpCUVdkQ0xFTkJRVU03UVVGRk4wTXNUMEZCVHl4RlFVRkZMRkZCUVZFc1JVRkJSU3hOUVVGTkxGbEJRVmtzUTBGQlF6dEJRVU4wUXl4UFFVRlBMRVZCUVVVc1YwRkJWeXhGUVVGRkxFMUJRVTBzWjBKQlFXZENMRU5CUVVNN1FVRkROME1zVDBGQlR5eEZRVUZGTEVkQlFVY3NSVUZCUlN4TlFVRk5MRTlCUVU4c1EwRkJRenRCUVVVMVFqdEpRVTFKTEdOQlFXOUNMRkZCUVd0Q08xRkJRV3hDTEdGQlFWRXNSMEZCVWl4UlFVRlJMRU5CUVZVN1NVRkJTU3hEUVVGRE8wbEJSWEpETERKQ1FVRlpMRWRCUVd4Q096czdPenMwUWtGRGNVSXNjVUpCUVUwc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eEZRVUZCT3p0M1FrRkJjRU1zVVVGQlVTeEhRVUZITEZOQlFYbENPM2RDUVVNM1FpeHhRa0ZCVFN4UlFVRlJMRU5CUVVNc1NVRkJTU3hGUVVGRkxFVkJRVUU3TzNkQ1FVRTFRaXhKUVVGSkxFZEJRVWNzVTBGQmNVSTdkMEpCUTJ4RExFbEJRVWtzUTBGQlF5eGxRVUZsTEVkQlFVY3NTVUZCU1N4bFFVRmxMR05CUVUwc1NVRkJTU3hEUVVGRExHVkJRV1VzUlVGQlJ5eERRVUZETzNkQ1FVTjRSU3hKUVVGSkxFTkJRVU1zWTBGQll5eEhRVUZITEVsQlFVa3NZMEZCWXl4alFVRk5MRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRVWNzUTBGQlF6dDNRa0ZEY2tVc1NVRkJTU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU03ZDBKQlJYSkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zWTBGQll5eEZRVUZGTEVOQlFVTTdkMEpCUTJwRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRGhOUVV0bUxFbEJRVWtzWlVGRFZDeERRVUZETEVOQlFVTTdPenM3TzB0QlEwNDdTVUZGUkN4NVFrRkJWU3hIUVVGV0xGVkJRVmNzU1VGQllUdFJRVU53UWl4UlFVRlJMRWxCUVVrc1JVRkJSVHRaUVVOV0xFdEJRVXNzVlVGQlZUdG5Ra0ZEV0N4SlFVRkpMRU5CUVVNc1kwRkJZeXhIUVVGSExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTTdaMEpCUXpORExFMUJRVTA3V1VGRFZpeExRVUZMTEZOQlFWTTdaMEpCUTFZc1NVRkJTU3hEUVVGRExHTkJRV01zUjBGQlJ5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRPMmRDUVVNeFF5eE5RVUZOTzFsQlExWXNTMEZCU3l4TFFVRkxPMmRDUVVOT0xFbEJRVWtzUTBGQlF5eGpRVUZqTEVkQlFVY3NTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJRenRuUWtGRE0wTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRE8yZENRVU5xUWl4UFFVRlBPMU5CUTJRN1VVRkRSQ3hKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRKUVVNMVF5eERRVUZETzBsQlJVUXNkMEpCUVZNc1IwRkJWRHRSUVVOSkxFbEJRVTBzU1VGQlNTeEhRVUZITEhsTVFVbG5ReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEU5QlFVOHNjMVZCUzNCRkxFTkJRVU03VVVGRFRpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU12UWl4RFFVRkRPMGxCUlVRc05rSkJRV01zUjBGQlpEdFJRVU5KTEVsQlFVa3NVMEZCVXl4SFFVRlhMRVZCUVVVc1EwRkJRenRSUVVNelFpeEpRVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRmRCUVZjc1JVRkJSU3hEUVVGRE8xRkJRMnhETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETzFGQlEyeERMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMUZCUldwRExFOUJRVThzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN6dFpRVU4wUXl4VFFVRlRMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTTdVVUZEZGtNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFNDeFBRVUZQTEZOQlFWTXNRMEZCUXp0SlFVTnlRaXhEUVVGRE8wbEJSVVFzTkVKQlFXRXNSMEZCWWl4VlFVRmpMRTlCUVhWQ08xRkJRMnBETEVsQlFVMHNWMEZCVnl4SFFVRkhMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZEY2tRc1NVRkJUU3hKUVVGSkxFZEJRVWNzTWtKQlEwTXNWMEZCVnl3clJFRkRVU3hYUVVGWExFTkJRVU1zVjBGQlZ5eEZRVUZGTEd0SVFVVmtMRTlCUVU4c1EwRkJReXhMUVVGTExIbEdRVVZXTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5d3dWRUZMY0VVc1EwRkJRenRSUVVOT0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJReTlDTEVOQlFVTTdTVUZGUkN4blEwRkJhVUlzUjBGQmFrSXNWVUZCYTBJc1QwRkJaMElzUlVGQlJTeEhRVUZoTzFGQlF6ZERMRWxCUVVrc1YwRkJWeXhIUVVGeFFpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMREJDUVVFd1FpeERRVUZETEVOQlFVTTdVVUZEZGtZc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUTJoRExFbEJRVWtzUzBGQlN5eERRVUZETzFGQlExWXNTVUZCU1R0WlFVTkJMRWxCUVVrc1QwRkJUeXhGUVVGRk8yZENRVU5VTEVsQlFVa3NSMEZCUnl4RlFVRkZPMjlDUVVOTUxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8ybENRVU0xUWp0eFFrRkRTVHR2UWtGRFJDeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dHBRa0ZEZGtNN1lVRkRTanRwUWtGRFNUdG5Ra0ZEUkN4SlFVRkpMRWRCUVVjc1JVRkJSVHR2UWtGRFRDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dHBRa0ZETDBJN2NVSkJRMGs3YjBKQlEwUXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdhVUpCUXpGRE8yRkJRMG83VTBGRFNqdFJRVU5FTEU5QlFVOHNRMEZCUXl4RlFVRkZPMWxCUTA0c1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF6dFRRVU5pTzFGQlJVUXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkJMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRSUVVOc1JTeEpRVUZKTEV0QlFVc3NSVUZCUlR0WlFVTlFMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRUUVVNMVF6dEpRVU5NTEVOQlFVTTdTVUZEVEN4WFFVRkRPMEZCUVVRc1EwRkJReXhCUVc1SVJDeEpRVzFJUXp0QlFVVkVMRFpEUVVFMlF6dEJRVU0zUXl4SlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGRrVXNTVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdRVUZEYUVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETzBGQlJYQkNMRFpGUVVFMlJUdEJRVU0zUlN3MlJFRkJOa1E3UVVGRE4wUXNjMFZCUVhORk8wRkJRMmhGTEUxQlFVOHNRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGREluMD0iXSwic291cmNlUm9vdCI6IiJ9