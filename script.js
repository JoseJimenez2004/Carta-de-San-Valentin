$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
        
        // Redirección después de 3 segundos (3000 milisegundos)
        setTimeout(function() {
            window.location.href = "index1.html";
        }, 3000);
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
   
});
