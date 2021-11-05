import ApiSource from '../../data/api-source';
import '../components/error-page';
import '../components/input-search';
import '../components/geolocation-lookup';

const IpGeolocation = {
    async render() {
        return `
            <div id="content" class="content">
                <img src="assets/illustration/ip-geolocation.svg" alt="IP geolocation illustration" class="illustration">
                <p>Search geographical location by IP address, domain name, or email address</p>
            </div>
            <input-search inputId="geolocation-input" buttonId="geolocation-button"></input-search>
            <div id="tips" class="tips">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4
                            12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374
                            3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                </div>
                <div>
                    <p>You can also hit enter or search button without typing any keyword to check your public IP</p>
                </div>
            </div>
            <div id="ip-geolocation-container"></div>
        `;
    },

    async afterRender() {
        const input = document.getElementById('geolocation-input');
        const button = document.getElementById('geolocation-button');
        button.addEventListener('click', () => {
            this.renderContent(input.value);
        });
        input.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                this.renderContent(input.value);
            }
        });
    },

    async renderContent(value) {
        const geolocationContainer = document.querySelector('#ip-geolocation-container');
        const content = document.getElementById('content');
        const tips = document.getElementById('tips');
        tips.classList.add('hide');
        geolocationContainer.innerHTML = '<div class="loader">Loading...</div>';
        const geolocationResult = await ApiSource.ipGeolocationLookup(value);
        content.classList.add('hide');
        geolocationContainer.innerHTML = '';
        if (geolocationResult.location) {
            const geolocationContent = document.createElement('geolocation-lookup');
            geolocationContent.geolocationRecordData = geolocationResult;
            geolocationContainer.appendChild(geolocationContent);
        } else if (geolocationResult.error) {
            const geolocationContent = document.createElement('error-page');
            const { error } = geolocationResult;
            geolocationContent.message = error;
            geolocationContainer.appendChild(geolocationContent);
        } else {
            const geolocationContent = document.createElement('error-page');
            const error = 'Something went wrong, try again';
            geolocationContent.message = error;
            geolocationContainer.appendChild(geolocationContent);
        }
    },
};

export default IpGeolocation;
