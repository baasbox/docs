### Update a Document's field

`PUT /document/:collection/:id/.:fieldname`

**Group**: [baasbox.data.update](#list-groups)

Updates a single field of an existing object. The field can be a simple property, 
a complex JSON object or even an array using the notation `.array[index]` .

Parameter | Description
--------- | -----------
**collection** | The name of the collection. Mandatory.
**id** | The ID of the document. Mandatory.
**fieldname** | The name of the field that you want to update
**data** | A JSON object in the body of the PUT. The new value must have a key named `data`.

<aside class="warning">
The fieldName must start with a .
</aside>

<div class="snippet-title">
	<p>Example of a request to change the value of the 'title' field </p>
</div>

```shell
curl -X PUT http://localhost:9000/document/mycollection/af1d66fe-c8b6-436f-866b-e4c823ae7666/.title  \
   -d '{"data" : "Updated title"}' \
   -H Content-type:application/json \
   -H X-BB-SESSION:4cbfe03c-632b-4d3e-9a2b-0d4a0326d89e
```

```objective_c
// Assumes post is an instance of Post, which subclasses BAAObject with properties "title".
post.title = @"My new title";
[post saveObjectWithCompletion:^(Post *p, NSError *error) {

    if (error == nil) {
        NSLog(@"saved post is %@", p)
    } else {
        // deal with error
    }

}];
```

```java
//Please see the "pass-through" functionality of the Android SDK
```

```javascript
// Assumes post is an instance of Post, which subclasses BAAObject with properties "title".
BaasBox.updateField(post.id, "posts", "title", "My new title")
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
    "@rid": "#25:1",
    "@version": 6,
    "@class": "mycollection",
    "title": "Updated title",
    "body": "Body of my post.",
    "id": "af1d66fe-c8b6-436f-866b-e4c823ae7666",
    "_creation_date": "2014-01-30T22:22:36.036+0100",
    "_author": "cesare"
  },
  "http_code": 200
}
```

<div class="snippet-title">
	<p>Example of a request to add a new value named 'tags'</p>
</div>

```shell
curl -X PUT http://localhost:9000/document/mycollection/af1d66fe-c8b6-436f-866b-e4c823ae7666/.tags  \
   -d '{"data" : ["tag1", "tag2"]}' \
   -H Content-type:application/json \
   -H X-BB-SESSION:4cbfe03c-632b-4d3e-9a2b-0d4a0326d89e
```

```objective_c
// Extend the Post class by adding a property named "tags"
// then use the method saveObjectWithCompletion: to save the object.
```


```java
//Please see the "pass-through" functionality of the Android SDK
```

```javascript
//Please use the $.ajax interface
```

<div class="snippet-title">
	<p>Example of a response</p>
</div>

```json
{
  "result": "ok",
  "data": {
    "@rid": "#25:1",
    "@version": 7,
    "@class": "mycollection",
    "title": "Updated title",
    "body": "Body of my post.",
    "id": "af1d66fe-c8b6-436f-866b-e4c823ae7666",
    "_creation_date": "2014-01-30T22:22:36.036+0100",
    "_author": "cesare",
    "tags": [
      "tag1",
      "tag2"
    ]
  },
  "http_code": 200
}
```

<div class="snippet-title">
	<p>Example of a request to add a new value to the 'tags' array property</p>
</div>

```shell
curl -X PUT http://localhost:9000/document/mycollection/af1d66fe-c8b6-436f-866b-e4c823ae7666/.tags[3]  \
  --globoff \
   -d '{"data" : "newly added tag"}' \
   -H Content-type:application/json \
   -H X-BB-SESSION:4cbfe03c-632b-4d3e-9a2b-0d4a0326d89e
```

```objective_c
//Please see the "pass-through" functionality of the iOS SDK
```

```java
//Please see the "pass-through" functionality of the Android SDK
```

```javascript
//Please use the $.ajax interface
```

<div class="snippet-title">
	<p>Example of a response</p>
</div>

```json
{
  "result": "ok",
  "data": {
    "@rid": "#25:1",
    "@version": 10,
    "@class": "mycollection",
    "title": "Updated title",
    "body": "Body of my post.",
    "id": "af1d66fe-c8b6-436f-866b-e4c823ae7666",
    "_creation_date": "2014-01-30T22:22:36.036+0100",
    "_author": "cesare",
    "tags": [
      "tag1",
      "tag2",
      "newly added tag"
    ]
  },
  "http_code": 200
}
```

<div class="snippet-title">
	<p>Example of a request to add a JSON object as a property</p>
</div>

```shell
curl -X PUT http://localhost:9000/document/mycollection/af1d66fe-c8b6-436f-866b-e4c823ae7666/.address  \
  --globoff \
   -d '{"data" : {"street" : "5th Avenue", "zip" : 10021}}' \
   -H Content-type:application/json \
   -H X-BB-SESSION:4cbfe03c-632b-4d3e-9a2b-0d4a0326d89e
```

```objective_c
//Please see the "pass-through" functionality of the iOS SDK
```

```java
//Please see the "pass-through" functionality of the Android SDK
```

```javascript
//Please use the $.ajax interface
```


<div class="snippet-title">
	<p>Response includes a new property</p>
</div>

```json
{
  "result": "ok",
  "data": {
    "@rid": "#25:1",
    "@version": 15,
    "@class": "mycollection",
    "title": "Updated title",
    "body": "Body of my post.",
    "id": "af1d66fe-c8b6-436f-866b-e4c823ae7666",
    "_creation_date": "2014-01-30T22:22:36.036+0100",
    "_author": "cesare",
    "tags": [
      "tag1",
      "tag2",
      "newly added tag"
    ],
    "address": {
      "zip": 10021,
      "street": "5th Avenue"
    }
  },
  "http_code": 200
}
```

<div class="snippet-title">
	<p>Example of a request to change a nested property</p>
</div>

```shell
curl -X PUT http://localhost:9000/document/mycollection/af1d66fe-c8b6-436f-866b-e4c823ae7666/.address/.street  \
  --globoff \
   -d '{"data" : "6th Avenue"}' \
   -H Content-type:application/json \
   -H X-BB-SESSION:4cbfe03c-632b-4d3e-9a2b-0d4a0326d89e
```

```objective_c
//Please see the "pass-through" functionality of the iOS SDK
```

```java
//Please see the "pass-through" functionality of the Android SDK
```

```javascript
//Please use the $.ajax interface
```

<div class="snippet-title">
	<p>Response includes a new value for the property</p>
</div>

```json
{
  "result": "ok",
  "data": {
    "@rid": "#25:1",
    "@version": 15,
    "@class": "mycollection",
    "title": "Updated title",
    "body": "Body of my post.",
    "id": "af1d66fe-c8b6-436f-866b-e4c823ae7666",
    "_creation_date": "2014-01-30T22:22:36.036+0100",
    "_author": "cesare",
    "tags": [
      "tag1",
      "tag2",
      "newly added tag"
    ],
    "address": {
      "zip": 10021,
      "street": "6th Avenue"
    }
  },
  "http_code": 200
}
```