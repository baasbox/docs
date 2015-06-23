### Create a document

`POST /document/:collection-name`

**Group**: [baasbox.data.write](#list-groups)

Creates a document in the collection specified in the parameter. The collection must have been created in advance. See [here](#create-a-new-collection).
The returned document is decorated with the following fields:

- `id`: unique Identifier of the document. It is a String and it is unique thorught all the database. 
- `@version`: number indication of the version of the record, useful to manage concurrent updates
- `@class`: name of the collection
- `_creation_date`: timestamp
- `_author`: username of the user who created the document.

**Note**: These fields **cannot** be overwritten. 

Since v0.9.4 you can provide your own ids for documents. 

By default only the owner can update and delete the documents he created. All the other users (except admins and backoffice) cannot have any kind of access to those documents, unless they are granted permissions.


Parameter | Description
--------- | -----------
**collection-name** | The name of the collection. Mandatory.
The body payload | A valid JSON as the body of the POST call. Mandatory.

<div class="snippet-title">
	<p>Example of a request to create a document</p>
</div>

```shell
curl -X POST http://localhost:9000/document/mycollection \
	 -d '{"title" : "My new post title", "body" : "Body of my post."}' \
	 -H Content-type:application/json \
	 -H X-BB-SESSION:4cbfe03c-632b-4d3e-9a2b-0d4a0326d89e
```

```objective_c
// Assumes post is an instance of Post, which subclasses BAAObject with properties "title" and "body".
Post *post = [[Post alloc] init];
post.title = @"My new post title";
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
BaasDocument doc = new BaasDocument("mycollection");
doc.putString("title","My new post title")
   .putString("body","Body of my post.");
doc.save(new BaasHandler<BaasDocument>() {
  @Override
  public void handle(BaasResult<BaasDocument> res) {
    if(res.isSuccess()) {
      Log.d("LOG","Saved: "+res.value());
    } else {

    }
  }
});
```

```javascript
// Assumes a collection named "posts" has been created
var post = new Object();
post.title = "My new post title";
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
    "@version": 2,
    "@class": "mycollection",
    "title": "My new post title",
    "body": "Body of my post.",
    "id": "090dd688-2e9a-4dee-9afa-aad72a1efa93",
    "_creation_date": "2014-01-30T21:13:16.016+0100",
    "_author": "cesare"
  },
  "http_code": 200
}
```
