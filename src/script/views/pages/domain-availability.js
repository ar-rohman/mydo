import ApiSource from '../../data/api-source';
import '../components/error-page';
import '../components/input-search';
import '../components/domain-check';

const DomainAvailability = {
    async render() {
        return `
            <div id="content" class="content">
                <img src="assets/illustration/domain-availability.svg" alt="Domain availability illustration" class="illustration">
                <p>Check domain availability</p>
            </div>
            <input-search inputId="domain-input" buttonId="domain-button"></input-search>
            <div id="domain-availability-container"></div>
        `;
    },

    async afterRender() {
        const input = document.getElementById('domain-input');
        const button = document.getElementById('domain-button');
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
        const domainContainer = document.querySelector('#domain-availability-container');
        const content = document.getElementById('content');
        domainContainer.innerHTML = '<div class="loader">Loading...</div>';
        const domainResult = await ApiSource.domainAvailabilityLookup(value);
        content.classList.add('hide');
        domainContainer.innerHTML = '';
        if (domainResult.DomainInfo) {
            const { DomainInfo } = domainResult;
            const domainContent = document.createElement('domain-check');
            domainContent.domainRecordData = DomainInfo;
            domainContainer.appendChild(domainContent);
        } else if (domainResult.ErrorMessage) {
            const whoisContent = document.createElement('error-page');
            const { msg } = domainResult.ErrorMessage;
            whoisContent.message = msg;
            domainContainer.appendChild(whoisContent);
        } else if (domainResult.messages) {
            const domainContent = document.createElement('error-page');
            const { messages } = domainResult;
            domainContent.message = messages;
            domainContainer.appendChild(domainContent);
        } else {
            const domainContent = document.createElement('error-page');
            const error = 'Something went wrong, try again';
            domainContent.message = error;
            domainContainer.appendChild(domainContent);
        }
    },
};

export default DomainAvailability;
