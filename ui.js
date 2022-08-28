class UI {

    constructor(firstList, secondList) {
        this.firstList = firstList;
        this.secondList = secondList;
        this.outputResult = document.querySelector("#outputResult");
        this.outputFirst = document.querySelector("#outputFirst");
        this.outputSecond = document.querySelector("#outputSecond");
    }

    changeFirstUnit() { //Arayüzde ilk kuru güncelleme
        this.outputFirst.textContent = this.firstList.options[this.firstList.selectedIndex].textContent;
    }

    changeSecondUnit() {//arayüzde ikinci kuru güncellenme
        this.outputSecond.textContent = this.secondList.options[this.secondList.selectedIndex].textContent;
    }

    displayOutputResult(result) {//Sonucu ekranda gösterme
        this.outputResult.value = result;
    
    }
}