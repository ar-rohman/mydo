const { version } = require('../../../../package.json');

const About = {
    async render() {
        return `
            <div class="about-content">
                <img src="assets/illustration/about.svg" alt="About illustration" class="illustration">
                <div id="about-description" class="about-description"></div>    
            </div>
        `;
    },

    async afterRender() {
        const aboutContainer = document.querySelector('#about-description');
        aboutContainer.innerHTML = `
            <p class="about-title">About MyDo</p>
            <p>MyDo is an application that provides domain and email information.</p>
            <p class="about-services">Our services</p>
            <ul class="service-list">
                <li>
                    <p>Whois Domain Lookup</p>
                    <p>Provides the registration details, also known as the WHOIS record data,</p>
                    <p>of a domain name, an IP address, or an email address.</p>
                </li>
                <li>
                    <p>Domain Availability Check</p>
                    <p>Instantly know which domains can be purchased.</p>
                </li>
                <li>
                    <p>IP Geolocation Lookup</p>
                    <p>Identify web visitors and users’ geographical location.</p>
                </li>
                <li>
                    <p>Email Verification Check</p>
                    <p>Verify the existence, validity & quality of any email address.</p>
                </li>
            </ul>
            <p class="mb-4">
                Data taken from
                <a href="https://whoisxmlapi.com" target="_blank" class="link">WhoisXMLAPI</a>.
            </p>
            <p class="mb-4">
                Developed by
                <a href="https://github.com/ar-rohman" target="_blank" class="link">Rohman</a>
            </p>
            <p class="pb-8">Version ${version}</p>
        `;
    },
};

export default About;
