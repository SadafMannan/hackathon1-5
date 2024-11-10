document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('Resume-form');
    var resumeDisplayElement = document.getElementById('resume-display');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var dob = document.getElementById('dob').value;
        var address = document.getElementById('address').value;
        var gender = document.querySelector('input[name="gender"]:checked').value; // Query checked radio
        var education = document.getElementById('education').value; // Corrected
        var experience = document.getElementById('Experience').value; // Corrected
        var skills = document.getElementById('skills').value;
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = "\n                <h2><b>Resume</b></h2>\n                <h3>Personal Information</h3>\n                <p><b>Name:</b> ".concat(name, "</p>\n                <p><b>Email:</b> ").concat(email, "</p>\n                <p><b>Phone:</b> ").concat(phone, "</p>\n                <p><b>Date of Birth:</b> ").concat(dob, "</p>\n                <p><b>Address:</b> ").concat(address, "</p>\n                <p><b>Gender:</b> ").concat(gender, "</p>\n                <h3>Education</h3>\n                <p><b>Education:</b> ").concat(education, "</p>\n                <h3>Experience</h3>\n                <p><b>Experience:</b> ").concat(experience, "</p>\n                <h3>Skills</h3>\n                <p><b>Skills:</b> ").concat(skills, "</p>\n            ");
        }
        else {
            console.error("Resume display element not found");
        }
    });
});
