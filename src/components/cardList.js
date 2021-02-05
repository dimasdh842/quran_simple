import './cardItem'

class cardList extends HTMLElement {
    set items(items) {
        this._items = items
        this.render()
    }
    render(){
        this._items.forEach( item => {
            const cardItem = document.createElement('card-item')
            cardItem.item = item
            this.appendChild(cardItem)
        })
    }
}

customElements.define('card-list',cardList)