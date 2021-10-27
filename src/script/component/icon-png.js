import logo from '../../images/logo.png';

class IconPng extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const image = new Image();
        image.src = logo;
        image.height = 80;
        image.alt = 'MyDo';
        this.shadowDOM.appendChild(image);
    }
}

customElements.define('icon-png', IconPng);
