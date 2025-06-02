$(document).ready(function () {
    var typed = new Typed('.block-top', {
      strings: [
        '<div class="siteName">//djetani12.github.io</div><div class="selfName">^100name: ^300deep jetani </div><div class="selfTitle">^100title: ^300software developer </div><div class="currentCompany">^100company: ^300self </div><div class="selfLocation">^100location: ^300new jersey </div>'
      ],
      typeSpeed: 15,
      showCursor: false,
    });
  
    new Typed('.soon-text-01', { strings: ['new interface coming soon'], typeSpeed: 5, showCursor: false, startDelay: 5000 });
    new Typed('.soon-text-02', { strings: ['new interface coming soon'], typeSpeed: 5, showCursor: false, startDelay: 5200 });
    new Typed('.soon-text-03', { strings: ['new interface coming soon'], typeSpeed: 5, showCursor: false, startDelay: 5400 });
    new Typed('.whileSoon', { strings: ['while (soon):'], typeSpeed: 15, showCursor: false, startDelay: 6400 });
    new Typed('.contactMethods', { strings: ['  contact.method()'], typeSpeed: 15, showCursor: false, startDelay: 6900 });
  
    new Typed('.links', {
      strings: [
        '<a class="slink" href="https://www.linkedin.com/in/deep-jetani" target="_blank">linkedin</a><a class="slink" href="https://github.com/djetani12" target="_blank">github</a>'
      ],
      typeSpeed: 15,
      showCursor: false,
      startDelay: 7500,
    });
  
    new Typed('.copyLink', {
      strings: ['copy email address'],
      typeSpeed: 15,
      showCursor: false,
      startDelay: 8700,
      onComplete: function () {
        $('#emailID').click(() => {
          navigator.clipboard.writeText("deepjetani@gmail.com");
          $('#emailID').text('email copied!');
          setTimeout(() => $('#emailID').text('copy email address'), 2000);
        });
      }
    });
  });
  