/**
 * Enables `autofocus` attribute to work with dynamic content.
 * E.g. it is can be used to autofocus form field in a modal after it is opened.
 * If you provide a truthy value in autofocus attribute field text will be selected when autofocused.
 * NB: this should be considered when writing e2e tests, as this focus can be triggered in the middle of test scenario.
 * @example: <input autofocus>
 */
define(['angular'], function (angular) {

  return angular.module('app.autofocus', [])

    .directive('autofocus', ['$timeout', function ($timeout) {
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          var doSelectText = scope.$eval(attrs.autofocus);

          $timeout(function () {
            element.focus();

            if (doSelectText) {
              element.get(0).select();
            }
          }, 0, false);
        }
      };
    }]);

});
