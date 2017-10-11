angular.module('mainApp').controller('indDonCtrl',function($scope,$routeParams,$location,$rootScope,clientService){
   $scope.changeRoute = function(url, forceReload) {
        $scope = $scope || angular.element(document).scope();
        if(forceReload || $scope.$$phase) { // that's right TWO dollar signs: $$phase
            window.location = url;
        } else {
            $location.path(url);
            $scope.$apply($scope.token);
        }
     }
   $scope.donation ={};

   $scope.donate = function(){
        clientService.post($scope.donation,'/api/individualDonations',function(response,err){
        if(err){
            alert("Something went wrong!");
        }
        else{

            console.log(response);
            $scope.changeRoute("#/thankyou");
        }
     });
   }
    
});

angular.module('mainApp').controller('compDonCtrl',function($scope,$routeParams,$location,$rootScope,clientService){
   $scope.changeRoute = function(url, forceReload) {
        $scope = $scope || angular.element(document).scope();
        if(forceReload || $scope.$$phase) { // that's right TWO dollar signs: $$phase
            window.location = url;
        } else {
            $location.path(url);
            $scope.$apply($scope.token);
        }
     }
   $scope.donation ={};

   $scope.donate = function(){
        clientService.post($scope.donation,'/api/companyDonations',function(response,err){
        if(err){
            alert("Something went wrong!");
        }
        else{

            console.log(response);

            $scope.changeRoute("#/thankyou");
        }
     });
   }
    
});


angular.module('mainApp').controller('AHDonCtrl',function($scope,$routeParams,$location,$rootScope,clientService){
   
   $scope.changeRoute = function(url, forceReload) {
        $scope = $scope || angular.element(document).scope();
        if(forceReload || $scope.$$phase) { // that's right TWO dollar signs: $$phase
            window.location = url;
        } else {
            $location.path(url);
            $scope.$apply($scope.token);
        }
     }
   $scope.donation ={};

   $scope.donate = function(){
        clientService.post($scope.donation,'/api/companyDonations',function(response,err){
        if(err){
            alert("Something went wrong!");
        }
        else{

            console.log(response);
            $scope.changeRoute("#/thankyou");
        }
     });
   }
    
});


angular.module('mainApp').controller('cdonersCtrl',function($scope,$routeParams,clientService,$location,$rootScope){
     
        clientService.get("api/getindividualDonations",function(response){
            $scope.individualss = response;
        });

        clientService.get("api/getcompanyDonations",function(response){
            $scope.orgss = response;
        });

        clientService.get("api/getcompany2Donations",function(response){
            $scope.hass = response;
        });


        $scope.Inds = function(){
        $scope.isInd=true;
        $scope.isHA =false;
        $scope.isOrg=false;

     }

     $scope.Orgs = function(){
        $scope.isInd=false;
        $scope.isHA =false;
        $scope.isOrg=true;

     }

     $scope.HAs = function(){
        $scope.isInd=false;
        $scope.isHA =true;
        $scope.isOrg=false;

     }

});
