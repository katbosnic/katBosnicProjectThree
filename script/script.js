const handleSubmit = () => {
    $('form').on('submit', function (event) {
        // prevent default behaviour of submit button
        event.preventDefault();

        // get values from quiz and convert them to integers
        const answerOneValue = parseInt($('input[name=question1]:checked').val());
        console.log(answerOneValue)

        const answerTwoValue = parseInt($('input[name=question2]:checked').val());
        console.log(answerTwoValue)

        const answerThreeValue = parseInt($('input[name=question3]:checked').val());
        console.log(answerThreeValue)

        const answerFourValue = parseInt($('input[name=question4]:checked').val());
        console.log(answerFourValue)

        const answerFiveValue = parseInt($('input[name=question5]:checked').val());
        console.log(answerFiveValue)

        calcUserScore(answerOneValue, answerTwoValue, answerThreeValue, answerFourValue, answerFiveValue);
    })
}

const calcUserScore = (one, two, three, four, five) => {
    $(this).map()
}




$(document).ready(function () {
    handleSubmit();
});