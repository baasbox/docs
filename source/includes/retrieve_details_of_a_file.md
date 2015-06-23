### Retrieve details of a file

`GET /file/details/:id`

**Group**: [baasbox.file.read](#list-groups)

Retrieves the details of a file, including `attachedData` and `metadata`.


Parameter | Description
--------- | -----------
**id** | The ID of the file whose details are to be retrieved. Mandatory.

<div class="snippet-title">
	<p>Example of a request to retrieve details of a file</p>
</div>

```shell
curl http://localhost:9000/file/details/f18e4343-5100-4398-b32f-2e634220bf99  \
	 -H X-BB-SESSION:9952384d-8d78-4399-82d0-7039f832a786
```

```objective_c
[BAAFile loadFileDetails:p.fileId
              completion:^(BAAFile *file, NSError *error) {
                  
                  if (error == nil) {
                      NSLog(@"file %@", file);
                  } else {
                      // Deal with error
                  }
                  
              }];
```

```java
BaasFile.fetch(fileId, new BaasHandler<BaasFile> () {
  @Override
  public void handle(BaasResult<BaasFile> res) {
    if (res.isSuccess()) {
      Log.d("LOG","Your file details"+res);
    } else {
      Log.e("LOG","Deal with eror",res.error());
    }
  }
});
```

```javascript
BaasBox.fetchFileDetails("7491d26b-b730-40e7-9587-c0c3f58193c7")
  .done(function(res) {
    console.log("res ", res);
  })
  .fail(function(error) {
    console.log("error ", error);
  })
```
 
<div class="snippet-title">
	<p>Example of a response with file details</p>
</div>

```json
{
  "result": "ok",
  "data": {
    "@version": 6,
    "id": "f18e4343-5100-4398-b32f-2e634220bf99",
    "_creation_date": "2014-02-03T23:41:59.059+0100",
    "_author": "cesare",
    "fileName": "test.jpg",
    "contentType": "image/jpeg",
    "contentLength": 283808,
    "metadata": { },
    "attachedData": { }
  },
  "http_code": 200
}
```