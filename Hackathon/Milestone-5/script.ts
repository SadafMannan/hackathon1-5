

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('Resume-form') as HTMLFormElement;
    const resumeDisplayElement = document.getElementById('resume-display') as HTMLElement;
    const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLElement;
    const shareableLinkElement = document.getElementById('shareable-link') as HTMLInputElement;
    const downloadPdfButton = document.getElementById('download-pdf') as HTMLAnchorElement;

    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();
        
        const username = (document.getElementById('username') as HTMLInputElement).value;
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const dob = (document.getElementById('dob') as HTMLInputElement).value;
        const address = (document.getElementById('address') as HTMLTextAreaElement).value;
        const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        const resumeData = {
            username,
            name,
            email,
            phone,
            dob,
            address,
            gender,
            education,
            experience,
            skills
        };

        localStorage.setItem(username, JSON.stringify(resumeData));

        const resumeHtml = `
            <h2><b>Editable Resume</b></h2>
            <h3>Personal Information</h3>
            <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
            <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
            <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
            <p><b>Date of Birth:</b> <span contenteditable="true">${dob}</span></p>
            <p><b>Address:</b> <span contenteditable="true">${address}</span></p>
            <p><b>Gender:</b> <span contenteditable="true">${gender}</span></p>
            <h3>Education</h3>
            <p contenteditable="true">${education}</p>
            <h3>Experience</h3>
            <p contenteditable="true">${experience}</p>
            <h3>Skills</h3>
            <p contenteditable="true">${skills}</p>
        `;
        resumeDisplayElement.innerHTML=resumeHtml;
        const shareableURL=
        `${window.location.origin}?username=${encodeURIComponent(username)}`;
        shareableLinkContainer.style.display=`block`;
    shareableLinkElement.href=shareableURL;
        
        shareableLinkElement.textContent=shareableURL;
        });
        downloadPdfButton.addEventListener(`click`, ()=>{
            window.print();
        });
        window.addEventListener(`DOMContentLoaded`, ()=>{
            const urlParams= new URLSearchParams(window.location.search);
            const username = urlParams.get('username');
            if(username){
                const savedResumeData= localStorage.getItem(username);
                if(savedResumeData){
                    const resumeData= JSON.parse(savedResumeData);
                    (document.getElementById(`username`)as HTMLInputElement).value=username;
                    (document.getElementById(`name`)as HTMLInputElement).value=resumeData.name;
                    (document.getElementById(`email`)as HTMLInputElement).value=resumeData.email;
                    (document.getElementById(`phone`)as HTMLInputElement).value=resumeData.phone;
                    (document.getElementById(`dob`)as HTMLInputElement).value=resumeData.dob;
                    (document.getElementById(`address`)as HTMLTextAreaElement).value=resumeData.address;
                    (document.getElementById(`gender`)as HTMLTextAreaElement).value=resumeData.gender;
                    (document.getElementById(`education`)as HTMLTextAreaElement).value=resumeData.education;
                    (document.getElementById(`experience`)as HTMLTextAreaElement).value=resumeData.experience;
                    (document.getElementById(`skills`)as HTMLTextAreaElement).value=resumeData.skills;



                }

        }})})