##Friendship and Social API
BaasBox is able to manage relations among users, implementing a concept of friendship similar (but not identical) to the one used by Twitter.
A user registered on BaasBox can "follow" another user calling the _follow_ API.

What happens is that such user is added to a special role called _friends_of__&lt;followed user&gt;.

For example, let's say we have three users: _user_a_, _user_b_, _user_c_.
_user_b_ and _user_c_ decide to follow _user_a_, and therefore, each of them with their own credentials will call the API _follow__:

``PUT /follow/user_a``

now _user_b__ and _user_c_ belong to the group _friends_of_user_a_.

When _user_a_ wants to share something with his followers, he just has to grant reading access to his content to users belonging to the role _friends_of_user_a_.

For example, supposing that there is a defined collection called _posts_, and that _user_a_ had created in it a document with id _aaa-bbb-ccc-ddd_.

_user_a_ in order to share this document with his friends has to call the _grant_ API:

```PUT /document/posts/aaa-bbb-ccc-ddd/read/role/friends_of_user_a```

Now everytime _user_b_ or _user_c_ query for posts they will see the _user_a aaa-bbb-ccc-ddd document as well. 

To revoke such grant, and therefore not to share the content any longer:

```DELETE /document/posts/aaa-bbb-ccc-ddd/read/role/friends_of_user_a```

Finally, if _user_b_ doesn't want to follow _user_a_ anymore, he can invoke the _unfollow_ API:

```DELETE /follow/user_a```

Please note that the _follow_ API is not mutual, just like in Twitter.
