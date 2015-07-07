### Enable an endpoint group

`PUT /admin/endpoints/:group-name/enabled`

This API enables a group of endpoints

Parameter | Description
--------- | -----------
**group-name** | The name of the group of endpoints

<div class="snippet-title">
	<p>Example of a request to enable an endpoint group</p>
</div> 

```shell
curl -X PUT http://localhost:9000/admin/endpoints/baasbox.assets/enabled \
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
    "data": "success",
    "http_code": 200
}
```
