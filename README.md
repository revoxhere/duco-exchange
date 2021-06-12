# [Official DUCO-Exchange](https://revoxhere.github.io/duco-exchange/) source

<a href="https://revoxhere.github.io/duco-exchange/"><img src="https://github.com/revoxhere/duco-exchange/blob/master/Opera%20Zrzut%20ekranu_2021-04-02_162019_revoxhere.github.io.png?raw=true"></a>


## API Endpoints

### Exchange rates (per 1 DUCO)

- **URL**: `https://exchange.duinocoin.com/api/v1/rates`

- **Method**: `GET`

- **Success Response** (Code: `200`):

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

