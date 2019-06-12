$(document).ready(function(){
 $("#countForm").submit(function(event){
   var countToNumber = parseInt($("input#countTo").val());
   var countByNumber = parseInt($("input#countBy").val());

  for(var index=countByNumber;index<=countToNumber; index+=countByNumber){
    if (countToNumber<=0 || countByNumber<=0){
      alert("you have to enter a number that is greater than 0!");
      return;}

      else{alert(index);};

   event.preventDefault();
    };
   });
});
