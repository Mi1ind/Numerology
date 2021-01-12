function CHALDEAN(word) {
    var dict = {
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 8,
        "G": 3,
        "H": 5,
        "I": 1,
        "J": 1,
        "K": 2,
        "L": 3,
        "M": 4,
        "N": 5,
        "O": 7,
        "P": 8,
        "Q": 1,
        "R": 2,
        "S": 3,
        "T": 4,
        "U": 6,
        "V": 6,
        "W": 6,
        "X": 5,
        "Y": 1,
        "Z": 7,
        " ": 0
    }
    word = word.toUpperCase();
    i = 0;
    for (x = 0; i < word.length; i++) {
        x += dict[word[i]];
    }
    return x;
}

function SUMDIGITS(n) {
    return (n - 1) % 9 + 1;
}

function SUMDATE(date) {
    var sum = 0;
    for (var i = 0; i < date.length; i++) {
        if (/[0-9]/.test(date[i])) {
            sum += parseInt(date[i])
        }
    }
    return sum;
}
