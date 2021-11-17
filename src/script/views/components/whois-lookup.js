import DateFormat from '../../helper/dateFormat';

class WhoisLookup extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set whoisRecordData(data) {
        this.whoisData = data;
        if (this.whoisData.ips) {
            const { ips } = this.whoisData;
            this.ip = ips.toString().replace(/,/g, '<br>');
        }
        if (this.whoisData.registryData.nameServers) {
            let { hostNames } = this.whoisData.registryData.nameServers;
            hostNames = hostNames.toString().replace(/,/g, '<br>');
            this.hostName = hostNames.toLowerCase();
        }
        if (this.whoisData.registryData.status) {
            const { status } = this.whoisData.registryData;
            this.status = status.toString().replace(/\s/g, '<br>');
        }
    }

    render() {
        if (this.whoisData.registrant) {
            this.registrant = `
                <div class="card">
                    <div class="card-header">Registrant Information</div>
                    <div class="card-body">
                        <div class="card-body-divide">
                            <div class="card-content-key">Organization</div>
                            <div class="card-content-value">
                                ${this.whoisData.registrant.organization || this.whoisData.registrant.name || '-'}
                            </div>
                        </div>
                        <div class="card-body-divide">
                            <div class="card-content-key">State/Province</div>
                            <div class="card-content-value">
                                ${this.whoisData.registrant.state || '-'}
                            </div>
                        </div>
                        <div class="card-body-divide">
                            <div class="card-content-key">Country</div>
                            <div class="card-content-value">
                                ${this.whoisData.registrant.country || '-'}
                            </div>
                        </div>
                        <div class="card-body-divide">
                            <div class="card-content-key">Country Code</div>
                            <div class="card-content-value">
                                ${this.whoisData.registrant.countryCode || '-'}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            this.registrant = '';
        }
        this.innerHTML = `
            <div class="card">
                <div class="card-header">Domain Information</div>
                <div class="card-body">
                    <div class="card-body-divide">
                        <div class="card-content-key">Name</div>
                        <div class="card-content-value">${this.whoisData.domainName || '-'}</div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">IP Address</div>
                        <div class="card-content-value">${this.ip || '-'}</div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">Name Server</div>
                        <div class="card-content-value">${this.hostName || '-'}</div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">Important Dates</div>
                <div class="card-body">
                    <div class="card-body-divide">
                        <div class="card-content-key">Created Date</div>
                        <div class="card-content-value">
                            ${this.whoisData.registryData.createdDateNormalized || '-'}
                        </div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">Updated Date</div>
                        <div class="card-content-value">
                            ${this.whoisData.registryData.updatedDateNormalized || '-'}
                        </div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">Expires Date</div>
                        <div class="card-content-value">
                            ${this.whoisData.registryData.expiresDateNormalized || '-'}
                        </div>
                    </div>
                </div>
            </div>
            ${this.registrant}
            <div class="card">
                <div class="card-header">Registrar Information</div>
                <div class="card-body">
                    <div class="card-body-divide">
                        <div class="card-content-key">Name</div>
                        <div class="card-content-value">
                            ${this.whoisData.registryData.registrarName || '-'}
                        </div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">Email</div>
                        <div class="card-content-value">
                            ${this.whoisData.contactEmail || '-'}
                        </div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">IANA ID</div>
                        <div class="card-content-value">
                            ${this.whoisData.registryData.registrarIANAID || '-'}
                        </div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">Whois Server</div>
                        <div class="card-content-value">
                            ${this.whoisData.registryData.whoisServer || '-'}
                        </div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">Status</div>
                        <div class="card-content-value">${this.status || ''}</div>
                    </div>
                </div>
            </div>
            <div class="last-update">
                Last updated ${DateFormat.timeFromNow(this.whoisData.audit.updatedDate) || '-'}
            </div>
        `;
    }
}

customElements.define('whois-lookup', WhoisLookup);
