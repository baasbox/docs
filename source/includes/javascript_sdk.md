## JavaScript SDK
The JavaScript SDK is based on [jQuery](http://jquery.com/). The [example page](https://github.com/baasbox/JS-SDK/blob/master/example/index.html) contains an example of each API
call available. 

#### Importing

You can download the SDK from the [download page](http://www.baasbox.com/download/).
To use the SDK just import jQuery and the `baasbox.js` in the head section of your page like this.

```shell
NOTHING HERE. See the 'Javascript' Tab
```

```objective_c
NOTHING HERE. See the 'Javascript' Tab
```

```java
NOTHING HERE. See the 'Javascript' Tab
```

```javascript
<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>	
<script src="baasbox.js"></script>
<script type="text/javascript" charset="utf-8">
	
	$(document).ready(function() {
		BaasBox.setEndPoint("http://localhost:9000"); //the address of your BaasBox server
		BaasBox.appcode = "1234567890";				  //the application code of your server
		...
		...
		...
	};
	
```

The jQuery cookie plugin, which you need to save authentication tokens, is already included at the top of the `baasbox.js` file.
The SDK also supports [Zepto](http://zeptojs.com/).

#### Pass-through API

For any non-implemented API you can use the jQuery [$.ajax](http://api.jquery.com/jquery.ajax/) interface.
