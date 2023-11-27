const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  if(!validateInputs()){
    e.preventDefault();
  };
});

function validateInputs() {
  const finalUserName = username.value.trim();
  const finalEmail = email.value.trim();
  const finalPass = password.value.trim();
  let success = true;
  if(finalUserName === ''){
    success = false;
    setError(username, 'Username can\'t be empty');
  } else{
    setSuccess(username);
  }
  if(finalEmail === ''){
    success = false;
    setError(email, 'Enter a valid email');
  } else if(!validEmail(email)){
    success = false;
    setError(email, 'Enter a valid email');
  }
  else {
    setSuccess(email);
  }
  if(finalPass.length < 8){
    success = false;
    setError(password, 'Password must be atleast 8 characters old');
  } else{
    setSuccess(password);
  }

  return success;

}

function setError(element, message) {
  const parent = element.parentElement;
  const errorElement = parent.querySelector(".error");
  errorElement.innerText = message;

  parent.classList.add("error");
  parent.classList.remove("success");
}

function setSuccess(element) {
  const parent = element.parentElement;
  const errorElement = parent.querySelector(".error");

  errorElement.innerText = "";
  parent.classList.add("success"); 
  parent.classList.remove("error");
}

const validEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
};
