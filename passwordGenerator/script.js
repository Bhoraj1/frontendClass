function generatePassword() {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let password = "";
  let length = 10;

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);

    // += add and assign
    password += characters.charAt(randomIndex);
  }

  document.getElementById("password").value = password;
  document.getElementById("copy-msg").textContent = "";
}

async function copyPassword() {
  var password = document.getElementById("password").value;

  if (password == "") {
    document.getElementById("copy-msg").textContent =
      "Please generate a password first.";
  } else {
    try {
      await navigator.clipboard.writeText(password);
      document.getElementById("copy-msg").textContent = "Password copied!";
    } catch (error) {
      document.getElementById("copy-msg").textContent = "Copy failed.";
      console.error("Error copying password:", error);
    }
  }
}
