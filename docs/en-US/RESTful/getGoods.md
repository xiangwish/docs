# Goods List

Fetching Product by Floor code

```plaintext
Method: GET
API Endpoint: {url}/api/openapi/v1/goods/getGoods
```

## Headers Parameters

| parameter | type   | description       | required |
| --------- | ------ | ----------------- | -------- |
| appid     | string | appid of merchant | ✓        |

## Request Parameters

| parameter  | type   | description              | required |
| ---------- | ------ | ------------------------ | -------- |
| machine_no | string | machine number           | ✓        |
| code       | string | number of motor position | ✓        |
| box_id     | string | box id of cabinet        | ✓        |
| sign       | string | Signature parameter      | ✓        |

## Response Example

```json
{
  "code": 1,
  "msg": "ok",
  "data": {
    //....
    "box_id": 1
  }
}
```

## Response Parameters

| parameter | type   | description                    |
| --------- | ------ | ------------------------------ |
| code      | int    | `1: success`, `0: failure`     |
| msg       | string | success or failure information |
| data      | object | data content                   |
