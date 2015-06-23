### Upload a file

`POST /file`

**Group**: [baasbox.file.write](#list-groups)

API to create and upload a file. By default the uploaded file will be accessible only by the owner, backoffice and admin users. After the uploaded metadata (and exif data in case of images) are extracted and attached to the file. 
The returned object is decorated with the following fields:

* contetType 
* contentLength
* metadata
* textContent

Parameter | Description
--------- | -----------
**file** | The file itself. Mandatory.
**attachedData** | A valid JSON string to store data associated to a file. Optional.
**acl** | A valid JSON string to declare access to the file. Optional. See [ACL](#grant-access-to-a-file).


<aside class="notice">
	The metadata field of the JSON response may vary according to the type of file uploaded.
</aside>

<div class="snippet-title">
	<p>Example of a request to upload a file</p>
</div>

```shell
curl -X POST http://localhost:9000/file \
	 -F file=@test.jpg \
	 -H X-BB-SESSION:9952384d-8d78-4399-82d0-7039f832a786
```

```objective_c
NSData *data = ...; // data for file
BAAFile *file = [[BAAFile alloc] initWithData:data];
file.contentType = @"image/jpeg";

[file uploadFileWithPermissions:permissions 
                     completion:^(BAAFile *uploadedFile, NSError *e) { 
	
                        	if (error == nil) {
                        		NSLog(@"Uploaded %@", uploadedFile)
                        	} else {
                        		// Deal with error
                        	}
	
}];

// "cesare" and registered users can read, "claudio" can update and all those belonging to "deleters" can delete

```

```java
InputStream data = ...; // input stream to upload
BaasFile file = new BaasFile();

file.upload(data,new BaasHandler<BaasFile> file) {
  @Override
  public void handle(BaasResult<BaasFile> res) {
    if( res.isSuccess() ) {
      Log.d("LOG","File uploaded with permissions");
    } else {
      Log.e("LOG","Deal with error",res.error());
    }
  }
}
```

```javascript
// Assumes 'uploadForm' is a form with an input tag of type 'file'
$("#uploadForm").submit(function(e) {
  e.preventDefault();
  var formObj = $(this);
  var formData = new FormData(this);
  BaasBox.uploadFile(formData)
    .done(function(res) {
      console.log("res ", res);
    })
    .fail(function(error) {
      console.log("error ", error);
    })
});
```

<div class="snippet-title">
	<p>Example of a response when a file is created</p>
</div>

```json
{
  "result": "ok",
  "data": {
    "@version": 2,
    "_creation_date": "2014-02-03T18:54:17.017+0100",
    "id": "be81f25d-c954-498e-84a2-6f43a94a9d8f",
    "_author": "cesare",
    "fileName": "test.jpg",
    "contentType": "image/jpeg",
    "contentLength": 283808,
    "metadata": { },
    "attachedData": { }     
  },
  "http_code": 201
}
```

<div class="snippet-title">
	<p>Example of a request to create a file with attached data</p>
</div>

```shell
curl -X POST http://localhost:9000/file \
	 -F 'attachedData={"test_key":"test_value"}' \
	 -F file=@test.jpg \
	 -H X-BB-SESSION:9952384d-8d78-4399-82d0-7039f832a786
```

```objective_c
NSData *data = ...; // data for file
BAAFile *file = [[BAAFile alloc] initWithData:data];
file.contentType = @"image/jpeg";
[file.attachedData setObject:@"My title"
                      forKey:@"title"];
[file.attachedData setObject:@[@"tag1", @"tag2"]
                      forKey:@"tags"];

[file uploadFileWithPermissions:permissions 
                     completion:^(BAAFile *uploadedFile, NSError *e) { 
  
                          if (error == nil) {
                            NSLog(@"Uploaded %@", uploadedFile)
                          } else {
                            // Deal with error
                          }
```

```java
byte[] data = ...; // in memory data to upload
JsonObject attachedData = new JsonObject()
                              .putString("someInfo","value");

BaasFile file = new BaasFile(attachedData);

file.upload(data,new BaasHandler<BaasFile> () {
  @Override
  public void handle(BaasResult<BaasFile> res) {
    if( res.isSuccess() ) {
      Log.d("LOG","File uploaded with permissions");
    } else {
      Log.e("LOG","Deal with error",res.error());
    }
  }
});
```

```javascript
TO BE IMPLEMENTED
```

<div class="snippet-title">
	<p>Example of a request to create a file with attached data and acl</p>
</div>

```shell
curl -X POST http://localhost:9000/file \
	 -F '"attachedData"={"test_key":"test_value"}' \
	 -F '"acl"={"read":{"roles":["registered"]}' \
	 -F file=@test.jpg \
	 -H X-BB-SESSION:9952384d-8d78-4399-82d0-7039f832a786
```

```objective_c
NSData *data = ...; // data for file
BAAFile *file = [[BAAFile alloc] initWithData:data];
file.contentType = @"image/jpeg";
[file.attachedData setObject:@"My title"
                      forKey:@"title"];
[file.attachedData setObject:@[@"tag1", @"tag2"]
                      forKey:@"tags"];

NSDictionary *permissions = 
    @{kAclReadPermission : @{@"users" : @[@"cesare"], @"roles" : @[kAclRegisteredRole]},
      kAclUpdatePermission : @{@"users" : @[@"claudio"]},
      kAclDeletePermission : @{@"roles" : @[@"deleters"]}
    };

[file uploadFileWithPermissions:permissions 
                     completion:^(BAAFile *uploadedFile, NSError *e) { 
  
                          if (error == nil) {
                            NSLog(@"Uploaded %@", uploadedFile)
                          } else {
                            // Deal with error
                          }
```

```java
InputStream data = ...; // input stream to upload
JsonObject attachedData = new JsonObject();
attachedData.putString("key","value")
            .putLong("num",1);
BaasFile file = new BaasFile(attachedData);
BaasACL acl = new BaasACL().grantUsers(Grant.READ,"andrea");

file.upload(acl,data,new BaasHandler<BaasFile> file) {
  @Override
  public void handle(BaasResult<BaasFile> res) {
    if( res.isSuccess() ) {
      Log.d("LOG","File uploaded with permissions");
    } else {
      Log.e("LOG","Deal with error",res.error());
    }
  }
}
```

```javascript
TO BE IMPLEMENTED
```
