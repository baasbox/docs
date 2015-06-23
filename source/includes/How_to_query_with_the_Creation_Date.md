## How to query with the Creation Date

In order to perform correctly the query with the creation date you must write the following statement 

```json
_creation_date > date('2014-09-09T17:59:47.772+0200')
```
just beware of encoding it correctly to be passed as a query parameter.