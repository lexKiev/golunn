$(document).ready(function () {
    let cardNumberInput = $("#card-number");
    cardNumberInput.on('keyup', function () {
        let cardNumber = cardNumberInput.val();

        if (cardNumber.length >=4){
            $.ajax({
                url: '/check-card',
                type: "post",
                data: { cardNum: cardNumber} ,
                success: function (data) {
                    console.log(data);
                    $('#card-image').html('<img src="'+data+'" height="100%">');
                }
            });
        }
    });


});
