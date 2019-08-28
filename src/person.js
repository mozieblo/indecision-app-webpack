export { isAdult, canDrink, /*isSenior as default */};
console.log('parson.js is running!')

const isAdult = (x) => {
    if (x > 18) {
        return `Person is adult and have ${x} years old.`
    } else {
        return `Person isn't adult :( and have only ${x} years old.`
    }
};

const canDrink = (x) => {
    if (x > 21) {
        return `You can drink becouse of your age which is ${x}!`
    } else {
        return `You can't drink! You are too young ${x}!`
    }
}

const isSenior = (x) => x >= 65;
export default isSenior;