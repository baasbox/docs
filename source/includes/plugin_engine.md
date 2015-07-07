# Plugin Engine
Since v.0.9.0 you can write your own scripts (plugins) to run inside BaasBox.

To create a plugin please see the [Console](?#plugins)

The entire plugin reference is located on [GitHub](https://github.com/baasbox/baasbox/wiki/PluginApi)

```shell
NOTHING HERE. See other tabs

```

```objective_c
// Example with GET
// Assumes this plugin is installed on the server: https://gist.github.com/funkyboy/ecc754dbe0f89e4a4c56
BAAClient *c = [BAAClient sharedClient];
[c getPath:@"/plugin/geo.bb"
parameters:@{@"ip" : @"8.8.8.8"}
   success:^(id responseObject) {
     
     NSLog(@"res %@", responseObject);
     
   } failure:^(NSError *error) {
     
     NSLog(@"error %@ ", error);
     
   }];

// Example with POST
// Assumes this plugin is installed https://gist.github.com/funkyboy/ad3b25dfdbd53e27324f
BAAClient *c = [BAAClient sharedClient];
[c postPath:@"/plugin/addcar.bb"
parameters:@{@"name" : @"ferrari"}
   success:^(id responseObject) {
     
     NSLog(@"res %@", responseObject);
     
   } failure:^(NSError *error) {
     
     NSLog(@"error %@ ", error);
     
   }];
```

```java
// plugins are invoked through pass-through
// eg:
BaasBox box =BaasBox.getDefault();
box.rest(HttpRequest.POST, 
         "plugin/mywonderful.plugin", 
         new JsonObject().put("bodyVal", 2), 
         true,
         new BaasHandler<JsonObject>() {
          @Override
          public void handle(BaasResult<JsonObject> res) {
            Log.d("TAG","Ok: "res.isSuccess());
          }
});
```

```javascript
// Example with GET
// Assumes this plugin is installed on the server: https://gist.github.com/funkyboy/ecc754dbe0f89e4a4c56
var url = BaasBox.endPoint + '/plugin/geo.bb';
$.get(url, {"ip" : "8.8.8.8"})
  .done(function (res) {
    console.log("res is ", res.data);
  })
  .fail(function (error) {
      console.log("error = ", error);
   })

// Example with POST
// Assumes this plugin is installed https://gist.github.com/funkyboy/ad3b25dfdbd53e27324f
var url = BaasBox.endPoint + '/plugin/addcar.bb';
$.post(url, {"name" : "ferrari"})
  .done(function (res) {
    console.log("res is ", res.data);
  })
  .fail(function (error) {
      console.log("error = ", error);
  })
```
