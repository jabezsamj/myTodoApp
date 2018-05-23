
myApp.controller('LendingWorkSpaceCtrl', ['$scope', '$location', '$http','$routeParams', '$sce', 'GridDisplayService', 'LendingService', 'LawyerService', 'BookService', 'BookAuthorService', 
    function($scope, $location, $http, $routeParams, $sce, GridDisplayService ,LendingService,LawyerService,BookService,BookAuthorService){

            
        $scope.showLendingList = false;
	$scope.showLendingForm = false;        
        $scope.showLawyerList = false;
	$scope.showLawyerForm = false;        
        $scope.showBookList = false;
	$scope.showBookForm = false;        
        $scope.showBookAuthorList = false;
	$scope.showBookAuthorForm = false;    
      
    
        $scope.setShowLendingList = function(status){
		$scope.showLendingList = status;
	}

        $scope.setShowLendingForm = function(status){
		$scope.showLendingForm = status;
	}

        $scope.setShowLawyerList = function(status){
		$scope.showLawyerList = status;
	}

        $scope.setShowLawyerForm = function(status){
		$scope.showLawyerForm = status;
	}

        $scope.setShowBookList = function(status){
		$scope.showBookList = status;
	}

        $scope.setShowBookForm = function(status){
		$scope.showBookForm = status;
	}

        $scope.setShowBookAuthorList = function(status){
		$scope.showBookAuthorList = status;
	}

        $scope.setShowBookAuthorForm = function(status){
		$scope.showBookAuthorForm = status;
	}


  $scope.loadLendingWorkSpace = function(){
    
$scope.getLendingDetailedList();

$scope.getLawyerDetailedList();

$scope.getBookDetailedList();

$scope.getBookAuthorDetailedList();

  }

  $scope.clearLendingWorkSpace =function(){
        
                $scope.showLendingList = false;
		$scope.showLendingForm = false;
                $scope.showLawyerList = false;
		$scope.showLawyerForm = false;
                $scope.showBookList = false;
		$scope.showBookForm = false;
                $scope.showBookAuthorList = false;
		$scope.showBookAuthorForm = false;
  }


        //Lending

        $scope.lendingEditMode="";
        $scope.lending ={};
        $scope.lendingId ="";
        $scope.lendings ={};

        $scope.setLendingEditMode=function(editMode){
            $scope.lendingEditMode=editMode;
        }


        $scope.setLendingId = function(lendingId){
            $scope.lendingId= lendingId;      
        }

        $scope.setLending = function(lending){
            $scope.lending= lending;     
            $scope.setLendingId(lending.id);
            if($scope.lendingEditMode==""){
                //Set the next Level Item Detail Liest
            }
        }


        $scope.setLendings = function(lendings){
            $scope.lendings= lendings;      
        }

        $scope.getLending = function(id,mode){
            LendingService.getLendingById(id)
            .then(
                function(lending){
                    if(lending!=undefined){
                        $scope.setLending(lending);
                        $scope.setupLendingForm(mode);
                    }
                }
            );      
        }

        $scope.getLendingMenu = function(){ //Add Params
            $scope.setShowLendingMenu(false);
            MenuListItemService.getMenuListItemByTag("Lending", 0)
                     .then(
                        function( lendings ) {
                            if(lendings!=undefined){
                                $scope.lendingMenu = lendings;  
                                console.log(lendings);
                                $scope.setShowLendingMenu(true);              
                            }
                        }
                    );

        }

        $scope.getLendingDetailedList = function(){//Add params
            //$scope.clearLendingWorkSpace();
            GridDisplayService.getGridDisplayByTag("Lending", 0)//replace with Params
             .then(
                function( lendings ) {
                    if(lendings!=undefined){
                        console.log(lendings);
                        $scope.setLendings(lendings.content);
                        $scope.setShowLendingList(true);  

                    }
                }
            );
        }  


        $scope.setupLendingForm = function(mode){
            $scope.setShowLendingList(false);
            $scope.setShowLendingForm(false);
            //$scope.clearLendingWorkSpace();
            if(mode=="EditLending")
                $scope.setShowLendingForm(true);
            if(mode=="LoadLendingWorkspace")
                $scope.setShowLendingWorkSpace(true);
        }


        $scope.setShowAddLendingForm = function(){
            //$scope.clearLendingWorkSpace();
            $scope.setShowLendingList(false);
            $scope.setLendingEditMode(0);
            $scope.setLending({});
            $scope.setShowLendingForm(true);
        }

        $scope.setShowEditLendingForm = function(lendingId){
            //$scope.clearLendingWorkSpace();
            $scope.setShowLendingList(false);
            $scope.setLendingEditMode(1);
            $scope.getLending(lendingId,"EditLending");
            $scope.setShowLendingForm(true);
        }

        $scope.setDisplayLendingDetails = function(lending){ //Unload form
            //$scope.clearLendingWorkSpace();
            $scope.getLendingDetailedList();//Add Params
            //$scope.getLendingMenu(); //Add Params
        }

        $scope.hideLendingEditForm = function(lendingId){ //Rename or cimmbien with details
            $scope.setShowLendingForm(false);
            $scope.setShowLendingList(true);
            $scope.setLendingEditMode("");
            //$scope.getLendingMenu(); //Add Params
            $scope.getLendingDetailedList();//Add Params
        }
    //Lawyer

        $scope.lawyerEditMode="";
        $scope.lawyer ={};
        $scope.lawyerId ="";
        $scope.lawyers ={};

        $scope.setLawyerEditMode=function(editMode){
            $scope.lawyerEditMode=editMode;
        }


        $scope.setLawyerId = function(lawyerId){
            $scope.lawyerId= lawyerId;      
        }

        $scope.setLawyer = function(lawyer){
            $scope.lawyer= lawyer;     
            $scope.setLawyerId(lawyer.id);
            if($scope.lawyerEditMode==""){
                //Set the next Level Item Detail Liest
            }
        }


        $scope.setLawyers = function(lawyers){
            $scope.lawyers= lawyers;      
        }

        $scope.getLawyer = function(id,mode){
            LawyerService.getLawyerById(id)
            .then(
                function(lawyer){
                    if(lawyer!=undefined){
                        $scope.setLawyer(lawyer);
                        $scope.setupLawyerForm(mode);
                    }
                }
            );      
        }

        $scope.getLawyerMenu = function(){ //Add Params
            $scope.setShowLawyerMenu(false);
            MenuListItemService.getMenuListItemByTag("Lawyer", 0)
                     .then(
                        function( lawyers ) {
                            if(lawyers!=undefined){
                                $scope.lawyerMenu = lawyers;  
                                console.log(lawyers);
                                $scope.setShowLawyerMenu(true);              
                            }
                        }
                    );

        }

        $scope.getLawyerDetailedList = function(){//Add params
            //$scope.clearLawyerWorkSpace();
            GridDisplayService.getGridDisplayByTag("Lawyer", 0)//replace with Params
             .then(
                function( lawyers ) {
                    if(lawyers!=undefined){
                        console.log(lawyers);
                        $scope.setLawyers(lawyers.content);
                        $scope.setShowLawyerList(true);  

                    }
                }
            );
        }  


        $scope.setupLawyerForm = function(mode){
            $scope.setShowLawyerList(false);
            $scope.setShowLawyerForm(false);
            //$scope.clearLawyerWorkSpace();
            if(mode=="EditLawyer")
                $scope.setShowLawyerForm(true);
            if(mode=="LoadLawyerWorkspace")
                $scope.setShowLawyerWorkSpace(true);
        }


        $scope.setShowAddLawyerForm = function(){
            //$scope.clearLawyerWorkSpace();
            $scope.setShowLawyerList(false);
            $scope.setLawyerEditMode(0);
            $scope.setLawyer({});
            $scope.setShowLawyerForm(true);
        }

        $scope.setShowEditLawyerForm = function(lawyerId){
            //$scope.clearLawyerWorkSpace();
            $scope.setShowLawyerList(false);
            $scope.setLawyerEditMode(1);
            $scope.getLawyer(lawyerId,"EditLawyer");
            $scope.setShowLawyerForm(true);
        }

        $scope.setDisplayLawyerDetails = function(lawyer){ //Unload form
            //$scope.clearLawyerWorkSpace();
            $scope.getLawyerDetailedList();//Add Params
            //$scope.getLawyerMenu(); //Add Params
        }

        $scope.hideLawyerEditForm = function(lawyerId){ //Rename or cimmbien with details
            $scope.setShowLawyerForm(false);
            $scope.setShowLawyerList(true);
            $scope.setLawyerEditMode("");
            //$scope.getLawyerMenu(); //Add Params
            $scope.getLawyerDetailedList();//Add Params
        }
    //Book

        $scope.bookEditMode="";
        $scope.book ={};
        $scope.bookId ="";
        $scope.books ={};

        $scope.setBookEditMode=function(editMode){
            $scope.bookEditMode=editMode;
        }


        $scope.setBookId = function(bookId){
            $scope.bookId= bookId;      
        }

        $scope.setBook = function(book){
            $scope.book= book;     
            $scope.setBookId(book.id);
            if($scope.bookEditMode==""){
                //Set the next Level Item Detail Liest
            }
        }


        $scope.setBooks = function(books){
            $scope.books= books;      
        }

        $scope.getBook = function(id,mode){
            BookService.getBookById(id)
            .then(
                function(book){
                    if(book!=undefined){
                        $scope.setBook(book);
                        $scope.setupBookForm(mode);
                    }
                }
            );      
        }

        $scope.getBookMenu = function(){ //Add Params
            $scope.setShowBookMenu(false);
            MenuListItemService.getMenuListItemByTag("Book", 0)
                     .then(
                        function( books ) {
                            if(books!=undefined){
                                $scope.bookMenu = books;  
                                console.log(books);
                                $scope.setShowBookMenu(true);              
                            }
                        }
                    );

        }

        $scope.getBookDetailedList = function(){//Add params
            //$scope.clearBookWorkSpace();
            GridDisplayService.getGridDisplayByTag("Book", 0)//replace with Params
             .then(
                function( books ) {
                    if(books!=undefined){
                        console.log(books);
                        $scope.setBooks(books.content);
                        $scope.setShowBookList(true);  

                    }
                }
            );
        }  


        $scope.setupBookForm = function(mode){
            $scope.setShowBookList(false);
            $scope.setShowBookForm(false);
            //$scope.clearBookWorkSpace();
            if(mode=="EditBook")
                $scope.setShowBookForm(true);
            if(mode=="LoadBookWorkspace")
                $scope.setShowBookWorkSpace(true);
        }


        $scope.setShowAddBookForm = function(){
            //$scope.clearBookWorkSpace();
            $scope.setShowBookList(false);
            $scope.setBookEditMode(0);
            $scope.setBook({});
            $scope.setShowBookForm(true);
        }

        $scope.setShowEditBookForm = function(bookId){
            //$scope.clearBookWorkSpace();
            $scope.setShowBookList(false);
            $scope.setBookEditMode(1);
            $scope.getBook(bookId,"EditBook");
            $scope.setShowBookForm(true);
        }

        $scope.setDisplayBookDetails = function(book){ //Unload form
            //$scope.clearBookWorkSpace();
            $scope.getBookDetailedList();//Add Params
            //$scope.getBookMenu(); //Add Params
        }

        $scope.hideBookEditForm = function(bookId){ //Rename or cimmbien with details
            $scope.setShowBookForm(false);
            $scope.setShowBookList(true);
            $scope.setBookEditMode("");
            //$scope.getBookMenu(); //Add Params
            $scope.getBookDetailedList();//Add Params
        }
    //BookAuthor

        $scope.bookAuthorEditMode="";
        $scope.bookAuthor ={};
        $scope.bookAuthorId ="";
        $scope.bookAuthors ={};

        $scope.setBookAuthorEditMode=function(editMode){
            $scope.bookAuthorEditMode=editMode;
        }


        $scope.setBookAuthorId = function(bookAuthorId){
            $scope.bookAuthorId= bookAuthorId;      
        }

        $scope.setBookAuthor = function(bookAuthor){
            $scope.bookAuthor= bookAuthor;     
            $scope.setBookAuthorId(bookAuthor.id);
            if($scope.bookAuthorEditMode==""){
                //Set the next Level Item Detail Liest
            }
        }


        $scope.setBookAuthors = function(bookAuthors){
            $scope.bookAuthors= bookAuthors;      
        }

        $scope.getBookAuthor = function(id,mode){
            BookAuthorService.getBookAuthorById(id)
            .then(
                function(bookAuthor){
                    if(bookAuthor!=undefined){
                        $scope.setBookAuthor(bookAuthor);
                        $scope.setupBookAuthorForm(mode);
                    }
                }
            );      
        }

        $scope.getBookAuthorMenu = function(){ //Add Params
            $scope.setShowBookAuthorMenu(false);
            MenuListItemService.getMenuListItemByTag("BookAuthor", 0)
                     .then(
                        function( bookAuthors ) {
                            if(bookAuthors!=undefined){
                                $scope.bookAuthorMenu = bookAuthors;  
                                console.log(bookAuthors);
                                $scope.setShowBookAuthorMenu(true);              
                            }
                        }
                    );

        }

        $scope.getBookAuthorDetailedList = function(){//Add params
            //$scope.clearBookAuthorWorkSpace();
            GridDisplayService.getGridDisplayByTag("BookAuthor", 0)//replace with Params
             .then(
                function( bookAuthors ) {
                    if(bookAuthors!=undefined){
                        console.log(bookAuthors);
                        $scope.setBookAuthors(bookAuthors.content);
                        $scope.setShowBookAuthorList(true);  

                    }
                }
            );
        }  


        $scope.setupBookAuthorForm = function(mode){
            $scope.setShowBookAuthorList(false);
            $scope.setShowBookAuthorForm(false);
            //$scope.clearBookAuthorWorkSpace();
            if(mode=="EditBookAuthor")
                $scope.setShowBookAuthorForm(true);
            if(mode=="LoadBookAuthorWorkspace")
                $scope.setShowBookAuthorWorkSpace(true);
        }


        $scope.setShowAddBookAuthorForm = function(){
            //$scope.clearBookAuthorWorkSpace();
            $scope.setShowBookAuthorList(false);
            $scope.setBookAuthorEditMode(0);
            $scope.setBookAuthor({});
            $scope.setShowBookAuthorForm(true);
        }

        $scope.setShowEditBookAuthorForm = function(bookAuthorId){
            //$scope.clearBookAuthorWorkSpace();
            $scope.setShowBookAuthorList(false);
            $scope.setBookAuthorEditMode(1);
            $scope.getBookAuthor(bookAuthorId,"EditBookAuthor");
            $scope.setShowBookAuthorForm(true);
        }

        $scope.setDisplayBookAuthorDetails = function(bookAuthor){ //Unload form
            //$scope.clearBookAuthorWorkSpace();
            $scope.getBookAuthorDetailedList();//Add Params
            //$scope.getBookAuthorMenu(); //Add Params
        }

        $scope.hideBookAuthorEditForm = function(bookAuthorId){ //Rename or cimmbien with details
            $scope.setShowBookAuthorForm(false);
            $scope.setShowBookAuthorList(true);
            $scope.setBookAuthorEditMode("");
            //$scope.getBookAuthorMenu(); //Add Params
            $scope.getBookAuthorDetailedList();//Add Params
        }


    
}]);