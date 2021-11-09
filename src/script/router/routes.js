import WhoisHome from '../views/pages/whois-home';
import DomainAvailability from '../views/pages/domain-availability';
import IpGeolocation from '../views/pages/ip-geolocation';
import EmailVerification from '../views/pages/email-verification';
import About from '../views/pages/about';

const routes = {
    '/': WhoisHome, // default page
    '/whois': WhoisHome,
    '/domain-availability': DomainAvailability,
    '/ip-geolocation': IpGeolocation,
    '/email-verification': EmailVerification,
    '/about': About,
};

export default routes;
