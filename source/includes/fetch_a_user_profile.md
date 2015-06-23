### Fetch a user profile

``GET /user/:username``

**Group**: [baasbox.users](#list-groups)

Allows to retrieve information about a user profile.

Parameter | Description
--------- | -----------
**username** | Username of the user. Mandatory.
 
<div class="snippet-title">
	<p>Example of a request to get a user profile</p>
</div>

```shell
curl http://localhost:9000/user/cesare \
	 -H X-BB-SESSION:f083f676-65d0-45bd-bfe5-e876ef3f659e
```

```objective_c
[BAAUser loadUserDetails:@"cesare"
              completion:^(BAAUser *user, NSError *error) {
    
    if (error == nil) {
    
        NSLog(@"user details are %@", user);
        
    } else {
    
        // deal with error
        
    }
    
}];
```

```java
BaasUser.fetch("a",new BaasHandler<BaasUser>() {
  @Override
  public void handle(BaasResult<BaasUser> res) {
    if(res.isSuccess()){
      BaasUser user = res.value();
      Log.d("LOG","The user: "+user);
    } else {
      Log.e("LOG","Error",res.error());
    }
  }
});
```

```javascript
BaasBox.fetchUserProfile("cesare")
  .done(function(res) {
  	console.log("res ", res['data']);
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
    "user": {
      "name": "a",
      "status": "ACTIVE",
	  "visibleByFriends": {"phoneNumber":"+1985478562"}},
      "roles": [
        {
          "name": "registered"
        }
      ]
    },
    "signUpDate": "2014-01-24T12:13:08.008+0100"
  }
```
