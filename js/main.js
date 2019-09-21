(function($) {


  $('#reset').on('click', function(){
      $('#register-form').reset();
  });

  $('#register-form').validate({
    rules : {
        full_name : {
            required: true,
        },
        email : {
            required: true,
            email : true
        },
        passout_year : {
            required: true,
            range: [1964, 2019]
        },
        country_code : {
            required: true,
            minlength:2,
            maxlength:5,
        },
        phone_number : {
            required: true,
            minlength:6,
        },
    },
    messages: {
        country_code: "Please enter a valid country code",
    },
    onfocusout: function(element) {
        $(element).valid();
    },
});

    jQuery.extend(jQuery.validator.messages, {
        required: "",
    });
})(jQuery);

$(document).ready(function(){
    $(document).on("change",".sensible-input",function(){
        var spouse = $("#spouse-yes:checked").length == 1;
        var adult = parseInt($("#adult").val());
        var children= parseInt($("#children").val());
        $addon_seats = $("#addon_seats");
        $addon_seats.hide();

        var total = 2000;
        if(spouse){
            total += 1000;
            $("#spouse-reciept").show();
            $("#variable-spouse-charge").text(1000);
            $addon_seats.show();
        }
        else{
            $("#spouse-reciept").hide();
        }

        if(adult > 0){
            total += adult * 1000;
            $("#adult-reciept").show();
            $("#variable-adult-count").text(adult);
            $("#variable-adult-charge").text(adult * 1000);
            $addon_seats.show();
        }
        else{
            $("#adult-reciept").hide();
        }

        if(children > 0){
            total += children * 500;
            $("#children-reciept").show();
            $("#variable-children-count").text(children);
            $("#variable-children-charge").text(children * 500);
            $addon_seats.show();
        }
        else{
            $("#children-reciept").hide();
        }
        $("#variable-total").text(total);
    });
    $("#course").on("change load",function(){
        if($(this).val() == "mca"){
            $("#branch").val("mca").attr("disabled", true); ;
        }
        else{
            $("#branch").val("ce").attr("disabled", false); ;            
        }
    })
});
