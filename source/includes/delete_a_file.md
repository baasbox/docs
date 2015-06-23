### Delete a file

`DELETE /file/:id`

**Group**: [baasbox.file.write](#list-groups)

API to delete a file. 

Parameter | Description
--------- | -----------
**id** | The ID of the file to be deleted. Mandatory.

<div class="snippet-title">
	<p>Example of a request to delete a file</p>
</div>

```shell
curl -X DELETE http://localhost:9000/file/a57b33ce-7f4d-4ff7-bf8c-f8c0f973b9d8 \
	 -H X-BB-SESSION:9952384d-8d78-4399-82d0-7039f832a786
```

```objective_c
BAAFile *picture = ...; // instance or subclass of BAAFile
[picture deleteFileWithCompletion:^(BOOL success, NSError *error) {
   
    if (success) {
        NSLog(@"Pic deleted");
    } else {
		// Deal with error
	}
	
}
    
}];
```

```java
BaasFile file = ...; // a file reference
file.delete(new BaasHandler<Void>() {
  @Override
  public void handle(BaasResult<Void> res) {
    if( res.isSuccess() ) {
      Log.d("LOG","File has been downloaded");
    } else {
      Log.e("LOG","Deal with error",res.error());
    }
  }
});
// if you don't have a reference to the file
// object but you know it's id
BaasFile.delete("fileId",handler);
```

```javascript
BaasBox.deleteFile("0d7c2469-71e0-447b-a524-a8ecd0bf4a77")
  .done(function(res) {
    console.log("res ", res);
  })
  .fail(function(error) {
    console.log("error ", error);
  })
```

<div class="snippet-title">
	<p>Example of a response when a file is deleted</p>
</div>

```json
{
  "result": "ok",
  "data": "",
  "http_code": 200
}
```
