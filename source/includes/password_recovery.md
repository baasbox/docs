## Password Recovery with Gmail account

In order for the Gmail account to be "enabled" to send the Password Recovery email, you need to enable the access to less secure Apps. The page on which you can make this choice is the <a target='_blank' href="https://www.google.com/settings/security/lesssecureapps">following</a>, activating this setting for the Gmail account set in the *email.from* parameter.

References: <a target='_blank' href="https://support.google.com/accounts/answer/6010255">Less secure Apps</a>.

The fields you need to set up in order to have the Password Recovery service work on Gmail accounts are the following:

+  email.from: the sender of the Password Recovery email (your Gmail address);
+  network.smtp.authentication: to be set to TRUE if the server requires authentication, and Gmail does;
+  network.smtp.host: IP ADDRESS or fully qualified name of the SMTP server, in this case smtp.gmail.com;
+  network.smtp.password: the password of the sender's Gmail account;
+  network.smtp.port: the port used by the SMTP server: SSL (465) or TLS (587);
+  network.smtp.ssl:TRUE/FALSE according to the use of SSL or TLS ;
+  network.smtp.tls:TRUE/FALSE according to the use of SSL or TLS;
+  network.smtp.user: MUST be the same account of the email.from field (INCLUDING THE DOMAIN @GMAIL.COM);

**N.B. IT IS NOT POSSIBLE TO HAVE BOTH THE NETWORK.SMTP.SSL AND NETWORK.SMTP.TLS FIELDS SET TO TRUE, ONE OF THEM HAS TO BE SET TO FALSE.**

