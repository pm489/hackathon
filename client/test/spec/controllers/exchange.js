'use strict';

describe('Controller: ExchangeCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ExchangeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExchangeCtrl = $controller('ExchangeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
