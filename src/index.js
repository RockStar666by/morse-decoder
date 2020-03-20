const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let arr = expr.match(/(.{10}|.)/g);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace(/00/g, '').replace(/11/g, '-').replace(/10/g, '.');
    };
    let newArr = [];
    for (let j = 0; j < arr.length; j++) {
        (arr[j] == '**********') ? newArr.push(' '): newArr.push(MORSE_TABLE[arr[j]])
    };
    return newArr.join('');
}


module.exports = {
    decode
}