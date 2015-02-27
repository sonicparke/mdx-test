(function() {
    'use strict';
    /*global _:false */

    angular.module('app.core')
        .controller('DrFind', DrFind);

    DrFind.$inject = ['$scope', 'DataService'];
    /* @ngInject */
    function DrFind ($scope, DataService) {
        var vm = this;
        vm.GetData = GetData;
        vm.DocSelect = DocSelect;
        vm.Items = [];
        vm.selected = {};
        vm.markers = [];

        // Initial Functions
        vm.InitPage = function() {
            vm.GetData(); // Get the json data on page load
        };

        function GetData(data) {
            DataService.GetData().success(function(res) {
                vm.Items = res.professionals; // Make the json object available to the DOM
            });
        }

        // Click handler to add a marker to the map when user clicks on a doctor
        function DocSelect(data) {
            vm.markers = []; // clear the markers so only one shows on map at a time

            // grab the selected doctor
            vm.selected = {
                name: data.name,
                pos: [data.locations[0].address.latitude, data.locations[0].address.longitude]
            };

            // add it to the markers array to display the marker
            vm.markers.push(vm.selected);

        }
    }


})();
