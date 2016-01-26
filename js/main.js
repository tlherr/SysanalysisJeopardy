(function($) {

    var currentQuestion = null;


    $('#questionanswerholder').on('show.bs.modal', function (e) {
        var modal = $(this);
        var a = $(e.relatedTarget);

        currentQuestion = a;

        var answerText = modal.find("p.answer");
        answerText.text(a.data('jeopardy-answer'));

        var questionText = modal.find("p.question");
        questionText.text(a.data('jeopardy-question'));


        var pointValue = modal.find("input#point-value");
        pointValue.val(a.data('jeopardy-value'));
    }).on('hide.bs.modal', function(e) {
        var modal = $(this);
        var pointValue = modal.find("input#point-value");
        pointValue.val(0);
    });


})(jQuery);