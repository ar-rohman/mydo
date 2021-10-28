const DrawerInitiator = {
    init({ hamburger, navigation }) {
        hamburger.addEventListener('click', (event) => {
            this._toggleDrawer(event, navigation);
        });

        document.addEventListener('click', (event) => {
            this._closeDrawer(event, navigation);
        });
    },

    _toggleDrawer(event, navigation) {
        event.stopPropagation();
        navigation.classList.toggle('open');
    },

    _closeDrawer(event, navigation) {
        const isClickedInsideDrawer = navigation.contains(event.target);
        if (!isClickedInsideDrawer) {
            event.stopPropagation();
            navigation.classList.remove('open');
        }
    },
};

export default DrawerInitiator;
