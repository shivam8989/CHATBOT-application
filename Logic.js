function talk(){
    var know = {
    "Who are you" : "Hello, I am Shivam ",
    "How are you" : "Good :)",
    "What can i do for you" : "Please help me in enchncing my skills.",
    "Your Skills" : "I am skilled in java and have good knowledge of frontend development ",
    "ok" : "Thank You So Much ",
    "Bye" : "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }