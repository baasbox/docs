### Update a value in settings

`PUT /admin/configuration/:section/:key/:value`

Updates a specific value in the settings.

Parameter | Description
--------- | -----------
**section** | The name of a section. One of: `PasswordRecovery`, `Application`, `Push`, `Images`. Mandatory.
**key** | The name of the key to update. Mandatory.
**value** | The new value for the key. Mandatory.

<div class="snippet-title">
	<p>Example of a request to update the key `application.name`</p>
</div>  

```shell
curl -X PUT http://localhost:9000/admin/configuration/Application/application.name/NewName \
	 -H X-BB-SESSION:4efcd048-8865-4047-94c9-8ac58e511b4b  \
	 -H X-BAASBOX-APPCODE:1234567890
```

```objective_c
BAAClient *client = [BAAClient sharedClient];
[client setValue:@"MyAppName"
          forKey:@"application.name"
       inSection:@"Application"
      completion:^(NSDictionary *settings, NSError *e) {
          
          if (e == nil) {
              NSLog(@"settings are %@", settings);
          } else {
              NSLog(@"error %@", e);
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
{
  "result": "ok",
  "data": "",
  "http_code": 200
}
```
