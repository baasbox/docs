### Suspend a user

Suspends a given user.

Only administrators can call this API.

``PUT 	/me/suspend	`` 

```shell
curl -X PUT http://localhost:9000/me/suspend \
	-H X-BB-SESSION:da506029-4512-45a9-9606-43fcdda4341a \
	-H X-BAASBOX-APPCODE:1234567890
```

Allows a user to suspend their account.

Only administators can reactivate it.


``PUT 	/admin/user/suspend/:username`` 

```shell
curl -X PUT http://localhost:9000/admin/user/suspend/user1 \
	-H X-BB-SESSION:da506029-4512-45a9-9606-43fcdda4121a \
	-H X-BAASBOX-APPCODE:1234567890
```

