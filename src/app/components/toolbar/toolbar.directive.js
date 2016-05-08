(function () {
  'use strict';

  angular
    .module('workflowEditor')
    .directive('toolbar', toolbar);

  /** @ngInject */
  function toolbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/toolbar/toolbar.html',
      scope: {
        packages: '='
      },
      controller: ToolbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ToolbarController() {
      var vm = this;
      vm.selected = null;
      vm.interfaces = vm.packages.interfaces;
      vm.modules = vm.packages.modules;
      vm.categories = vm.modules[""].submodules;

      angular.forEach(vm.interfaces, function (val, key) {
        val.category = key.split('.')[0];
      });

      vm.tree = [{
        name: 'IO',
        link: '#',
        subtree: []
      }, {
        name: 'BASE',
        link: '#',
        subtree: []
      }, {
        name: 'UTILITY',
        link: '#',
        subtree: []
      }, {
        name: 'AFNI',
        link: '#',
        subtree: []
      }, {
        name: 'ANTS',
        link: '#',
        subtree: []
      }, {
        name: 'CAMINO',
        link: '#',
        subtree: []
      }, {
        name: 'CAMINO2TRACKVIS',
        link: '#',
        subtree: []
      }, {
        name: 'CMTK',
        link: '#',
        subtree: []
      }, {
        name: 'DIPY',
        link: '#',
        subtree: []
      }, {
        name: 'ELASTIX',
        link: '#',
        subtree: []
      }, {
        name: 'FREESURFER',
        link: '#',
        subtree: []
      }, {
        name: 'FSL',
        link: '#',
        subtree: []
      }, {
        name: 'MIPAV',
        link: '#',
        subtree: []
      }, {
        name: 'MNE',
        link: '#',
        subtree: []
      }, {
        name: 'MRTRIX',
        link: '#',
        subtree: []
      }, {
        name: 'NIPY',
        link: '#',
        subtree: []
      }, {
        name: 'NITIME',
        link: '#',
        subtree: []
      }, {
        name: 'SEMTOOLS',
        link: '#',
        subtree: []
      }, {
        name: 'SLICER',
        link: '#',
        subtree: []
      }, {
        name: 'SPM',
        link: '#',
        subtree: []
      }, {
        name: 'MATLAB',
        link: '#',
        subtree: []
      }, {
        name: 'VISTA',
        link: '#',
        subtree: []
      }];


    }
  }

})();
