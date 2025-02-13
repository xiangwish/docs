# Querying Delivery Results

Placing an Order for Delivery

```plaintext
Method: GET
API Endpoint: {url}/api/openapi/v1/rent/getOrderStatus
```

## Headers Parameters

| parameter | type   | description       | required |
| --------- | ------ | ----------------- | -------- |
| appid     | string | appid of merchant | ✓        |

## Request Parameters

| parameter    | type   | description              | required                                 |
| ------------ | ------ | ------------------------ | ---------------------------------------- |
| order_no     | string | Order number             | optional                                 |
| out_trade_no | string | number of merchant order | optional (required if order_no is empty) |

## Response Example

```json
{
  "code": 1,
  "msg": "ok",
  "data": {
    "order_status": "3",
    "order_status_text": "Delivered",
    "deliver_note": "Delivery record description"
  }
}
```

## Response Parameters

| parameter         | type   | description                    |
| ----------------- | ------ | ------------------------------ |
| code              | int    | `1: success`, `0: failure`     |
| msg               | string | success or failure information |
| data              | object | data content                   |
| order_status      | string | order status                   |
| order_status_text | string | order status text              |
| deliver_note      | string | deliver note                   |

## Notes on Order Status

- The system will return the current status of the order, including whether it has been delivered successfully.
- If the delivery fails, retrying may be required.
- The system uses predefined status codes to indicate different stages of delivery.

| value | description     |
| ----- | --------------- |
| 1     | Not Shipped     |
| 2     | Shipped         |
| 3     | Delivery Failed |
| 4     | Returned        |
| 5     | Return Failed   |
| 8     | Completed       |
