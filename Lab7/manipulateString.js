function manipulate() {
    let string = prompt("Please enter a string to manipulate... (in lower case only)", "Example: The quick brown fox jumped over the lazy dog");
    var chars = string.split("");
    console.log(chars);
    let output = "";

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] == "a") {
            output += "b";
        }
        if (chars[i] == "b") {
            output += "c";
        }
        if (chars[i] == "c") {
            output += "d";
        }
        if (chars[i] == "d") {
            output += "e";
        }
        if (chars[i] == "e") {
            output += "f";
        }
        if (chars[i] == "f") {
            output += "g";
        }
        if (chars[i] == "g") {
            output += "h";
        }
        if (chars[i] == "h") {
            output += "i";
        }
        if (chars[i] == "i") {
            output += "j";
        }
        if (chars[i] == "j") {
            output += "k";
        }
        if (chars[i] == "k") {
            output += "l";
        }
        if (chars[i] == "l") {
            output += "m";
        }
        if (chars[i] == "m") {
            output += "n";
        }
        if (chars[i] == "n") {
            output += "o";
        }
        if (chars[i] == "o") {
            output += "p";
        }
        if (chars[i] == "p") {
            output += "q";
        }
        if (chars[i] == "q") {
            output += "r";
        }
        if (chars[i] == "r") {
            output += "s";
        }
        if (chars[i] == "s") {
            output += "t";
        }
        if (chars[i] == "t") {
            output += "u";
        }
        if (chars[i] == "u") {
            output += "v";
        }
        if (chars[i] == "v") {
            output += "w";
        }
        if (chars[i] == "w") {
            output += "x";
        }
        if (chars[i] == "x") {
            output += "y";
        }
        if (chars[i] == "y") {
            output += "z";
        }
        if (chars[i] == "z") {
            output += "a";
        }
        if (chars[i] == " ") {
            output += " ";
        }
    }
    alert(output);
}