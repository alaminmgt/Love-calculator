function result(params) {
    var name = document.getElementById("name").value;
    var lname = document.getElementById("lname").value;
    
    if (name == "") {
        alert("Please enter your name");
    }else if(name.length <= 2){
        alert("Must be 3 character");
    }else if(!isNaN(name)){
        alert("Number not allowd");
    }else if (lname == "") {
        alert("Please enter your love name");
    }else if(lname.length <= 2){
        alert("Must be 3 character");
    }else if(!isNaN(lname)){
        alert("Number not allowd");
    }else{
        var loveData = Math.random()* 100 ;
        loveData = Math.floor(loveData);
        document.getElementById("result").value = loveData + "%";
    };

   
};