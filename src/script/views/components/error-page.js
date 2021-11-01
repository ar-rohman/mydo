class ErrorPage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set message(message) {
        this.errorMessage = message;
    }

    render() {
        this.innerHTML = `
            <div class="error-page">
                <img src="assets/illustration/error-page.svg" alt="Error" class="illustration">
                <p>${this.errorMessage}</p>
            </div>
        `;
    }
}

customElements.define('error-page', ErrorPage);
