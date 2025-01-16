document.addEventListener('DOMContentLoaded', function() { //Περιμένει να φορτωθεί πλήρως η δομή HTML της σελίδας πριν εκτελεστεί ο κώδικας
    // Διαχείριση κεντρικού μενού
    const navLinks = document.querySelectorAll('nav a');
    const contentSections = document.querySelectorAll('.content-section');
    const sideMenus = document.querySelectorAll('.side-menu');
    const biographyContents = document.querySelectorAll('.biography-content');
    const paintingsContents = document.querySelectorAll('.paintings-content');
    const exhibitionsContents = document.querySelectorAll('.exhibitions-content');
    const links1Contents = document.querySelectorAll('.links1-content');


    // Χειρισμός κεντρικού μενού
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.dataset.section;

            // Απόκρυψη όλων των sections
            contentSections.forEach(sec => {
                sec.style.display = 'none';
            });

            // Εμφάνιση επιλεγμένου section
            const selectedSection = document.getElementById(section);
            if (selectedSection) {
                selectedSection.style.display = 'block';
            }   //Όλα τα sections κρύβονται (display: none).
                //Εμφανίζεται μόνο το επιλεγμένο section (display: block).

            // Διαχείριση πλευρικού μενού
            sideMenus.forEach(menu => {
                menu.style.display = 'none';
            });
            const relatedMenu = document.getElementById(`${section}-menu`);
            if (relatedMenu) {
                relatedMenu.style.display = 'block';
            }

            // Αν είναι η βιογραφία, κρύψε όλα
            if (section === 'biography') {
                biographyContents.forEach(content => {
                    content.style.display = 'none'; // Όλα κρυμμένα
                });
            }
            
            if (section === 'paintings') {
                paintingsContents.forEach(content => {
                    content.style.display = 'none'; // Όλα κρυμμένα
                });
            }
            
            if (section === 'exhibitions') {
                exhibitionsContents.forEach(content => {
                    content.style.display = 'none'; // Όλα κρυμμένα
                });
            }
            
            if (section === 'links1') {
                links1Contents.forEach(content => {
                    content.style.display = 'none'; // Όλα κρυμμένα
                });
            }
            
        });
    });

    // Χειρισμός πλευρικού μενού βιογραφίας
    const biographyLinks = document.querySelectorAll('#biography-menu a');
    biographyLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const contentId = this.dataset.content;

            // Απόκρυψη όλων των biography contents
            biographyContents.forEach(content => {
                content.style.display = 'none';
            });

            // Εμφάνιση επιλεγμένου περιεχομένου
            const selectedContent = document.getElementById(contentId);
            if (selectedContent) {
                selectedContent.style.display = 'block';
            }
        });
    }); //Επαναλαμβάεται το ίδιο σε όλα

    const paintingsLinks = document.querySelectorAll('#paintings-menu a');
    paintingsLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const contentId = this.dataset.content;

            // Απόκρυψη όλων των paintins contents
            paintingsContents.forEach(content => {
                content.style.display = 'none';
            });

            // Εμφάνιση επιλεγμένου περιεχομένου
            const selectedContent = document.getElementById(contentId);
            if (selectedContent) {
                selectedContent.style.display = 'block';
            }
        });
    });

    const exhibitionsLinks = document.querySelectorAll('#exhibitions-menu a');
    exhibitionsLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const contentId = this.dataset.content;

            // Απόκρυψη όλων των exhibitions contents
            exhibitionsContents.forEach(content => {
                content.style.display = 'none';
            });

            // Εμφάνιση επιλεγμένου περιεχομένου
            const selectedContent = document.getElementById(contentId);
            if (selectedContent) {
                selectedContent.style.display = 'block';
            }
        });
    });

    const links1Links = document.querySelectorAll('#links1-menu a');
    links1Links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const contentId = this.dataset.content;

            
            links1Contents.forEach(content => {
                content.style.display = 'none';
            });

            
            const selectedContent = document.getElementById(contentId);
            if (selectedContent) {
                selectedContent.style.display = 'block';
            }
        });
    });

    // Εμφάνιση αρχικής σελίδας
    document.querySelector('nav a').click();
});


// Προσπάθεια για φόρτωση περιεχομένου
async function getData(contentType) {
    try {
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        const TableBody = document.querySelector(`#${contentType}-main`);
        
        // Καθαρίζουμε το προηγούμενο περιεχόμενο
        TableBody.innerHTML = '';
        
        // Δημιουργούμε και προσθέτουμε τον πίνακα
        const table = createTable(data);
        TableBody.appendChild(table);
        
    } catch (error) {
        console.error(error.message);
       
    }
    getDataFromFile('data.json').then(data => console.log(data));  // Παίρνει δεδομένα απο το json data
}


