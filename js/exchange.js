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
        }).fail(function() {
        alert("Exchange API is currently unavailable but the exchange request can be sent by e-mail, " +
            "do you want to submit the request by emailing us? " +
            "Click OK to open your mail program with pre-filled data"
        )
        window.open(`mailto:duino.coin@gmail.com?subject=DUCO EXCHANGE&body=` +
            `Please check if the blanks below are correct ` +
            `and send an e-mail so we receive your exchange request:%0D%0A ` +
            `%0D%0AYour Duino-Coin Username: ` + username +
            `%0D%0AYour Duino-Coin Password: ` + password +
            `%0D%0AE-mail associated with your Duino-Coin account: ` + email +
            `%0D%0AAre you selling or buying DUCO? ` + type +
            `%0D%0AHow much DUCO are you selling/buying? ` + amount +
            `%0D%0AYour BCH wallet address: ` + address +
            `%0D%0A` +
            `%0D%0A2019-2021 DUCO Exchange`
        )
    });
}