angular.module('mainApp').controller('signinCtrl',function($scope,$routeParams,adminService,$location,$rootScope){
     $scope.login = function(){
     	adminService.post({email:$scope.email,password:$scope.password},"api/authenticate",function(response,err){
     		if(err){
     			alert(err.success);
     			console.log(err);
     		}
     		else{
     			
     			console.log(response);
     			if(response.success){

                    $rootScope.userDetails = response;
                    $rootScope.token = response.token;
                    $rootScope.userId = response.userId;
                    $rootScope.companyId = response.companyId;
     				$scope.changeRoute("#/adminhome");
     			}
     			else{
     				$scope.message= response.message;
     			}
     		}
            console.log($scope.token);
     	})
     }

     $scope.changeRoute = function(url, forceReload) {
        $scope = $scope || angular.element(document).scope();
        if(forceReload || $scope.$$phase) { // that's right TWO dollar signs: $$phase
            window.location = url;
        } else {

            $location.path(url);

            $scope.$apply($scope.token);
        }
      } 

});

angular.module('mainApp').controller('adminHomeCtrl',function($scope,$routeParams,adminService,$location,$rootScope){
     
    $scope.changeRoute = function(url, forceReload) {
        $scope = $scope || angular.element(document).scope();
        if(forceReload || $scope.$$phase) { // that's right TWO dollar signs: $$phase
            window.location = url;
        } else {
            $location.path(url);
            $scope.$apply($scope.token);
        }
     }

     if($rootScope.token){
        $scope.userD = $rootScope.userDetails;
     }else{
        $scope.changeRoute("#/login");
     }

});

angular.module('mainApp').controller('userCtrl',function($scope,$routeParams,adminService,$location,$rootScope){
     
    $scope.changeRoute = function(url, forceReload) {
        $scope = $scope || angular.element(document).scope();
        if(forceReload || $scope.$$phase) { // that's right TWO dollar signs: $$phase
            window.location = url;
        } else {
            $location.path(url);
            $scope.$apply($scope.token);
        }
     }



     if($rootScope.token){
        $scope.userD = $rootScope.userDetails;

        adminService.get("api/getUsers",function(response){
            $scope.users = response
        });

     }else{
        $scope.changeRoute("#/login");
     }

     $scope.user ={};

     $scope.editUser = function(user){
        $scope.user = user;
     }

     $scope.addUser = function(){
        $scope.user.password = "12345";
        adminService.post($scope.user,'/api/addUser',function(response,err){
            if(err){
                alert("Something went wrong!");
            }
            else{

                console.log(response);
                     adminService.get("api/getUsers",function(response){
                    $scope.users = response;

                    alert("Adim added!");
                });
            }
        });
    }



});


angular.module('mainApp').controller('donCtrl',function($scope,$routeParams,adminService,$location,$rootScope){
     
    $scope.changeRoute = function(url, forceReload) {
        $scope = $scope || angular.element(document).scope();
        if(forceReload || $scope.$$phase) { // that's right TWO dollar signs: $$phase
            window.location = url;
        } else {
            $location.path(url);
            $scope.$apply($scope.token);
        }
     }



     if($rootScope.token){
        $scope.userD = $rootScope.userDetails;

        adminService.get("api/getindividualDonations",function(response){
            $scope.individuals = response;
        });

        adminService.get("api/getcompanyDonations",function(response){
            $scope.orgs = response;
        });

        adminService.get("api/getcompany2Donations",function(response){
            $scope.has = response;
        });

     }else{
        $scope.changeRoute("#/login");
     }

     $scope.Ind = function(){
        $scope.isInd=true;
        $scope.isHA =false;
        $scope.isOrg=false;

     }

     $scope.Org = function(){
        $scope.isInd=false;
        $scope.isHA =false;
        $scope.isOrg=true;

     }

     $scope.HA = function(){
        $scope.isInd=false;
        $scope.isHA =true;
        $scope.isOrg=false;

     }

});



