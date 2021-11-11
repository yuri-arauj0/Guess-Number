const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let _status = document.getElementById('status');
let _attempt = document.getElementById('attempt');
let _result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNum: 0,
    numChoose: function _ranValue() {
        return Math.round(Math.random() * this.max);
    }
};

let _numChoose = Guess.numChoose();

function attemptUpdate(attempt, value) {
    if(value > 1) {
        attempt.innerHTML = 'Attempts: ' + value;
    } else if (value < 1) {
        attempt.innerHTML = 'Attempt: ' + value;
    }
};

function handleSubmit(e) {
    e.preventDefault();
    
    let _guess = document.getElementById('guess').value; 

    if(!_guess) {
        alert('C\'mon, bro... Try it  :(  I wanna play with someone...');
        return;
    };

    attemptUpdate(_attempt, ++Guess.attemptsNum);

    if(_numChoose == _guess) {
        _playAgain();
        _status.innerHTML = 'Niice, bro! Let\'s do it again?';
        _result.style.transition = '0.4s';
        _result.style.backgroundColor = '#37c978';
        _result.style.color = '#fff';
        _status.style.color = '#fff';
        _clear();
        _stopGuessing();
    } else if(_numChoose < _guess) {
        _status.innerHTML = 'Try lower, bro...';
        _status.style.color = '#de4251';
        _clear();
    } else if (_numChoose > _guess) {
        _status.innerHTML = 'Try higher, bro...';
        _status.style.color = '#de4251';
        _clear();
    }
};

function _playAgain() {
    document.getElementById('btnRestart').style.display = 'flex';
};

function _restart() {
    document.location.reload(true);
};

function _clear() {
    document.getElementById('guess').value = '';
};

function _stopGuessing() {
    document.getElementById('guess').disabled = true;
    document.getElementById('guess').placeholder = 'Start guessing again!'
};