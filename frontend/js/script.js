var hosturl = 'http://dev.cs.smu.ca:8083';

function addUniversity(){
    var name = $("#name_input").val();
     var address = $("#address_textarea").val();
     var phone = $("#phone_input").val();
    if(!(name && address && phone)) {alert ("Please enter all the required values!"); return;}
    var newUni = {
        "Name": name,
        "Address": address,
        "Phone": phone
    };
    console.log(newUni);
    $.post(hosturl + "/addUni", newUni, function (data) {
        alert(data);
    });
    return false;
}


function toAdd(address){
    window.location.href=address;
}