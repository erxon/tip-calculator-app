
var percent = 0;

var bill = 0;

var custom = 0;

var nop;


function getInput(cls){
  var val = Number($(cls).val());
  return val;
}

$(".bill").keypress(function (event){
  if (event.key === "Enter"){
    bill = getInput(".bill")
    console.log(bill);
  }
})


$(".percent").click(function (){
  percent = $(this).attr("id");
  percent = Number(percent);
});

$(".custom").keypress(function (event){
  if (event.key === "Enter"){
    custom = getInput(".custom");
  }
});

$(".number-of-people").keypress(function (event){
  if (event.key === "Enter"){
    nop = getInput(".number-of-people");
    if (custom !== 0){
      var tipAmount = bill * (custom / 100);
    }
    else{
      var tipAmount = bill * (percent / 100);
    }
    var tipAmountPerPerson = tipAmount / nop;
    $(".tip-amount-value p").text("$" + tipAmountPerPerson.toFixed(2));
    var totalAmount = (tipAmount + bill) / nop;
    $(".total-amount-value p").text("$" + totalAmount.toFixed(2));
  }
});
