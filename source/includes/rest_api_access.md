## REST API Access

REST API access control lets you manage which endpoints are accessible from the *outside world*.
Each endpoint belongs to a named group, identified by a key.

Disabled groups render their endpoints inaccessible to clients, unless the user is authenticated as
an administrator: the client will receive a **forbidden** status code instead of the usual
response.

By default all groups are enabled.

<aside class="notice">	
Only users belonging to administrator roles can call these APIs.
</aside> 