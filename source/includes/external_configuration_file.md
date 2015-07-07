## External Configuration File
Instead of passing every single option as a parameter of the _start_ script, you can put all of them in an external file and simply tell BaasBox where this is located.

To use an external file, you have to use the following options and instructions

<span style="color:#F9F9F9;">(keysnippetcode)_____</span><br/>Key   | <span style="color:#F9F9F9;">(descriptionsnippetcode)_____</span><br/>Description   |   <span style="color:#F9F9F9;">(examplesnippetcode)_____</span><br/>Example
--------- | ----------- | -------------
**config.file** |   An external configuration file. You can put all your parameters in a file. This file MUST include the `include classpath(“application.conf”)`directive, otherwise BaasBox will not work | `-Dconfig.file=baasbox.config` 

Regarding the `config.file` key, a possible example of an external configuration file may be:


```shell
include classpath("application.conf")

application.code="1234-56789"

orient.baasbox.path=db/baasbox
```

```objective_c
NOTHING HERE. See the 'Shell' Tab
```

```java
NOTHING HERE. See the 'Shell' Tab
```

```javascript
NOTHING HERE. See the 'Shell' Tab
```

<aside class="notice"> 
**NOTE**: remember to ALWAYS include in the first line the statement:
`
include classpath("application.conf")
`
</aside>
