//  First part
let item_1 = 5;
let item_2 = 3;
console.log('item_1', item_1);
console.log('item_2', item_2);
let item_3 = item_1 + item_2;
console.log('item_3', item_3);
let item_4 = 'Yolochka';
console.log('item_4', item_4);
console.log('item_3 + item_4', item_3 + item_4);
console.log('item_4 + item_3', item_3 * item_4);
let item_5 = item_3;
let item_6 = 15;
let item_6_type = typeof item_6;
console.log('item_6==' + item_6, 'item_6_type==' + item_6_type)
let item_7 = item_6.toString();
let item_7_type = typeof item_7;
console.log('item_7==' + item_7, 'item_7_type==' + item_7_type)
let age_1 = 10;
let age_2 = 18;
let age_3 = 60;

if (age_1 < age_2) {
    console.log('You don’t have access cause your age is ' + age_1 + '. It’s less then minimum')
} else if (age_1 >= age_2 && age_1 < age_3) {
    console.log('Welcome!')
} else if (age_1 > age_3) {
    console.log('Keep calm and look Culture channel!')
} else {
    console.log('Technical work')
}

// Second part

function checkAge(age) {
    let age_minimum = 18;
    let age_maximum = 60;
    if (typeof age === 'string'){
        age = age.replace(/\D/, "")
    }
    if (isNaN(age) || !age){
        throw Error(age + ' is not a number')
    }
    if (age < age_minimum) {
        console.log('You don’t have access cause your age is ' + age + '. It’s less then minimum')
    } else if (age >= age_minimum && age < age_maximum) {
        console.log('Welcome!')
    } else if (age >= age_maximum) {
        console.log('Keep calm and look Culture channel!')
    } else {
        console.log('Technical work')
    }
}

checkAge(17)
checkAge(18)
checkAge(61)
checkAge('2*')
checkAge(prompt('What is your age?'))