let generatePassword = () => {
  let characters = "wertyu";
  let password = "";

  for (let i = 0; i < 5; i++) {
    let result = Math.floor(Math.random() * characters.length);
    password += characters.charAt(result);
    console.log(password);
  }

  document.getElementById("password").value = password;
};

let copyPassword = () => {
  let oldpassword = document.getElementById("password").value;
  if (oldpassword == "") {
    document.getElementById("msg").innerHTML = "Please Generat a passwod";
  } else {
    navigator.clipboard.writeText(oldpassword);
    document.getElementById(
      "msg"
    ).textContent = ` This is the copied password : "${oldpassword}"`;
  }
};
