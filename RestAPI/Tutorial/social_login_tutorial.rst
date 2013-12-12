Social Login Tutorial
=====================

A quick start tutorial of the social features on BaasBox (part 1 - configuration)
=================================================================================

Since version 0.7.2 BaasBox allows you to create or link an user account
to several social networks. At the moment only facebook and google+ are
supported but we plan on adding more in the near future.

You can find a demo application called Dear Diary based on AngularJS at
https://github.com/swampie/BaasboxSocialLoginApp.

Social Networks integration needs an **app** to be created inside the
social login developer network. In this tutorial both facebook and
google+ will be covered.

First of all we need to make some system adjustments: during development
our machine will usually host the client application reachable at
**localhost://...** . Apps created in social networks need a callback
url used mainly for security purpose: all requests should come from the
same domain that the callback url is pointing at and this domain is not
allowed to be **localhost**

So let's make our local app reachable at a different address then
localhost.

\*nix / Mac Os X users
----------------------

Open your /etc/hosts file with sudo privileges and add the following
line:

127.0.0.1 developer.deardiary.com

then save.

The file should look like this:

.. figure:: Social-Login/Tutorial/img1.png
   :alt: hosts file

   hosts file
Windows user
------------

Use this table
http://en.wikipedia.org/wiki/Hosts\_(file)#Location\_in\_the\_file\_system
to locate the Hosts file based on the windows version you are using.

Add the following lines:

::

    127.0.0.1 developer.deardiary.com

then save.

The system part is over, so take a breath and keep reading ;)

Create an app and get the app tokens and app secrets
----------------------------------------------------

Let's create our app on facebook: Point your browser to
https://developers.facebook.com/apps and login if necessary

From the top bar menu click on the **apps** link and then on the button
**create new app**

.. figure:: Social-Login/Tutorial/img2.png
   :alt: appsbarandcreate

   appsbarandcreate
Fill in the form with the name of the app (for the purpose of this
tutorial we will use **MyDearDiary**) and continue filling in the
überdifficult captcha

.. figure:: Social-Login/Tutorial/img3.png
   :alt: facebookappcreation

   facebookappcreation
The settings page of your brand new app will now load. Copy your APP Id
and App Secret and fill in the app domain with the domain you used in
the previous part (**developer.deardiary.com**) omitting the *http://*
protocol.

.. figure:: Social-Login/Tutorial/img5.png
   :alt: facebookapppage

   facebookapppage
And remember to **Save your changes** with the button at the bottom of
the form.

Now that we have configured the facebook app let's move on with the
google+ app.

Point your browser to https://code.google.com/apis/console and create a
new app from the left menu.

Fill in the form with the data |creategoogleapp|

And a frightening long list will appear: don't panic and simply activate
the **google+ api** switch.

.. figure:: Social-Login/Tutorial/img7.png
   :alt: google+switch

   google+switch
We are almost done:

Click on the big blue **create oauth token** button |oauth|

and fill in the form using the domain we used in the Hosts file in the
previous section of the tutorial

|googleform1| |googleform2|

A new page should appear: write down the Client ID and Client Secret.

.. figure:: Social-Login/Tutorial/img11.png
   :alt: googleend

   googleend
You are doing great: let's move on!

Configure BaasBox console
-------------------------

Almost done with configuration stuff: I promise!

Open your BaasBox console (if it runs locally it should be available at
`"http://localhost:9000/console" <http://localhost:9000/console>`__ and
login as an administrator.

From the left menu select settings and then the Social Login Tab. Enable
facebook and google links and fill in the fields with apptokens and
appsecret you wrote down in previous section.

.. figure:: Social-Login/Tutorial/img12.png
   :alt: baasboxconsole

   baasboxconsole
Save it!

Now select the collections menu item from the left and click on the
Create collection button below the table.

Create a collection called **posts** |posts|

Configure the demo app
----------------------

The demo app is located at
`https://github.com/swampie/BaasboxSocialLoginApp <https://github.com/swampie/BaasboxSocialLoginApp/>`__

Make a git clone of the repo on your filesystem. and cd into the newly
created folder

The demo app must be configured with a couple of variables that are
listed in the *js/app/app.js* file starting at line 25.

::

    window.app.constant("serverUrl","http://developer.deardiary.com:9000");
    window.app.constant("baseServerUrl","http://developer.deardiary.com:9000\:9000");
    window.app.constant("baseClientUrl","http://developer.diardiary.com:8000\:8000");
    window.app.constant("facebookAppId","<your facebook app token>");
    window.app.constant("googleAppId","<your google client id>");
    window.app.constant("baasboxAppCode","1234567890");

**serverUrl**,\ **baseServerUrl**,\ **baseClientUrl** are filled with
the domain name we used in the hosts file at the beginning of the
tutorial while **facebookAppId** and **googleAppId** contain the
apptoken (not the secret) and the client ID from facebook and google
respectively.

Take extra care when putting the http:// protocol before the domain and
mantain the **port**:\\**port** notation which is used by angular.

To start up the application you can use a simple script (if you are
under unix):

Open your .bash\_profile in your HOME folder and add this snippet at the
very end:

::

    function server() {
      local port="${1:-8000}"
      sleep 1 && open "http://localhost:${port}/" &
      # Set the default Content-Type to `text/plain` instead of `application/octet-stream`
      # And serve everything as UTF-8 (although not technically correct, this doesn’t break anything for binary files)
      python -c $'import SimpleHTTPServer;\nmap = SimpleHTTPServer.SimpleHTTPRequestHandler.extensions_map;\nmap[""] = "    text/plain";\nfor key, value in map.items():\n\tmap[key] = value + ";charset=UTF-8";\nSimpleHTTPServer.test();' "$port"
    }

From the console cd into the root folder of the javascript application
and run ``server``

If everything is okay, pointing the browser at
http://developer.deardiary.com:8000 should open a page that looks like
this:

.. figure:: Social-Login/Tutorial/img14.png
   :alt: mydeardiary

   mydeardiary
In the next part we will have a look at the server requests the app
makes in order to link and login users with the social login features
and to interact with the post collection.

In the meanwhile you can have a look at the
[[Documentation\|Introduction]]

.. |creategoogleapp| image:: Social-Login/Tutorial/img6.png
.. |oauth| image:: Social-Login/Tutorial/img8.png
.. |googleform1| image:: Social-Login/Tutorial/img9.png
.. |googleform2| image:: Social-Login/Tutorial/img10.png
.. |posts| image:: Social-Login/Tutorial/img13.png
