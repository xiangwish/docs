# All Machines

Getting the List of Machines

```plaintext
Method: GET
API Endpoint: {url}/api/openapi/v1/rent/machines
```

## Headers Parameters

| parameter | type   | description       | required |
| --------- | ------ | ----------------- | -------- |
| appid     | string | appid of merchant | ✓        |

## Response Example

```json
{
  "code": 1,
  "msg": "ok",
  "data": [
    {
      "machine_no": "123123",
      "machine_name": "测试货道",
      "online_status": 0,
      "lat": "0.000000",
      "lng": "0.000000",
      "address": "",
      "created_at": "2019-04-01 12:11:04"
    },
    {
      "machine_no": "123456789",
      "machine_name": "api测试机器",
      "online_status": 0,
      "lat": "23.078468",
      "lng": "113.315735",
      "address": "绿地中央广场国际创客中心",
      "created_at": "2018-07-30 06:52:53"
    },
    {
      "machine_no": "1283019723712",
      "machine_name": "多货道机器",
      "online_status": 0,
      "lat": "0.000000",
      "lng": "0.000000",
      "address": "",
      "created_at": "2018-10-17 10:50:52"
    },
    {
      "machine_no": "19008851",
      "machine_name": "测试模板导入",
      "online_status": 0,
      "lat": "0.000000",
      "lng": "0.000000",
      "address": "",
      "created_at": "2019-01-21 14:22:41"
    },
    {
      "machine_no": "CV126095",
      "machine_name": "科威尼迪科技科威尼迪科技",
      "online_status": 0,
      "lat": "0.000000",
      "lng": "0.000000",
      "address": "",
      "created_at": "2018-11-07 13:59:14"
    }
  ]
}
```

## Response Parameters

| parameter     | type   | description                                     |
| ------------- | ------ | ----------------------------------------------- |
| code          | int    | `1: success`, `0: failure`                      |
| msg           | string | success or failure information                  |
| data          | object | data content                                    |
| machine_no    | object | machine number                                  |
| machine_name  | object | machine name                                    |
| online_status | object | `1: online`, `0: offline` |
| lat           | object | latitude                                        |
| lng           | object | longitude                                       |
| address       | object | machine address                                 |
| created_at    | object | machine added time                              |
