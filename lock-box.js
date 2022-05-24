const prompt = require('prompt-sync')({sigint: true});

let pincode = '1234'; 

let bouncer = prompt("Enter the pincode: ")

if(bouncer !== pincode){
    console.log("failure");
}
if(bouncer === pincode){
    console.log("success");
}

