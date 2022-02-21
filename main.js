function validation() {

    var email = $("#email-input");

    var red = ' hsl(354, 100%, 66%)';
    var dark_blue = 'hsl(223, 100%, 88%)';
    console.log(email.val());
    if (email.val() === "" || !validateEmail(email.val())) {
        Show_error("#email", red);
    }
    else {
        Hide_error("#email", dark_blue);
    }
}


function Show_error(input, color) {
    $(input + "-error-text").css("visibility", "visible");
    $(input + "-input").css('border-color', color);
    $(input + "-input").val('example@gmail.com');
    console.log("error");
    const mediaQuery = window.matchMedia('(max-width: 1100px)')
    if (mediaQuery.matches) {
        $(input + "-input").css('margin-bottom', "40px");
    }
    else {
        $(input + "-input").css('margin-bottom', "0px");
    }
    $(input + "-input").addClass("error-active");
}

function Hide_error(input, color) {
    $(input + "-error-text").css("visibility", "hidden");
    $(input + "-input").css('border-color', color);
    $(input + "-input").val('');

    $(input + "-input").css('margin-bottom', "0px");
    $(input + "-input").removeClass("error-active");

}
// const mediaQuery = window.matchMedia('(min-width: 1100px)')
//         if (mediaQuery.matches) {
//                     Show_error("#email",red);
// $("#email-input").css('margin-bottom',"0px");
//         }



// media query event handler
if (matchMedia) {
    const mq = window.matchMedia("(min-width: 1100px)");
    mq.addEventListener('change', function (e) {
        WidthChange(mq);
    });

}

// media query change
function WidthChange(mq) {
    if (mq.matches) {
        // window width is at least X px
        $("#email-input").css('margin-bottom', "0px");
    }
    // window width is less than X px
    else {
        if ($("#email-input").hasClass("error-active")) {
            $("#email-input").css('margin-bottom', "40px");
        }

    }

}








$(".button-main").click(function () {
    validation();
});

function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}

