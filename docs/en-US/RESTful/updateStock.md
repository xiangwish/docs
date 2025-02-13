# Updating Stock Information

Updating Stock Information

```plaintext
Method: POST
API Endpoint: {url}/api/app/v2/machine/updateStock
```

## Headers Parameters

| parameter | type   | description       | required |
| --------- | ------ | ----------------- | -------- |
| appid     | string | appid of merchant | ✓        |

## Request Parameters

| parameter  | type   | description         | required |
| ---------- | ------ | ------------------- | -------- |
| machine_no | string | machine number      | ✓        |
| box_id     | string | box id of cabinet   | ✓        |
| key        | string | Signature parameter | ✓        |

## Response Example

```json
{
  "code": 1,
  "msg": "ok",
  "data": {
    "machine_no": "19010359"
  }
}
```

## Response Parameters

| parameter | type   | description                    |
| --------- | ------ | ------------------------------ |
| code      | int    | `1: success`, `2: failure`     |
| msg       | string | success or failure information |
| data      | object | data content                   |
