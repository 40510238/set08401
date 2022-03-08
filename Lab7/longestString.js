function calculate() {
    let stringOne = prompt("Please enter the first string...", "Example: The quick brown fox jumped over the lazy dog");
    let stringTwo = prompt("Please enter the second string...", "Example: The quick brown fox jumped over the lazy dog");
    let stringThree = prompt("Please enter the third string...", "Example: The quick brown fox jumped over the lazy dog");
    let longest = "";

    strings = [stringOne, stringTwo, stringThree];

    for (let i = 0; i < strings.length; i ++) {
        console.log(strings[i].split(""));
        if (strings[i].length > longest.length) {
            longest = strings[i];
        }
    }
    alert(longest);
}