# Order for Delivery

Placing an Order for Delivery

```plaintext
Method: POST
API Endpoint: {url}/api/qrcode
```

## Headers Parameters

| parameter | type   | description       | required |
| --------- | ------ | ----------------- | -------- |
| appid     | string | appid of merchant | ✓        |

## Request Parameters

| parameter  | type   | description           | required |
| ---------- | ------ | --------------------- | -------- |
| machine_no | string | machine number        | ✓        |
| qrcode     | string | qrcode machine number | ✓        |
| key        | string | Signature parameter   | ✓        |

## Response Example

```json
{
  "code": 1,
  "msg": "ok",
  "data": {
    "machine_no": "19010359",
    "qrcode": "1234567891552369319041"
  }
}
```

## Response Parameters

| parameter  | type   | description                    |
| ---------- | ------ | ------------------------------ |
| code       | int    | `1: success`, `2: failure`     |
| msg        | string | success or failure information |
| data       | object | data content                   |
| machine_no | int    | machine number                 |
| qrcode     | int    | qrcode machine number          |
