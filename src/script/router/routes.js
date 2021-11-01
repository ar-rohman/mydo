import Home from '../views/pages/home';
import DomainAvailability from '../views/pages/domain-availability';
import IpGeolocation from '../views/pages/ip-geolocation';
import EmailVerification from '../views/pages/email-verification';
import About from '../views/pages/about';

const routes = {
    '/': Home, // default page
    '/home': Home,
    '/domain-availability': DomainAvailability,
    '/ip-geolocation': IpGeolocation,
    '/email-verification': EmailVerification,
    '/about': About,
};

export default routes;
