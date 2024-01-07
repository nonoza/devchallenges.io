// Add some interactivity to the website

let cta = document.querySelector('.submit-button');

cta.addEventListener('click',(e)=>{
    let firstName = document.querySelector("#name");
    let email = document.querySelector("#email");
    let companySize  = document.querySelector("#company-size");
    let subject  = document.querySelector('#subject');
    let message = document.querySelector("#message");
    let errorMsg = document.querySelector (".error-msg")
    e.preventDefault()

    if (firstName.value === "" || firstName.value === null || email.value === "" || email.value === null || companySize.value === "" || companySize.value === null || subject.value === "" || subject.value === null || message.value === "" || message.value === null) {
        errorMsg.innerHTML = "Please fill in the details";
    }
    
    
    

})
