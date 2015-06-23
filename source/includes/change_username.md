### Change username


``PUT /me/username ``

**Group**: [baasbox.users](#list-groups)

**Headers**: See authorization header in the [General Remarks](#general-remarks)

**Description**: Starting from v. 0.9.0 it is possibile to change usernames 

Parameter | Description | 
--------- | ----------- | 
**username** | The new username


<aside class="warning">
WARNING: call this API as soon the user is registered. It performs updates to substitute many de-normalized refs that can be very time-consuming!
After the call, if successful, existing tokens are invalidated. It's probably a good idea to show/redirect to the login screen.
</aside>

<div class="snippet-title">
<p>Example of a request</p>
</div>

```shell
curl -X PUT  http://localhost:9000/me/username  \
-d '{"username" : "matteo"}' \
-H Content-type:application/json \
-H X-BB-SESSION:2605d809-03f0-4751-8f8e-5f658e179a23
```

```objective_c
//Please see the "pass-through" functionality of the iOS SDK

```

```java
//Please see the "pass-through" functionality of the Android SDK

```

```javascript
//Please see the "pass-through" functionality of the JS SDK

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

