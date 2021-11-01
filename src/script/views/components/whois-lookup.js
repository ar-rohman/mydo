class WhoisLookup extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set whoisRecordData(data) {
        this.whoisData = data;
        // let ips = data.ips.split(',');
    }

    render() {
        let ip = this.whoisData.ips;
        ip = ip.toString().replace(/,/g, '<br>');

        let nameServer = this.whoisData.registryData.nameServers.hostNames;
        nameServer = nameServer.toString().replace(/,/g, '<br>');
        nameServer = nameServer.toLowerCase();

        let { status } = this.whoisData.registryData;
        status = status.toString().replace(/\s/g, '<br>');

        this.innerHTML = `
            <div class="card">
                <div class="card-header">Domain Information</div>
                <div class="card-body">
                    <div class="card-body-divide">
                        <div class="card-content-key">Name</div>
                        <div class="card-content-value">${this.whoisData.domainName}</div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">IP Address</div>
                        <div class="card-content-value">${ip}</div>
                    </div>
                    <div class="card-body-divide-last-child">
                        <div class="card-content-key">Name Server</div>
                        <div class="card-content-value">${nameServer}</div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">Important Dates</div>
                <div class="card-body">
                    <div class="card-body-divide">
                        <div class="card-content-key">Created Date</div>
                        <div class="card-content-value">
                            ${this.whoisData.registryData.createdDateNormalized}
                        </div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">Updated Date</div>
                        <div class="card-content-value">
                            ${this.whoisData.registryData.updatedDateNormalized}
                        </div>
                    </div>
                    <div class="card-body-divide-last-child">
                        <div class="card-content-key">Expires Date</div>
                        <div class="card-content-value">
                            ${this.whoisData.registryData.expiresDateNormalized}
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">Registrant Information</div>
                <div class="card-body">
                    <div class="card-body-divide">
                        <div class="card-content-key">Organization</div>
                        <div class="card-content-value">
                            ${this.whoisData.registrant ? this.whoisData.registrant.organization || this.whoisData.registrant.name || '-' : '-'}
                        </div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">State/Province</div>
                        <div class="card-content-value">
                            ${this.whoisData.registrant ? this.whoisData.registrant.state || '-' : '-'}
                        </div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">Country</div>
                        <div class="card-content-value">
                            ${this.whoisData.registrant ? this.whoisData.registrant.country || '-' : '-'}
                        </div>
                    </div>
                    <div class="card-body-divide-last-child">
                        <div class="card-content-key">Country Code</div>
                        <div class="card-content-value">
                            ${this.whoisData.registrant ? this.whoisData.registrant.countryCode || '-' : '-'}
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">Registrar Information</div>
                <div class="card-body">
                    <div class="card-body-divide">
                        <div class="card-content-key">Name</div>
                        <div class="card-content-value">
                            ${this.whoisData.registryData.registrarName}
                        </div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">Email</div>
                        <div class="card-content-value">
                            ${this.whoisData.contactEmail}
                        </div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">IANA ID</div>
                        <div class="card-content-value">
                            ${this.whoisData.registryData.registrarIANAID}
                        </div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">Whois Server</div>
                        <div class="card-content-value">
                            ${this.whoisData.registryData.whoisServer}
                        </div>
                    </div>
                    <div class="card-body-divide-last-child">
                        <div class="card-content-key">Status</div>
                        <div class="card-content-value">${status}</div>
                    </div>
                </div>
            </div>
            <div class="last-update">Last updated at ${this.whoisData.audit.updatedDate}</div>
        `;
    }
}

customElements.define('whois-lookup', WhoisLookup);
