### Fetch followers

``GET /followers/:username``

**Group**: [baasbox.friendship](#list-groups)

This API returns the list of followers for the user with `username` specified in the parameter. If no `username` is provided the API returns the list of followers for the currently logged in user. The method returns in its `data` property an array filled with the user profiles representing their “friends”. Each profile will contain the `visibleByFriends` data which would otherwise be protected. 

Parameter | Description
--------- | -----------
**username** | Username of the user whose followers list has to be fetched. Optional.

<div class="snippet-title">
	<p>Example of a request to fetch "cesare"'s followers</p>
</div>


```shell
curl http://localhost:9000/followers/cesare \
	 -H X-BB-SESSION:c6fb7001-ccb5-4048-8935-80ef197e1390
```

```objective_c
BAAUser *user = ... // user representing "cesare"

[user loadFollowersWithCompletion:^(NSArray *following, NSError *error) {
                        
            for (BAAUser *u in following) {
                NSLog("%@ is following cesare", u)
            }
            
        }];
```

```java
BaasUser user = ... // the user representing "cesare"

user.followers(new BaasHandler<List<BaasUser>>() {
  @Override
  public void handle(BaasResult<List<BaasUser>> res) {
    if(res.isSuccess()){
      for(BaasUser u: res.value()) {
        Log.d("LOG", u.getName()+ " is following cesare");
      }
    }
  }
});
```

```javascript
BaasBox.fetchFollowers("cesare")
  .done(function(res) {
  	console.log("res ", res['data']);
  })
  .fail(function(error) {
  	console.log("error ", error);
  })
```


<div class="snippet-title">
	<p>Example of a response with "cesare"'s followers</p>
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
