### Retrieve an Asset

`GET /asset/:name`

**Group**: [baasbox.assets](#list-groups)

To retrieve an asset by name. 

Parameter | Description
--------- | -----------
**name** | The name of the asset. Mandatory.

<div class="snippet-title">
	<p>Example of a request to retrieve an asset</p>
</div>  

```shell
curl http://localhost:9000/asset/margherita \
	 -H X-BAASBOX-APPCODE:1234567890
```

```objective_c
// If the asset is a JSON
BAAClient *client = [BAAClient sharedClient];
[client getPath:@"asset/margherita/data"
     parameters:nil
        success:^(id responseObject) {
            
            NSLog(@"resp %@", responseObject);
            
        }
 
        failure:^(NSError *error) {
            
            NSLog(@"err %@", error);
            
        }];

// If the asset is a file
BAAClient *client = [BAAClient sharedClient];
[client getPath:@"asset/margherita"
     parameters:nil
        success:^(id responseObject) {
            
            NSLog(@"resp %@", responseObject);
            
        }
 
        failure:^(NSError *error) {
            
            NSLog(@"err %@", error);
            
        }];
```

```java
// if it's a JSON
BaasAsset.fetchData("name",new BaasHandler<JsonObject>() {
  @Override
  public void handler(BaasResult<JsonObject> res) {
     if(res.isSuccess()){
       // do something with the object
     } else {
       Log.e("ERROR","Error while retrieving asset",res.error());
     }
  }
});

// if it's binary
BaasAsset.streamAsset("name",new BaasHandler<byte[]>() {
  @Override
  public void handler(BaasResult<byte[]> res){
    if(res.isSuccess()) {
      // do something with content
    } else {
      Log.e("ERROR","Error while retrieving asset",res.error());
    }
  }
});
```1

```javascript
TO BE IMPLEMENTED
```

<div class="snippet-title">
	<p>Example of a response</p>
</div>  

```json
The file itself or the JSON
```