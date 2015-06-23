### Retrieve details of files

`GET /file/details`

**Group**: [baasbox.file.read](#list-groups)

Returns a list of details about the files that the user has access to.
Supports [Pagination and query criteria](#pagination-and-query-criteria).

<div class="snippet-title">
	<p>Example of a request to retrieve details of files</p>
</div>

```shell
curl http://localhost:9000/file/details \
	 -H X-BB-SESSION:45640ea7-f57f-4ade-b781-4aebc0c364b6
```

```objective_c
[BAAFile loadFilesAndDetailsWithCompletion:^(NSArray *files, NSError *error) {
        
        NSLog(@"files are %@", files);
        
    }];
```

```java
BaasFile.fetchAll(new BaasHandler<List<BaasFile>>() {
  @Override
  public void handle(BaasResult<List<BaasFile>> res) {
    if (res.isSuccess()) {
      Log.d("LOG","Received result");
    } else {
      Log.e("LOG","Error",res.error());
    }
  }
});
```

```javascript
TO BE IMPLEMENTED
```

<div class="snippet-title">
	<p>Example of a response with details of files</p>
</div>

```json
{
  "result": "ok",
  "data": [
    {
      "@version": 4,
      "id": "338ad9e6-1a70-4483-bd46-9764be05def4",
      "_creation_date": "2014-02-04T00:50:13.013+0100",
      "_author": "a",
      "fileName": "41EAE238-0E8F-491D-BA34-C7BFB4EFF595.image/jpeg",
      "contentType": "image/jpeg",
      "contentLength": 75642,
      "metadata": { },
      "attachedData": { }
    },
	{  }
  ],
  "http_code": 200
}
```