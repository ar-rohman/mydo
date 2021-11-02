class InputSearch extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    get placeholder() {
        return this.hasAttribute('placeholder') ? this.getAttribute('placeholder') : 'Type domain name';
    }

    get inputId() {
        return this.getAttribute('inputId');
    }

    get buttonId() {
        return this.getAttribute('buttonId');
    }

    render() {
        this.innerHTML = `
        <div class="input-search">
            <div class="input-search-group">
                <input type="text" id="${this.inputId}" class="input-text" placeholder="${this.placeholder}" >
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
    }
}

customElements.define('input-search', InputSearch);
