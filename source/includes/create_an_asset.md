### Create an asset

`POST /admin/asset`

Parameter | Description
--------- | -----------
**name** | The name of the asset. Must be unique. Mandatory. 
**meta** | A string representing a valid JSON object. Here you can store any data associated with the asset. Optional.
**file** | The file you want to upload. Optional.

Allows to create an asset.

<div class="snippet-title">
	<p>Example of a request to create a JSON asset</p>
</div> 

```shell
curl http://localhost:9000/admin/asset \
	 -d 'name=margherita&meta={"pizzaname": "Margherita", "price": 5}' \
	 -H X-BB-SESSION:f24c0ccb-e2bd-4741-8133-86fea6ea1e01
```

```objective_c
// NOT IMPLEMENTED
// It's only for admins. You can do it in the web console.
```

```java
// NOT IMPLEMENTED
// It's only for admins. You can do it in the web console.
```

```javascript
// NOT IMPLEMENTED
// It's only for admins. You can do it in the web console.
```

<div class="snippet-title">
	<p>Example of a response</p>
</div>  

```json
{
  "result": "ok",
  "data": {
    "@rid": "#19:3",
    "@version": 18,
    "@class": "_BB_Asset",
    "_creation_date": "2014-02-08T10:52:51.051+0100",
    "id": "98510f1c-a558-4901-9550-71e8add0a6c2",
    "_author": "admin",
    "name": "margherita",
    "meta": {
      "pizzaname": "Margherita",
      "price": 5
    }
  },
  "http_code": 201
}
```

<div class="snippet-title">
	<p>Example of a request to create a file asset with JSON metadata attached</p>
</div>  

```shell
curl http://localhost:9000/admin/asset \
	 --form file=@pizza.jpg \
	 --form name=margherita \
	 --form meta='{"name": "Margherita", "price": 5}' \
	 -H X-BB-SESSION:f24c0ccb-e2bd-4741-8133-86fea6ea1e01
```

```objective_c
// NOT IMPLEMENTED
// It's only for admins. You can do it in the web console.
```

```java
// NOT IMPLEMENTED
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
    "@rid": "#20:0",
    "@version": 16,
    "@class": "_BB_FileAsset",
    "_creation_date": "2014-02-08T11:04:15.015+0100",
    "id": "00cced22-680d-45d4-944e-28ac9a140572",
    "_author": "admin",
    "name": "margherita",
    "fileName": "pizza.jpg",
    "contentType": "image/jpeg",
    "contentLength": 975404,
    "meta": {
      "name": "Margherita",
      "price": 5
    }
  },
  "http_code": 201
}
```

<aside class="notice">
	The `name` field must be unique. An error will be returned if an asset with the same name has already been uploaded.
	
	Only a user with an admin role can create an asset.
</aside>