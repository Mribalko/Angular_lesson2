angular
    .module('myApp')
    .factory('AccountService', function() {

            var account;

            return {

                getAccount: function() {
                    return  angular.copy(account);
                },

                setAccount: function(newAccount) {
                    account = angular.copy(newAccount);
                }

            }

        }

    );
