(function(angular) {'use strict';
angular.module('myApp', []).controller('mainController',function($scope) {
      var vm = $scope;
      vm.itemsOne = [];
      vm.itemsTwo = [];  
      vm.addItem = function(){
          if(vm.singleSelect === "columnOne"){
              vm.itemsOne.push(vm.enterText);
               console.log("Column one",vm.itemsOne);
              localStorage.setItem("column1", vm.itemsOne);
              return;
          }
          else if(vm.singleSelect === "columnTwo")
                vm.itemsTwo.push(vm.enterText);
                 console.log("Column 2",vm.itemsTwo);
                localStorage.setItem("column2", vm.itemsTwo);
      }
      
      var init = function(){
          if(localStorage.getItem('column1') != null && localStorage.getItem('column2') != null){
           vm.itemsOne = localStorage.getItem('column1').split(",");
           vm.itemsTwo = localStorage.getItem('column2').split(",");   
          }
          
      }();
      

   
 });
})(window.angular);