## BaasBox Settings
There are some settings relating to a specific instance of the BaasBox server, such as, for example, the AppCode.
The AppCode is a special code that must be supplied every time an API call is executed.
These settings cannot be modified at runtime.

Here are the BaasBox settings you can set:

Key | Description | Default
--------- | ----------- | -------------
**application.secret** | The secret key used to secure cryptographics functions |  `A very long string`
**orient.baasbox.path** |  The path where BaasBox will store the embedded OrientDB data |  `db/baasbox`
**orient.baasbox.backup.path** |  The path where BaasBox will store the backups |  `db/backup`
**push.baasbox.certificates.folder** | The folder where the iOS push certificate will be stored  |  `certificates`
**application.code**| The AppCode of the instance | `1234567890`
**query.record_per_page** | The number of records returned in case of pagination | `20`
**baasbox.wrapresponse** | DEPRECATED: it wraps the responses in a JSON object. The SDKs only support the `true` value. | `true`
**baasbox.statistics.system.memory** | Disable this if you don't want memory information when the /admin/dbStatistics API is called | `true`
**baasbox.statistics.system.os** | Disable this if you don't want OS information when the /admin/dbStatistics API is called | `true`
**baasbox.startup.dumpdb** | it dumps DB information on startup | `false`
**baasbox.server.accesslog** | Enable/disable the access log | `true`

These settings cannot be modified at runtime.
