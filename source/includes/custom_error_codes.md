### Custom error codes


These are custom error codes specific to BaasBox, returned into the bb_code field.

-  40001: You are attempting to update a database object with older data. Version is not the same.
-  40002: The ACL field is not a valid JSON string.
-  40003: The specified permission is unknown. Valid ones are 'read', 'update', 'delete', 'all'.
-  40004: Only users and roles can be used.
-  40005: The specified user does not exist.
-  40006: The specified role does not exist.
-  40010: The JSON value must be an array.
-  40011: The body payload cannot be empty.
-  40101: Authentication info not valid or not provided. HINT: has your session expired?.
-  40020: The body payload doesn't contain the 'message' key or message value is NOT a String.
-  40021: Push profile invalid. It must be an Array of integer and accepted values are 1,2 or 3.
-  40022: Users MUST be an array of String.
-  40023: The body payload doesn't contain key users.
-  40024: Sound value MUST be a String.
-  40025: Badge value MUST be a number.
-  40026: ActionLocalizedKey MUST be a String
-  40027: LocalizedKey MUST be a String.
-  40028: LocalizedArguments MUST be an Array of String.
-  40029: Collapse_key MUST be a String
-  40030: Time_to_live MUST be a positive number or equal zero.
-  40031: Message MUST be a String.
-  50301: Push settings are not properly configured. HINT: go to the administration console and check the settings.
-  50302: The server cannot resolve the host name. HINT: check your internet connection.
-  50303: Could not send push notifications. HINT: Check your API Key (Google).		
-  50304: Could not save API KEY. HINT: Check your API Key, it's possible that push service aren't enabled in the Google Play Developer Console.
-  50305: Push app disabled, one or more app are disabled.	
-  50306: Cannot switch, because settings for the selected mode are missing.
