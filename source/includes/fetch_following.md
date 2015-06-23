### Fetch following

``GET /following/:username``

**Group**: [baasbox.friendship](#list-groups)

This API returns a list of users who are followed by the user with `username` passed as a parameter. If no username is provided, the API returns all users followed by the logged in user.  In its `data` property the method returns an array filled with the user profiles representing their “friends”. Each profile will contain the `visibleByFriends` data which would otherwise be hidden.

Parameter | Description
--------- | -----------
**username** | Username of the user whose following list has to be fetched. Optional.

<div class="snippet-title">
	<p>Example of a request to fetch who "cesare" is following</p>
</div>

```shell
curl http://localhost:9000/following/cesare \
 	 -H X-BB-SESSION:c6fb7001-ccb5-4048-8935-80ef197e1390
```

```objective_c
BAAUser *user = ... // user representing "cesare"

[user loadFollowingWithCompletion:^(NSArray *following, NSError *error) {
                        
            for (BAAUser *u in following) {
                NSLog("cesare is following %@", u)
            }
            
        }];
```

```java
BaasUser user = ... // the user representing "cesare"

user.following(new BaasHandler<List<BaasUser>>() {
  @Override
  public void handle(BaasResult<List<BaasUser>> res) {
    if(res.isSuccess()){
      for(BaasUser u: res.value()) {
        Log.d("LOG","Cesare is follwing: "+u.getName());
      }
    }
  }
});
```

```javascript
BaasBox.fetchFollowing("cesare")
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
  "data": [
    {
      "user": {
        "roles": [
          {
            "name": "registered"
          }
        ],
        "name": "a",
        "status": "ACTIVE"
      },
      "signUpDate": "2014-01-24T12:13:08.008+0100"
    }
  ],
  "http_code": 200
}
```
