// 1. Write your functions here
function line(line) {
    let lineStatus = "The line is currently empty";
    if(line.length) {
        lineStatus = "The line is currently: ";
        for (let index = 0; index < line.length; index++) {
            const element = line[index];
            lineStatus += `${index + 1}. ${element} `;
        }
        console.log(lineStatus);
        return lineStatus;
    }
    return lineStatus;
}

function takeANumber(current, customer) {
    current.push(customer);
    console.log(`Welcome, ${customer}. You are number ${current.indexOf(customer) + 1} in line.`);
}

function nowServing(line) {
   console.log(`Currently serving ${line.shift()}`) 
}

// 2. Example Usage

const katzDeli = [];

takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

nowServing(katzDeli) //=> "Currently serving Ada."

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

nowServing(katzDeli) //=> "Currently serving Grace."

line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"