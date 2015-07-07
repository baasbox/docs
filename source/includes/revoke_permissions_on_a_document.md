### Revoke permissions on a Document

`DELETE /document/:collection/:id/:action/user/:username`

**Group**: [baasbox.data.grants](#list-groups)

`DELETE /document/:collection/:id/:action/role/:rolename`

**Group**: [baasbox.data.grants](#list-groups)

Revokes permission on a document. You can revoke permissions to a single user or a role name.

Parameter | Description
--------- | -----------
**collection** | The name of the collection. Mandatory.
**id** | The ID of the document. Mandatory.
**action** | The grant you want to assign. One of: 	`read`, `update`, `delete`, `all`. Mandatory.
**username** | The username of the user to whom you want to assign the grant
**rolename** | The name of the role to whom you want to grant the permission. One of: `anonymous`, `registered`, `administrator`, plus those defined by the administrator. Mandatory.

<div class="snippet-title">
	<p>Example of a request to revoke read access to user "a" on document "4cbfe03c-632b-4d3e-9a2b-0d4a0326d89e"</p>
</div>

```shell
curl -X DELETE http://localhost:9000/document/mycollection/090dd688/read/user/a \
	 -H X-BB-SESSION:4cbfe03c-632b-4d3e-9a2b-0d4a0326d89e
```

```objective_c
// Assumes p is an instance of Post, which is a subclass of BAAObject
[p revokeAccessToUser:@"a"
               ofType:kAclReadPermission
           completion:^(SMPost *post, NSError *error) {
     
               if (error == nil) {
                   
                   NSLog(@"permission granted");
                   
               } else {
               
                   NSLog(@"error in granting permission");
                   
               }
               
 }];
```

```java
// assuming doc is an instance of the document
doc.revoke(Grant.READ,"a",new BaasHandler<Void>() {
  @Override
  public void handle(BaasResult<Void> res) {
    if (res.isSuccess()) {
      Log.d("LOG","Permission granted");
    } else {
      Log.e("LOG","Error",res.error());
    }
  }
});
```

```javascript
BaasBox.revokeAccessToUser("posts", "4cbfe03c-632b-4d3e-9a2b-0d4a0326d89e", BaasBox.READ_PERMISSION, "a")
  .done(function(res) {
  	console.log("res ", res);
  })
  .fail(function(error) {
  	console.log("error ", error);
  })
```

<div class="snippet-title">
	<p>Example of a request to revoke update access to all registered users on a document</p>
</div>


```shell
curl -X PUT http://localhost:9000/document/mycollection/090dd688/update/role/registered \
	 -H X-BB-SESSION:4cbfe03c-632b-4d3e-9a2b-0d4a0326d89e
```

```objective_c
// Assumes p is an instance of Post, which is a subclass of BAAObject
[p revokeAccessToRole:kAclRegisteredRole
              ofType:kAclUpdatePermission
          completion:^(SMPost *post, NSError *error) {
    
              if (error == nil) {
                  
                  NSLog(@"permission granted");
                  
              } else {
              
                  NSLog(@"error in granting permission");
                  
              }
               
}];
```

```java
// assumes doc is an instance of the document
doc.revokeAll(Grant.UPDATE,Role.REGISTERED,
   new BaasHandler<Void>() {
     @Override
     public void handle(BaasResult<Void> res) {
       if (res.isSuccess()) {
         Log.d("LOG","Permission granted");
       } else {
         Log.e("LOG","Error",res.error());
       }
     }
   });
```

```javascript
BaasBox.revokeAccessToUser("posts", "4cbfe03c-632b-4d3e-9a2b-0d4a0326d89e", BaasBox.UPDATE_PERMISSION, BaasBox.REGISTERED_ROLE)
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