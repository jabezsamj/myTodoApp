
myApp.controller('BookSetupWorkSpaceCtrl', ['$scope', '$location', '$http','$routeParams', '$sce', 'GridDisplayService', 'BookService', 'AuthorService', 'BookAuthorService', 
    function($scope, $location, $http, $routeParams, $sce, GridDisplayService ,BookService,AuthorService,BookAuthorService){

            
        $scope.showBookList = false;
	$scope.showBookForm = false;        
        $scope.showAuthorList = false;
	$scope.showAuthorForm = false;        
        $scope.showBookAuthorList = false;
	$scope.showBookAuthorForm = false; 

        $scope.showBookSetupTopNav = true;   
      
    
        $scope.setShowBookList = function(status){
		$scope.showBookList = status;
	}

        $scope.setShowBookForm = function(status){
		$scope.showBookForm = status;
	}

        $scope.setShowAuthorList = function(status){
		$scope.showAuthorList = status;
	}

        $scope.setShowAuthorForm = function(status){
		$scope.showAuthorForm = status;
	}

        $scope.setShowBookAuthorList = function(status){
		$scope.showBookAuthorList = status;
	}

        $scope.setShowBookAuthorForm = function(status){
		$scope.showBookAuthorForm = status;
	}


  $scope.loadBookSetupWorkSpace = function(){
    
$scope.getBookAuthorDetailedList();

  }

  $scope.loadBookAuthorSetupWorkSpace = function(){
    
    $scope.getBookDetailedList();
    $scope.getAuthorDetailedList();

  }

  $scope.clearBookSetupWorkSpace =function(){
        
                $scope.showBookList = false;
		$scope.showBookForm = false;
                $scope.showAuthorList = false;
		$scope.showAuthorForm = false;
                $scope.showBookAuthorList = false;
		$scope.showBookAuthorForm = false;
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
            $scope.hideBookAuthor();
            $scope.hideAuthor();
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

        $scope.hideBook = function()
        {
            $scope.setShowBookForm(false);
            $scope.setShowBookList(false);
            
        }

        $scope.closeBook = function()
        {
            $scope.hideBook();
            $scope.loadBookSetupWorkSpace();
        }
    //Author

        $scope.authorEditMode="";
        $scope.author ={};
        $scope.authorId ="";
        $scope.authors ={};

        $scope.setAuthorEditMode=function(editMode){
            $scope.authorEditMode=editMode;
        }


        $scope.setAuthorId = function(authorId){
            $scope.authorId= authorId;      
        }

        $scope.setAuthor = function(author){
            $scope.author= author;     
            $scope.setAuthorId(author.id);
            if($scope.authorEditMode==""){
                //Set the next Level Item Detail Liest
            }
        }


        $scope.setAuthors = function(authors){
            $scope.authors= authors;      
        }

        $scope.getAuthor = function(id,mode){
            AuthorService.getAuthorById(id)
            .then(
                function(author){
                    if(author!=undefined){
                        $scope.setAuthor(author);
                        $scope.setupAuthorForm(mode);
                    }
                }
            );      
        }

        $scope.getAuthorMenu = function(){ //Add Params
            $scope.setShowAuthorMenu(false);
            MenuListItemService.getMenuListItemByTag("Author", 0)
                     .then(
                        function( authors ) {
                            if(authors!=undefined){
                                $scope.authorMenu = authors;  
                                console.log(authors);
                                $scope.setShowAuthorMenu(true);              
                            }
                        }
                    );

        }

        $scope.getAuthorDetailedList = function(){//Add params
            //$scope.clearAuthorWorkSpace();
            $scope.hideBookAuthor();
            $scope.hideBook();
            GridDisplayService.getGridDisplayByTag("Author", 0)//replace with Params
             .then(
                function( authors ) {
                    if(authors!=undefined){
                        console.log(authors);
                        $scope.setAuthors(authors.content);
                        $scope.setShowAuthorList(true);  

                    }
                }
            );
        }  


        $scope.setupAuthorForm = function(mode){
            $scope.setShowAuthorList(false);
            $scope.setShowAuthorForm(false);
            //$scope.clearAuthorWorkSpace();
            if(mode=="EditAuthor")
                $scope.setShowAuthorForm(true);
            if(mode=="LoadAuthorWorkspace")
                $scope.setShowAuthorWorkSpace(true);
        }


        $scope.setShowAddAuthorForm = function(){
            //$scope.clearAuthorWorkSpace();
            $scope.setShowAuthorList(false);
            $scope.setAuthorEditMode(0);
            $scope.setAuthor({});
            $scope.setShowAuthorForm(true);
        }

        $scope.setShowEditAuthorForm = function(authorId){
            //$scope.clearAuthorWorkSpace();
            $scope.setShowAuthorList(false);
            $scope.setAuthorEditMode(1);
            $scope.getAuthor(authorId,"EditAuthor");
            $scope.setShowAuthorForm(true);
        }

        $scope.setDisplayAuthorDetails = function(author){ //Unload form
            //$scope.clearAuthorWorkSpace();
            $scope.getAuthorDetailedList();//Add Params
            //$scope.getAuthorMenu(); //Add Params
        }

        $scope.hideAuthorEditForm = function(authorId){ //Rename or cimmbien with details
            $scope.setShowAuthorForm(false);
            $scope.setShowAuthorList(true);
            $scope.setAuthorEditMode("");
            //$scope.getAuthorMenu(); //Add Params
            $scope.getAuthorDetailedList();//Add Params
        }

        $scope.hideAuthor = function()
        {
            $scope.setShowAuthorForm(false);
            $scope.setShowAuthorList(false);
            
        }

        $scope.closeAuthor = function()
        {
            $scope.hideAuthor();
            $scope.loadBookSetupWorkSpace();
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
            //$scope.loadBookAuthorSetupWorkSpace();
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
            $scope.setShowBookForm(false);
            $scope.setShowBookList(false);
            $scope.setShowAuthorForm(false);
            $scope.setShowAuthorList(false);
            
            $scope.setBookAuthorEditMode("");
            //$scope.getBookAuthorMenu(); //Add Params
            $scope.getBookAuthorDetailedList();//Add Params
        }


        $scope.hideBookAuthor = function()
        {

            $scope.setShowBookAuthorForm(false);
            $scope.setShowBookAuthorList(false);
        }

    
}]);