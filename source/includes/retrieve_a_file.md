### Retrieve a file

`GET /file/:id`

**Group**: [baasbox.file.read](#list-groups)

Parameter | Description
--------- | -----------
**id** | The ID of the file to be retrieved. Mandatory.
**download** | Set it to `true` to download a file (useful from browser). Optional. 
**resize** | Index to retrieve an element from the array of resizing options. Optional. See [Console Settings](#console-settings).

<div class="snippet-title">
	<p>Example of a request to retrieve a file</p>
</div>

```shell
curl http://localhost:9000/file/f18e4343-5100-4398-b32f-2e634220bf99 \
	 -H X-BB-SESSION:9952384d-8d78-4399-82d0-7039f832a786
```

```objective_c
BAAFile *picture = ...; // instance or subclass of BAAFile, previously saved on the server
[picture loadFileWithCompletion:^(NSData *data, NSError *error) {
    
    self.imageView.image = [[UIImage alloc] initWithData:data];
    
}];
```

```java
// load file in memory
BaasFile file = ...;
file.stream(new BaasHandler<BaasFile>() {
  @Override
  public void handle(BaasResult<BaasFile> res) {
    if ( res.isSuccess() ) {
      byte[] data = res.value().getData();
      Log.d("LOG","File received");  
    } else {
      Log.e("LOG","Error while streaming",res.error());
    }
  }
});

//save a file on disk
BaasFile file =...;
file.download("path-to-save-the-file.to",
              new BaasHandler<Pair<BaasFile,String>>(){
                @Override
                public void handle(BaasResult<Pair<BaasFile,String>> res)P{
                
                }
              });
```

```javascript
BaasBox.fetchFile("0d7c2469-71e0-447b-a524-a8ecd0bf4a77")
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
// Binary file
```

<div class="snippet-title">
	<p>Example of a request to suggest the browser to download an app</p>
</div>

```shell
curl http://localhost:9000/file/f18e4343-5100-4398-b32f-2e634220bf99?download=true \
	 -H X-BB-SESSION:9952384d-8d78-4399-82d0-7039f832a786
```

<div class="snippet-title">
	<p>Example of a request to retrieve a resized version of an app</p>
</div>

```shell
curl http://localhost:9000/file/f18e4343-5100-4398-b32f-2e634220bf99?sizeId=0 \
	 -H X-BB-SESSION:9952384d-8d78-4399-82d0-7039f832a786
```
