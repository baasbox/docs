## Android SDK

BaasBox provides a native Android SDK, to further ease development of mobile applications.
The SDK is distributed as a jar. To get started download it from the [download section](http://www.baasbox.com/download) of the website, and put it in the libs folder of your project.
You can also use maven gradle or maven to depend on the library:

``compile 'com.baasbox:baasbox-android:0.9.0'``


#### Initialization

Currently, you can have only one client per application. 
The client must be initialized before you can use any of the provided features.
The preferred way to initialize the SDK is to override the default 
application and configure it in the ``onCreate()`` method, 
using the ``BaasBox.Builder`` class.

<div class="snippet-title">
<p>Example initialization</p>
</div>

```java
//...
import com.baasbox.android.BaasBox;

public class MyApp extends Application {

private BaasBox client;

@Override
public void onCreate() {
super.onCreate();
BaasBox.Builder b = 
new BaasBox.Builder(this);
client = b.setApiDomain("address")
.setAppCode("appcode")
.setPushSenderIds("your google sender id") //used for push notifications
.init();
}
}
```

```objective_c
NOTHING HERE. See the 'Android' Tab
```

```shell
NOTHING HERE. See the 'Android' Tab
```

```javascript
NOTHING HERE. See the 'Android' Tab
```

#### General usage

Most BaasBox REST resources are exposed through wrapper classes.
Endpoints are accessible through asynchronous methods, that accept a general callback interface
``BaasHandler<T>``

You can also access endpoints using synchronous alternatives using the ``*Sync`` version of the methods.

Results are always wrapped in ``BaasResult<T>``, this can represent the actual result or a failure.

You can control asynchronous requests through the returned RequestToken.

<div class="snippet-title">
<p>Example requests</p>
</div>

```java
// Here  BaasDocument is used as an example
// it represents documents on the server, 
// more on this later

// asynchronous request
RequestToken tok = BaasDocument.fetchAll("coll",
new BaasHandler<List<BaasDocument>>() {
@Override
public void handle(BaasResult<List<BaasDocument>> res) {
// res is the result of the request
}
});

// synchronous equivalent BLOCKS!!!
BaasResult<List<BaasDocument>> res = 
BaasDocument.fetchAllSync("coll");
```

```objective_c
NOTHING HERE. See the 'Android' Tab
```

```shell
NOTHING HERE. See the 'Android' Tab
```

```javascript
NOTHING HERE. See the 'Android' Tab
```

#### Asynchronous requests management

Asynchronous requests are executed by a pool of threads.
While an asynchronous request is running you can manage it
using the return value of the method, a ``RequestToken``.
Tokens are designed to let you *suspend* the assigned callback without
interrupting the real request, allowing the later resumption of
result processing on the main thread when you are ready to handle it.
This is quite useful when callbacks are tied to the lifecycle of your
acitivities.

Request tokens let you cancel/abort requests, or wait for their completion,
this is useful in testing or if you want to parallelize your http requests.

```java
// an example asynchronous request in an activity
public class MyActivity extends Activity implements
BaasHandler<BaasUser>{
private final statis String BAAS_REQ = "tag";
private RequestToken token;

public void onCreate(Bundle savedInstanceState) {
super.onCreate(savedInstanceState);
// you resume suspended requests
// and obtain the token back
token = RequestToken.loadAndResume(
savedInstanceState,
BAAS_REQ,
this);
if(token!=null){
// a request has been resumed
}
}

public void onSaveInstanceSate(Bundle state){
super.onSaveInstanceState(state);
if(token!=null){
token.suspendAndSave(state,TAG);
}
}

public void handle(BaasResult<BaasUser> res){
token = null;
// process result
}
}


```

```objective_c
NOTHING HERE. See the 'Android' Tab
```

```shell
NOTHING HERE. See the 'Android' Tab
```

```javascript
NOTHING HERE. See the 'Android' Tab
```

#### Pass-through API

Some rest endpoints have no direct equivalent in the API.
For them you can use the lower level pass through API provided by the SDK
through the ``rest()`` and ``restSync()`` methods.
Whenever you see "TO BE IMPLEMENTED" in the Android section you can recur to this methods.
Using these methods you can access these APIs while still enjoying the rest
of the SDK features, such as concurrency and lifecycle management, caching,
handling of the authentication.

```java
BaasBox cli  = BaasBox.getDefault();
cli.rest(HttpRequest.GET,
"endpoint",
optJsonBody,
authenticate,
new BaasHandler<JsonObject>(){
@Override
public void handle(BaasResult<JsonObject> res){
}});
```

```objective_c
NOTHING HERE. See the 'Android' Tab
```

```shell
NOTHING HERE. See the 'Android' Tab
```

```javascript
NOTHING HERE. See the 'Android' Tab
```
