import ApiSource from '../../data/api-source';
import '../components/error-page';
import '../components/input-search';
import '../components/email-lookup';

const EmailVerification = {
    async render() {
        return `
            <div id="content" class="content">
                <img src="assets/illustration/email-verification.svg" alt="Email verification illustration" class="illustration">
                <p>Email Address Verification and Validation Services</p>
            </div>
            <input-search
                inputId="email-input"
                buttonId="email-button"
                placeholder="Type email address"></input-search>
            <div id="email-verification-container"></div>
        `;
    },

    async afterRender() {
        const input = document.getElementById('email-input');
        const button = document.getElementById('email-button');
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
        const emailContainer = document.querySelector('#email-verification-container');
        const content = document.getElementById('content');
        emailContainer.innerHTML = '<div class="loader">Loading...</div>';
        const emailResult = await ApiSource.emailVerificationLookup(value);
        content.classList.add('hide');
        emailContainer.innerHTML = '';
        if (emailResult.ErrorMessage) {
            const emailContent = document.createElement('error-page');
            const { ErrorMessage } = emailResult;
            let errorMsg = [];
            ErrorMessage.forEach((error) => {
                errorMsg.push(error.Error);
            });
            errorMsg = errorMsg.toString().replace(/,/g, '<br>');
            emailContent.message = errorMsg;
            emailContainer.appendChild(emailContent);
        } else {
            const emailContent = document.createElement('email-lookup');
            emailContent.emailRecordData = emailResult;
            emailContainer.appendChild(emailContent);
        }
    },
};

export default EmailVerification;
