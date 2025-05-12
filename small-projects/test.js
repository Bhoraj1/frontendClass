let submits = () => {
  console.log("click");
  let a = document.getElementById("name").value;
  let b = document.getElementById("contact").value;
    if (b!= "") {
        alert(`${a} submitted form`);
    } else {
        document.getElementById("again").innerHTML="plz fill the form"
    }
};