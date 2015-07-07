### Read specific group

`GET /admin/endpoints/:group-name`

Returns details about a group. Useful to know if a specific group of APIs is enabled or not.

Parameter | Description
--------- | -----------
**group-name** | The name of the group of endpoints

<div class="snippet-title">
	<p>Example of a request to get a specific endpoint group</p>
</div> 

```shell
curl -X GET http://localhost:9000/admin/endpoints/baasbox.assets \
	 -H X-BB-SESSION:4efcd048-8865-4047-94c9-8ac58e511b4b  \
	 -H X-BAASBOX-APPCODE:1234567890
```

```objective_c
```

```java
```

```javascript
TO BE IMPLEMENTED
```

<div class="snippet-title">
	<p>Example of a response</p>
</div> 

```json
{
    "result": "ok",
    "data": {
        "tag": "baasbox.assets",
        "enabled": true
    },
    "http_code": 200
}
```
