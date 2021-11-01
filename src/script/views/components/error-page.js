class ErrorPage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set message(message) {
        this.message = message;
    }

    render() {
        this.innerHTML = `
            <div class="">
                ${this.message}
            </div>
        `;
    }
}

customElements.define('error-page', ErrorPage);
