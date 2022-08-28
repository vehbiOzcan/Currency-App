//elemnteri seçme kısmı
const amount = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");

//Nesneleri oluşturma
const currency = new Currency("USD","TRY");
const ui = new UI(firstSelect,secondSelect);

eventListeners();

//Elementlere event ekleme metodu 
function eventListeners(){
    amount.addEventListener("input",exchangeAmount);
    
    firstSelect.onchange = function(){// referans kur değiştiğinde çalışır
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirstUnit();
    }
    
    secondSelect.onchange = function(){//hedef kur değiştiğinde çalışır
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecondUnit();
    }
}

function exchangeAmount(){ // miktar girildikçe tetiklenir
    
    currency.changeAmount(amount);//miktarı gönderme
    
    currency.exchangeCurreny()//apiden gelen veriyi arayüze gönderme
    .then(data =>{
        ui.displayOutputResult(data);
    })
    .catch(err => console.error(err));
}
