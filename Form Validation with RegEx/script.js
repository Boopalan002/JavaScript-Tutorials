// $(document).ready(function(){
//     $("p").click(function(){
//       $("div#demo").toggle();
//     });
//   });

$('.Name').keyup(function(){
    $('span.error1').remove();
    var inputValue = $(this).val();
    var pattern = /^\D*$/;
    //console.log(inputValue)
     if(!pattern.test(inputValue))
     {
        $(this).after('<span class="error error1" style="color:red;">No special charcters and numbers are allowed.</span>');
        
     }
});

$('.Email').keyup(function(){
    $('span.error2').remove();
    var inputValue = $(this).val();
    var pattern = /^[A-Za-z-.0-9]+@[A-Za-z]+\.[A-Za-z]+$/;
    //console.log(inputValue)
     if(!pattern.test(inputValue))
     {
        $(this).after('<span class="error error2" style="color:red;">Invalid Email</span>');
        
     }
});