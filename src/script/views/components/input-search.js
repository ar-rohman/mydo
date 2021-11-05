class InputSearch extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    get inputId() {
        if (this.getAttribute('inputId') === 'domain-input') {
            this.placeholders = [
                'Type domain name',
                'e.g example.com',
            ];
        } else if (this.getAttribute('inputId') === 'email-input') {
            this.placeholders = [
                'Type email address',
                'e.g mail@example.com',
            ];
        } else {
            this.placeholders = [
                'Type domain name',
                'Type IPv4 address',
                'Type IPv6 address',
                'Type email address',
                'e.g example.com',
                'e.g 10.10.10.10',
                'e.g ::ffff:c0a8:101',
                'e.g mail@example.com',
            ];
        }
        return this.getAttribute('inputId');
    }

    get buttonId() {
        return this.getAttribute('buttonId');
    }

    render() {
        this.innerHTML = `
        <div class="input-search">
            <div class="input-search-group">
                <input type="text" id="${this.inputId}" class="input-text" placeholder="${this.placeholders[0]}">
                <div class="input-search-group-append">
                    <button id="${this.buttonId}" class="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1
                                1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        `;

        const inputPlaceholderId = document.getElementById(this.inputId);
        setInterval(() => {
            const list = this.placeholders[Math.floor(Math.random() * this.placeholders.length)];
            inputPlaceholderId.placeholder = list;
        }, 5000);
    }
}

customElements.define('input-search', InputSearch);
