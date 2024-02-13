function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

// Error: Cannot read property 'name' of undefined
alert(user.ref.name); // What's the result?