
$(document).ready(function(){
    $(".board").html( "click" )

    var turn = 0
    var array = [[0,0,0],[0,0,0],[0,0,0]]

  

    
    $( ".board" ).on( "click", function( event ) {
        var theID = $(this).attr('id');
        var theID = parseInt(theID)
        if($("#"+ theID).text() === "click" ){
            if(turn % 2 === 0){
                $( "#"+theID ).html( "X" );
                if(theID === 0 || theID === 1 || theID === 2){
                    array[0][theID] = "X"
                }
                if(theID === 3 || theID === 4 || theID === 5){
                    array[1][theID-3] = "X"
                }
                if(theID === 6 || theID === 7 || theID === 8){
                    array[2][theID-6] = "X"
                }
               }else{
                $( "#"+theID ).html( "O" ); 
                if(theID === 0 || theID === 1 || theID === 2){
                    array[0][theID] = "O"
                }
                if(theID === 3 || theID === 4 || theID === 5){
                    array[1][theID-3] = "O"
                }
                if(theID === 6 || theID === 7 || theID === 8){
                    array[2][theID-6] = "O"
                }
                
               }
               //
               //winner condition here



               //
               console.log(array)
                   turn++ 
        }else{
            alert("this is used")
        }

      })

 
});


