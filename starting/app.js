var userInput; //more restrictive than any
var userName;
userInput = 5;
userInput = "MM";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    //   while(true){}
}
generateError("An error occurred!", 500);
