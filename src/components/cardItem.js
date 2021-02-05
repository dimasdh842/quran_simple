
class cardItem extends HTMLElement {
    constructor(){
        super()
    }
    
    set item(item) {
        this._item = item
        this.render()
    }


    render(){
        this.innerHTML = 
        `
        <div class="container md-w-50">
        <div class="card border-0 rounded-0 card-item" id="${this._item.nomor}">
                <div class="card-body" id="${this._item.nomor}">
                <div class="d-flex justify-content-between align-items-center">
                <div class="font-weight-bold" >
                    <span class="ml-4">${this._item.nomor}</span>
                </div>
                    <div id="${this._item.nomor}">
                    <a class="h4">${this._item.nama}</a>
                    </div>
                    <div class="flex text-secondary font-weight-bold">
                    <i class="fas fa-quran"></i><span class="ml-4">${this._item.ayat} Ayat</span>
                    </div>
                    <span class="d-flex flex-column align-items-center">
                        ${(this._item.type == "mekah")? '<i class="fas fa-kaaba" data-toggle="popover" data-content="mekah"></i>' :'<i class="fas fa-mosque" data-toggle="popover" data-content="madinah"></i>'}
                    </span>
                </div>

                
                </div>
            </div>
            </div>

        `
    }


}


customElements.define('card-item',cardItem)