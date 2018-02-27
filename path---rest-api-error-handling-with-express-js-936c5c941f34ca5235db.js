webpackJsonp([0xe113946f99cb],{625:function(n,a){n.exports={data:{file:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQBAgUD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIB/9oADAMBAAIQAxAAAAGXEfnO2KxXytBY6QBP/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIDEQASIiH/2gAIAQEAAQUC2qMsrDRjkh7U+9ZIKYC8jNp//8QAFxEBAAMAAAAAAAAAAAAAAAAAAAEQIf/aAAgBAwEBPwFlQ//EABkRAAEFAAAAAAAAAAAAAAAAAAABECExQf/aAAgBAgEBPwGWwWz/xAAbEAACAgMBAAAAAAAAAAAAAAAAEQEhAxAxgf/aAAgBAQAGPwK2dsYo5BBWReaRB//EABwQAAICAwEBAAAAAAAAAAAAAAERACExQVFhcf/aAAgBAQABPyHzg5KmRyuAZAwYJ2aHFOw5Qmlybntx2y3CnEl/Z//aAAwDAQACAAMAAAAQOyi8/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERMUH/2gAIAQMBAT8QUXCB6YR//8QAGhEAAgIDAAAAAAAAAAAAAAAAAAERMSFBsf/aAAgBAgEBPxByVkzvonYxY//EAB0QAQEAAwACAwAAAAAAAAAAAAERACFBMVFhcbH/2gAIAQEAAT8Q6uhuUW+P3HKhIpbqr8JMNj2KrvBpVoF3uLYUDX3imLRSGt4ck1onhy7wNT0XD24jIs1n/9k=",aspectRatio:.9657118055555556,src:"/static/avatar-820706df6fdb07a9b021a790449fec17-381d6.jpg",srcSet:"/static/avatar-820706df6fdb07a9b021a790449fec17-62f05.jpg 200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-dc2b4.jpg 400w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-381d6.jpg 800w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-e5d70.jpg 1200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-d14e0.jpg 1600w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-9cc71.jpg 2225w",srcWebp:"/static/avatar-820706df6fdb07a9b021a790449fec17-fefde.webp",srcSetWebp:"/static/avatar-820706df6fdb07a9b021a790449fec17-5eed2.webp 200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-68e3c.webp 400w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-fefde.webp 800w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-300fe.webp 1200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-ed5bd.webp 1600w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-9442a.webp 2225w",sizes:"(max-width: 800px) 100vw, 800px"}}},site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I am Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:'<p>When you are writing an API, especially when is going to go public, you want the error responses to be as consistent as possible. You want your errors to be identical everywhere, to provide not too much information for your internal system but enough information to the debugger.</p>\n<p>I am a REST fan and I hope you are too. What basically REST tell us, is to use <a href="http://en.wikipedia.org/wiki/List_of_HTTP_status_codes" target="_blank" rel="noreferrer noopener">HTTP\'s error codes</a> for our API responses. E.g. when the user requests a particular row from our DB, using an identifier, and that row doesn\'t exists we should respond with a <code>404 Not Found</code> status code.</p>\n<p>Express.js has a <a href="http://expressjs.com/guide/error-handling.html" target="_blank" rel="noreferrer noopener">default error handler</a>. Basicaly it\'s just a middleware, with an extra argument, the <code>err</code> argument.</p>\n<p>On an Express.js request lifecycle, when an error occurs, we pass on to the next middleware with populated error variable, and the error handler triggers.</p>\n<p>Let\'s start with that.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>router<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment">/* We log the error internaly */</span>\n    logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token comment">/*\n     * Remove Error\'s `stack` property. We don\'t want\n     * users to see this at the production env\n     */</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'env\'</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">\'development\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">delete</span> err<span class="token punctuation">.</span>stack<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n\t<span class="token comment">/* Finaly respond to the request */</span>\n    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>statusCode <span class="token operator">||</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Two are the most essential parts here. Logging the error and proper displaying it. So I am logging it using a <a href="https://github.com/winstonjs/winston" target="_blank" rel="noreferrer noopener">logger</a> module and passing it to the user, using the error\'s status code. I have predefined those status codes so I don\'t have to deal with them every time. How? Let\'s see.</p>\n<p>An error often consists of more than just an error code. We need a title, little more information and the stack trace on development environment. Instead of dealing with those information every time we create objects and only changing the bits we want each time. Here\'s a <code>Not Found</code> error object.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">notFound</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> errorCode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  Error<span class="token punctuation">.</span><span class="token function">captureStackTrace</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message <span class="token operator">||</span> <span class="token string">\'The requested resource couldn\\\'t be found\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">404</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>errorCode <span class="token operator">=</span> errorCode <span class="token operator">||</span> <span class="token number">404</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>We are inheriting the Node.js <code>Error</code> class and create a generic <code>Not Found</code> error object we can use every time we need one.</p>\n<p>So now we need to pass this to the Express.js error handler. So on an ordinary controller we do:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">\'/customers/:id\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n\t<span class="token keyword">var</span> id <span class="token operator">=</span> <span class="token function">properSanitization</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\tsomeDBDriver<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    \t<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>model<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        \t<span class="token function">next</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">NotFound</span><span class="token punctuation">(</span><span class="token string">\'Entity with id: \'</span> <span class="token operator">+</span> id <span class="token operator">+</span> <span class="token string">\' couldn\\\'t be bound.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        \t<span class="token comment">/* ... */</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>So now the error handler will take place and do it\'s magic.</p>\n<p>Often, in a more complex API will need more expressive status codes to express it\'s disfunctionalities. In that case, you can still respond with the proper status code but keep an internal error eode that makes sense on your application. So, in case a user tries to login with wrong credentials, send a 401 to the API consumer but keep an internal code, e.g. 4001 that means <strong>"Wrong Username/Password"</strong>. And that\'s what the <code>errorCode</code> is.</p>\n<p>Here\'s a simple <a href="http://github.com/kbariotis/throw.js" target="_blank" rel="noreferrer noopener">error collection</a> i\'ve wrote, to save you the hassle. Use it and send me your suggestions and/or notices.</p>',excerpt:"When you are writing an API, especially when is going to go public, you want the error responses to be as consistent as possible. You want…",frontmatter:{date:"May 22, 2015",path:"/rest-api-error-handling-with-express-js/",tags:"node.js, rest, express.js, api",title:"REST API Error Handling with Express.js",draft:null}}},pathContext:{prev:{excerpt:"https://arukas.io/en/ \n https://zeit.co/now \n http://www.evennode.com/ \n http://surge.sh/ \n https://www.nodechef.com",html:'<p><a href="https://arukas.io/en/" target="_blank" rel="noreferrer noopener">https://arukas.io/en/</a>\n<a href="https://zeit.co/now" target="_blank" rel="noreferrer noopener">https://zeit.co/now</a>\n<a href="http://www.evennode.com/" target="_blank" rel="noreferrer noopener">http://www.evennode.com/</a>\n<a href="http://surge.sh/" target="_blank" rel="noreferrer noopener">http://surge.sh/</a>\n<a href="https://www.nodechef.com" target="_blank" rel="noreferrer noopener">https://www.nodechef.com</a></p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/nodejs-hosting/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-05-23T00:00:00.000Z",path:"/drafts/nodejs-hosting/",tags:null,title:"Nodejs hosting",draft:!0}},next:{excerpt:"A week ago  Thanasis  asked me to make a Javascript 101 for the  SKG Node.js monthly meetup . The trap? I had to present it a week after. :/ At first, it looked not such an easy task, since I hadn't have any slides or anything ready for it. Fuck it…",html:'<p>A week ago <a href="http://thanpol.as/" target="_blank" rel="noreferrer noopener">Thanasis</a> asked me to make a Javascript 101 for the <a href="http://www.meetup.com/Thessaloniki-Node-js-Meetup/" target="_blank" rel="noreferrer noopener">SKG Node.js monthly meetup</a>. The trap? I had to present it a week after. :/ At first, it looked not such an easy task, since I hadn\'t have any slides or anything ready for it. Fuck it. Challenge accepted.</p>\n<p>I strongly believe that it’s the pressure that makes you a better professional let alone a better person. Life doesn’t wait. Let alone the community. Of course, I would be more pleased if I had the time to prepare a better presentation. But even this way I think it was a great experience. People liked it.</p>\n<p>Thanasis offered me even an easier solution. Take a ready presentation, study it and present it. Nah, I didn’t want it that way. I need it to be me. To have my own slides. My own talk. After all it’s me who had to present it. It had to had my style.</p>\n<p>Anyway, people asked for the <a href="http://slides.com/kostasbariotis/javascript-101" target="_blank" rel="noreferrer noopener">slides</a> and for some references. So here they are.</p>\n<br/>\n<iframe src="//slides.com/kostasbariotis/javascript-101/embed?style=light" width="100%" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<br/>\n<p>80% of the talk were studied by <a href="http://www.amazon.com/Professional-JavaScript-Developers-Nicholas-Zakas/dp/1118026691" target="_blank" rel="noreferrer noopener">Professional Javascript Developers from Nikolas Zakas</a>. I strongly recommend this book, but be aware it’s a \'heavy\' one. Even being quite old, it still has some neat advices and can be a great reference for the future.</p>\n<p>I asked <a href="https://twitter.com/adon1sk" target="_blank" rel="noreferrer noopener">Adonis</a> to borrow me his <a href="http://shop.oreilly.com/product/9780596517748.do" target="_blank" rel="noreferrer noopener">Javascript: The Good Parts</a> a week ago but still hasn’t remember it. I took a quick look on it online (using the previews) and stole some examples from there too. I would recommend it.</p>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/" target="_blank" rel="noreferrer noopener">MDN</a> also helped me a lot, being in the first 10 results of Google searches, I always choose it before I dive deeper. (Still avoiding w3school even though I try to support them. Still can’t trust their source. :/)</p>\n<p>You can find Thanasis\'s slides <a href="https://speakerdeck.com/thanpolas/assets-on-the-cloud" target="_blank" rel="noreferrer noopener">here</a> of his <em>Assets on the Cloud</em> talk, which was amazing.</p>\n<p>Finaly, check out the photos(<a href="http://www.meetup.com/Thessaloniki-Node-js-Meetup/photos/26088965/" target="_blank" rel="noreferrer noopener">here</a>, <a href="https://www.flickr.com/photos/christosbacharakis/sets/72157652297259605/" target="_blank" rel="noreferrer noopener">here</a>) we took that night.</p>\n<p>If you were at the <a href="http://www.meetup.com/Thessaloniki-Node-js-Meetup/events/222016697/" target="_blank" rel="noreferrer noopener">meetup</a> and you liked my talk, please ping me on <a href="http://twitter.com/kbariotis" target="_blank" rel="noreferrer noopener">Twitter</a> with notices and suggestions.</p>\n<p>Thank you.</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/references-from-my-javascript-101/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2015-05-01T15:33:19.000Z",path:"/references-from-my-javascript-101/",tags:"javascript, skgnodejs, meetup, node.js",title:"References from my Javascript 101",draft:null}}}}}});
//# sourceMappingURL=path---rest-api-error-handling-with-express-js-936c5c941f34ca5235db.js.map