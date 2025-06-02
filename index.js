function copyEmail() {
    const email = 'deepjetani@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        const el = document.getElementById("emailID");
        el.innerText = "email copied to the clipboard";
        setTimeout(() => {
            el.innerText = "copy email address";
        }, 1500);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const startTyping = () => {
        new Typed('.block-top', {
            strings: [
                '<div class="siteName">//djetani12.github.io</div>' +
                '<div class="selfName">^500name: ^300deep jetani</div>' +
                '<div class="selfTitle">^500title: ^300software developer/engineer</div>'
            ],
            typeSpeed: 30,
            showCursor: false,
            onComplete: () => typeEducation()
        });
    };

    const typeEducation = () => {
        new Typed('.education-section', {
            strings: [
                '<div class="educationLabel">^500education:</div>' +
                '<div class="eduSchool">^500new jersey institute of technology - newark, nj</div>' +
                '<div class="eduDegree">^500bachelor of science in computer science, sep 2021 - dec 2024</div>'
            ],
            typeSpeed: 30,
            showCursor: false,
            onComplete: () => typeFooter()
        });
    };

    const typeFooter = () => {
        new Typed('.whileSoon', {
            strings: ['while (soon):'],
            typeSpeed: 30,
            showCursor: false,
            onComplete: () => {
                new Typed('.contactMethods', {
                    strings: ['&emsp;&emsp;contact.method()'],
                    typeSpeed: 30,
                    showCursor: false,
                    onComplete: () => {
                        new Typed('.links', {
                            strings: [
                                '<a class="slink" href="https://www.linkedin.com/in/deep-jetani" target="_blank">linkedin</a> ' +
                                '<a class="slink" href="https://github.com/djetani12" target="_blank">github</a>'
                            ],
                            typeSpeed: 30,
                            showCursor: false,
                            onComplete: () => {
                                document.getElementById("emailID").style.display = "inline-block";
                            }
                        });
                    }
                });
            }
        });
    };

    startTyping();
});
