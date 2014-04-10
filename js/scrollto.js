$("#down-1").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide2").offset().top
    }, 1200, "easeOutCubic");
});

$('#down-2').click(function() {
   if($('[name="question_1"]').is(':checked')) { 
        $('html, body').animate({
            scrollTop: $("#slide3").offset().top
        }, 1200, "easeOutCubic");
        $("#answer-validate-1").css('display', 'none');
    } else {
        $("#answer-validate-1").css('display', 'inline-block');
    }
});

$('#down-3').click(function() {
   if($('[name="question_2"]').is(':checked')) { 
        $('html, body').animate({
            scrollTop: $("#slide4").offset().top
        }, 1200, "easeOutCubic");
        $("#answer-validate-2").css('display', 'none');
    } else {
        $("#answer-validate-2").css('display', 'inline-block');
    }
});

$('#down-4').click(function() {
   if($('[name="question_3"]').is(':checked')) { 
        $('html, body').animate({
            scrollTop: $("#slide5").offset().top
        }, 1200, "easeOutCubic");
        $("#answer-validate-3").css('display', 'none');
    } else {
        $("#answer-validate-3").css('display', 'inline-block');
    }
});

$('#down-5').click(function() {
   if($('[name="question_4"]').is(':checked')) { 
        $('html, body').animate({
            scrollTop: $("#slide6").offset().top
        }, 1200, "easeOutCubic");
        $("#answer-validate-4").css('display', 'none');
    } else {
        $("#answer-validate-4").css('display', 'inline-block');
    }
});

$('#down-6').click(function() {
   if($('[name="question_5"]').is(':checked')) { 
        $('html, body').animate({
            scrollTop: $("#slide7").offset().top
        }, 1200, "easeOutCubic");
        $("#answer-validate-5").css('display', 'none');
    } else {
        $("#answer-validate-5").css('display', 'inline-block');
    }
});

$('#down-7').click(function() {
   if($('[name="question_6"]').is(':checked')) { 
        $('html, body').animate({
            scrollTop: $("#slide8").offset().top
        }, 1200, "easeOutCubic");
        $("#answer-validate-6").css('display', 'none');
    } else {
        $("#answer-validate-6").css('display', 'inline-block');
    }
});

$('#down-8').click(function() {
   if($('[name="question_7"]').is(':checked')) { 
        $('html, body').animate({
            scrollTop: $("#slide9").offset().top
        }, 1200, "easeOutCubic");
        $("#answer-validate-7").css('display', 'none');
    } else {
        $("#answer-validate-7").css('display', 'inline-block');
    }
});

$('#down-9').click(function() {
   if($('[name="question_8"]').is(':checked')) { 
        $('html, body').animate({
            scrollTop: $("#slide10").offset().top
        }, 1200, "easeOutCubic");
        $("#answer-validate-8").css('display', 'none');
    } else {
        $("#answer-validate-8").css('display', 'inline-block');
    }
});

$('#down-10').click(function() {
   if($('[name="question_9"]').is(':checked')) { 
        $('html, body').animate({
            scrollTop: $("#slide11").offset().top
        }, 1200, "easeOutCubic");
         $("#answer-validate-9").css('display', 'none');
    } else {
        $("#answer-validate-9").css('display', 'inline-block');
    }
});