import config from '../globals/config';

const ActiveMenu = {
    click({ clickedLinks, links, navigation }) {
        clickedLinks.forEach((clickedLink) => {
            this.active({ clickedLink, links, navigation });
        });
    },

    active({ clickedLink, links, navigation }) {
        const localStoregeActiveMenu = localStorage.getItem(config.activeMenuLocalStorage);
        if (localStoregeActiveMenu === clickedLink.id) {
            this.toggleActive(links, clickedLink);
            localStorage.setItem(config.activeMenuLocalStorage, clickedLink.id);
        }
        clickedLink.addEventListener('click', (event) => {
            localStorage.setItem(config.activeMenuLocalStorage, clickedLink.id);
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
