const handleSubmit = () => {
    $('form').on('submit', function (event) {
        // prevent default behaviour of submit button
        event.preventDefault();

        // get values from radio inputs
        const scores = $('input[type=radio]:checked');
        // create an empty array
        const userScoreArray = [];
        // place scores in the array
        scores.each(function (index) {
            const scoreString = $(this).val();
            userScoreArray.push(parseInt(scoreString));
        });
        // calculate the sum of all scores
        const scoreSum = userScoreArray.reduce((total, scoreValue) => {
            return total + scoreValue;
        });
        playerMatchup(scoreSum);

    })
}

// match the score with the players
const playerMatchup = (totalScore) => {
    $('.quiz').addClass('hidden');
    if (totalScore < 4) {
        $('.resultDug').addClass('displayResult');
    } else if (totalScore >= 4 && totalScore < 8) {
        $('.resultFred').addClass('displayResult')
    } else if (totalScore >= 8 && totalScore < 12) {
        $('.resultKyle').addClass('displayResult')
    } else if (totalScore >= 12 && totalScore < 16) {
        $('.resultKawhi').addClass('displayResult')
    } else if (totalScore >= 16) {
        $('.resultPascal').addClass('displayResult')
    }
}


$(document).ready(function () {
    handleSubmit();
});