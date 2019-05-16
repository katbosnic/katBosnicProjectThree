const handleSubmit = () => {
    $('form').on('submit', function (event) {
        // prevent default behaviour of submit button
        event.preventDefault();

        // get values from quiz and convert them to integers
        const answerOneValue = parseInt($('input[name=question1]:checked').val());

        const answerTwoValue = parseInt($('input[name=question2]:checked').val());

        const answerThreeValue = parseInt($('input[name=question3]:checked').val());

        const answerFourValue = parseInt($('input[name=question4]:checked').val());

        const answerFiveValue = parseInt($('input[name=question5]:checked').val());

        calcUserScore(answerOneValue, answerTwoValue, answerThreeValue, answerFourValue, answerFiveValue);
    })
}

// calculate the user's score
const calcUserScore = (one, two, three, four, five) => {
    const total = one + two + three + four + five;
    playerMatchup(total);

}

// match the score with the players
const playerMatchup = (total) => {
    if (total < 4) {
        $('.quiz').addClass('hidden');
        $('.resultDug').addClass('displayResult');
    } else if (total >= 4 && total < 8) {
        $('.quiz').addClass('hidden');
        $('.resultFred').addClass('displayResult')
    } else if (total >= 8 && total < 12) {
        $('.quiz').addClass('hidden');
        $('.resultKyle').addClass('displayResult')
    } else if (total >= 12 && total < 16) {
        $('.quiz').addClass('hidden');
        $('.resultKawhi').addClass('displayResult')
    } else if (total >= 16) {
        $('.quiz').addClass('hidden');
        $('.resultPascal').addClass('displayResult')
    }

}



$(document).ready(function () {
    handleSubmit();
});