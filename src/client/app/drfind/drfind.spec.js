/* jshint -W117 */
describe('DrFind', function() {

    var controller;
    var scope;

    beforeEach(module('app'));

    beforeEach(inject(function($controller, $rootScope) {

        controller = $controller;
        scope = $rootScope.$new();

    }));

    it('should have 10 Professionals items', function() {
        var ctrl = controller('DrFind');
        expect(ctrl.Items.length).toBe(10);
    });
});
