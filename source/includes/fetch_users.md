### Fetch users

``GET /users``

**Group**: [baasbox.users](#list-groups)

Allows to retrieve a list of users. This API supports [pagination](#pagination-and-query-criteria) and [query criteria](#pagination-and-query-criteria).

<div class="snippet-title">
	<p>Example of a request to get the users list</p>
</div>

```shell
curl http://localhost:9000/users \
	 -H X-BB-SESSION:f083f676-65d0-45bd-bfe5-e876ef3f659e
```

```objective_c
NSDictionary *parameters = @{kPageNumberKey : @0,
                             kPageSizeKey : [NSNumber numberWithInteger:kPageLength]};
[BAAUser loadUsersWithParameters:parameters
                      completion:^(NSArray *users, NSError *error) {
                          
						  if (error == nil) {
                          	NSLog(@"users are %@", users);
					  	  } else {
							// deal with error
					      }
                          
                      }];
```

```java
Criteria filter = BaasQuery.builder()
                         .pagination(0,2)
                         .orderBy("user.name")
                         .criteria();
BaasUser.fetchAll(filter,new BaasHandler<List<BaasUser>>() {
  @Override
  public void handle(BaasResult<List<BaasUser>> res) {
    if(res.isSuccess()) {
      for(BaasUser u: res.value()) {
        Log.d("LOG", "The user is: "+u.getName());
      }
    } else {
      Log.e("LOG","error");
    }
  }
});
```

```javascript
BaasBox.fetchUsers()
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
        "name": "cesare",
        "status": "ACTIVE"
      },
      "signUpDate": "2014-01-24T11:28:09.009+0100",
      "visibleByTheUser": {
        "email": "cesare@email.com"
      },
      "visibleByFriends": {
        "phoneNumber": "+1123456"
      }
    },
    {
      "user": {
        "roles": [
          {
            "name": "registered"
          }
        ],
        "name": "e",
        "status": "ACTIVE"
      },
      "signUpDate": "2014-01-24T12:10:37.037+0100"
    }
  ],
  "http_code": 200
}
```
