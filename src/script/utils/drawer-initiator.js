const DrawerInitiator = {
    init({ hamburger, navigation, drawer }) {
        hamburger.addEventListener('click', (event) => {
            this.toggleDrawer(event, navigation);
        });

        document.addEventListener('click', (event) => {
            this.closeDrawer(event, navigation, drawer);
        });

        // handle swipe left event
        navigation.addEventListener('touchstart', (event) => {
            this.touchStart = event.touches[0].clientX;
        });
        navigation.addEventListener('touchmove', (event) => {
            this.touchMove = event.touches[0].clientX;
            if (this.touchStart - this.touchMove > 50) {
                navigation.classList.remove('open');
            }
        });
    },

    toggleDrawer(event, navigation) {
        event.stopPropagation();
        navigation.classList.toggle('open');
    },

    closeDrawer(event, navigation, drawer) {
        const isClickedInsideDrawer = drawer.contains(event.target);
        if (!isClickedInsideDrawer) {
            event.stopPropagation();
            navigation.classList.remove('open');
        }
    },
};

export default DrawerInitiator;
