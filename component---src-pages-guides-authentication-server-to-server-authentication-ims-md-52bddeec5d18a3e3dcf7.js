"use strict";(self.webpackChunkadobe_dev_console=self.webpackChunkadobe_dev_console||[]).push([[5371],{13736:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return p}});var n=a(87462),r=a(63366),d=(a(15007),a(64983)),l=a(91515),m=["components"],i={},o={_frontmatter:i},s=l.Z;function p(e){var t=e.components,a=(0,r.Z)(e,m);return(0,d.mdx)(s,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"oauth-server-to-server-credential-api-reference"},"OAuth Server-to-Server credential API Reference"),(0,d.mdx)("p",null,"Following is an API reference for Adobe Identity Management Services (IMS) APIs."),(0,d.mdx)("h2",{id:"fetching-access-tokens"},"Fetching access tokens"),(0,d.mdx)("p",null,"The OAuth Server-to-server credential uses the ",(0,d.mdx)("inlineCode",{parentName:"p"},"client_credentials")," grant to generate access tokens."),(0,d.mdx)("h3",{id:"parameters"},"Parameters"),(0,d.mdx)("p",null,"Parameters can be sent in the body or as query parameters. Passing parameters in the body is recommended for sensitive data, as query parameters may be logged by app servers."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Mandatory"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"grant_type")),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"Value should always be ",(0,d.mdx)("inlineCode",{parentName:"td"},"client_credentials"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"client_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"The Client ID obtained from the ",(0,d.mdx)("a",{parentName:"td",href:"/adobe-dev-console/console"},"Adobe Developer Console"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"client_secret")),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"The value of client secret obtained from the ",(0,d.mdx)("a",{parentName:"td",href:"/adobe-dev-console/console"},"Adobe Developer Console"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"scopes")),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"The list of comma separated scopes you are requesting. To see the scopes available to your credential, visit your project your the ",(0,d.mdx)("a",{parentName:"td",href:"/adobe-dev-console/console"},"Adobe Developer Console"))))),(0,d.mdx)("h3",{id:"request-for-oauth-server-to-server-credential"},"Request for OAuth Server-to-Server credential"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-curl"},"curl -X POST 'https://ims-na1.adobelogin.com/ims/token/v3?client_id={CLIENT_ID}' \\\n  -H 'Content-Type: application/x-www-form-urlencoded' \\\n  -d 'client_secret={CLIENT_SECRET}&grant_type=client_credentials&scope={SCOPES}'\n")),(0,d.mdx)("h3",{id:"sample-response"},"Sample Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "access_token": "{ACCESS_TOKEN}",\n    "token_type": "bearer",\n    "expires_in": 86399\n}\n')),(0,d.mdx)("h2",{id:"refreshing-access-tokens"},"Refreshing access tokens"),(0,d.mdx)("p",null,"You do not need a refresh token for OAuth Server-to-Server credentials. You can always request a new access token directly using your ",(0,d.mdx)("em",{parentName:"p"},"client_id"),", ",(0,d.mdx)("em",{parentName:"p"},"client_secret"),", and ",(0,d.mdx)("em",{parentName:"p"},"scopes"),". See ",(0,d.mdx)("a",{parentName:"p",href:"#fetching-access-tokens"},"fetching access tokens"),"."),(0,d.mdx)("h2",{id:"list-all-client-secrets"},"List all client secrets"),(0,d.mdx)("p",null,"Note: No ",(0,d.mdx)("inlineCode",{parentName:"p"},"client_secret")," values are returned by this API. Only the secret ",(0,d.mdx)("inlineCode",{parentName:"p"},"uuid")," and other metadata is returned. "),(0,d.mdx)("h3",{id:"parameters-1"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Where"),(0,d.mdx)("th",{parentName:"tr",align:null},"Mandatory"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"org_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"URL"),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"For instructions on where to find the ",(0,d.mdx)("inlineCode",{parentName:"td"},"org_id"),", see step 2 and 3 on our guide to ",(0,d.mdx)("a",{parentName:"td",href:"./implementation.md#rotating-client-secrets-programmatically"},"rotate secrets programmatically"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"credential_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"URL"),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"For instructions on where to find the ",(0,d.mdx)("inlineCode",{parentName:"td"},"credential_id"),", see step 2 and 3 on our guide to ",(0,d.mdx)("a",{parentName:"td",href:"./implementation.md#rotating-client-secrets-programmatically"},"rotate secrets programmatically"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"client_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"Headers"),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"The Client ID obtained from the ",(0,d.mdx)("a",{parentName:"td",href:"/adobe-dev-console/console"},"Adobe Developer Console"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"access_token")),(0,d.mdx)("td",{parentName:"tr",align:null},"Headers"),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"For instructions on how to generate an access token, see step 5 on our guide to ",(0,d.mdx)("a",{parentName:"td",href:"./implementation.md#rotating-client-secrets-programmatically"},"rotate secrets programmatically"))))),(0,d.mdx)("h3",{id:"request-for-oauth-server-to-server-credential-1"},"Request for OAuth Server-to-Server credential"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-curl"},"curl -X GET 'https://api.adobe.io/console/organizations/{org_id}/credentials/{credential_id}/secrets' \\\n     -H 'Authorization: Bearer {access_token}'\n     -H 'x-api-key: {client_id}'\n")),(0,d.mdx)("h3",{id:"sample-response-1"},"Sample Response"),(0,d.mdx)("p",null,"200 OK"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "client_id": "e053e1a87cf74c68a6ec8e71d4a82662",\n    "client_secrets": [\n        {\n            "expires_at": "PERMANENT",\n            "expires_at_str": "PERMANENT",\n            "created_at": "1682448485000",\n            "created_at_str": "Tue, Apr 25 2023 18:48:05.000 UTC",\n            "uuid": "11ede399b68b57a5aca6a96b8b6487c9",\n            "secret_usages": null\n        },\n        {\n            "expires_at": "PERMANENT",\n            "expires_at_str": "PERMANENT",\n            "created_at": "1683005777000",\n            "created_at_str": "Tue, May 2 2023 05:36:17.000 UTC",\n            "uuid": "11ede8ab42f138f3abe335d886a407fb",\n            "secret_usages": [\n                {\n                    "last_used_at": "1683162010101",\n                    "grant_type": "client_credentials"\n                }\n            ]\n        }\n    ]\n}\n')),(0,d.mdx)("p",null,"Note: the ",(0,d.mdx)("inlineCode",{parentName:"p"},"created_at")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"last_used_at")," values are in milliseconds since UNIX epoch."),(0,d.mdx)("h2",{id:"add-client-secret-to-credential"},"Add client secret to credential"),(0,d.mdx)("p",null,"You can add up to 2 client secrets for an OAuth Server-to-Server credential."),(0,d.mdx)("p",null,"Note: The API response contains the the ",(0,d.mdx)("inlineCode",{parentName:"p"},"client_secret")," that was added and its ",(0,d.mdx)("inlineCode",{parentName:"p"},"uuid"),". This ",(0,d.mdx)("inlineCode",{parentName:"p"},"client_secret")," will never be returned in plain text by any other API response. However, you can still find it on the Developer Console UI."),(0,d.mdx)("h3",{id:"parameters-2"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Where"),(0,d.mdx)("th",{parentName:"tr",align:null},"Mandatory"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"org_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"URL"),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"For instructions on where to find the ",(0,d.mdx)("inlineCode",{parentName:"td"},"org_id"),", see step 2 and 3 on our guide to ",(0,d.mdx)("a",{parentName:"td",href:"./implementation.md#rotating-client-secrets-programmatically"},"rotate secrets programmatically"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"credential_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"URL"),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"For instructions on where to find the ",(0,d.mdx)("inlineCode",{parentName:"td"},"credential_id"),", see step 2 and 3 on our guide to ",(0,d.mdx)("a",{parentName:"td",href:"./implementation.md#rotating-client-secrets-programmatically"},"rotate secrets programmatically"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"client_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"Headers"),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"The Client ID obtained from the ",(0,d.mdx)("a",{parentName:"td",href:"/adobe-dev-console/console"},"Adobe Developer Console"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"access_token")),(0,d.mdx)("td",{parentName:"tr",align:null},"Headers"),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"For instructions on how to generate an access token, see step 5 on our guide to ",(0,d.mdx)("a",{parentName:"td",href:"./implementation.md#rotating-client-secrets-programmatically"},"rotate secrets programmatically"))))),(0,d.mdx)("h3",{id:"request-for-oauth-server-to-server-credential-2"},"Request for OAuth Server-to-Server credential"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-curl"},"curl -X POST 'https://api.adobe.io/console/organizations/{org_id}/credentials/{credential_id}/secrets' \\\n     -H 'Authorization: Bearer {access_token}'\n     -H 'x-api-key: {client_id}'\n")),(0,d.mdx)("h3",{id:"sample-response-2"},"Sample Response"),(0,d.mdx)("p",null,"201 Created"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "expires_at": "PERMANENT",\n  "expires_at_str": "PERMANENT",\n  "client_secret": "XXXXXXXXXXXXX",\n  "created_at": "1683005777000",\n  "created_at_str": "Tue, May 2 2023 05:36:17.000 UTC",\n  "uuid": "11ede8ab42f138f3abe335d886a407fb",\n  "secret_usages": null\n}\n')),(0,d.mdx)("p",null,"Note: the ",(0,d.mdx)("inlineCode",{parentName:"p"},"created_at")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"last_used_at")," values are in milliseconds since UNIX epoch."),(0,d.mdx)("h2",{id:"remove-client-secret-from-credential"},"Remove client secret from credential"),(0,d.mdx)("p",null,"Note: you need the secret ",(0,d.mdx)("inlineCode",{parentName:"p"},"uuid")," to delete a secret. You cannot use the plain text ",(0,d.mdx)("inlineCode",{parentName:"p"},"client_secret")," value to identify which secret to delete."),(0,d.mdx)("h3",{id:"parameters-3"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Where"),(0,d.mdx)("th",{parentName:"tr",align:null},"Mandatory"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"org_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"URL"),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"For instructions on where to find the ",(0,d.mdx)("inlineCode",{parentName:"td"},"org_id"),", see step 2 and 3 on our guide to ",(0,d.mdx)("a",{parentName:"td",href:"./implementation.md#rotating-client-secrets-programmatically"},"rotate secrets programmatically"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"credential_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"URL"),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"For instructions on where to find the ",(0,d.mdx)("inlineCode",{parentName:"td"},"credential_id"),", see step 2 and 3 on our guide to ",(0,d.mdx)("a",{parentName:"td",href:"./implementation.md#rotating-client-secrets-programmatically"},"rotate secrets programmatically"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"uuid")),(0,d.mdx)("td",{parentName:"tr",align:null},"URL"),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"The uuid of the secret you wish to delete. See the ",(0,d.mdx)("a",{parentName:"td",href:"#list-all-client-secrets"},"list all secrets API")," to get the secret's ",(0,d.mdx)("inlineCode",{parentName:"td"},"uuid"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"client_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"Headers"),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"The Client ID obtained from the ",(0,d.mdx)("a",{parentName:"td",href:"/adobe-dev-console/console"},"Adobe Developer Console"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"access_token")),(0,d.mdx)("td",{parentName:"tr",align:null},"Headers"),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"For instructions on how to generate an access token, see step 5 on our guide to ",(0,d.mdx)("a",{parentName:"td",href:"./implementation.md#rotating-client-secrets-programmatically"},"rotate secrets programmatically"))))),(0,d.mdx)("h3",{id:"request-for-oauth-server-to-server-credential-3"},"Request for OAuth Server-to-Server credential"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-curl"},"curl -X DELETE 'https://api.adobe.io/console/organizations/{org_id}/credentials/{credential_id}/secrets/{uuid}' \\\n     -H 'Authorization: Bearer {access_token}'\n     -H 'x-api-key: {client_id}'\n")),(0,d.mdx)("h3",{id:"sample-response-3"},"Sample Response"),(0,d.mdx)("p",null,"204 No Content"))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-authentication-server-to-server-authentication-ims-md-52bddeec5d18a3e3dcf7.js.map