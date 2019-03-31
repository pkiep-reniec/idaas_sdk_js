# RENIEC IDaaS SDK for JS
With this client you can connect with our solution of Identity as a Service (IDaaS) that implements OpenID Connect.

Installation:
```
$ bower install reniec-idaas -S
```

Or CDN:
```
https://idaas.reniec.gob.pe/service/dist/reniec_idaas.js
```

Integration example:
https://github.com/pkiep-reniec/integration_nodejs_example

More project details:
https://idaas.reniec.gob.pe/

Demo online:
https://dsp.reniec.gob.pe/rp/

## Basic params
#### Scopes
- profile
    - Return: doc, first_name.
	
- email
    - Return: email, email_verified.
	
- phone
    - Return: phone_number, phone_number_verified.
	
#### ACR
##### Level 0:
- only_questions
    - Access only with secret questions.	

##### Level 1:
- one_factor
    - Access with Clave Nacional | OTP Email | OTP SMS.
    
- only_password
    - Access only with Clave Nacional.

##### Level 2:
- two_factor
    - Access with Clave Nacional + OTP Email | OTP SMS.
    
- fingerprint_mobile
    - Access with Biometric Validation and secret questions.

##### Level 3:
- pki_dnie
    - Access with DNIe.

- pki_dnie_mobile
    - Access with DNIe Mobile (only for android devices).
	
- pki_token
    - Access with PJ digital certificate.

# More params
If you want more params details, you can find it into OpenID Connect documentation:

https://openid.net/specs/openid-connect-core-1_0.html