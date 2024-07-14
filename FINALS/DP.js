function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

const footer = document.querySelector('footer');

function isFooterVisible() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.clientHeight;
    const bottomPosition = scrollPosition + windowHeight;
    const threshold = bodyHeight - 50;

    if (bottomPosition >= threshold) {
        footer.style.visibility = 'visible';
    } else {
        footer.style.visibility = 'hidden';
    }
}

window.addEventListener('scroll', isFooterVisible);

document.addEventListener('DOMContentLoaded', isFooterVisible);

document.addEventListener('DOMContentLoaded', function() {
    const workItems = document.querySelectorAll('.work-item');
    const page1Button = document.getElementById('page1');
    const page2Button = document.getElementById('page2');

    function showPage(pageNumber) {
        workItems.forEach(item => {
            item.style.display = 'none';
        });

        if (pageNumber === 1) {
            for (let i = 0; i < 3; i++) {
                workItems[i].style.display = 'block';
            }
        } else if (pageNumber === 2) {
            for (let i = 3; i < workItems.length; i++) {
                workItems[i].style.display = 'block';
            }
        }
    }

    showPage(1);
    
    page1Button.addEventListener('click', function() {
        showPage(1);
    });

    page2Button.addEventListener('click', function() {
        showPage(2);
    });
});
