import ApiSource from '../../data/api-source';
import '../components/error-page';
import '../components/input-search';
import '../components/email-lookup';
import '../components/input-checkbox';

const EmailVerification = {
    async render() {
        return `
            <div id="content" class="content">
                <img src="assets/illustration/email-verification.svg" alt="Email verification illustration" class="illustration">
                <p>Verify and validate email address</p>
            </div>
            <input-search inputId="email-input" buttonId="email-button"></input-search>
            <input-checkbox checkboxId="email-checkbox"></input-checkbox>
            <div id="email-verification-container"></div>
        `;
    },

    async afterRender() {
        document.title = 'Email Verification - MyDo';
        const input = document.getElementById('email-input');
        const button = document.getElementById('email-button');
        const checkbox = document.getElementById('email-checkbox');
        button.addEventListener('click', () => {
            if (input.value) {
                this.renderContent(input.value, checkbox.checked);
            }
        });
        input.addEventListener('keypress', (event) => {
            if (event.key === 'Enter' && input.value) {
                this.renderContent(input.value, checkbox.checked);
            }
        });
    },

    async renderContent(text, checkbox) {
        const emailContainer = document.querySelector('#email-verification-container');
        const content = document.getElementById('content');
        emailContainer.innerHTML = '<div class="loader">Loading...</div>';
        const emailResult = await ApiSource.emailVerificationLookup(text, checkbox);
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
