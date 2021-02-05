
import "../components/app-nav"
import "../style/style.css"
import "../components/cardList"
import "../components/cardItem"
import "../components/footer"
import $ from '../../node_modules/jquery/dist/jquery'    

const main =  function () {
    
    // INITIALIZING DATA
    
    let data = null
    const appNav = document.createElement('app-nav')
    const footer = document.createElement('footer-nav')
    document.body.appendChild(appNav)
    
    // RENDER ALL DATA 
    async function renderAllItem(){
        data = await getData()
        render(data)
        
    }

    renderAllItem()
    
    // GET DATA FROM API

    function getData(){
        return fetch('https://api.banghasan.com/quran/format/json/surat')
        .then(response => response.json())
        .then(data => {
            const {hasil} = data
            return hasil;
        })
    }

    // RENDER DATA TO BODY

    function render(data){
        const cardList = document.createElement('card-list')
        cardList.items = data
        document.body.appendChild(cardList)
        document.body.appendChild(footer)

        const cardItem = document.querySelectorAll('card-item')
        
        cardItem.forEach(item => {
            
            item.addEventListener('click',event => {
                const id =  event.target.parentElement.id;
                window.location.href = "https://quran.kemenag.go.id/index.php/sura/" + id;
            })
        })


        // SEARCH FUNCTION 
        
        $('.searchBar').click(function(){
            $('card-list').html('')
            var data = $('.keyword').val()
            var expression = new RegExp(data,'gi')
            $.getJSON('https://api.banghasan.com/quran/format/json/surat',function(e){
                $.each(e.hasil,function(key,value){
                    
                    if (value.nama.match(expression) ){
                        const cardItem = document.createElement('card-item')
                        cardItem.item = value 

                        $('card-list').append(cardItem)
                        
                        const cards = document.querySelectorAll('card-item')
        
                        cards.forEach(card => {
                            
                            card.addEventListener('click',event => {
                                const id =  event.target.parentElement.id;
                                window.location.href = "https://quran.kemenag.go.id/index.php/sura/" + id;
                            })
                        })
                    } else{

                    }
                })
            })
        })
    
    }


        
    }
    
    export default main