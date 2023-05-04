"use strict";(self.webpackChunkadobe_dev_console=self.webpackChunkadobe_dev_console||[]).push([[8205],{84351:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return u}});var r,n=a(87462),i=a(63366),o=(a(15007),a(64983)),d=a(91515),p=["components"],l={},s=(r="InlineAlert",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),c={_frontmatter:l},m=d.Z;function u(e){var t=e.components,a=(0,i.Z)(e,p);return(0,o.mdx)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"user-authentication-implementation-guide"},"User Authentication Implementation Guide"),(0,o.mdx)("p",null,"The following guide goes over finer implementation details for user authentication credentials. At the end of this guide is a list of recommended industry-standard OAuth2 libraries. Before proceeding, we recommend you familiarize yourself with the 3-legged OAuth flow in our  ",(0,o.mdx)("a",{parentName:"p",href:"./index.md"},"user authentication guide"),"."),(0,o.mdx)("h2",{id:"user-authentication-credential-types"},"User authentication credential types"),(0,o.mdx)("p",null,"If an API or Event you are adding to your project uses user authentication credentials, you can select the credential type depending on your application's platform. "),(0,o.mdx)("p",null,"The following types of user authentication credentials are available:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"OAuth Web App credential"),(0,o.mdx)("li",{parentName:"ol"},"OAuth Single Page App credential"),(0,o.mdx)("li",{parentName:"ol"},"OAuth Native App credential"),(0,o.mdx)("li",{parentName:"ol"},"OAuth Web credential ",(0,o.mdx)("em",{parentName:"li"},"(deprecated)")),(0,o.mdx)("li",{parentName:"ol"},"OAuth iOS credential ",(0,o.mdx)("em",{parentName:"li"},"(deprecated)")),(0,o.mdx)("li",{parentName:"ol"},"OAuth Android credential ",(0,o.mdx)("em",{parentName:"li"},"(deprecated)"))),(0,o.mdx)(s,{slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Depending on the selected API, some platforms may not be available to use with that API. Select the platform that best suits your application use case if more than one platform is available."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.25000000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/3822ae7685084b56cecc95f7c54fb9bd/5530d/services-api-oauth-configure.webp 320w","/adobe-dev-console/static/3822ae7685084b56cecc95f7c54fb9bd/0c8fb/services-api-oauth-configure.webp 640w","/adobe-dev-console/static/3822ae7685084b56cecc95f7c54fb9bd/94b1e/services-api-oauth-configure.webp 1280w","/adobe-dev-console/static/3822ae7685084b56cecc95f7c54fb9bd/0b34d/services-api-oauth-configure.webp 1920w","/adobe-dev-console/static/3822ae7685084b56cecc95f7c54fb9bd/d5269/services-api-oauth-configure.webp 2560w","/adobe-dev-console/static/3822ae7685084b56cecc95f7c54fb9bd/81433/services-api-oauth-configure.webp 3330w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/3822ae7685084b56cecc95f7c54fb9bd/dd4a7/services-api-oauth-configure.png 320w","/adobe-dev-console/static/3822ae7685084b56cecc95f7c54fb9bd/0f09e/services-api-oauth-configure.png 640w","/adobe-dev-console/static/3822ae7685084b56cecc95f7c54fb9bd/bbbf7/services-api-oauth-configure.png 1280w","/adobe-dev-console/static/3822ae7685084b56cecc95f7c54fb9bd/ac7a9/services-api-oauth-configure.png 1920w","/adobe-dev-console/static/3822ae7685084b56cecc95f7c54fb9bd/c7a69/services-api-oauth-configure.png 2560w","/adobe-dev-console/static/3822ae7685084b56cecc95f7c54fb9bd/2296a/services-api-oauth-configure.png 3330w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-dev-console/static/3822ae7685084b56cecc95f7c54fb9bd/bbbf7/services-api-oauth-configure.png",alt:"services api oauth configure",title:"services api oauth configure",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h3",{id:"oauth-web-app-credential"},"OAuth Web App credential"),(0,o.mdx)("p",null,"The Web App platform is best suited for applications with a backend server with a web, mobile, or desktop frontend. OAuth credentials for Web App require the application to store a client secret on the backend server securely. The application can then fetch tokens using the client secret on the backend server and not risk exposing the client secret or the tokens through the frontend application."),(0,o.mdx)("p",null,"When setting up an OAuth credential for the Web App platform, you are required to provide the following:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"#default-redirect-uri"},"A Default Redirect URI")," "),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"#redirect-uri-pattern"},"A Redirect URI pattern"))),(0,o.mdx)("p",null,"Suppose the list of scope your application requests includes the ",(0,o.mdx)("inlineCode",{parentName:"p"},"offline_access")," scope. In that case, your application will also receive a refresh token that can be used to regenerate access tokens without needing the user to sign in again or even be present."),(0,o.mdx)(s,{slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"In OAuth 2.0 standard terminology, an OAuth Web App credential is a ",(0,o.mdx)("em",{parentName:"p"},"confidential")," client with an HTTPS redirect."),(0,o.mdx)("h3",{id:"oauth-single-page-app-credential"},"OAuth Single Page App credential"),(0,o.mdx)("p",null,"The OAuth Single Page App credential is best suited for JavaScript-based applications that run in the browser and either do not have a backend server or want to fetch tokens on the front end. OAuth credentials for Single Page Apps do not require the application to store a client secret and, therefore, must utilize the ",(0,o.mdx)("a",{parentName:"p",href:"https://oauth.net/2/pkce/"},"OAuth 2.0 PKCE flow")," to obtain tokens securely. The OAuth Single Page App credential can also be used for mobile-only applications utilizing a web view."),(0,o.mdx)("p",null,"When setting up an OAuth credential for the Single Page App platform, you are required to provide the following:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"#default-redirect-uri"},"A Default Redirect URI")," "),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"#redirect-uri-pattern"},"A Redirect URI pattern"))),(0,o.mdx)("p",null,"Refresh tokens are not available for the OAuth Single Page App credential. Your application will need the user to sign in again to generate a new access token."),(0,o.mdx)(s,{slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"In OAuth 2.0 standard terminology, an OAuth Single Page App credential is a ",(0,o.mdx)("em",{parentName:"p"},"public")," client with an HTTPS redirect."),(0,o.mdx)("h3",{id:"oauth-native-app-credential"},"OAuth Native App credential"),(0,o.mdx)("p",null,"The Native App platform is best suited for applications that run natively on a device (Android, iOS, Windows, Mac, and others) and either do not have a backend server or want to fetch tokens on the front end. OAuth credentials for Native Apps do not require the application to store a client secret and, therefore, must utilize the ",(0,o.mdx)("a",{parentName:"p",href:"https://oauth.net/2/pkce/"},"OAuth 2.0 PKCE flow")," to obtain tokens securely."),(0,o.mdx)("p",null,"Refresh tokens are not available for the OAuth Native App credential. Your application will need the user to sign in again to generate a new access token."),(0,o.mdx)(s,{slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"In OAuth 2.0 standard terminology, an OAuth Native App credential is a ",(0,o.mdx)("em",{parentName:"p"},"public")," client with a non-HTTPS redirect."),(0,o.mdx)("h3",{id:"oauth-web-credential-deprecated"},"OAuth Web credential ",(0,o.mdx)("em",{parentName:"h3"},"(deprecated)")),(0,o.mdx)("p",null,"The OAuth credential for the Web platform has been deprecated in favor of the ",(0,o.mdx)("a",{parentName:"p",href:"#web-app"},"Web App platform"),". Furthermore, the new Web App platform credentials do not support the weaker OAuth implicit flow. Applications looking for a substitute for the OAuth implicit flow should use the more secure ",(0,o.mdx)("a",{parentName:"p",href:"#single-page-app"},"Single Page App platform"),"."),(0,o.mdx)("h3",{id:"oauth-ios-credential-deprecated"},"OAuth iOS credential ",(0,o.mdx)("em",{parentName:"h3"},"(deprecated)")),(0,o.mdx)("p",null,"The OAuth credential for the iOS platform has been deprecated in favor of the ",(0,o.mdx)("a",{parentName:"p",href:"#native-app"},"Native App platform"),"."),(0,o.mdx)("h3",{id:"oauth-android-credential-deprecated"},"OAuth Android credential ",(0,o.mdx)("em",{parentName:"h3"},"(deprecated)")),(0,o.mdx)("p",null,"The OAuth credential for the Android platform has been deprecated in favor of the ",(0,o.mdx)("a",{parentName:"p",href:"#native-app"},"Native App platform"),"."),(0,o.mdx)("h2",{id:"understanding-default-redirect-uri-and-redirect-uri-patterns"},"Understanding default redirect URI and redirect URI patterns"),(0,o.mdx)("p",null,"For OAuth Web App and OAuth Single Page App credentials, you need to configure the default redirect URI and the redirect URI patterns."),(0,o.mdx)("p",null,"In the 3-legged OAuth workflow outlined above, your application will send the user to sign in to her account and grant permissions to your application. Once this happens, Adobe will need to send the user back to your application. Adobe determines where to redirect the user based on the value of the default redirect URI and the redirect URI patterns you have configured."),(0,o.mdx)("p",null,"The page served by your application post redirection must be able to handle both scenarios - where the user accepts/rejects granting permissions to your application. If the user grants your application permissions, your application will receive the authorization code as a query parameter when Adobe redirects the user back to your app."),(0,o.mdx)("h3",{id:"default-redirect-uri"},"Default redirect URI"),(0,o.mdx)("p",null,"Adobe sends the user back to the default URI if no redirect URI is specified in the authorization request. See ",(0,o.mdx)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.1"},"authorization request"),"."),(0,o.mdx)("p",null,"You can specify a default redirect URI of up to 256 characters. It must be an absolute URI and cannot contain wildcards of regexes."),(0,o.mdx)(s,{slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"The ",(0,o.mdx)("em",{parentName:"p"},"Default redirect URI")," MUST be hosted on a secure server (HTTPS), even if it is only a localhost instance. For example, ",(0,o.mdx)("a",{parentName:"p",href:"https://example.com/redirect/"},"https://example.com/redirect/"),", https://localhost/redirect/. "),(0,o.mdx)("h3",{id:"redirect-uri-pattern"},"Redirect URI pattern"),(0,o.mdx)("p",null,"When creating a new authorization request, the OAuth 2.0 framework allows your application to request a different redirect URI than the default Redirect URI by using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"redirect_url")," query parameter. However, any requested redirect URI must match the ",(0,o.mdx)("em",{parentName:"p"},"Redirect URI pattern")," you supply. The authorized request can only be completed if the requested Redirect URI passes regex matching."),(0,o.mdx)("p",null,"A ",(0,o.mdx)("em",{parentName:"p"},"Redirect URI pattern")," is a URI path (or comma-separated list of URI paths) to which Adobe can redirect (if requested) when the login and consent flow is completed. The URIs mentioned must be within your application domain. The redirect URI pattern field can accommodate up to 512 characters."),(0,o.mdx)(s,{slots:"text",mdxType:"InlineAlert"}),"You can use wildcards in the redirect URI pattern to club multiple redirect URIs together. Remember to escape periods (**.**) with **\\\\**. For example, **https://example\\\\.com/**.",(0,o.mdx)("h2",{id:"oauth-20-scopes"},"OAuth 2.0 Scopes"),(0,o.mdx)("p",null,"OAuth scopes directly relate to the access and permissions your application has on behalf of a user using your application. Based on the APIs and Events you add to your project, your credential will gain access to a set of scopes your application can request. "),(0,o.mdx)("p",null,"Each scope your application requests during the authorization workflow, would be shown with a short description to the user on the consent screen. The user can approve or reject your application to gain those permissions."),(0,o.mdx)("p",null,"You can always find the scopes your application can request by visiting the credential page and the ",(0,o.mdx)("em",{parentName:"p"},"Scopes tab"),". See our API reference to view some commonly encountered scopes -"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"./IMS.md#identity-scopes"},"Identity scopes")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"./IMS.md#creative-cloud"},"Creative Cloud Scopes")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"./IMS.md#experience-cloud"},"Experience Cloud Scopes"))),(0,o.mdx)("h2",{id:"standard-oauth2-libraries"},"Standard OAuth2 libraries"),(0,o.mdx)("p",null,"The  OAuth community site ",(0,o.mdx)("a",{parentName:"p",href:"https://oauth.net"},"https://oauth.net")," has a huge list of community-maintained OAuth2 libraries. Some widely known and maintained OAuth2 libraries from that list are -"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/jaredhanson/passport-oauth2"},"Passport OAuth2")," (Javascript)"),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/jaredhanson/passport"},"PassportJS")," (Node.js)"),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"https://spring.io/projects/spring-security"},"Spring Security")," (Java)"),(0,o.mdx)("li",{parentName:"ol"},"View more libraries at ",(0,o.mdx)("a",{parentName:"li",href:"https://oauth.net/code/"},"https://oauth.net/code/"))),(0,o.mdx)(s,{slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Using industry-standard libraries is the quickest and most secure way of integrating with OAuth. We recommend developers diligently pick the OAuth 2.0 library that works best for their application."),(0,o.mdx)("h3",{id:"sample-apps"},"Sample apps"),(0,o.mdx)("p",null,"The following samples demonstrate basic interaction with the Adobe OAuth endpoints."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("strong",{parentName:"p"},"Node.js Example"),(0,o.mdx)("br",{parentName:"p"}),"\n",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/adobe-dev-console/tree/main/samples/adobe-auth-node"},"Github repo")," where you can find a complete Node.js-based web app example that uses Adobe OAuth.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("strong",{parentName:"p"},"Python Example"),(0,o.mdx)("br",{parentName:"p"}),"\n",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/adobe-dev-console/tree/main/samples/adobe-auth-python"},"Github repo")," where you can find a complete Python based web app example that uses Adobe OAuth."))),(0,o.mdx)("h2",{id:"oauth-20-playground"},"OAuth 2.0 Playground"),(0,o.mdx)("p",null,"The OAuth 2.0 playground allows you to test out the 3-legged OAuth flow and obtain access tokens for experimentation. Learn more about the playground ",(0,o.mdx)("a",{parentName:"p",href:"../Tools/OAuthPlayground.md"},"here"),"."),(0,o.mdx)("h2",{id:"further-reading"},"Further Reading"),(0,o.mdx)("p",null,"There are several great resources to get more familiar with the OAuth2.0 framework - "),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc6749"},"The OAuth 2.0 Authorization Framework - RFC 6749")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc7636"},"Proof Key for Code Exchange by OAuth Public Clients - RFC 7636")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://stackoverflow.com/questions/tagged/oauth-2.0"},"StackOverflow")),(0,o.mdx)("li",{parentName:"ul"},"Authentication API Reference",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../IMS.md#authorize-request"},"Authorize Request")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../IMS.md#fetching-access-tokens-for-user-authentication-credentials"},"Fetching Access Tokens")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../IMS.md#refreshing-access-tokens"},"Refreshing Access Tokens")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../IMS.md#token-revocation"},"Revoking a Token"))))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-authentication-user-authentication-implementation-md-2f46a53a872aeca09f39.js.map