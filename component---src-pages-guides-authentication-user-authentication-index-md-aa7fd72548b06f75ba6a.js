"use strict";(self.webpackChunkadobe_dev_console=self.webpackChunkadobe_dev_console||[]).push([[6611],{84965:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return p},default:function(){return h}});var o,a=n(87462),r=n(63366),i=(n(15007),n(64983)),s=n(91515),d=["components"],p={},l=(o="InlineAlert",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),c={_frontmatter:p},u=s.Z;function h(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.mdx)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"user-authentication"},"User Authentication"),(0,i.mdx)("p",null,"If your application needs to read or modify the data owned by an Adobe end-user, it can do so using a user authentication credential. However, before your application can view or edit the user's data, the user would need to provide explicit 'consent' to your application."),(0,i.mdx)("p",null,"User authentication credentials rely on OAuth2.0 ",(0,i.mdx)("inlineCode",{parentName:"p"},"authorization_code")," grant type, commonly known as 3-legged OAuth. The 3-legged OAuth flow can be broken down into the following distinct workflows -"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Asking a user to authorize your application"),(0,i.mdx)("li",{parentName:"ol"},"Fetching user access tokens"),(0,i.mdx)("li",{parentName:"ol"},"Fetching new access tokens using a refresh token"),(0,i.mdx)("li",{parentName:"ol"},"Applying for Adobe approval and adding beta users"),(0,i.mdx)("li",{parentName:"ol"},"End-user revoking consent to your application"),(0,i.mdx)("li",{parentName:"ol"},"Revoking access tokens or refresh tokens")),(0,i.mdx)("p",null,"If you are already familiar with 3-legged OAuth, head to our ",(0,i.mdx)("a",{parentName:"p",href:"./implementation.md"},"implmentation guide")," to begin integrating OAuth in your application. Learn about ",(0,i.mdx)("a",{parentName:"p",href:"./implementation.md#user-authentication-credential-types"},"user authentication credential types"),", ",(0,i.mdx)("a",{parentName:"p",href:"./implementation.md#understanding-default-redirect-uri-and-redirect-uri-patterns"},"redirect URIs"),", ",(0,i.mdx)("a",{parentName:"p",href:"./implementation.md#standard-oauth2-libraries"},"standard libraries"),", and more."),(0,i.mdx)("h2",{id:"asking-a-user-to-authorize-your-application"},"Asking a user to authorize your application"),(0,i.mdx)("p",null,"Once you have successfully integrated with 3-legged OAuth in your application, the authorization flow will work as follows -"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Your application surfaces a sign-in with Adobe button. The user lands on your application and clicks on the sign-in button."),(0,i.mdx)("li",{parentName:"ol"},"Upon clicking the sign-in button, your application redirects the user to Adobe's authorize endpoint with the set of requested scopes."),(0,i.mdx)("li",{parentName:"ol"},"Once the user signs in with his Adobe account, Adobe presents him with a consent screen that lists all the permissions your application requests to access his data."),(0,i.mdx)("li",{parentName:"ol"},"At this point, the user decides whether to approve or reject granting permissions to your application."),(0,i.mdx)("li",{parentName:"ol"},"Adobe ",(0,i.mdx)("em",{parentName:"li"},"redirects")," the user back to your application to notify whether the user granted the permissions. The URL Adobe uses to redirect the user is determined by the default redirect URI or the redirect URI pattern you set up.")),(0,i.mdx)("p",null,"For instructions to integrate the authorize step in your application, please visit our ",(0,i.mdx)("a",{parentName:"p",href:"./IMS.md#authorize-request"},"Authorize Request")," section on the Authentication API Reference page."),(0,i.mdx)("h2",{id:"fetching-user-access-tokens"},"Fetching user access tokens"),(0,i.mdx)("p",null,"Your application will need to generate access tokens to call any Adobe API or service on behalf of the user. The following steps outline how your application can request access tokens -\nOnce the user approves the scopes requested by your application, Adobe redirects the user to your application with the user's authorization code embedded as a query parameter in the redirect URL.\nYour application reads the value of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"code")," query parameter and issues a token request to Adobe Identity Management Services (IMS) token endpoint.\nIMS returns a response with a user access token and, optionally, a refresh token."),(0,i.mdx)("p",null,"Please visit the ",(0,i.mdx)("a",{parentName:"p",href:"./IMS.md#fetching-access-tokens"},"Fetching Access Tokens")," section on the Authentication API Reference page for instructions to fetch access tokens using the authorization code."),(0,i.mdx)("h2",{id:"fetching-new-access-tokens-using-a-refresh-token"},"Fetching new access tokens using a refresh token"),(0,i.mdx)("p",null,"If your application has access to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"offline_access")," scope, your application will also receive a refresh token in the response from the IMS token endpoint (see previous section). Your application can use the refresh token to further generate access tokens without needing the user to sign in again. The following steps outline how your application can refresh access tokens -"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Your application makes a request to the IMS token endpoint and receives an access token and a refresh token. Your application stores the refresh token securely."),(0,i.mdx)("li",{parentName:"ol"},"Once the current access tokens expire, your application makes another request to the IMS token endpoint with the refresh token and receives a fresh pair of access and refresh tokens."),(0,i.mdx)("li",{parentName:"ol"},"Your application must securely store the new refresh token and use it in your next refresh token request to generate access tokens indefinitely.")),(0,i.mdx)("p",null,"For instructions to refresh access tokens once they expire, please visit the ",(0,i.mdx)("a",{parentName:"p",href:"./IMS.md#refreshing-access-tokens"},"Refreshing Access Tokens")," section on the Authentication API Reference page."),(0,i.mdx)("h2",{id:"applying-for-adobe-approval-and-adding-beta-users-to-your-application"},"Applying for Adobe approval and adding beta users to your application"),(0,i.mdx)("p",null,"All user authentication credentials start in 'In Development' mode and have some restrictions placed on them to ensure the safety and security of Adobe users' data. Depending on the API or Event you are using in your application, you may be required to undergo Adobe approval to promote your application to production. Sometimes, you can self-service promote your user authentication credential to production."),(0,i.mdx)("p",null,"Some key differences exist between credentials 'In Development' and 'In Production':"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null}),(0,i.mdx)("th",{parentName:"tr",align:null},"In Development"),(0,i.mdx)("th",{parentName:"tr",align:null},"In Production"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Who can sign in?"),(0,i.mdx)("td",{parentName:"tr",align:null},"In development mode, a developer needs to supply the email addresses of beta users who can sign in and consent to the application. Other users cannot sign in to the application."),(0,i.mdx)("td",{parentName:"tr",align:null},"Once in production, any user can sign in and consent to the application and then use the app.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Redirect URI update"),(0,i.mdx)("td",{parentName:"tr",align:null},"In development mode, a developer can configure the redirect URI for her application whenever she wants."),(0,i.mdx)("td",{parentName:"tr",align:null},"Once in production, a developer can only change the redirect URI for her application through a support ticket.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"End user experience"),(0,i.mdx)("td",{parentName:"tr",align:null},"In development mode, a beta end user providing consent to your application would see UI notices from Adobe about the application being under development."),(0,i.mdx)("td",{parentName:"tr",align:null},"Once in production, end users would not see any additional notices. They would see the Adobe verified application name and developer information.")))),(0,i.mdx)(l,{slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Only APIs and Events that require Adobe approval allow you to change your application name as it appears on the consent screen shown to the user. Furthermore, only after passing an Adobe review can your application be used by Adobe users with a company or school account."),(0,i.mdx)("h2",{id:"end-user-revoking-consent-to-your-application"},"End-user revoking consent to your application"),(0,i.mdx)("p",null,"Users can revoke their consent to your application by visiting the ",(0,i.mdx)("a",{parentName:"p",href:"https://accounts.adobe.com/security/connected-applications#"},"Connected Applications")," page."),(0,i.mdx)("p",null,"Once the user has revoked their consent, your application can no longer refresh access tokens on this user's behalf. If the user launches your application again, the authorization workflow will begin afresh and ask the user for their consent again."),(0,i.mdx)("h2",{id:"revoking-access-tokens-or-refresh-tokens"},"Revoking access tokens or refresh tokens"),(0,i.mdx)("p",null,"If you need to revoke a particular access token or refresh token, please visit the ",(0,i.mdx)("a",{parentName:"p",href:"./IMS.md#token-revocation"},"Token Revocation")," section on the Authentication API Reference page."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-authentication-user-authentication-index-md-aa7fd72548b06f75ba6a.js.map