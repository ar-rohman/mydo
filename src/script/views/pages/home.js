import ApiSource from '../../data/api-source';
import '../components/error-page';
import '../components/input-search';
import '../components/whois-lookup';

const Home = {
    async render() {
        return `
            <div id="home-content" class="home-content">
                <img src="assets/illustration/whois.svg" alt="Whois illustration" class="home-illustration">
                <p class="home-description">Search the whois database and look up domain information.</p>
            </div>
            <input-search placeholder="Type domain name"></input-search>
            <div id="whois-container"></div>
        `;
    },

    async afterRender() {
        const input = document.getElementById('lookupInput');
        const button = document.getElementById('lookupButton');
        button.addEventListener('click', () => {
            if (input.value) {
                this.renderContent(input.value);
            }
        });
        input.addEventListener('keypress', (event) => {
            if (event.key === 'Enter' && input.value) {
                this.renderContent(input.value);
            }
        });
    },
    async renderContent(value) {
        const whoisContainer = document.querySelector('#whois-container');
        const homeContent = document.getElementById('home-content');
        whoisContainer.innerHTML = '<div class="loader">Loading...</div>';
        const whoisResult = await ApiSource.whoisLookup(value);
        homeContent.classList.add('hide');
        whoisContainer.innerHTML = '';
        if (whoisResult.ErrorMessage) {
            const whoisContent = document.createElement('error-page');
            const { msg } = whoisResult.ErrorMessage;
            whoisContent.message = msg;
            whoisContainer.appendChild(whoisContent);
        } else {
            const { WhoisRecord } = whoisResult;
            if (WhoisRecord.dataError) {
                const whoisContent = document.createElement('error-page');
                const { dataError } = WhoisRecord;
                whoisContent.message = dataError;
                whoisContainer.appendChild(whoisContent);
            } else {
                const whoisContent = document.createElement('whois-lookup');
                whoisContent.whoisRecordData = WhoisRecord;
                whoisContainer.appendChild(whoisContent);
            }
        }
    },
};

export default Home;
