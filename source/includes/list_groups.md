### List groups

`GET /admin/endpoints`

The predefined groups are all prefixed with *baasbox.*, and cover
all the endpoints except for the administrative ones that cannot
be turned off.

Function Group                    | Description
--------------------------------- | ---------------------------------------------------
**baasbox.assets**                | rules the read access to assets and related content
**baasbox.account**               | rules the login/logout and account modification endpoints
**baasbox.account.create**        | rules the ability to create a new user account (signup)
**baasbox.social**                | rules the ability to use social login APIs
**baasbox.account.lost_password** | rules the ability to use the recover password functionality
**baasbox.users**                 | rules the access to the baasbox users
**baasbox.friendship**            | rules the read access to friendship endpoints
**baasbox.friendship.create**     | rules the write access to friendship endpoints
**baasbox.notifications.send**    | rules the ability to send notifications (push messages)
**baasbox.notifications.receive** | rules the ability to subscribe to notifications (push messages)
**baasbox.data.write**            | rules the ability to create new documents in collections
**baasbox.data.read**             | rules the read access to collections and documents
**baasbox.data.update**           | rules the ability to update existing documents
**baasbox.data.grants**           | rules the ability to modify grants on documents
**baasbox.file.read**             | rules the ability to read/list files
**baasbox.file.write**            | rules the ability to create new files
**baasbox.file.grants**           | rules the ability to modify grants on files

<div class="snippet-title">
	<p>Example of a request to list endpoint groups</p>
</div>  

```shell
curl -X GET http://localhost:9000/admin/endpoints \
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
        "baasbox.assets": true,
        "baasbox.account": true,
        "baasbox.account.create": true,
        "baasbox.social": true,
        "baasbox.account.lost_password": true,
        "baasbox.users": true,
        "baasbox.friendship": true,
        "baasbox.friendship.create": true,
        "baasbox.notifications.send": true,
        "baasbox.notifications.receive": true,
        "baasbox.data.write": true,
        "baasbox.data.read": true,
        "baasbox.data.update": true,
        "baasbox.data.grants": true,
        "baasbox.file.read": true,
        "baasbox.file.write": true,
        "baasbox.file.grants": true
    },
    "http_code": 200
}
```
