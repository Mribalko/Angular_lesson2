'use strict';

angular
    .module('myApp')
    .controller('AccountCtrl', function(AccountService) {

        var vm = this;
        //vm.newPokemon = {};

        vm.account = AccountService.getAccount();
        console.log(vm.account);

        vm.addAccountData = function() {
            console.log(vm.account);
            AccountService.setAccount(vm.account);
        };

    });
