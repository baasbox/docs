### Delete links

`DELETE /link/:id`

Deletes a link. 

At the moment links can be deleted by anyone. The RSL (Record Security Level) has not yet been implemented on links.

```shell
curl -X DELETE -H X-BB-SESSION:f24c0ccb-e2bd-4741-8133-86fea6ea1e01 -H x-baasbox-appcode:1234567890 -d '' http://localhost:9000/link/994cb9b0-ccba-4ba2-a7dd-68c0440a0783
```

```objective_c
//Please see the "pass-through" functionality of the iOS SDK
```

```java
BaasLink.withId("id").delete(RequestOptions.DEFAULT,new BaasHandler<Void>() {
  @Override
  public void handle(BaasResult<Void> ok) {
    if (ok.isSuccess()){
      Log.d("TAG","Link has been deleted");
    }
  }
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
  "result":"ok",
  "data":"",
  "http_code":200
}
```