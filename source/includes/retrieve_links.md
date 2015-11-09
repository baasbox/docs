### Retrieve links

> Note that this api has been deprecated.Please check the document's links navigation API.

`GET /link/:id`

`GET /link`

You can retrieve a single link by its ID, or query the entire link-space. Be careful because too many links could be returned.
The endpoint supports [selection and query criteria](#pagination-and-query-criteria), so you can ask  the server to filter the response.

Of course you can apply filters to the fields of linked nodes to search for specific links that match the criteria.

`GET /link?where=in.name.toLowerCase() like 'john%' and label="customer" `

```shell
curl -X GET -H X-BB-SESSION:f24c0ccb-e2bd-4741-8133-86fea6ea1e01 -H x-baasbox-appcode:1234567890 "http://localhost:9000/link?where=in.name.toLowerCase()%20like%20%27john%25%27%20and%20label%3D%27customer%27"

```

```objective_c
//Please see the "pass-through" functionality of the iOS SDK
```

```java
//single link
BaasLink.fetch("id", RequestOptions.DEFAULT,new BaasHandler<BaasLink>() {
  @Override
  public void handle(BaasResult<BaasLink> res) {
    if (res.isSuccess()){
      Log.d("TAG",res.value().toString());
    } else {
      Log.d("TAG","Handle error");
    }
  }
});

//many liinks
BaasQuery.Criteria query =BaasQuery.builder().where("in.name.toLowerCase() like john").criteria();
BaasLink.fetchAll("customer",query,RequestOptions.DEFAULT,new BaasHandler<List<BaasLink>>() {
  @Override
  public void handle(BaasResult<List<BaasLink>> res) {
      if (res.isSuccess()){
        List<BaasLink> links = res.value();
        Log.d("TAG","Your links are here: "+links.size());
      } else {
        //handle errors
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