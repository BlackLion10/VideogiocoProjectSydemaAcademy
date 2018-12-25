app.controller('paesiCtrl', function($scope, $http  ) {
  		$http.get("https://restcountries.eu/rest/v2/all")
            .then(
            	  function (contenuto) {
                      $scope.elenco = contenuto.data;
                      $scope.selectedItem = contenuto.data[0];
						$scope.selectedItem= $scope.elenco[66];
                
                  }
            );
});