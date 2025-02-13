# Generating Pickup Code

Generating a Pickup Code

```plaintext
Method: POST
API Endpoint: {url}/api/openapi/v1/pickup/cancel
```

## Headers Parameters

| parameter | type   | description       | required |
| --------- | ------ | ----------------- | -------- |
| appid     | string | appid of merchant | ✓        |

## Request Parameters

| parameter   | type   | description         | required |
| ----------- | ------ | ------------------- | -------- |
| order_no    | string | order number        | ✓        |
| pickup_code | string | pickup code         | ✓        |
| sign        | string | Signature parameter | ✓        |
