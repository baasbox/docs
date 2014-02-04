Installation
------------

**System Requirements**\  `Java VM 6 <http://java.com/en/download/>`_ or above. BaasBox is compiled with
Java 1.6

1. Download the latest version from the `download page <http://www.baasbox.com/download/>`_, keep
   in mind that until the 1.0 version will be released, BaasBox is not
   production-ready and therefore subject to change. For Windows
   Platforms on the same page you will find the start.tar.gz file.
2. Unzip the file baasbox-x.x.zip wherever you want.
3. Only for Windows Platforms: unzip the start.tar.gz file and put the
   extracted start.bat in the same directory
4. Type:

   *  start.bat (on Windows)
   *  ./start (on *nix) You might need to grant execution permissions via
   ``chmod +x ./start``

BaasBox will start and listen on port 9000. Visit http://localhost:9000/
with your preferred browser. If everything worked fine, the BaasBox logo
should appear. Now you can open the administrator console:
http://localhost:9000/console 
For further details about the console, you can read :doc:`console`.
That’s all! BaasBox is ready to go and to serve your apps! To stop the server just halt (Ctrl-C) the shell script.

.. _http://localhost:9000/: http://localhost:9000/
.. _http://localhost:9000/console: http://localhost:9000/console
.. _http://java.com/en/download/: http://java.com/en/download/
