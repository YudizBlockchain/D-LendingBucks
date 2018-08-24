$('.change').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

/*----------------- reg change--------------------------*/

$('#lender').click(function(){
    $('#regTypeData').val("0");
    $('#regTypeText').html("Register as Lender");
    console.log("val : "+$('#regTypeData').val());
});

$('#borrower').click(function(){
    $('#regTypeData').val("1");
    $('#regTypeText').html("Register as Borrower");
    console.log("val : "+$('#regTypeData').val());
});