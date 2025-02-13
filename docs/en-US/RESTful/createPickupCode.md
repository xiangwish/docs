# Generating Pickup Code

Generating a Pickup Code

```plaintext
Method: POST
API Endpoint: {url}/api/openapi/v1/rent/createPickupCode
```

## Headers Parameters

| parameter | type   | description       | required |
| --------- | ------ | ----------------- | -------- |
| appid     | string | appid of merchant | ✓        |

## Request Parameters

| parameter  | type   | description         | required |
| ---------- | ------ | ------------------- | -------- |
| machine_no | string | machine number      | ✓        |
| goods_num  | string | quantity of goods   | ✓        |
| box_id     | string | box id of cabinet   | optional |
| code       | string | floor number        | ✓        |
| sign       | string | Signature parameter | ✓        |

## Box

| value | description |
| ----- | ----------- |
| 1     | Cabinet A   |
| 2     | Cabinet B   |
| 3     | Cabinet C   |

## Response Example

```json
{
  "code": 1,
  "msg": "ok",
  "data": {
    "order_no": "1234567891552369319041",
    "pickup_code": "010359"
  }
}
```

## Response Parameters

| parameter   | type   | description  |
| ----------- | ------ | ------------ |
| order_no    | string | Order number |
| pickup_code | string | pickup code  |
