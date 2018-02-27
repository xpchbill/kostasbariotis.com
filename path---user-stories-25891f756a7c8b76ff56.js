webpackJsonp([0x5e740c1c0360],{714:function(e,a){e.exports={data:{file:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQBAgUD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIB/9oADAMBAAIQAxAAAAGXEfnO2KxXytBY6QBP/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIDEQASIiH/2gAIAQEAAQUC2qMsrDRjkh7U+9ZIKYC8jNp//8QAFxEBAAMAAAAAAAAAAAAAAAAAAAEQIf/aAAgBAwEBPwFlQ//EABkRAAEFAAAAAAAAAAAAAAAAAAABECExQf/aAAgBAgEBPwGWwWz/xAAbEAACAgMBAAAAAAAAAAAAAAAAEQEhAxAxgf/aAAgBAQAGPwK2dsYo5BBWReaRB//EABwQAAICAwEBAAAAAAAAAAAAAAERACExQVFhcf/aAAgBAQABPyHzg5KmRyuAZAwYJ2aHFOw5Qmlybntx2y3CnEl/Z//aAAwDAQACAAMAAAAQOyi8/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERMUH/2gAIAQMBAT8QUXCB6YR//8QAGhEAAgIDAAAAAAAAAAAAAAAAAAERMSFBsf/aAAgBAgEBPxByVkzvonYxY//EAB0QAQEAAwACAwAAAAAAAAAAAAERACFBMVFhcbH/2gAIAQEAAT8Q6uhuUW+P3HKhIpbqr8JMNj2KrvBpVoF3uLYUDX3imLRSGt4ck1onhy7wNT0XD24jIs1n/9k=",aspectRatio:.9657118055555556,src:"/static/avatar-820706df6fdb07a9b021a790449fec17-381d6.jpg",srcSet:"/static/avatar-820706df6fdb07a9b021a790449fec17-62f05.jpg 200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-dc2b4.jpg 400w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-381d6.jpg 800w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-e5d70.jpg 1200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-d14e0.jpg 1600w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-9cc71.jpg 2225w",srcWebp:"/static/avatar-820706df6fdb07a9b021a790449fec17-fefde.webp",srcSetWebp:"/static/avatar-820706df6fdb07a9b021a790449fec17-5eed2.webp 200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-68e3c.webp 400w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-fefde.webp 800w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-300fe.webp 1200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-ed5bd.webp 1600w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-9442a.webp 2225w",sizes:"(max-width: 800px) 100vw, 800px"}}},site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I am Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:'<p><a href="https://en.wikipedia.org/wiki/User_story" target="_blank" rel="noreferrer noopener">User stories</a> are a part of every agile driven process that teams usually follow.</p>\n<p>Often, even a developer can be called to write a story, based on a business requirement, that will eventually be called to develop it. Here\'s an example:</p>\n<p><em>As a Developer, I want to be able to filter Blog Posts by Category ID, so I can display a filtered table.</em></p>\n<p>But one can easily be distracted and write a story based on their understanding of how consumers are using their code. Much like product owners.</p>\n<p>Before you start, talk to your consumers. See how their are using your code or your REST API. Ask them for feedback and for possible hard times they have with it.</p>\n<p>Then, write your user stories, based on that.</p>',excerpt:"User stories  are a part of every agile driven process that teams usually follow. Often, even a developer can be called to write a story…",frontmatter:{date:"October 22, 2015",path:"/user-stories/",tags:null,title:"User Stories as in User Stories",draft:null}}},pathContext:{prev:{excerpt:"While we were moving towards the  Microservices  path at  Goodvidio , we were in the need of keeping in a central place the configuration of our system. Thus, we created the  Configuration Service . The  Configuration Service  exposes a REST API…",html:'<p>While we were moving towards the <a href="http://martinfowler.com/microservices/" target="_blank" rel="noreferrer noopener">Microservices</a> path at <a href="https://goodvid.io" target="_blank" rel="noreferrer noopener">Goodvidio</a>, we were in the need of keeping in a central place the configuration of our system. Thus, we created the <em>Configuration Service</em>.</p>\n<p>The <em>Configuration Service</em> exposes a REST API (like all of our services) and provides a place to store configuration variables and values to all of our developers. Each Service of our infrastructure can have a record stored in the <em>Configuration Service</em>. Those records will then be consumed and manipulated by a front end screen, so that even non technical people can alter their values.</p>\n<p>As a developer that I am working in a feature and I want to make use of the <em>Configuration Service</em>, I must first make sure that there isn\'t already a record for the Service that I work on and if there isn\'t I have to create it.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>GET /v1/configurations/ONBOARDING</code></pre>\n      </div>\n<p>If the above call return an empty array, I can create it by <code>POST</code>ing a body:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">"_id"</span><span class="token operator">:</span> <span class="token string">"ONBOARDING"</span><span class="token punctuation">,</span>\n  <span class="token property">"configuration"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"free_trial_duration"</span> <span class="token operator">:</span> <span class="token string">"43800"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This way we keep all the configuration of our System in a central place and even the marketing team can decide some day to change the duration of the free trial period.</p>\n<p>That means fewer deployments, thus faster involvement.</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/the-configuration-service/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-11-13T18:51:34.000Z",path:"/the-configuration-service/",tags:"Microservices",title:"The Configuration Service",draft:null}},next:{excerpt:'With the rise of the upcoming  WebWorkers API  in the horizon, interesting things are emerging. And the one that got me go "whhaaaaat??" is the one that advices you to put all of your business logic inside a WebWorker. Whaaaaat? A WebWorker is a…',html:'<p>With the rise of the upcoming <a href="http://www.w3.org/TR/workers/" target="_blank" rel="noreferrer noopener">WebWorkers API</a> in the horizon, interesting things are emerging. And the one that got me go "whhaaaaat??" is the one that advices you to put all of your business logic inside a WebWorker. Whaaaaat?</p>\n<p>A WebWorker is a separate thread that runs Javascript but has no access to the DOM or the <code>window</code> object. But it can do complex queries and loops, accessing core <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers" target="_blank" rel="noreferrer noopener">functions and APIs</a>, while you are letting the main thread, the UI thread, to handle the UI stuff only.</p>\n<p>Rendering the DOM is so expensive, specially when it comes to complex interfaces we have nowadays. Not so long ago, the <a href="https://facebook.github.io/react/docs/reconciliation.html" target="_blank" rel="noreferrer noopener">VirtualDOM</a> introduced which tried to speed up the rendering process by rendering only what actually changed, instead of re-rendering the whole page. But, that\'s not enough apparently, since even such few changes can\'t be handle well by low powered devices such as mobiles phones and watches.</p>\n<p>In order to keep the 60fpm barrier, we are completely freeing the main thread to be able to handle the rendering only and we start WebWorkers to handle our business logic.</p>\n<p>I found <a href="http://www.pocketjavascript.com/blog/2015/11/23/introducing-pokedex-org" target="_blank" rel="noreferrer noopener">two</a> <a href="https://medium.com/@nsisodiya/flux-inside-web-workers-cc51fb463882#.iv69h6ih2" target="_blank" rel="noreferrer noopener">great</a> examples of this concept. Both, they are suggesting keeping the whole app outside the main thread and send there only the patch of the changed DOM to be rendered. The UI thread can then handle only rendering and complex fancy animations.</p>\n<p>Oh, by the way, Nodejs fans, <a href="https://github.com/nodejs/node/pull/2133" target="_blank" rel="noreferrer noopener">Workers are coming</a>.</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/ui-thread-free/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-10-15T00:00:00.000Z",path:"/drafts/ui-thread-free/",tags:null,title:"UI thread free",draft:!0}}}}}});
//# sourceMappingURL=path---user-stories-25891f756a7c8b76ff56.js.map