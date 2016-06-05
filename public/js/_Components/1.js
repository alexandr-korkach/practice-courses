function Test(){
    
    this.getDate("2016-06-04 11:10:10", "ua");
    
}
Test.prototype = Object.create(App.prototype);
Test.prototype.constructor = Test;


var gg = new Test();
