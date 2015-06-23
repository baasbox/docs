### Update user profile

``PUT /me``

**Group**: [baasbox.account](#list-groups)

Updates details about the logged in user.

The body payload to be sent has the following form:

```{
    "visibleByTheUser": {},
    "visibleByFriends": {},
    "visibleByRegisteredUsers": {},
    "visibleByAnonymousUsers": {}
}```

All four properties are optional. You can send just
one of them or all four. See example on the right.
The values for this fields can be anything you like: string, numbers, arrays
or JSON encoded objects.

Parameter | Description
--------- | -----------
**visibleByTheUser** | fields are private and visible only by the user
**visibleByFriends** | fields are visible by the user and friends
**visibleByRegisteredUsers** | fields are visible by the user, friends and any registered user
**visibleByAnonymousUsers** | fields are public and visible by everyone, even anonymous users

<aside class="warning">
	The previously stored content for each of the four fields will be overwritten.
</aside>

<div class="snippet-title">
	<p>PUT request to update the logged in user profile</p>
</div>

```shell
curl -X PUT http://localhost:9000/me \
	-d '{"visibleByFriends" : {"phoneNumber" : "+1123456"}}' \
	-H Content-type:application/json \
	-H X-BB-SESSION:a30e8f43-4d90-4324-91d2-6065fa6ca63c
```

```objective_c
BAAUser *user = ... ; // some user
[user.visibleByAnonymousUsers setObject:@"mail@mail.com" forKey:@"email"];
[user updateWithCompletion:^(BAAUser *user, NSError *error) {
    
    if (error == nil) {
        NSLog(@"user is %@", [user jsonString]);
    } else {
        NSLog(@"error %@", error);
    }
    
}];
```

```java
BaasUser user = BaasUser.current();
user.getScope(Scope.PRIVATE).putString("property","value");
user.save(new BaasHandler<BaasUser>() {
  @Override
  public void handle(BaasResult<BaasUser> res) {
    if(res.isSuccess()) {
      Log.d("LOG", "User data has been saved");
    } else {
      Log.e("LOG", error,res.error());
    }
  }
});
```

```javascript
BaasBox.updateUserProfile({"visibleByAnonymousUsers": {"email" : "mail@mail.com"}})
  .done(function(res) {
  	console.log("res ", res['data']);
  })
  .fail(function(error) {
  	console.log("error ", error);
  })
```


<div class="snippet-title">
	<p>Sample JSON response</p>
</div>

```json
{
  "result": "ok",
  "data": {
    "user": {
      "name": "cesare",
      "status": "ACTIVE",
      "roles": [
        {
          "name": "registered"
        }
      ]
    },
    "signUpDate": "2014-01-24T11:28:09.009+0100",
    "visibleByFriends": {
      "phoneNumber": "+1123456"
    }
  },
  "http_code": 200
}
```
