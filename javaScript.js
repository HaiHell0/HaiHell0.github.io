var toAddress
var content
function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "rpihi1219@gmail.com",
      Password: "Bimbim1?",
      To: toAddress,
      From: "rpihi1219@gmail.com",
      Subject: "Assignment1 Hai Hoang",
      Body: content,
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }
function sendFunction(){
    content = document.getElementById("text-field1").value;
    toAddress = document.getElementById("text-field2").value;
    var txt;
    alert("Emailing " + toAddress+" (you) this message:\n"+content +"?");
    if (confirm("Send email?")) {
        alert("You pressed OK!");
        sendEmail();
        alert("Emailing " + toAddress+" (you) this message:\n"+content);
    } 
    else {
        alert("No email was sent");
    }
    }