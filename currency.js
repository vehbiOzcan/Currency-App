class Currency {
    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://v6.exchangerate-api.com/v6/yourApiKey/latest/";
        this.amount = null;
    }

    exchangeCurreny() { //Veriyi apiden çekme ve dönme
        return new Promise((resolve, reject) => {
            fetch(this.url + this.firstCurrency)
                .then(response => response.json())
                .then(data => {
                    const parity = Number(data.conversion_rates[this.secondCurrency]);
                    let total = parity * Number(amount.value);
                    resolve(total);
                })
                .catch(err => reject(err));
        })

    }

    changeFirstCurrency(firstCurrency) { //referans kuru güncelleme
        this.firstCurrency = firstCurrency;
    }

    changeSecondCurrency(secondCurrency) { // hedef kuru günceleme
        this.secondCurrency = secondCurrency;
    }

    changeAmount(amount) {//girilen miktarı güncelleme 
        this.amount = amount;
    }


}