## Social Login ##

BaasBox provides an API that allows you to connect/create your users
through social networks.

BaasBox social API is integrated with the following social networks: -
Facebook - Google +

We are planning on adding more in the near future.

The use of an API in a client application needs an *appKey* and an
*appSecret* usually provided by the social network itself. More
information on how you can get those values can be found here:

-  facebook (http://developers.facebook.com/docs/)
-  google+ (http://code.google.com/apis/console)

Once you create your app inside the social network you will have access
to the *apiKey* / *apiSecret* values; those values must be stored into
the BaasBox database in order to use the BaasBox social feature: you can
access the social login tab from the settings menu in the admin console.

![Social login tab](images/Social_login/social_login_tab.png)

Then click on the specific social network you are working on, fill in
the form with the keys and press Save. You can disable the social
feature for a specific social network by pressing the **disable xxx
button**

![Disable](images/Social_login/disable.png)

Once you have connected to a social network you can use any client
library to obtain the OAuth tokens for users account, and store them
with the social API provided by BaasBox.

You can find an application example and tutorial [here](http://www.baasbox.com/social-login/)

API documentation
