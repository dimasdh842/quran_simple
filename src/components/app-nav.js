
class appNav extends HTMLElement{

    connectedCallback() {
        this.render()
    }
    
    render(){
        this.innerHTML = 
        `
            <nav class="navbar navbar-expand-lg navbar-dark bg-custom-primary" >

            <div class="container px-2">   
                <a href="#" class="navbar-brand"><i class="fas fa-quran" style="font-size:30px"></i> Quran indonesia</a>

                <button class="navbar-toggler border-0" style="color:white" data-toggle="collapse" data-target="#navbar">
                    <i class="fa fa-search"></i>
                </button>

                <div class="navbar-collapse collapse" id="navbar">

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                    <div class="form-inline">
                    <input class="form-control mr-sm-2 rounded keyword"  placeholder="Cari Surat" aria-label="Search">
                    <button class="btn my-2 my-sm-0 border-0 searchBar"  style="background-color:#649d66; color:white">Search</button>
                    </div>
                    </li>
                </ul>

                </div>

                
                </div>
                </nav>
        `

    }
}

customElements.define('app-nav',appNav)