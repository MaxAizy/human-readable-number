const variables = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    15: "fifteen",
    18: "eighteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
};

module.exports = function toReadable(number) {
    let result = "";
    number = number.toString();
    console.log(number);
    result +=
        number.length === 3
            ? hundreds(number)
            : number.length == 2
            ? dozens(number, result)
            : units(number, result);
    return result.trim();
};

function hundreds(number) {
    for (let i = 1; i <= 9; i++)
        if (i == Math.floor(number / 100))
            if (
                number
                    .slice(1)
                    .split("")
                    .every((element) => element === "0")
            )
                return `${variables[i]} hundred`;
            else return dozens(number.slice(1), `${variables[i]} hundred `);
}

function dozens(number, result = "") {
    if (Math.floor(number / 10) != 0) {
        if (number >= 10 && number < 20) {
            for (let i = 0; i <= 9; i++)
                if (i == number.slice(1))
                    if (variables[10 + i] != undefined)
                        return `${result}${variables[10 + i]}`;
                    else return `${result}${variables[i]}teen`;
        } else
            for (let i = 2; i <= 9; i++)
                if (i == Math.floor(number / 10))
                    if (number.slice(1) != 0)
                        return units(
                            number.slice(1),
                            `${result}${variables[i * 10]} `
                        );
                    else return `${result}${variables[i * 10]} `;
    } else return units(number.slice(1), result);
}

function units(number, result = "") {
    if (number == 0 && result == "") return variables[number];
    for (let i = 0; i <= 9; i++)
        if (i == number) return `${result}${variables[i]}`;
}
