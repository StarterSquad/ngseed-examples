/**
 * Draws a gravatar for provided email hash.
 *
 * @example: <gravatar hash="{{ md5HashOfUserEmail }}" size="50"></gravatar>
 */
define(['angular'], function (angular) {

  return angular.module('app.gravatar', [])
    .directive('gravatar', function () {
      return {
        template: '<img ng-src="https://secure.gravatar.com/avatar/{{ emailHash }}?s={{ imgSize }}" alt="gravatarImg" width="{{ imgSize }}px">',
        replace: true,
        restrict: 'E',
        link: function (scope, element, attrs) {
          scope.emailHash = attrs.hash;
          scope.imgSize = attrs.size || '300';
        }
      };
    });
});
