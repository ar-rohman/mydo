import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../router/url-parser';
import routes from '../router/routes';
import ActiveMenu from '../utils/active-menu';
// import HeaderVisibility from '../utils/header-visibility';

class App {
    constructor({
        hamburger,
        navigation,
        drawer,
        content,
        clickedLinks,
        links,
    }) {
        this.hamburger = hamburger;
        this.navigation = navigation;
        this.drawer = drawer;
        this.content = content;
        this.clickedLinks = clickedLinks;
        this.links = links;
        // this.header = header;
        // this.skipLink = skipLink;

        this.initialAppShell();
    }

    initialAppShell() {
        DrawerInitiator.init({
            hamburger: this.hamburger,
            navigation: this.navigation,
            drawer: this.drawer,
        });

        ActiveMenu.click({
            clickedLinks: this.clickedLinks,
            links: this.links,
            navigation: this.navigation,
        });
    }

    async renderPage() {
        const url = UrlParser.parseUrlWithCombiner();
        // HeaderVisibility.load({
        //     header: this.header,
        //     url,
        //     skipLink: this.skipLink,
        // });
        const page = routes[url];
        this.content.innerHTML = await page.render();
        await page.afterRender();
    }
}

export default App;
