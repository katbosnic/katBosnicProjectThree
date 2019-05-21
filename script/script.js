// on submit run this...
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
        // adjust scroll position when result pops up
        $('html, body').animate({ scrollTop: 500 }, '0');
    })
}

// match the score with the players
const playerMatchup = (totalScore) => {
    $('.quiz').addClass('hidden');
    $('.bottomHeader').addClass('hidden');
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

// smooth scroll
const smoothScroll = () => {
    $('a').smoothScroll({
        offset: 0,
        speed: 700,
    });
}

$(document).ready(function () {
    handleSubmit();
    smoothScroll();
});