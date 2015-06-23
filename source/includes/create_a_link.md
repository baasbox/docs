### Create a link

`POST /link/:sourceId/:label/:destId`

**Group**: [baasbox.data.write](#list-groups)

To create a link you must provide the two objects (documents, files, users) you want to connect and the link label (or name).
Since links have a direction, the first document will be the source node of the link and the second one will be the destination node.

Parameter | Description
--------- | -----------
**sourceId** | The ID of the first document or file to link.
**label** | The link name. Can be any valid string
**destId** | The ID of the second document or file to link.

**Note**: use the users'id, not their username!


```shell
curl -X POST -H X-BB-SESSION:f24c0ccb-e2bd-4741-8133-86fea6ea1e01 -H x-baasbox-appcode:1234567890 -d '' http://localhost:9000/link/423d56a1-bc83-467d-b27c-897a5f4cd229/customer/a0868a63-0d38-4fc9-93c3-1f9b62eeadf0

```

```objective_c
//Please see the "pass-through" functionality of the iOS SDK
```

```java
BaasLink.create("customer","source-id","dest-id",RequestOptions.DEFAULT,new BaasHandler<BaasLink>() {
    @Override
    public void handle(BaasResult<BaasLink> res) {
      if (res.isSuccess()){
        BaasLink value = res.value();
        Log.d("TAG","value is your new link");
      }
    }
});
```

```javascript
//Please use the $.ajax interface
```

<div class="snippet-title">
<p>Example of a response</p>
</div>  

```json
{
  "result":"ok",
  "data":{
    "@version":3,
    "@class":"E",
    "label":"customer",
    "id":"994cb9b0-ccba-4ba2-a7dd-68c0440a0783",
    "_author":"admin",
    "_creation_date":"2014-05-23T14:37:27.027+0200",
    "out":{
      "@version":2,
      "@class":"Invoices",
      "number":345,
      "id":"423d56a1-bc83-467d-b27c-897a5f4cd229",
      "_creation_date":"2014-05-23T14:32:40.040+0200",
      "_author":"admin"
    },
    "in":{
      "@version":2,
      "@class":"Customers",
      "name":"John Doe",
      "age":31,
      "id":"a0868a63-0d38-4fc9-93c3-1f9b62eeadf0",
      "_creation_date":"2014-05-23T14:32:03.003+0200",
      "_author":"admin"
    }
  },
  "http_code":200
}
```

The returned link is decorated with the following fields:

- `id`: unique ID 
- `@version`: number indication of the version of the link, just like documents
- `@class`: always equals to "E"
- `_creation_date`: timestamp 
- `_author`: username of the user who created the link.
- `label': the provided label
- `out`: the source object (the first one provided)
- `in`: the destination object (the second one provided)

These fields **cannot** be overwritten. 

The `out` and `in` fields contain the content of both objects. 

**REMEMBER**: the `out` field points to the source, the `in` points to the destination, like in the following schema:

` Source Doc ----->(out) link (in)----> Dest Doc `


Please note that you can have as many links as you want between two documents or files even with the same label.

To create a link, a user has to have at least the read permission on both objects to link.
