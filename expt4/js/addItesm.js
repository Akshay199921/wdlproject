window.onload=function(){
    document.getElementById("addItem").addEventListener("click", function(e) {
        let itemName = document.getElementById('iputName').value;
        let weight = document.getElementById('itemWeight').value;
        document.getElementById('modalBody').innerHTML = "Are you sure you want to add this item? Item Name: "+ itemName + " Item weight: " + weight;;
        $('#myModal').modal('show');
    });
}