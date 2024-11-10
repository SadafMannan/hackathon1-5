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
            resumeDisplayElement.innerHTML = "\n                <h2><b>Editable Resume</b></h2>\n                <h3>Personal Information</h3>\n                <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n                <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n                <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n                <p><b>Date of Birth:</b> <span contenteditable=\"true\">").concat(dob, "</span></p>\n                <p><b>Address:</b><span contenteditable=\"true\">").concat(address, "</span></p>\n                <p><b>Gender:</b><span contenteditable=\"true\">").concat(gender, "</span></p>\n                <h3>Education</h3>\n                <p contenteditable=\"true\">").concat(education, "</p>\n                <p><b>Education:</b><span contenteditable=\"true\">").concat(education, "</span></p>\n                <h3>Experience</h3>\n                <p contenteditable=\"true\">").concat(experience, "</p>\n                <p><b>Experience:</b><span contenteditable=\"true\">").concat(experience, "</span></p>\n                <h3>Skills</h3>\n                <p contenteditable=\"true\">").concat(skills, "</p>\n                <p><b>Skills:</b><span contenteditable=\"true\">").concat(skills, "</span></p>\n            ");
        }
        else {
            console.error("Resume display element not found");
        }
    });
});
