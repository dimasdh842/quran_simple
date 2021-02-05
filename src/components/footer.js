class Footer extends HTMLElement{
    
    
    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML =
        `
        <div class="footer text-light text-center bg-custom-primary">
        &copy Mohammad Firmansyah
        </div>
        `
    }
}

customElements.define('footer-nav',Footer)