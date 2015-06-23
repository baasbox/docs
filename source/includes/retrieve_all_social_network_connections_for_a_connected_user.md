###Retrieve all social network connections for a connected user

`GET /social`

Headers:

-  X-BAASBOX-APPCODE: App Code
-  X-BB-SESSION: Session token for current user

Returns a JSON representation of the social network connected to the
user along with all the information retrieved at the moment of
login/linking. An example of the returned data is:

<div class="snippet-title">
<p>Example of a request</p>
</div>

```shell
curl http://localhost:9000/social  \
-H X-BB-SESSION:2605d809-03f0-4751-8f8e-5f658e179a23
```

```objective_c
// Assumes a user is logged in
BAAClient *client = [BAAClient sharedClient];
[client.currentUser fetchLinkedSocialNetworksWithCompletion:^(NSArray *objects, NSError *error) {

if (error == nil) {     

NSLog(@"social are %@", objects);

} else {

NSLog(@"%@", error);

}

}];

```

```java
TO BE IMPLEMENTED
```

```javascript
TO BE IMPLEMENTED
```

<div class="snippet-title">
<p>Example of a response</p>
</div>

```json
"data": [
{
"username": "xxx",
"password": null,
"from": "google",
"token": "<token>",
"secret": "<secret>",
"id": "<userid>",
"additionalData": {
"email": "<email>",
"name": "<name>",
"avatarUrl": "<avatar>",
"personal_url": "<personal_url>"
}
}
]
```

This API should be invoked with a valid X-BB-SESSION header and a valid
X-BAASBOX-APPCODE header as specified in the authorization section of
the doc.

This method can be used to retrieve the tokens to post on the social
network wall using a client SDK provided by the social network itself.

Returns:

-  200 code with a JSON object whose data property contains all the
social networks linked to the current user.
-  404 code if the user does not have any social network linked to their
account
-  401 code (Unauthorized) if one of the mandatory headers are missing
