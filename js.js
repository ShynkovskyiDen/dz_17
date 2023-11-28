let userName = prompt('What is your name?').trim();
userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();


let userSurname = prompt('What is your surname?').trim();
userSurname = userSurname[0].toUpperCase() + userSurname.slice(1).toLowerCase();


let userEmail = prompt('Enter your email?').replaceAll().toLowerCase();
userEmail = (!userEmail.includes('@')) 
    ? `not valid email <b> ${userEmail} </b> (symbol @ not exist)`:
(userEmail.startsWith('@')) 
    ? `not valid email <b> ${userEmail}</b> (symbol @ find in first place)`:
(userEmail.endsWith('@')) 
    ? `not valid email <b> ${userEmail}</b> (symbol @ find in last place)`:
`<b>${userEmail}</b>`;


let dateOfBirth = +prompt('Enter your birthday').replaceAll();
today = new Date();
thisYear = today.getFullYear();

let userAge = thisYear - dateOfBirth;
userAge = (dateOfBirth > '1907', dateOfBirth < thisYear + 1) ? (userAge):
alert('This is impossible');

document.write(`<li> Full name: ${userName} ${userSurname} </li>`);
document.write(`<li> Email: ${userEmail} </li>`);
document.write(`<li> Age: ${userAge} </li>`);
