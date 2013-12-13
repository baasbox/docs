Documents
=========

Create a document
-----------------

``POST /document/:collection`` 

**Headers**: See authorization header in the
:doc:`general_remarks` 

**Description**: Create a new
document into the specified collection. The collection must exist and
must have been previously created by the admin. 

**Body payload**\  Any
valid JSON string. 

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 404: the collection specified does not exist
-  Code 200: OK and unique ID will be returned.

The @ID field is the unique ID of the document. 

**NOTE on Record
Security Level**\ 

The owner can update and delete documents. Their friends (feature not
fully implemented) can only see the documents. All other users but the
admins cannot have any kind of access to the documents.

Modify a document
-----------------

``PUT /document/:collection/ID``

**Headers**: See authorization header in
the :doc:`general_remarks` 

**Description**: Updates the
document content. WARNING: the content is replaced, neither added nor
merged. Only the owner of the document and the admin, or backoffice
users, can modify it. 

**Body payload**\  Any valid JSON string.

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 403: FORBIDDEN, the user does not have the necessary privilege
   to update the document
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 404: the collection specified does not exist
-  Code 200: OK and the internal JSON document representation.

The @ID field is the unique ID of the document.

Retrieve a document
-------------------

``GET /document/:collection/ID`` 

**Headers**: See authorization header in
the :doc:`general_remarks` 

**Description**: Retrieves the
specified document Only the owner of the document and the admin or
backoffice users can retrieve it.

Anonymous users can retrieve documents

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 403: FORBIDDEN, the user does not have the necessary privilege
   to update the document
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 404: the collection specified does not exist
-  Code 200: OK and the internal JSON document representation.

The @ID field is the unique ID of the document.

Retrieve a document only by its ID
-------

``GET /document/ID`` 

**Headers**: See authorization header in the :doc:`general_remarks`  

**Description**: Retrieves the specified
document 

Anonymous users can retrieve documents


**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 403: FORBIDDEN, the user does not have the necessary privilege
   to update the document
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 404: the collection specified does not exist
-  Code 200: OK and the internal JSON document representation.

The @ID field is the unique ID of the document.

Delete a document
-----------------

``DELETE /document/:collection/ID`` 

**Headers**: See authorization header in
the :doc:`general_remarks` 

**Description**: Delete a
document in the specified collection Only the owner of the document and
the admin or backoffice users can delete it. 

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 204: Document deleted
-  Code 404: Document not found, or collection not found or document
   doesn’t belong to the collection

Count the number of documents in a collection
---------------------------------------------

``GET /document/:collection/count`` 

**Headers**: See authorization header in
the :doc:`general_remarks` 

**Description**: Returns the
number of documents that the USER COULD READ in a collection. Pay
attention because there could be documents that the user cannot read,
and therefore are not included 

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 404: the collection does not exist
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 200: OK, and a JSON list of documents

Retrieves a list of Documents
-----------------------------

``GET /document/:collection`` 

**Headers**: See authorization header in the
:doc:`general_remarks` 

**Description**: Returns the
documents that the USER CAN READ in a collection. Pay attention because
there could be documents that the user cannot read, and therefore will
not be retrieved 

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 404: the collection does not exist
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 200: OK, and a JSON list of documents

Update objects fields
---------------------

Available since version 0.7.2

Starting from version 0.7.2 it is possible to update single fields of an
object in a collection without sending the whole object JSON
representation to the server .

A new endpoint was added to the BaasBox Document API

``PUT /document/:collection/:id/(.:fieldName)+``

**Headers**: See authorization header in the :doc:`general_remarks`

**Description**: Modify a single field specified by the fieldname
parameter: the fieldName must start with a . could be a simple property
or a complex JSON object or even an array using the notation
.array[index] where index is a valid integer.

**Body payload**: A JSON object with a "data" field (see examples below)

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 403: FORBIDDEN, the user does not have the necessary privilege
   to update the document
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 404: the specified collection does not exist
-  Code 200: OK and the internal JSON document representation


Some examples of the new API
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We will use the simple object below to explain the new feature modifying
its fields:

::

    {"title":"a simple post","content":"the content of this awesome post"}

Saving the object to a **posts** collection will return the object with
the following ID **a1b45ea7-7005-4f24-ae5e-76a6840ab856**

Let's say we want to modify the title

