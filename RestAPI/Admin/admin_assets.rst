Assets
======

Assets are a special kind of records. First of all, they can be both files or JSON documents. Furthermore they are accessible by anyone, even without authentication. They are useful to create publicly accessible elements such as, for example, images. 

**Create an Asset**: ``POST
/admin/asset`` 

**Headers**\  See the :doc:`/RestAPI/general_remarks`
and:

1. **to create an object (JSON document) asset**\ 

-  **content-type**: x-www-form-urlencoded

2. **to create a file asset**\ 

-  **content-type**: multipart/form-data

**Description**: This API creates a new asset. The user must belong to the admin role. 

**Body payload** The body can contain the
following fields:

-  **name**: MANDATORY. The name of the asset.
-  **meta**: optional. A string representing a valid JSON string. Here you can store any data associated with the asset. PAY ATTENTION: since assets are public, everyone could retrieve these data.
-  **file**: optional. If the asset is of the file kind, this is the file you have to load.

**NOTE**: the server automatically detects if you are posting a file or not by the content-type header. So pay attention and set up the correct value. 

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server error occurred
-  Code 403: the user is not an Admin
-  Code 201: Asset created

**Examples**\  Object Asset:

::

   curl -d "name=objectAsset&meta={\"name\": \"Pizza\", \"price\": 5, \"ingredients\": [\"Mozzarella\", \"pomodoro\", \"basilico\"]}" --user admin:admin -H X-BAASBOX-APPCODE:1234567890 http://localhost:9000/admin/asset

File Asset:

::

   curl --form file=@pizza.jpg --form name=fileAsset --form meta="{\"name\": \"Margherita\", \"price\": 5, \"ingredients\": [\"Mozzarella\", \"pomodoro\", \"basilico\"]}" --user admin:admin -H X-BAASBOX-APPCODE:1234567890 http://localhost:9000/admin/asset

**Note**: in this case the file pizza.jpg is a file that must be into the same directory in which you run the command

**Retrieve all the assets**: ``GET /admin/asset`` 

**Headers**: See the 
:doc:`/RestAPI/general_remarks`. The user must be an administrator

**Description**: This API returns a JSON describing all the available assets 

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server error occurred
-  Code 403: the user is not an Admin
-  Code 200: OK. A JSON collection is provided

**Delete an asset**: ``DELETE /admin/asset/:name`` 

**Headers**: See the
:doc:`/RestAPI/general_remarks`. The user must be an administrator

**Description**: This API deletes a given asset. 

**Parameters**\ 

-  **name**: the name of the asset

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server error occurred
-  Code 403: the user is not an Admin
-  Code 200: OK. The asset has been deleted.


Resize image
-------------
**Remark**: These APIs work only if the parameter asset is an image

**Resize the image with a fixed width and height**:``GET /asset/:name/resize/:w/:h``

**Headers**: See the
:doc:`/RestAPI/general_remarks`. The user must be an administrator

**Description:** Resize image with a specified width and height

**Parameters:**
-  name: name of image
-  w: width desired
-  h: height desired

**Returns:**
-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server error occurred
-  Code 400: not found
-  Code 200: ok and returns the image resized

**Resize the image with a fixed percentual**:``GET /asset/:name/resize/:perc``

**Headers**: See the
:doc:`/RestAPI/general_remarks`. The user must be an administrator

**Description:** Resize image with a specified percentual

**Parameters:**
-  name: name of assets
-  perc: percentual for the image resized

**Returns:**
-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server error occurred
-  Code 400: not found
-  Code 200: ok and returns the image resized

**Apply a resizeId**:``GET /asset/:name/resizeId/:sizeId``	

**Headers**: See the
:doc:`/RestAPI/general_remarks`. The user must be an administrator

**Description:** applies a resizing which is specified in the settings for the admin dashboard, according to the index that was set as a parameter.
For example: if the settings are [10%,25%,50%,75%] and you use the following API GET /asset/test/resizeId/1, the name test image will be scaled by 10%

**Parameters:**
-  sizeId: the resizing index to be applied.

**Returns:**
-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server error occurred
-  Code 400: not found
-  Code 200: ok and returns the image resized


			
			
