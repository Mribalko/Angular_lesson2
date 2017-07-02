'use strict';

angular
    .module('myApp')
    .controller('AccountCtrl', function(AccountService) {

        var vm = this;

        vm.account = AccountService.getAccount();

        vm.addAccountData = function() {
            AccountService.setAccount(vm.account);
        };

    });
