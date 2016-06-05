function Helper(){
    
}
Helper.prototype.getDate = function(date, lang){
    
    if(this.returnDate(new Date()) == this.returnDate(new Date(date)) ){
        var result = this.parseTime(date);
    }else{
        var result  = this.convertDate(date, lang);
    }
    console.log(result);
    return result;  
    
        
        
}

Helper.prototype.returnDate = function(date){
    var valueDate = (new Date(date.getFullYear(), date.getMonth(), date.getDate())).valueOf();
    console.log(date.getMonth());
    return valueDate;       
    
};
Helper.prototype.convertDate = function(date, lang){
    var receivedDate = new Date(date),
            month = this.month(lang, receivedDate.getMonth()+1),
            result = receivedDate.getDate()+" "+month+" "+receivedDate.getFullYear();
    return result;
}
Helper.prototype.month = function(lang, num){
    var mounthObject = {
        ru: {
            1: 'Января',
            2: 'Февраля',
            3: 'Марта',
            4: 'Апреля',
            5: 'Мая',
            6: 'Июня',
            7: 'Июля',
            8: 'Августа',
            9: 'Сентября',
            10: 'Октября',
            11: 'Ноября',
            12: 'Декабря'
        },
        ua: {
            1: "Січня",
            2: "Лютого",
            3: "Березня",
            4: "Квітня",
            5: "Травня",
            6: "Червня",
            7: "Липня",
            8: "Серпня",
            9: "Вересня",
            10: "Жовтня",
            11: "Листопада",
            12: "Грудня"
        }
    };
    return mounthObject[lang][num];
}
Helper.prototype.parseTime = function(date){
    var dateArr = date.split(" "),
        timeStr = dateArr[1].substr(0, 5);
    return timeStr + " сегодня";
}
