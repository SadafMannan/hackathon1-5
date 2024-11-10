document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('Resume-form') as HTMLFormElement;
    const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const dob = (document.getElementById('dob') as HTMLInputElement).value;
        const address = (document.getElementById('address') as HTMLTextAreaElement).value;
        const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement).value; // Query checked radio
        const education = (document.getElementById('education') as HTMLTextAreaElement).value; // Corrected
        const experience = (document.getElementById('Experience') as HTMLTextAreaElement).value; // Corrected
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = `
                <h2><b>Editable Resume</b></h2>
                <h3>Personal Information</h3>
                <p><b>Name:</b><span contenteditable="true">${name}</span></p>
                <p><b>Email:</b><span contenteditable="true">${email}</span></p>
                <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
                <p><b>Date of Birth:</b> <span contenteditable="true">${dob}</span></p>
                <p><b>Address:</b><span contenteditable="true">${address}</span></p>
                <p><b>Gender:</b><span contenteditable="true">${gender}</span></p>
                <h3>Education</h3>
                <p contenteditable="true">${education}</p>
                <p><b>Education:</b><span contenteditable="true">${education}</span></p>
                <h3>Experience</h3>
                <p contenteditable="true">${experience}</p>
                <p><b>Experience:</b><span contenteditable="true">${experience}</span></p>
                <h3>Skills</h3>
                <p contenteditable="true">${skills}</p>
                <p><b>Skills:</b><span contenteditable="true">${skills}</span></p>
            `;
        } else {
            console.error("Resume display element not found");
        }
    });
});