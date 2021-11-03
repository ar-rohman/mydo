class GeolocationLookup extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set geolocationRecordData(data) {
        this.data = data;

        if (this.data.domains) {
            let { domains } = this.data;
            domains = domains.toString().replace(/,/g, '<br>');
            this.domains = domains.toLowerCase();
        }
    }

    render() {
        if (this.data.as) {
            this.as = `
                <div class="card">
                    <div class="card-header">Autonomus System Information</div>
                    <div class="card-body">
                        <div class="card-body-divide">
                            <div class="card-content-key">AS Number </div>
                            <div class="card-content-value">
                                ${this.data.as.asn || '-'}
                            </div>
                        </div>
                        <div class="card-body-divide">
                            <div class="card-content-key">AS Name</div>
                            <div class="card-content-value">
                                ${this.data.as.asn || '-'}
                            </div>
                        </div>
                        <div class="card-body-divide">
                            <div class="card-content-key">AS Route</div>
                            <div class="card-content-value">
                                ${this.data.as.route || '-'}
                            </div>
                        </div>
                        <div class="card-body-divide">
                            <div class="card-content-key">AS Website's URL</div>
                            <div class="card-content-value">
                                ${this.data.as.domain || '-'}
                            </div>
                        </div>
                        <div class="card-body-divide-last-child">
                            <div class="card-content-key">AS Type</div>
                            <div class="card-content-value">${this.data.as.type || ''}</div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            this.as = '';
        }
        this.innerHTML = `
            <div class="card">
                <div class="card-header">Location Information</div>
                <div class="card-body">
                    <div class="card-body-divide">
                        <div class="card-content-key">Country</div>
                        <div class="card-content-value">
                            ${this.data.location.country || '-'}
                        </div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">Region</div>
                        <div class="card-content-value">
                            ${this.data.location.region || '-'}
                        </div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">City</div>
                        <div class="card-content-value">
                            ${this.data.location.city || '-'}
                        </div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">Latitude</div>
                        <div class="card-content-value">
                            ${this.data.location.lat || '-'}
                        </div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">Longiude</div>
                        <div class="card-content-value">
                            ${this.data.location.lng || '-'}
                        </div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">Postal Code</div>
                        <div class="card-content-value">
                            ${this.data.location.postalCode || '-'}
                        </div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">Timezone</div>
                        <div class="card-content-value">
                            ${this.data.location.timezone || '-'}
                        </div>
                    </div>
                    <div class="card-body-divide-last-child">
                        <div class="card-content-key">Geoname ID</div>
                        <div class="card-content-value">${this.data.location.geonameId || ''}</div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">Network Information</div>
                <div class="card-body">
                    <div class="card-body-divide">
                        <div class="card-content-key">IP</div>
                        <div class="card-content-value">
                            ${this.data.ip || '-'}
                        </div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">Internet Service Provider</div>
                        <div class="card-content-value">
                            ${this.data.isp || '-'}
                        </div>
                    </div>
                    <div class="card-body-divide">
                        <div class="card-content-key">Connection Type</div>
                        <div class="card-content-value">
                            ${this.data.connectionType || '-'}
                        </div>
                    </div>
                    <div class="card-body-divide-last-child">
                        <div class="card-content-key">Domain</div>
                        <div class="card-content-value">
                            ${this.domains || '-'}
                        </div>
                    </div>
                </div>
            </div>
            ${this.as}
        `;
    }
}

customElements.define('geolocation-lookup', GeolocationLookup);
