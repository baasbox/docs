Hacking
=======

You can override many default value and options by providing them to the
JVM. To do so, you have to use the **-D** parameter in this way

::

     ./start -DBAASBOX_PARAMETER=NEW_VALUE

Where *BAASBOX*\ PARAMETER\_ is the key of the parameter to override and
*NEW*\ VALUE\_ is the value you want to use. Please note that there is
no space between the D and the name parameter. Overridable keys are:

+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
| Key                   | Description                                                                                                                                                                                      | Example                                                                                |
+=======================+==================================================================================================================================================================================================+========================================================================================+
| http.port             | The port used by BaasBox                                                                                                                                                                         | -Dhttp.port=80                                                                         |
+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
| https.port            | The SSL port used by BaasBox. By default SSL is disabled                                                                                                                                         | -Dhttp.port=443                                                                        |
+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
| application.code      | Your Application Code. You should override the default one and choose a very unique code                                                                                                         | -Dapplication.code=Zh54re3                                                             |
+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
| orient.baasbox.path   | The path of the embedded database. By default this is {BAASBOX\_HOME/db/baasbox}                                                                                                                 | -Dorient.baasbox.path=./mydb                                                           |
+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
| logger.application    | The default level of the logger. By default is DEBUG. Possible values are ERROR, WARNING, INFO, DEBUG, TRACE                                                                                     | -Dlogger.application=INFO                                                              |
+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
| config.file           | An external configuration file. You can put all your parameters in a file. This file **MUST** include the **include classpath("application.conf")** directive, otherwise BaasBox will not work   | -Dconfig.file=baasbox.config then you have to create a file named **baasbox.config**   |
+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------+

Regarding the config.file key, a possible example of an external
configuration file may be:

::

     include classpath("application.conf")
     application.code="1234-56789"
     orient.baasbox.path=db/baasbox
     logger.application=DEBUG

The Play! Framework
~~~~~~~~~~~~~~~~~~~

BaasBox is built on top of [[Play!
Framework\|http://www.playframework.com/]]. Because of this you have to
download a [[JDK 6 or
above\|http://www.oracle.com/technetwork/java/javase/downloads/index.html]]
N.B.(JDK not JRE!) and [[Play!
2.1.1\|http://www.playframework.com/download]] at this link, and install
them following their installation guides. You must also download the
BaasBox source code source from its [[GitHub
Repo\|https://github.com/baasbox/baasbox]]. Once all the required
software is correctly installed, and the BaasBox source code is in a
convenient directory, go to that directory and type **play dist**\ 

After a while, Play! ends to build the application and a new ./dist
directory is created in the unzipped BaasBox source code path. In the
new ./dist directory you will find a zip file containing the compiled
code. To test it, unzip it in any directory and type ./start (remember
to set the execution flag). If you are using a Windows system, you need
a .bat file. Just create a new start.bat file and place the following
line in it: \*\*java %1 -cp ./lib/\*;
play.core.server.NettyServer.\*\*

(Pay attention to to the final dot)

Since BaasBox is based upon the [[Play! Framework
2.1\|http://www.playframework.com/download]], many configuration options
available by Play! could be used with BaasBox. Please refer to the
[[Play!
documentation\|http://www.playframework.com/documentation/2.1.x/Configuration]]
to know how to perform such operations and to customize the default
behavior.
