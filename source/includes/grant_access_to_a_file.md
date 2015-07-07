### Grant access to a file


`PUT /file/:id/:action/user/:username` 

**Group**: [baasbox.file.grants](#list-groups)

`PUT /file/:id/:action/role/:rolename`

**Group**: [baasbox.file.grants](#list-groups)

API to grant access to a file for a specific user or role.

Parameter | Description
--------- | -----------
**id** | The ID of the file. Mandatory.
**action** | The grant you want to assign. One of: 	`read`, `update`, `delete`, `all`. Mandatory.
**username** | The username of the user to whom you want to assign the grant. Mandatory.
**rolename** | The name of the role to whom you want to grant the permission. One of: `anonymous`, `registered`, `administrator`, plus those defined by the administrator. Mandatory.

<div class="snippet-title">
	<p>Example of a request to grant read access to user “a” on a file</p>
</div>

```shell
curl -X PUT http://localhost:9000/file/41368ee4/read/user/a \
     -H X-BB-SESSION:b24fa187-797d-49d1-87fb-c99fee3a6588
```

```objective_c
BAAFile *file = ... ; // instance of file, already saved on the server
[file grantAccessToUser:@"a"
                 ofType:kAclReadPermission
             completion:^(id object, NSError *error) {
                 
                 if (error == nil) {
                     NSLog(@"Permission granted");
                 } else {
                     // Deal with error
                 }
                 
             }];
```

```java
BaasFile file=...; // reference to a file already saved on the server
file.grant(Grant.READ,"andrea",new BaasHandler<Void>(){
  @Override
  public void handle(BaasResult<Void> res){
    if (res.isSuccess()) { 
      Log.d("LOG","andrea can read the file");
    } else {
      Log.e("LOG","deal with error",res.error());
    }
  }
});
```

```javascript
BaasBox.grantUserAccessToFile("7491d26b-b730-40e7-9587-c0c3f58193c7", BaasBox.READ_PERMISSION, "a")
  .done(function(res) {
    console.log("res ", res);
  })
  .fail(function(error) {
    console.log("error ", error);
  })
```

<div class="snippet-title">
	<p>Example of a request to grant write access to role “registered” on a file</p>
</div>

```shell
curl -X PUT http://localhost:9000/file/41368ee4/update/role/registered \
     -H X-BB-SESSION:b24fa187-797d-49d1-87fb-c99fee3a6588
```

```objective_c
BAAFile *file = ... ; // instance of file, already saved on the server
[file grantAccessToRole:kAclRegisteredRole
                 ofType:kAclUpdatePermission
             completion:^(id object, NSError *error) {
                 
                 if (error == nil) {
                     // Permission granted
                 } else {
                     // Deal with error
                 }
                 
             }];
```

```java
BaasFile file=...; // reference to a file already saved on the server
file.grantAll(Grant.READ,"registered",new BaasHandler<Void>(){
  @Override
  public void handle(BaasResult<Void> res){
    if (res.isSuccess()) { 
      Log.d("LOG","andrea can read the file");
    } else {
      Log.e("LOG","deal with error",res.error());
    }
  }
});
```

```javascript
BaasBox.grantRoleAccessToFile("7491d26b-b730-40e7-9587-c0c3f58193c7", BaasBox.UPDATE_PERMISSION, BaasBox.REGISTERED_ROLE)
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