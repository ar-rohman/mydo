class EmailLookup extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set emailRecordData(data) {
        this.emailData = data;
        if (this.emailData.formatCheck.toLowerCase() === 'true') {
            this.formatCheck = '<p class="green">The email address is valid</p>';
        } else {
            this.formatCheck = '<p class="red">The email address is invalid</p>';
        }

        if (this.emailData.smtpCheck.toLowerCase() === 'true') {
            this.smtpCheck = '<p class="green">The email address exists and can receive email over SMTP.</p>';
        } else {
            this.smtpCheck = `
                <p class="red">
                    The email address doesn't exist on the target SMTP server,
                    doesn't use SMTP protocol or temporarily couldn't receive messages.
                </p>`;
        }

        if (this.emailData.dnsCheck.toLowerCase() === 'true') {
            this.dnsCheck = '<p class="green">The domain in the email address has passed DNS check.</p>';
        } else {
            this.dnsCheck = '<p class="red">The domain in email address hasn\'t passed DNS check.</p>';
        }

        if (this.emailData.freeCheck.toLowerCase() === 'true') {
            this.freeCheck = '<p class="green">The email address is free.</p>';
        } else {
            this.freeCheck = '<p class="green">The email address is paid.</p>';
        }

        if (this.emailData.disposableCheck.toLowerCase() === 'true') {
            this.disposableCheck = '<p class="red">The email address is disposable.</p>';
        } else {
            this.disposableCheck = '<p class="green">The email address isn\'t disposable.</p>';
        }

        if (this.emailData.catchAllCheck.toLowerCase() === 'true') {
            this.catchAllCheck = '<p class="green">The mail server has a <i>"catch-all"</i> address.</p>';
        } else {
            this.catchAllCheck = '<p class="red">The mail server doesn\'t have a <i>"catch-all"</i> address.</p>';
        }
        if (this.emailData.mxRecords) {
            let { mxRecords } = this.emailData;
            mxRecords = mxRecords.toString().replace(/,/g, '<br>');
            this.mxRecord = mxRecords.toLowerCase();
        } else {
            this.mxRecord = '-';
        }

        if (this.emailData.formatCheck.toLowerCase() === 'true'
            && this.emailData.dnsCheck.toLowerCase() === 'true') {
            this.result = `<p class="green"><b>Yey! ${this.emailData.emailAddress} is valid.</b></p>`;
            this.illustraion = '<img src="assets/illustration/check.svg" alt="Email valid" class="illustration">';
        } else {
            this.result = `<p class="red"><b>Sorry, ${this.emailData.emailAddress} is invalid.</b></p>`;
            this.illustraion = '<img src="assets/illustration/cross.svg" alt="Email invalid" class="illustration">';
        }
    }

    render() {
        this.innerHTML = `
            <div class="content pb-8">
                ${this.illustraion}
                ${this.result}
                <p>Check detail below</p>
            </div>
            <div class="card">
                <div class="card-header">Email Verification Detail</div>
                <div class="card-body">
                    <div class="card-body-divide">
                        <div class="card-content-key">Email address</div>
                        <div class="card-content-value">${this.emailData.emailAddress}</div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">Email address check</div>
                        <div class="card-content-value">${this.formatCheck}</div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">SMTP check</div>
                        <div class="card-content-value">${this.smtpCheck}</div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">Domain name system check</div>
                        <div class="card-content-value">${this.dnsCheck}</div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">Free email address check</div>
                        <div class="card-content-value">${this.freeCheck}</div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">Check email provider for abuse</div>
                        <div class="card-content-value">${this.disposableCheck}</div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">Catch all emails address</div>
                        <div class="card-content-value">${this.catchAllCheck}</div>
                    </div>
                    <div class="card-body-divide-last-child">
                        <div class="card-content-key">mxRecords</div>
                        <div class="card-content-value">${this.mxRecord}</div>
                    </div>
                </div>
            </div>            
            <div class="last-update">Last updated at ${this.emailData.audit.auditUpdatedDate || '-'}</div>
        `;
    }
}

customElements.define('email-lookup', EmailLookup);
