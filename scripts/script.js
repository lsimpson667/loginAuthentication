const userName = prompt(`Enter your username.`)

// create a function for the if statemnet with the parameter of username that shows a message
function showUsernameMessage(userName) {
  
    if (userName === "") {
        alert(`Canceled.`);
    } else if (userName === "admin") {
        return password = prompt(`Enter your password ${userName}.`)
        
    } else {
        alert(`I don't know you ${userName}.`);
    }
    

}
// because there is no assignment for the variable "password", its true value is equal to undefined.
let password;

function showPasswordMessage(password) {
    if (password === "TheMaster") {
        alert(`Welcome!`);
    } else if (password === "" || password === undefined) {
        alert(`Canceled`);
    } else {
        alert(`Wrong Password`);
    }

}




showUsernameMessage(userName);

showPasswordMessage(password);
