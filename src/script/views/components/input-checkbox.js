class InputCheckbox extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    get checkboxId() {
        return this.getAttribute('checkboxId');
    }

    get label() {
        return this.hasAttribute('label') ? this.getAttribute('label') : 'Prefer latest results';
    }

    render() {
        this.innerHTML = `
            <div class="input-checkbox-container">
                <div class="input-checkbox-group">
                    <input type="checkbox" id="${this.checkboxId}" class="input-checkbox">
                    <label>${this.label}<label>
                </div>
            </div>
        `;
    }
}

customElements.define('input-checkbox', InputCheckbox);
