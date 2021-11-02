class DomainCheck extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set domainRecordData(data) {
        this.domainAvailability = data.domainAvailability;
        this.domainName = data.domainName;

        if (this.domainAvailability.toLowerCase() === 'available') {
            this.result = `Yey! ${this.domainName} is available.`;
            this.illustraion = '<img src="assets/illustration/check.svg" alt="Domain availability" class="illustration">';
        } else {
            this.result = `Sorry, ${this.domainName} is unavailable.`;
            this.illustraion = '<img src="assets/illustration/cross.svg" alt="Domain unavailability" class="illustration">';
        }
    }

    render() {
        this.innerHTML = `
            <div class="content">
                ${this.illustraion}
                <p>${this.result}</p>
            </div>
        `;
    }
}

customElements.define('domain-check', DomainCheck);
