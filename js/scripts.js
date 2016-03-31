// Business Logic //
var convert = function(digits) {
  digits = digits.reverse();
  for (var index = 0; index < digits.length; index++) {

    if (digits[index] === "1") {digits[index] = "e";}
    else if (digits[index] === "2") {digits[index] = "ee";}
    else if (digits[index] === "3") {digits[index] = "eee";}
    else if (digits[index] === "4") {digits[index] = "ef";}
    else if (digits[index] === "5") {digits[index] = "f";}
    else if (digits[index] === "6") {digits[index] = "fe";}
    else if (digits[index] === "7") {digits[index] = "fee";}
    else if (digits[index] === "8") {digits[index] = "feee";}
    else if (digits[index] === "9") {digits[index] = "eg";}
  }
  digits[0] = digits[0].replace(/e/g, "I");
  digits[0] = digits[0].replace(/f/g, "V");
  digits[0] = digits[0].replace(/g/g, "X");

  if (digits[1]){
    digits[1] = digits[1].replace(/e/g, "X");
    digits[1] = digits[1].replace(/f/g, "L");
    digits[1] = digits[1].replace(/g/g, "C");
  }
  if (digits[2]){
    digits[2] = digits[2].replace(/e/g, "C");
    digits[2] = digits[2].replace(/f/g, "D");
    digits[2] = digits[2].replace(/g/g, "M");
  }
  if (digits[3]){
    digits[3] = digits[3].replace(/e/g, "M");
  }
  digits.reverse();
  console.log(digits);
  digits = digits.join("");
  console.log(digits);
  return(digits);
}

// User Interface Logic //
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
      event.preventDefault();
      var digits = $("#input").val().split("");
      digits = convert(digits);
      $("#outputString").text(digits);
    });
  });
