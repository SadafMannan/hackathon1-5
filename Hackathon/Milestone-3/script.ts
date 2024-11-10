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
                <h2><b>Resume</b></h2>
                <h3>Personal Information</h3>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Phone:</b> ${phone}</p>
                <p><b>Date of Birth:</b> ${dob}</p>
                <p><b>Address:</b> ${address}</p>
                <p><b>Gender:</b> ${gender}</p>
                <h3>Education</h3>
                <p><b>Education:</b> ${education}</p>
                <h3>Experience</h3>
                <p><b>Experience:</b> ${experience}</p>
                <h3>Skills</h3>
                <p><b>Skills:</b> ${skills}</p>
            `;
        } else {
            console.error("Resume display element not found");
        }
    });
});