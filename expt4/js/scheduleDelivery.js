window.onload=function(){
    document.getElementById("submitBtn").addEventListener("click", function(e) {
        let orderInput = document.getElementById('orderInput').value;
        let select = document.getElementById('itemsControlSelect');
        let str="",i;
        for (i=0;i<select.options.length;i++) {
            if (select.options[i].selected) {
                str = str + i + " ";
            }
        }
        document.getElementById('modalBody').innerHTML = "Are you sure you want to schedule this delivery? Order Name: "+ orderInput +" and " + str + " items";
        $('#myModal').modal('show');
    });
}