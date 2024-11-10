document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('Resume-form');
    var resumeDisplayElement = document.getElementById('resume-display');
    var shareableLinkContainer = document.getElementById('shareable-link-container');
    var shareableLinkElement = document.getElementById('shareable-link');
    var downloadPdfButton = document.getElementById('download-pdf');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var dob = document.getElementById('dob').value;
        var address = document.getElementById('address').value;
        var gender = document.querySelector('input[name="gender"]:checked').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var resumeData = {
            username: username,
            name: name,
            email: email,
            phone: phone,
            dob: dob,
            address: address,
            gender: gender,
            education: education,
            experience: experience,
            skills: skills
        };
        localStorage.setItem(username, JSON.stringify(resumeData));
        var resumeHtml = "\n            <h2><b>Editable Resume</b></h2>\n            <h3>Personal Information</h3>\n            <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n            <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n            <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n            <p><b>Date of Birth:</b> <span contenteditable=\"true\">").concat(dob, "</span></p>\n            <p><b>Address:</b> <span contenteditable=\"true\">").concat(address, "</span></p>\n            <p><b>Gender:</b> <span contenteditable=\"true\">").concat(gender, "</span></p>\n            <h3>Education</h3>\n            <p><b>Education:</b> <span contenteditable=\"true\">").concat(education, "</span></p>\n            <h3>Experience</h3>\n            <p><b>Experience:</b> <span contenteditable=\"true\">").concat(experience, "</span></p>\n            <h3>Skills</h3>\n            <p><b>Skills:</b> <span contenteditable=\"true\">").concat(skills, "</span></p>\n        ");
        resumeDisplayElement.innerHTML = resumeHtml;
        var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
        shareableLinkContainer.style.display = "block";
        shareableLinkElement.textContent = shareableURL;
    });
    downloadPdfButton.addEventListener("click", function () {
        window.print();
    });
    window.addEventListener("DOMContentLoaded", function () {
        var urlParams = new URLSearchParams(window.location.search);
        var username = urlParams.get('username');
        if (username) {
            var savedResumeData = localStorage.getItem(username);
            if (savedResumeData) {
                var resumeData = JSON.parse(savedResumeData);
                document.getElementById("username").value = username;
                document.getElementById("name").value = resumeData.name;
                document.getElementById("email").value = resumeData.email;
                document.getElementById("phone").value = resumeData.phone;
                document.getElementById("dob").value = resumeData.dob;
                document.getElementById("address").value = resumeData.address;
                document.getElementById("gender").value = resumeData.gender;
                document.getElementById("education").value = resumeData.education;
                document.getElementById("experience").value = resumeData.experience;
                document.getElementById("skills").value = resumeData.skills;
            }
        }
    });
});
