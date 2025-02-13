# Rent Back

Returning a Product

```plaintext
Method: POST
API Endpoint: {url}/api/openapi/v1/rent/return
```

## Headers Parameters

| parameter | type   | description       | required |
| --------- | ------ | ----------------- | -------- |
| appid     | string | appid of merchant | ✓        |

## Request Parameters

| parameter  | type   | description                  | required |
| ---------- | ------ | ---------------------------- | -------- |
| machine_no | string | machine number               | ✓        |
| order_no   | string | Order number                 | ✓        |
| sn         | string | Rental product serial number | ✓        |
| notify_url | string | Callback URL                 | optional |
| sign       | string | Signature parameter          | ✓        |

## Response Example

```json
{
  "code": 1,
  "msg": "ok",
  "data": {
    "order_no": "1234567891556105746134",
    "machine_no": "123456789",
    "code": "001",
    "sn": "A123"
  }
}
```

## Response Parameters

| parameter | type   | description                    |
| --------- | ------ | ------------------------------ |
| code      | int    | `1: success`, `0: failure`     |
| msg       | string | success or failure information |
| data      | object | data content                   |
| code      | string | number of motor position       |
| sn        | string | Rental product serial number   |

## Notes on Product Return Processing

- The system will automatically validate the returned product based on the serial number.
- If the return is successful, the vending machine will update the order status.
- If the return fails, a retry may be required.
- The system will send a callback to the notify_url provided.
