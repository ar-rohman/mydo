class DomainInfo extends HTMLElement {
    constructor() {
		super();
		this.shadowDOM = this.attachShadow({mode: "open"});
	}

    set domain(domain) {
        this._domain = domain;
        this.render();
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
           .errorMessage {
                font-weight: lighter;
                font-size: 1.35rem;
                color: rgba(0,0,0,0.5);
                text-align: center;
            }
        </style>`;
        this.shadowDOM.innerHTML += `<div class="errorMessage"> ${message} </div>`;
    }

    render() {
        let nameServer = this._domain.nameServers.hostNames;
        nameServer = nameServer.toString().replace(/,/g, '<br>');

        let ip = this._domain.ips;
        ip = ip.toString().replace(/,/g, '<br>');

        let status = this._domain.status;
        status = status.toString().replace(/ /g, '<br>');
        this.shadowDOM.innerHTML = `
        <style>
            .mydo-card {
                position: relative;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-direction: column;
                flex-direction: column;
                min-width: 0;
                word-wrap: break-word;
                background-color: #fff;
                background-clip: border-box;
                border: 1px solid rgba(0,0,0,.125);
                border-radius: .25rem;
                margin-bottom: 1.5rem;
            }
            .mydo-card-header {
                padding: .75rem 1.25rem;
                margin-bottom: 0;
                background-color: #ff8b03;
                color: #fff;
                border-bottom: 1px solid rgba(0,0,0,.125);
            }
            .mydo-card-header:first-child {
                border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
            }
            .mydo-card-header h5 {
                font-size: 1.25rem;
                margin-bottom: 0;
                margin-top: 0;
                font-weight: 500;
                line-height: 1.2;
            }
            .mydo-card-body {
                -ms-flex: 1 1 auto;
                flex: 1 1 auto;
                min-height: 1px;
                padding: 1.25rem;
            }
            .mydo-text-bold {
                margin-bottom: 0;
                margin-top: 0;
                font-weight: bolder;
            }
            .mydo-text-normal {
                margin-top:0;
                margin-button: 1rem;
            }
            .lastUpdate {
                color: #6c757d;
                margin-bottom: 1.5rem;
            }
        </style>
        <div class="mydo-card">
            <div class="mydo-card-header">
                <h5>Domain Information</h5>
            </div>
            <div class="mydo-card-body">
                <p class="mydo-text-bold">Name:</p>
                <p class="mydo-text-normal"> ${this._domain.domainName}</p>
                <p class="mydo-text-bold">IP Address:</p>
                <p class="mydo-text-normal">${ip}</p>
                <p class="mydo-text-bold">Name Server:</p>
                <p class="mydo-text-normal">${nameServer}</p>
            </div>
        </div>
        <div class="mydo-card">
            <div class="mydo-card-header">
                <h5>Important Dates</h5>
            </div>
            <div class="mydo-card-body">
                <p class="mydo-text-bold">Created Date:</p>
                <p class="mydo-text-normal">${this._domain.createdDateNormalized}</p>
                <p class="mydo-text-bold">Updated Date:</p>
                <p class="mydo-text-normal">${this._domain.updatedDateNormalized}</p>
                <p class="mydo-text-bold">Expires Date:</p>
                <p class="mydo-text-normal">${this._domain.expiresDateNormalized}</p>
            </div>
        </div>
        <div class="mydo-card">
            <div class="mydo-card-header">
                <h5>Registrant Information</h5>
            </div>
            <div class="mydo-card-body">
                <p class="mydo-text-bold">Organization:</p>
                <p class="mydo-text-normal">${this._domain.registrant.organization}</p>
                <p class="mydo-text-bold">State/Province:</p>
                <p class="mydo-text-normal">${this._domain.registrant.state}</p>
                <p class="mydo-text-bold">Country:</p>
                <p class="mydo-text-normal">${this._domain.registrant.country}</p>
                <p class="mydo-text-bold">Country Code:</p>
                <p class="mydo-text-normal">${this._domain.registrant.countryCode}</p>
            </div>
        </div>
        <div class="mydo-card">
            <div class="mydo-card-header">
                <h5>Registrar Information</h5>
            </div>
            <div class="mydo-card-body">
                <p class="mydo-text-bold">Name:</p>
                <p class="mydo-text-normal">${this._domain.registrarName}</p>
                <p class="mydo-text-bold">Email:</p>
                <p class="mydo-text-normal">${this._domain.contactEmail}</p>
                <p class="mydo-text-bold">IANAID:</p>
                <p class="mydo-text-normal">${this._domain.registrarIANAID}</p>
                <p class="mydo-text-bold">whoisServer:</p>
                <p class="mydo-text-normal">${this._domain.whoisServer}</p>
                <p class="mydo-text-bold">Status:</p>
                <p class="mydo-text-normal">${status}</p>
            </div>
        </div>
        <div class="lastUpdate">Last updated on ${this._domain.audit.updatedDate}</div>`
    }
}

customElements.define("domain-info", DomainInfo);