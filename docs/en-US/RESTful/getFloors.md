# Machine Floors

Getting Floors of Vending Machine, `getAllFloors` is supported!!!

```plaintext
Method: GET
API Endpoint: {url}/api/openapi/v1/rent/getFloors
```

## Headers Parameters

| parameter | type   | description       | required |
| --------- | ------ | ----------------- | -------- |
| appid     | string | appid of merchant | ✓        |

## Request Parameters

| parameter  | type   | description    | required |
| ---------- | ------ | -------------- | -------- |
| machine_no | string | machine number | ✓        |

## Response Example

```json
{
  "code": 1,
  "msg": "ok",
  "data": [
    {
      "code": "001",
      "status": 1,
      "box_id": 1,
      "display_code": "A1",
      "price": "1.50",
      "is_rent": 1,
      "stock": 3,
      "sn": "A123",
      "rfid_status": 1,
      "unit": "minute",
      "deposit": "10.00",
      "goods_name": "脱单",
      "goods_desc": "<p><img src=\"/ueditor/php/upload/image/20190404/1554350251.png\" title=\"1554350251.png\" alt=\"app.png\"/> <img src=\"/uploads/ueditor/image/20190404/1554350334.png\" title=\"1554350334.png\" alt=\"img.png\"/></p>",
      "goods_image": "http://www.vem_admin.net/uploads/shop_3/5bf25aae8b838lOXuMQCe0kQ6L.png"
    },
    {
      "code": "003",
      "status": 1,
      "box_id": 1,
      "display_code": "A3",
      "price": "1.00",
      "is_rent": 0,
      "stock": 1,
      "sn": "",
      "rfid_status": "",
      "unit": "",
      "deposit": 0,
      "goods_name": "升官",
      "goods_desc": "",
      "goods_image": "http://www.vem_admin.net/uploads/shop_3/5bf25aaeb8cc0DE3f9aniTZjTM.png"
    }
  ]
}
```

## Response Parameters

| parameter     | type   | description                                                  |
| ------------- | ------ | ------------------------------------------------------------ |
| code          | int    | number of motor position                                     |
| status        | int    | floor status                                                 |
| box_id        | int    | box id of cabinet                                            |
| display_code  | string | floor number                                                 |
| price         | int    | Unit price                                                   |
| stock         | int    | inventory                                                    |
| is_rent       | int    | `0: Sales Floor`, `1: Rental Floor`                          |
| sn            | int    | RFID tag serial number                                       |
| rfid_status   | int    | RFID tag status: `0: unused`, `1: in the cabinet`, `2: lent` |
| goods_name    | string | good name                                                    |
| goods_image   | string | images of good                                               |
| goods_desc    | string | good description                                             |
| deposit       | string | Security deposit                                             |
| unit          | string | Pricing mode: minute / hour / day                            |
| category_id   | int    | category id                                                  |
| category_name | int    | category name                                                |
| cost_price    | string | cost price                                                   |
| member_price  | string | member price                                                 |
| market_price  | string | market price                                                 |
| brand_id      | int    | brand id                                                     |
| brand_name    | string | brand name                                                   |
| goods_no      | string | goods number                                                 |
| desc_image    | string | cover image of good                                          |
| goods_desc    | string | good description                                             |

## Box

| value | description |
| ----- | ----------- |
| 1     | Cabinet A   |
| 2     | Cabinet B   |
| 3     | Cabinet C   |

## Additional Notes

When `is_rent=1`, `rfid_status` and `sn` take effect, while `stock` becomes invalid.

If `is_rent=0`, then `stock` takes effect, ignore `rfid_status` and `sn` values.

## Notes on Slot Information

- This API retrieves slot information for a specific vending machine.
- The response includes slot availability, price, stock, and rental status.
- If is_rent is set to 1, the slot is for rental purposes; otherwise, it is for direct sales.
- RFID status indicates whether the slot is in use or available.

## Floor Status

| value | description                  |
| ----- | ---------------------------- |
| 0     | not exist                    |
| 1     | normal                       |
| 2     | stuck goods                  |
| 3     | Motor fault                  |
| 47    | Serial communication timeout |
