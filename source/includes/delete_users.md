### Delete Users

`DELETE /admin/user/:username`

Deletes a users and all its documents. 

This operation can be performed only by an admin.Internal users can't be deleted.

```shell
curl -X DELETE -H X-BB-SESSION:f24c0ccb-e2bd-4741-8133-86fea6ea1e01 -H x-baasbox-appcode:1234567890 -d '' http://localhost:9000/admin/user/username-to-delete
```

```objective_c
//Please see the "pass-through" functionality of the iOS SDK
```

```java

});
```

```javascript
//Please use the $.ajax interface
```

<div class="snippet-title">
<p>Example of a response</p>
</div>  

```json
{
  "result":"true",
  "data":"",
  "http_code":200
}
```