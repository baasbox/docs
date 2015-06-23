### Delete a document

`DELETE /document/:collection/:ID`

**Group**: [baasbox.data.write](#list-groups)

Deletes the document with the ID specified in the collection provided as parameter. Only the owner of the document (and  admin and backoffice users) can delete it, besides users who have been granted the permission to delete.

Parameter | Description
--------- | -----------
**collection** | The name of the collection. Mandatory.
**ID** | The unique ID of the document. Mandatory.

<div class="snippet-title">
	<p>Example of a request to delete a document</p>
</div>

```shell
curl -X DELETE http://localhost:9000/document/mycollection/090dd688-2e9a-4dee-9afa-aad72a1efa93 \
	 -H X-BB-SESSION:4cbfe03c-632b-4d3e-9a2b-0d4a0326d89e
```

```objective_c
// Assumes post is an instance of Post, which subclasses BAAObject 
[post deleteObjectWithCompletion:^(BOOL success, NSError *error) {
    
    if (success) {
        NSLog(@"object deleted");
    } else {
        // deal with error
    }
    
}];
```

```java
// Assumes doc is an instance of BaasDocument
doc.delete(new BaasHandler<Void>() {
  @Override
  public void handle(BaasResult<Void> res) {
    if (res.isSuccess()) {
      Log.d("LOG", "Document deleted");
    } else {
      Log.e("LOG", "error",res.error());
    }
  }
});
```

```javascript
BaasBox.delete("090dd688-2e9a-4dee-9afa-aad72a1efa93", "posts")
  .done(function(res) {
  	console.log("res ", res);
  })
  .fail(function(error) {
  	console.log("error ", error);
  })
```

<div class="snippet-title">
	<p>Example of a response</p>
</div>

```json
{
  "result": "ok",
  "data": "",
  "http_code": 200
}
```
