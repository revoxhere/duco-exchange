function exchange(username, password, email, type, amount, address, coin) {
    $.getJSON('https://server.duinocoin.com/exchange_request/' +
        '?username=' + encodeURIComponent(username) +
        '&password=' + encodeURIComponent(password) +
        '&email=' + encodeURIComponent(email) +
        '&type=' + type +
        '&amount=' + encodeURIComponent(amount) +
        '&coin=' + coin +
        '&address=' + encodeURIComponent(address),
        function(data) {
            submit_button.classList.remove("is-loading");
            if (data.success == true) {
                window.location = 'success.html';
            } else {
                alert(data.message);
            }
        }).fail(function(jqXHR, textStatus, errorThrown) { alert('getJSON request failed! ' + textStatus); })
    });
}
