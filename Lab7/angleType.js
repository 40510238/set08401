function angleConversion() {
    let angle = prompt("Enter an angle...", "Example: 128");
    if (!(angle < 1) && !(angle > 359)) {
        if (angle >= 1 && angle < 90) {
            alert(angle + " degrees is an acute angle.");
        }
        else if (angle == 90) {
            alert(angle + " degrees is a right angle.");
        }
        else if (angle > 90 && angle < 180) {
            alert(angle + " degrees is an obtuse angle.");
        }
        else if (angle == 180) {
            alert(angle + " degrees is a straight angle.");
        }
        else if (angle > 180) {
            alert(angle + " degrees is a reflex angle.");
        }
    }
    else {
        alert("Please enter a valid angle!");
    }
}