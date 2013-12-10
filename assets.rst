**IMPORTANT**: To create the Assets you must use the related [[Admin
API\|Admin Assets]]

Retrieve
--------

GET /asset/:name If the asset is a file, this API retrieves the file. In
the response header the server will indicate the file content-type.
**Example**: http://localhost:9000/asset/testimg If the caller is a
browser and the asset is an image, the browser will show the image
itself. WARNING: the name to use in the GET request is the one that was
set up in the name field when the asset was created, not its file name
sent to the server. WARNING 2: If the asset is an object, an error 404
is sent.

GET /asset/:name/data Retrieves the related data of the asset, including
the meta field supplied at the time of creation and, if the asset is a
file, the file name, the file dimension, the content type.

GET /asset/:name/download If the asset is a file, this API streams its
content adding the header **Content-Disposition: attachment;
filename=**\  This header forces the browser to download the file, even
if its content type is known. Please note that the user agent could
ignore this header.