Making a **PUT** request to the following URL
/document/posts/a1b45ea7-7005-4f24-ae5e-76a6840ab856/.title and with the
following request body

::

    {"data":"this is the new title"}

Will return the following JSON

::

    {
    "result": "ok",
    "data": {
        "@ID": "#24:0",
        "@version": 3,
        "@class": "posts",
        "title": "this is the new title",
        "content": "the content of this awesome post",
        "id": "a1b45ea7-7005-4f24-ae5e-76a6840ab856"
    },
    "http_code": 200
    }

As you can see we are using a dot before the field name in the URL of
the request.

A post without tags is not a real post so let's add it as an array of
strings:

Making a **PUT** request to the following URL
/document/posts/a1b45ea7-7005-4f24-ae5e-76a6840ab856/.tags and with the
following request body

::

    {"data":["awesomeness","tag1","tag2"]}

Will return the following JSON:

::

    {
    "result": "ok",
    "data": {
        "@ID": "#24:0",
        "@version": 4,
        "@class": "posts",
        "title": "this is the new title",
        "content": "the content of this awesome post",
        "id": "a1b45ea7-7005-4f24-ae5e-76a6840ab856",
        "tags": [
            "awesomeness",
            "tag1",
            "tag2"
        ]
    },
    "http_code": 200
    }

As you can see a tags field was added to the object.

Now let's say that we want to add an element to this tags array:

Making a **PUT** request to the following URL
/document/posts/a1b45ea7-7005-4f24-ae5e-76a6840ab856/.tags[3] with the
following request body

::

    {"data":"new tag"}

Will return:

::

    {
        "result": "ok",
        "data": {
            "@ID": "#24:0",
            "@version": 5,
            "@class": "posts",
            "title": "this is the new title",
            "content": "the content of this awesome post",
            "id": "a1b45ea7-7005-4f24-ae5e-76a6840ab856",
            "tags": [
                "awesomeness",
                "tag1",
                "tag2",
                "new tag"
            ]
        },
        "http_code": 200
    }

And what if we want to modify a tag at a specific index?

Making a **PUT** request to the following URL
/document/posts/a1b45ea7-7005-4f24-ae5e-76a6840ab856/.tags[3] with the
following request body

::

    {"data":"new tag modified"}

Will return

::

    {
    "result": "ok",
    "data": {
        "@ID": "#24:0",
        "@version": 6,
        "@class": "posts",
        "title": "this is the new title",
        "content": "the content of this awesome post",
        "id": "a1b45ea7-7005-4f24-ae5e-76a6840ab856",
        "tags": [
            "awesomeness",
            "tag1",
            "tag2",
            "new tag modified"
        ]
    },
    "http_code": 200

}

And what about nested objects:

Making a **PUT** request to the following URL
/document/posts/a1b45ea7-7005-4f24-ae5e-76a6840ab856/.author with the
following request body

::

    {"data":{"name":"admin","roles":["admin","superawesome","superuser"]}}

Will return

::

    {
    "result": "ok",
    "data": {
        "@ID": "#24:0",
        "@version": 9,
        "@class": "posts",
        "title": "this is the new title",
        "content": "the content of this awesome post",
        "id": "a1b45ea7-7005-4f24-ae5e-76a6840ab856",
        "tags": [
            "awesomeness",
            "tag1",
            "tag2",
            "new tag modified"
        ],
        "author": {
            "roles": [
                "admin",
                "superawesome",
                "superuser"
            ],
            "name": "admin"
        }
    },
    "http_code": 200
    }

The **author** object was added and we can also modify its inner
properties

Making a **PUT** request to the following URL
/document/posts/a1b45ea7-7005-4f24-ae5e-76a6840ab856/.author/.roles[3]
with the following request body

{"data":"optimus prime"}

Will return:

::

    {
    "result": "ok",
    "data": {
        "@ID": "#24:0",
        "@version": 10,
        "@class": "posts",
        "title": "this is the new title",
        "content": "the content of this awesome post",
        "id": "a1b45ea7-7005-4f24-ae5e-76a6840ab856",
        "tags": [
            "awesomeness",
            "tag1",
            "tag2",
            "new tag modified"
        ],
        "author": {
            "roles": [
                "admin",
                "superawesome",
                "superuser",
                "optimus prime"
            ],
            "name": "admin"
        }
    },
    "http_code": 200
    }
