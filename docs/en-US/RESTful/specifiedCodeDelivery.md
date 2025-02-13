# Issuing a Delivery Command

The interface for issuing dispensing commands based on aisle numbers (does not check inventory or products, and only supports screenless devices).

```plaintext
Method: POST
API Endpoint: {url}/api/openapi/v1/rent/specifiedCodeDelivery
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
| notify_url   | string | URL for delivery result callback | optional |
| sign         | string | Signature parameter              | ✓        |

`notify_url`: Dispensing result callback URL. No callback if left blank. Upon successful dispensing, the system will attempt callback up to once. If no callback is received within 10s, third-party must poll for the dispensing result.

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

| parameter    | type   | description                    |
| ------------ | ------ | ------------------------------ |
| code         | int    | `1: success`, `0: failure`     |
| msg          | string | success or failure information |
| data         | object | data content                   |
| machine_no   | string | machine number                 |
| code         | string | number of motor position       |
| out_trade_no | string | number of merchant order       |

## Notes on Delivery Command Execution

- The vending machine processes the delivery request immediately upon receiving the command.
- If the command is successful, the system updates the order status.
- If the command fails, retrying may be required.
- The system will send a callback to the provided notify_url (if specified).
