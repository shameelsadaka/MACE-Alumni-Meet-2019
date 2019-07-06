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
        phone_number : {
            required: true,
            minlength:6,
        },
    },
    onfocusout: function(element) {
        $(element).valid();
    },
});

    jQuery.extend(jQuery.validator.messages, {
        required: "",
        remote: "",
        email: "",
        url: "",
        date: "",
        dateISO: "",
        number: "",
        digits: "",
        creditcard: "",
        equalTo: ""
    });
})(jQuery);

$(document).ready(function(){
    $(document).on("change",".sensible-input",function(){
        var spouse = parseInt($("#spouse").val());
        var children= parseInt($("#children").val());

        var total = 2000;
        if(spouse > 0){
            total += spouse * 1000;
            $("#spouse-reciept").show();
            $("#variable-spouse-count").text(spouse);
            $("#variable-spouse-charge").text(spouse * 1000);
        }
        else{
            $("#spouse-reciept").hide();
        }

        if(children > 0){
            total += children * 500;
            $("#children-reciept").show();
            $("#variable-children-count").text(children);
            $("#variable-children-charge").text(children * 500);
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
            $("#branch").val("me").attr("disabled", false); ;            
        }
    })
});
