### Reactivate a user

``PUT 	/admin/user/activate/:username`` 

```shell
curl -X PUT http://localhost:9000/admin/user/activate/user1 \
	-H X-BB-SESSION:da506029-4512-45a9-9606-43fcdda4121a \
	-H X-BAASBOX-APPCODE:1234567890
```

Reactivate a previoulsy suspended user.

Only administrators can call this API.
