<!--
*** Official DUCO Exchange README
*** by revoxhere, 2021
-->

<a href="https://exchange.duinocoin.com">
  <img src="https://github.com/revoxhere/duco-exchange/blob/master/images/logo.png?raw=true" width="215px" align="right"/>
</a>


<a href="https://duinocoin.com">
  <img src="https://github.com/revoxhere/duino-coin/blob/master/Resources/ducobanner.png?raw=true" width="430px"/>
</a>

## DUCO Exchange source

This repository contains the code for the **fully static** DUCO Exchange located at [https://exchange.duinocoin.com](https://exchange.duinocoin.com).

## License

The DUCO Exchange is distributed under the MIT License. See the `LICENSE` file for more information.

## API Endpoints

- Exchange rates (per 1 DUCO)
  - URL: `https://exchange.duinocoin.com/api/v1/rates`
  - Example GET success response:
    ```json
    {
      "result": {
        "bch": {
          "sell": 0.0000007,
          "buy": 0.00000125
        },
        "xmg": {
          "sell": 0.1,
          "buy": 0.1
        },
        "lke": {
          "sell": 0.75,
          "buy": 0.75
        },
        "bynd": {
          "sell": 0,
          "buy": 0.1
        }
      },
      "success": true
    }
    ```
- Exchange request
  - URL: `https://server.duinocoin.com/exchange_request/?username=<username>&password=<password>&email=<email>&type=<ex_type>&amount=<amount>&coin=<coin>&address=<address>`
  - Example GET success response:
    ```json
    {
      "result": "Your exchange request has been successfully submited",
      "success": true
    }
    ```
    
<hr>

Website Link: [https://wallet.duinocoin.com](https://wallet.duinocoin.com)
