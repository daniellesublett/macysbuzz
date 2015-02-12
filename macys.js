
function macysBuzz(length){
  var buzzNums = [];
  for (var i=1; i <= length; i++)
  {
    if (i % 15 == 0)
      buzzNums.push("Macy's.com");
    else if (i % 3 == 0)
      buzzNums.push("Macy's");
    else if (i % 5 == 0)
      buzzNums.push(".com");
    else
      buzzNums.push(i);
  }
  return buzzNums;
}

var buzzNums = macysBuzz(100);

function printBuzz(){
  for(var i = 0; i<buzzNums.length; i++){
    $("#buzzResult").append("<li>"+buzzNums[i]+"</li>");
  }
}

$("#buzz").on("click", printBuzz)
