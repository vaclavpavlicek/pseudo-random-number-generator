export const generatePseudoRandom = (start, end, seed) => {
    let number = ((seed
        .split('')
        .map(it => it.charCodeAt(0)))
        || []
    ).reduce((a, b) => a + b, 0) || 0;

    if (number > end) {
        number %= end;
    }

    if (number < start) {
        number += start;
    }

    return number;
};