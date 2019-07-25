var numberType;
var strType;
var booleanType;
var arrayType;
var initializeArray = [1, 2, 3, 4];
var Options;
(function (Options) {
    Options[Options["DEPOSIT"] = 0] = "DEPOSIT";
    Options[Options["CHECK_BALANCE"] = 1] = "CHECK_BALANCE";
    Options[Options["WITHDRAW"] = 2] = "WITHDRAW";
})(Options || (Options = {}));
;
var option = Options.CHECK_BALANCE;
