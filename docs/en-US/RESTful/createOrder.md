# Order for Delivery

Placing an Order for Delivery

```plaintext
Method: POST
API Endpoint: {url}/api/openapi/v1/rent/createOrder
```

## Headers Parameters

| parameter | type   | description       | required |
| --------- | ------ | ----------------- | -------- |
| appid     | string | appid of merchant | ✓        |

## Request Parameters

| parameter    | type   | description                      | required |
| ------------ | ------ | -------------------------------- | -------- |
| machine_no   | string | machine number                   | ✓        |
| code         | string | number of motor position         | ✓        |
| out_trade_no | string | number of merchant order         | ✓        |
| notify_url   | string | URL for delivery result callback | ✓        |
| box_id       | string | box id of cabinet                | ✓        |
| sign         | string | Signature parameter              | ✓        |

## Response Example

```json
{
  "code": 1,
  "msg": "ok",
  "data": {
    "order_no": "1234567891556086499743",
    "machine_no": "123456789",
    "code": "001",
    "out_trade_no": "1234567"
  }
}
```

## Response Parameters

| parameter | type   | description                    |
| --------- | ------ | ------------------------------ |
| code      | int    | `1: success`, `0: failure`     |
| msg       | string | success or failure information |
| data      | object | data content                   |

## Notes on Order Processing

- The vending machine will process the delivery request and update the order status accordingly.
- If the order is unsuccessful, retrying may be necessary.
- The system will notify the provided notify_url once the delivery is complete.
