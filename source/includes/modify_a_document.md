### Modify a document

`PUT /document/:collection/:ID`

**Group**: [baasbox.data.update](#list-groups)

Updates the document with the ID provided in the specified collection. 
Only the owner of the document (besides backoffice users), can call this API.

Parameter | Description
--------- | -----------
**collection** | The name of the collection. Mandatory.
**ID** | The unique ID of the document. Mandatory.
  | A valid JSON as the body of the PUT. 


<aside class="warning">
	The document is fully replaced with the new content. 
</aside>

<div class="snippet-title">
	<p>Example of a request to modify a document</p>
</div>

```shell
curl -X PUT http://localhost:9000/document/mycollection/090dd688-2e9a-4dee-9afa-aad72a1efa93 \
	 -d '{"title" : "My new post title", "body" : "New body of post.", "tags" : "tag1"}' \
	 -H Content-type:application/json \
	 -H X-BB-SESSION:4cbfe03c-632b-4d3e-9a2b-0d4a0326d89e
```

```objective_c
// Assumes post is an instance of Post, which subclasses BAAObject with properties "title", "body" and "tags".
post.title = @"My new post title";
post.tags = @"tag1"
post.body = @"Body of my post.";
[post saveObjectWithCompletion:^(Post *p, NSError *error) {
    
    if (error == nil) {
        NSLog(@"saved post is %@", p)
    } else {
        // deal with error
    }
    
}];
```

```java
BaasDocument doc = new BaasDocument("post");
doc.putString("title","My new post title")
   .putString("tags","tag1")
   .putString("body","Body of my post");
doc.save(SaveMode.IGNORE_VERSION,new BaasHandler<BaasDocument>(){
  @Override
  public void handle(BaasResult<BaasDocument> res) {
    if(res.isSuccess()){
      Log.d("LOG","Document saved "+res.value().getId());
    } else {
      Log.e("LOG","Error",res.error());
    }
  }
});
```

```javascript
// Assumes posts has properties "title", "body" and "tags".
post.title = "My new post title";
post.tags = "tag1"
post.body = "Body of my post.";
BaasBox.save(post, "posts")
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
  "data": {
    "@rid": "#25:0",
    "@version": 3,
    "@class": "mycollection",
    "title": "My new post title",
    "body": "New body of post.",
    "tags": "tag1",
    "id": "090dd688-2e9a-4dee-9afa-aad72a1efa93",
    "_creation_date": "2014-01-30T21:13:16.016+0100",
    "_author": "cesare"
  },
  "http_code": 200
}
```
