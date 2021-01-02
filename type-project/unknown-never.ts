// UNKNOWN TYPE - WAY BETTER THAN ANY if you need it

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// will give an error cause unknown is not guranteed a string... can switch to any
// do conditional check
if (typeof userInput === 'string') {
    userName = userInput; 
}

// NEVER TYPE - functions can never return
// doesn't just return void... this function returns never!
// cancels script and wont console.log
// infers to void
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('An error occurred!', 500)