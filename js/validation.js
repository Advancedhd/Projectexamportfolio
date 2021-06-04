const form = document.querySelector(".checkform");
const namefield = document.querySelector(".NameField");
const subject = document.querySelector(".SubjectField");
const email = document.querySelector(".EmailField");
const messagefield = document.querySelector(".messagefield");
const submitbutton = document.querySelector(".feedbacksend");
const msgbox = document.querySelector(".msg");
const validated = document.querySelector(".validated");
let msg = "";



function verifyEmail(email) {
 if (/\S+@\S+\.\S+/.test(email)){
    return (true) 
}
    return (false)
}

function checklength(string, len) {
    if (string.length > len) {
        return true;
    } else {
        return false;
    }
}

const validateForm = () => {
    msgbox.innerHTML = ""
    msg = ""
    validated.innerHTML = ""
    validationFlag = true
    event.preventDefault();

    // checks for name
    if(namefield.value === "" ) {
        msg += "Name is required! <br>"
        validationFlag = false
    } else if (namefield.value.length <= 4) {
        msg += "Name is too short! <br>"
        validationFlag = false
    } 

    // checks for email
    if(!email.value) {
        msg += "Email is required! <br>"
        validationFlag = false
    } else if (!verifyEmail(email.value)) {
        msg += "Please enter a valid email! <br>"
        validationFlag = false
    }

    //checks for subject field
    if(!checklength(subject.value, 15)) {
        msg += "Subject must be minimum 15 in length! <br>"
        validationFlag = false
    } 

    //checks for message field
    if(!checklength(messagefield.value, 25)) {
        msg += "Message must be minimum 25 in length! <br>"
        validationFlag = false
    }

    //display whatever errors occured
    msgbox.innerHTML = msg

    //clear errors after 5 seconds
    setTimeout(() => {
        msgbox.innerHTML = ""
        msg = ""
    }, 5000);

    //final check if the validation went through successfully
    if (validationFlag === true) {
        validated.innerHTML = "Success, form has been sent"
    }
}

//add eventlistener to the button
form.addEventListener("submit", validateForm)