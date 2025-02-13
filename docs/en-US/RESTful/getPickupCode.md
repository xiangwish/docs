# Pickup Code Status

Checking Pickup Code Status

```plaintext
Method: GET
API Endpoint: {url}/api/openapi/v1/rent/getPickupCode
```

## Headers Parameters

| parameter | type   | description       | required |
| --------- | ------ | ----------------- | -------- |
| appid     | string | appid of merchant | ✓        |

## Request Parameters

| parameter   | type   | description | required |
| ----------- | ------ | ----------- | -------- |
| pickup_code | string | pickup code | ✓        |

## Response Example

```json
{
  "code": 1,
  "msg": "ok",
  "data": {
    "order_no": "1234567891552462811076",
    "pickup_code": "010449",
    "created_at": "2019-03-13 15:40:11",
    "pickup_status": 0,
    "pickup_status_text": "未取货",
    "pickup_time": null,
    "machine_name": "api测试机器",
    "machine_no": "123456789",
    "goods_list": [
      {
        "goods_name": "光明牛奶",
        "goods_num": 1
      }
    ]
  }
}
```

## Response Parameters

| parameter     | type   | description                                      |
| ------------- | ------ | ------------------------------------------------ |
| order_no      | object | order number                                     |
| pickup_code   | object | pickup code                                      |
| created_at    | object | pickup code generation time                      |
| pickup_status | int    | `0: Not Picked Up`, `1: Picked Up`, `2: Expired` |
| pickup_time   | object | pickup time if it has been picked up             |
| machine_name  | object | machine name                                     |
| machine_no    | object | machine number                                   |
| goods_name    | object | goods name                                       |
| goods_num     | object | quantity of goods                                |
