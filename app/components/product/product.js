(function () {
    'use strict';
    var controllerId = 'product';
    angular.module('app').controller(controllerId, ['common', 'datacontext', 'productRepository', product]);

    function product(common, datacontext, productRepository) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.products = [];
        vm.title = 'Product';

        activate();

        function activate() {
            var promises = [getProducts()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Product View'); });
        }

        function getProducts() {
            productRepository.getAll().then(function (products) {
                vm.products = products;
            });
            //return datacontext.getProduct().then(function (data) {
            //    return vm.products = data;
            //});
        }
    }
})();