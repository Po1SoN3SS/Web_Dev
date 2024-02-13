let login = prompt("Who's there?", "");

if (login === "Admin") {
    let password = prompt("Password?", "");

    if (password === "TheMaster") {
        alert("Welcome!");
    } else if (password === "" || password === null) {
        // Hint: passing an empty input to a prompt returns an empty string ''.
        // Pressing ESC during a prompt returns null.
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if (login === "" || login === null) {
    // empty string or ESC
    alert("Canceled");
} else {
    alert("I don't know you");
}