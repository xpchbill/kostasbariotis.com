webpackJsonp([0xaa0bda23401d],{668:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I am Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}}},pathContext:{posts:[{excerpt:"Recently,  Thanos  got me into  JWT . Json Web Token is the modern way of authenticating between your REST API and a web/mobile/native client without using Sessions and/or cookies. This is a nice explanation of how things were  done , until Json Web…",html:'<p>Recently, <a href="http://attheo.do" target="_blank" rel="noreferrer noopener">Thanos</a> got me into <a href="http://jwt.io" target="_blank" rel="noreferrer noopener">JWT</a>. Json Web Token is the modern way of authenticating between your REST API and a web/mobile/native client without using Sessions and/or cookies. This is a nice explanation of how things were <a href="http://stackoverflow.com/questions/15051712/how-to-do-authentication-with-a-rest-api-right-browser-native-clients" target="_blank" rel="noreferrer noopener">done</a>, until Json Web Tokens came into place.</p>\n<p>What we can achieve with JWT is really simple: we are getting rid of cookies and sessions while the user\'s info is completely hidden within the request\'s header to the server.</p>\n<p>Upon login, the server returns an encrypted token which, among other info, contains the user identifier. This identifier, which happens to be application specific, is then decrypted by the server at any moment required, which is what enables the server to know who\'s on the other end of the line.</p>\n<p>Let\'s crack it down.</p>\n<p>First we need a JWT Header like this</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n\t<span class="token property">"typ"</span><span class="token operator">:</span><span class="token string">"JWT"</span><span class="token punctuation">,</span>\n    <span class="token property">"alg"</span><span class="token operator">:</span><span class="token string">"HS256"</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>which says that the JWT is going to be digitaly signed using the HS256 algorithm.\nBase64url this and you have the first piece of your JWT, namely the Header.\n<code>eyJ0eXAiOiJKV1QiLA0KICJhbGciOiJIUzI1NiJ9</code></p>\n<p>Now we need our actual message that we are going to transmit, namely the Payload.</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n\t<span class="token property">"iss"</span><span class="token operator">:</span><span class="token string">"joe"</span><span class="token punctuation">,</span>\n    <span class="token property">"exp"</span><span class="token operator">:</span><span class="token number">1300819380</span><span class="token punctuation">,</span>\n    <span class="token property">"http://example.com/is_root"</span><span class="token operator">:</span><span class="token boolean">true</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Yeap. Plain JSON where you can put anything you want. <code>iss</code> and <code>exp</code> are defined by the <a href="http://tools.ietf.org/html/draft-ietf-oauth-json-web-token-06#section-4.1" target="_blank" rel="noreferrer noopener">specs</a> so you can easily use open source libraries. <code>exp</code> for example stands for Expiration Time in UNIX Timestamp and common libraries know that.</p>\n<p>Base64url this and we have our second part.\n<code>eyJpc3MiOiJqb2UiLA0KICJleHAiOjEzMDA4MTkzODAsDQogImh0dHA6Ly9leGFtcGxlLmNvbS9pc19yb290Ijp0cnVlfQ</code></p>\n<p>Now since we choose the HS256 algorithm of our signature, we are going to concatenate our Header and Payload and sign them with the HS256 algorithm using a secret key. This is what gives us the Signature.</p>\n<p>Concatenate all of them together, using dots and we have our JSON Web Token(without the break lines).</p>\n<p><code>eyJ0eXAiOiJKV1QiLA0KICJhbGciOiJIUzI1NiJ9 . eyJpc3MiOiJqb2UiLA0KICJleHAiOjEzMDA4MTkzODAsDQogImh0dHA6Ly9leGFtcGxlLmNvbS9pc19yb290Ijp0cnVlfQ . dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk</code></p>\n<p>So, now you can store this piece of string on the client using <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage" target="_blank" rel="noreferrer noopener">modern Client Storage mechanisms</a>, and send it to your server on every request. And your server will understand who you are. No more sessions, no more cookies.</p>\n<p>Last but not least, make sure that you are using a secure connection with your server, since if that token is stolen, through Man In The Middle Attack, anyone can use it.</p>\n<p>The <a href="http://tools.ietf.org/html/draft-ietf-oauth-json-web-token-06" target="_blank" rel="noreferrer noopener">specs</a> are really simple and you can get into it right away.</p>\n<p>Further reading:</p>\n<ul>\n<li>\n<p><a href="https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/" target="_blank" rel="noreferrer noopener">Cookies vs Tokens. Getting auth right with Angular.JS</a></p>\n</li>\n<li>\n<p><a href="http://angular-tips.com/blog/2014/05/json-web-tokens-examples/" target="_blank" rel="noreferrer noopener">Json Web Tokens: Examples</a></p>\n</li>\n<li>\n<p><a href="http://jwt.io/#libraries" target="_blank" rel="noreferrer noopener">OS Libraries</a></p>\n</li>\n</ul>',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/jwt-the-modern-way-of-authenticating/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2015-01-08T18:51:28.000Z",path:"/jwt-the-modern-way-of-authenticating/",tags:"jwt, rest, apis, authentication, spa",title:"JWT: The modern way of authenticating",draft:null}}],tag:"jwt",pagesSum:1,page:1}}}});
//# sourceMappingURL=path---tag-jwt-84e89185d23d5870dd7e.js.map