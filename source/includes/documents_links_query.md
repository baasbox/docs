### Retrieve/Query links from documents

> This Api replace the link retreival API specified [here](#retrieve-links)

`GET /document/:collection/:id/:linkName`

This API allows to retreive all the links by name related to a specific document in a collection.Imagine a blog post and comments data structure (where a single blog post has many comments linked); it is now possible to extract all the comments starting from the parent blog post by invoking __/document/posts/POSTID/comments__. An additional __linkDir__ parameter can be passed to the query string in order to specify the direction of the links we are querying: possible values for this paremeters are __to__ (Default),__from__ and __both__. Additional criteria and pagination query params can be specified such as __where__, __recordsPerPage__, please refer to [selection and query criteria](#pagination-and-query-criteria), so you can ask  the server to filter the response.

The response contains a data array containing the matching linked documents.

```shell
curl -X GET -H X-BB-SESSION:f24c0ccb-e2bd-4741-8133-86fea6ea1e01 -H x-baasbox-appcode:1234567890 "http://localhost:9000/document/posts/POSTID/comments?where=author=Trollface"
```




