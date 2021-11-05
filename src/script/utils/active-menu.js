const ActiveMenu = {
    click({ clickedLinks, links, navigation }) {
        clickedLinks.forEach((clickedLink) => {
            this.active({ clickedLink, links, navigation });
        });
    },

    active({ clickedLink, links, navigation }) {
        if (window.location.href === clickedLink.href) {
            this.toggleActive(links, clickedLink);
        }
        clickedLink.addEventListener('click', (event) => {
            this.toggleActive(links, clickedLink);
            event.stopPropagation();
            navigation.classList.remove('open');
        });
    },

    toggleActive(links, clickedLink) {
        links.forEach((node) => {
            node.classList.remove('active');
        });
        clickedLink.classList.add('active');
    },
};

export default ActiveMenu;
