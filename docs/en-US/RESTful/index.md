# Homepage - API Authentication

## Authentication Method

All API requests must include the merchant appid in the Header.

How to obtain appid and app secret (Merchant Key)

Go to `Merchant Management` → `Merchant Information` → `Developer Center` to obtain `appid` and `app secret`.

Note: app secret refers to the merchant Key mentioned below.

## Signature Verification

Example:

Parameters: `Merchant Key` = `abc123`, the following parameters are passed in the API request:

```plaintext
order_no=123456
as_id=123
result_code=SUCCESS
timestamp=1538031481
sign=FDD167FAA73459FD921B144BAF4F4CA2
```

### Signature Verification Steps

Steps 1. Sort the parameters in alphabetical order (a-z) (excluding the sign field):

```plaintext
as_id=123
order_no=123456
result_code=SUCCESS
timestamp=1538031481
```

Steps 2. Combine them into a parameter string:

```plaintext
as_id=123&order_no=123456&result_code=SUCCESS&timestamp=1538031481
```

Steps 3. Append the merchant Key:

```plaintext
as_id=123&order_no=123456&result_code=SUCCESS&timestamp=1538031481&key=abc123
```

Steps 4. Perform MD5 encoding and convert it to uppercase:

```plaintext
sign = MD5(as_id=123&order_no=123456&result_code=SUCCESS&timestamp=1538031481&key=abc123).toUpperCase()
```

Steps 5. The final sign calculation result example:

```plaintext
E043D31C1B10FFD5CB7D8764203CF15C
```

During verification, compare the calculated sign with the one provided in the request to ensure data integrity and security.

## Additional Notes

- Parameters with empty values are not included in the signature.
- Parameter names are case-sensitive.
- The sign parameter is NOT included in the signature calculation.

You can refer to the signature verification algorithm in the WeChat Pay documentation: [WeChat Pay Signature Verification](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=4_3).

You can also use the WeChat Pay signature verification online tool to test if the generated signature is correct: [WeChat Pay Signature Verification Tool](https://pay.weixin.qq.com/wiki/tools/signverify/).

## Vending Machine Delivery Interface (No Screen Version, QR Code Panel)

### Get Device Floors Information Interface

This interface requires product and stock information. When calling the order delivery interface, we will check and deduct the stock.

### Get All Device Floors Information Interface

This interface does not require product or stock information. When issuing the delivery command based on the lane number, we do not check the stock.

## Request URL

`https://s.awish.com.cn`
