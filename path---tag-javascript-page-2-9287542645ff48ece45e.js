webpackJsonp([0xd4eddbdbd7e4],{665:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I am Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}}},pathContext:{posts:[{excerpt:"Client Side JS frameworks have come a long way. Since the rise of  Backbone.js  back at 2010, the way we write Javascript and everything about it has changed. A lot of frameworks have born, almost one for every need. But what does a Client Side JS…",html:'<p>Client Side JS frameworks have come a long way. Since the rise of <a href="http://backbonejs.org/" target="_blank" rel="noreferrer noopener">Backbone.js</a> back at 2010, the way we write Javascript and everything about it has changed. A lot of frameworks have born, almost one for every need. But what does a Client Side JS framework consists of? Should I adopt one out of the wild or write my own? As always, it depends. And you should do your <a href="https://medium.com/@kbariotis/choosing-your-next-best-tool-fba96eb19a7f" target="_blank" rel="noreferrer noopener">homework</a> before choosing one or the other.</p>\n<p>I\'ve come up with a list of six concepts you should consider adopting on your next setup.</p>\n<h3 id="mv"><a href="#mv" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>MV*</h3>\n<p>Whether it\'s MVC or any other convention, your framework should have a standard way of doing things, naming things and moving around things. Never write or mix JS inside HTML unless you know what you\'re doing. When you\'re in a seek for a file, you should know exactly where to look and it has to be there.</p>\n<p>A structure like that should help you organise your code. Keeping everything where it should be. Organise both by type and module, so many teams can work on different parts of the project and not having conflicts.</p>\n<p>Backbone.js first taught us how to organise our code, using the <a href="http://addyosmani.com/blog/understanding-mvc-and-mvp-for-javascript-and-backbone-developers/" target="_blank" rel="noreferrer noopener">MVP pattern</a>. Since then lots of conventions have come up.</p>\n<h3 id="dependency-injection--dependency-management"><a href="#dependency-injection--dependency-management" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dependency Injection / Dependency Management</h3>\n<p>Modularizing everything is not only a current trend but a trend that our developers ancestor would like us to follow. It will allow you for much code reusability and less duplication. Modules are easy to share, as easy as is to use other\'s people modules.</p>\n<p>But those modules must be managed and be injected in the appropriated places and not everywhere. They should also be called by the modules that need them and not by a <code>script</code> tag or any other place, keeping also the required HTTP calls for dependencies at the greatest low.</p>\n<p>Your framework can do some sort of <a href="https://en.wikipedia.org/wiki/Dependency_injection" target="_blank" rel="noreferrer noopener">Dependency Injection</a>. Each place of your application, should load only the modules it needs. <a href="https://docs.angularjs.org/guide/di" target="_blank" rel="noreferrer noopener">Angular\'s powerful DI</a> system does lazy loading only the modules you need each time. From the docs:</p>\n<blockquote>\n<p>The Angular injector subsystem is in charge of creating components, resolving their dependencies, and providing them to other components as requested.</p>\n</blockquote>\n<h3 id="2-way-data-bindings"><a href="#2-way-data-bindings" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2 Way Data Bindings</h3>\n<p>I first saw this concept with <a href="https://docs.angularjs.org/guide/databinding" target="_blank" rel="noreferrer noopener">Angular</a>. I\'ve never encountered something like that before and I am not sure if it was exist. But that blew up my mind.</p>\n<p>Imagine a form with 10 input fields and an object that you just fetched from the server. Now you need to populate the form with that object so the user can edited, hit save and send the object back to the server.</p>\n<p>You start by selecting fields using a library like jQuery. One after the other and then put the appropriate field of the object into that field. You could also use a function that will take the name of each field in the form and seek that property inside the object.</p>\n<p>This is what I am talking about. All that, should be done by the framework. Not you. And it should be done in a clever, performant and robust way. Make sure your framework support this.</p>\n<h3 id="virtual-dom-diffing"><a href="#virtual-dom-diffing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Virtual DOM diffing</h3>\n<p>Oh, the Virtual DOM. The sugar on top of everything. DOM manipulation is expensive. Even though computing resources are cheap and almost in saturation, still DOM is expensive. So what we do? Instead of talking to the DOM directly, we talk to a Virtual DOM, one that is in memory. When we done and we want to render, we compute a diff between the real DOM and the Virtual DOM. So we render only the changes. In other words, we apply a patch on top of the real DOM. Much like how git works.</p>\n<p><a href="http://kostasbariotis.com/hands-on-react-js/" target="_blank" rel="noreferrer noopener">React</a> works that way. By componetizing our DOM, we almost never compute the diff in the whole DOM, just inside the components we like to rerender.</p>\n<p>This is pretty much a safe technique and I would say although not a must, you should consider adopting it. Comes handy, especially on those, rich with data, UIs where frequently rerendering is required.</p>\n<h3 id="client-side-routing"><a href="#client-side-routing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Client Side Routing</h3>\n<p>Doing Server requests while bouncing on a web site\'s pages is time expensive. What if we could only load the assets we need to render a specific page and let the browser know, so a User can hit the Back button and go the previous state? This is the Client Side routing which every major framework supports out of the box.</p>\n<p>This site runs with <a href="http://www.pixelstech.net/article/1366737736-What-is-pjax-and-why-we-should-use-it" target="_blank" rel="noreferrer noopener">pjax</a> the simplest client side routing technique. Open Developer Tools at the Network tab and see it your self.</p>\n<p>Although, Client Side routing hides troubles, especially with SEO, it\'s a neat technique.  Lots of big players, like Youtube and Twitter, are using for a long time now.</p>\n<p>And this brings me to the final feature:</p>\n<h3 id="isomorphic--universal-javascript"><a href="#isomorphic--universal-javascript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Isomorphic / Universal Javascript</h3>\n<p><a href="https://www.meteor.com/" target="_blank" rel="noreferrer noopener">Meteor.js</a> first gave us the opportunity to run the same code both in the Server side and in the Client side. Imagine if we could allow a User to use the Client Side app while letting Users (or search engines) with no or limited Javascript support on their Browsers to use our Server Side app. This must be the real deal. (BTW, of course <a href="http://searchengineland.com/tested-googlebot-crawls-javascript-heres-learned-220157" target="_blank" rel="noreferrer noopener">Google can understand Javascript</a>)</p>\n<p>After Meteor.js, Isomorphic Javascript got showed up everywhere while Airbnb\'s <a href="http://nerds.airbnb.com/weve-open-sourced-rendr-run-your-backbonejs-a/" target="_blank" rel="noreferrer noopener">Rendr</a> framework was introduced. Since then, <a href="http://isomorphic.net/" target="_blank" rel="noreferrer noopener">Isomorphic</a> evolved into the so called <a href="https://medium.com/@mjackson/universal-javascript-4761051b7ae9" target="_blank" rel="noreferrer noopener">Universal Javascript</a> that made our apps <a href="http://techblog.netflix.com/2015/08/making-netflixcom-faster.html" target="_blank" rel="noreferrer noopener">even faster</a>.</p>\n<p>In case that you need the best of the two worlds, Server side and Client size, this must be the feature you need.</p>\n<h2 id="closing"><a href="#closing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Closing</h2>\n<p>Client Side Javascript have become a trivial part of our every day\'s development life. Keeping it updated, organised and features full can guarantee a performant project and/or business.</p>\n<p>I will try, on a future post, to write an implementation of the above, using separate modules that I\'ve picked out of the wild. In cases where you can\'t/want to use a framework, building your own client side infrastructure is absolutely OK.</p>\n<p><strong>So, what are your favorite concepts of a Client Side Javascript framework?</strong></p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/state-of-client-side-js-frameworks/index.md absPath of file >>> MarkdownRemark",timeToRead:5,frontmatter:{date:"2015-09-19T09:54:54.000Z",path:"/state-of-client-side-js-frameworks/",tags:"javascript, client-side, frameworks",title:"The road to Client Side Javascript",draft:null}},{excerpt:"There is no way, by default, to ensure that your Javascript Object you passed into a function will stay as is nevertheless. And that creates a problem and a lot of side effects. To avoid this common pitfall we create immutable objects, those that no…",html:'<p>There is no way, by default, to ensure that your Javascript Object you passed into a function will stay as is nevertheless. And that creates a problem and a lot of side effects.</p>\n<p>To avoid this common pitfall we create immutable objects, those that no one can change during the app\'s lifecycle. By default, all Javascript types, except objects, define immutable values.</p>\n<p>Have you ever tried to alter an object, say to delete a property, but you couldn\'t? Say to delete a Mongoose document\'s property? Mongoose documents are immutable and their properties can\'t be alter in any way, except of altering their actual values that they\'re holding.</p>\n<h3 id="cloning-objects-in-javascript"><a href="#cloning-objects-in-javascript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cloning objects in Javascript</h3>\n<p>So what do we do when we need to alter them? We clone them.</p>\n<p>The most easy way to clone an object is the simple hack:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> object <span class="token operator">=</span> <span class="token punctuation">{</span> firstname<span class="token punctuation">:</span> <span class="token string">\'Kostas\'</span><span class="token punctuation">,</span> lastname<span class="token punctuation">:</span> <span class="token string">\'Bariotis\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> clone <span class="token operator">=</span> JSON<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>JSON<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>That hack have been always working for me and I\'m using in every chance I\'ve got.</p>\n<p>For Node.js/jQuery users there are also the appropriate <code>extend</code> methods:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> extend <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'util\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>_extend<span class="token punctuation">;</span>\n<span class="token keyword">var</span> clone <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> object<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> clone <span class="token operator">=</span> jQuery<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> object<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>There is also <a href="http://stackoverflow.com/a/728694/1955940" target="_blank" rel="noreferrer noopener">this</a> answer that covers a generic <code>clone</code> functionality.</p>\n<h3 id="create-immutable-javascript-objects"><a href="#create-immutable-javascript-objects" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Create immutable Javascript objects</h3>\n<p>There are two ways:</p>\n<ol>\n<li>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" target="_blank" rel="noreferrer noopener">Object.definePropety()</a>\nUsing Javascript\'s <code>defineProperty</code> we can create non configurable and/or hidden properties inside objects. This way we can be sure that a developer can\'t mess with our code or hide from them info about our structures that they don\'t have to know about. <strong><code>defineProperty</code> won\'t throw an error while you\'re trying to alter the object\'s properties and this can really be a PITA.</strong></p>\n</li>\n<li>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" target="_blank" rel="noreferrer noopener">Object.freeze()</a> / <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal" target="_blank" rel="noreferrer noopener">Object.seal()</a>\n<code>freeze</code> and <code>seal</code> are basically shorthands for the <code>defineProperty</code> and can both come in handy. Make sure that their compatibility tables meet your needs before you use them. <strong>Will throw an error and will save you hours of frustration.</strong></p>\n</li>\n</ol>\n<h2 id="the-end"><a href="#the-end" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The End</h2>\n<p>Next time you are writing a Javascript module and you are exposing objects that other developers may use, make sure that they have the exact needed permissions to alter your objects, otherwise they may broke your code without even realising it. Make sure also to document it.</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/immutable-objects-javascript/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2015-09-14T13:51:58.000Z",path:"/immutable-objects-javascript/",tags:"javascript, node.js",title:"Immutable Objects with Javascript",draft:null}},{excerpt:"A week ago  Thanasis  asked me to make a Javascript 101 for the  SKG Node.js monthly meetup . The trap? I had to present it a week after. :/ At first, it looked not such an easy task, since I hadn't have any slides or anything ready for it. Fuck it…",html:'<p>A week ago <a href="http://thanpol.as/" target="_blank" rel="noreferrer noopener">Thanasis</a> asked me to make a Javascript 101 for the <a href="http://www.meetup.com/Thessaloniki-Node-js-Meetup/" target="_blank" rel="noreferrer noopener">SKG Node.js monthly meetup</a>. The trap? I had to present it a week after. :/ At first, it looked not such an easy task, since I hadn\'t have any slides or anything ready for it. Fuck it. Challenge accepted.</p>\n<p>I strongly believe that it’s the pressure that makes you a better professional let alone a better person. Life doesn’t wait. Let alone the community. Of course, I would be more pleased if I had the time to prepare a better presentation. But even this way I think it was a great experience. People liked it.</p>\n<p>Thanasis offered me even an easier solution. Take a ready presentation, study it and present it. Nah, I didn’t want it that way. I need it to be me. To have my own slides. My own talk. After all it’s me who had to present it. It had to had my style.</p>\n<p>Anyway, people asked for the <a href="http://slides.com/kostasbariotis/javascript-101" target="_blank" rel="noreferrer noopener">slides</a> and for some references. So here they are.</p>\n<br/>\n<iframe src="//slides.com/kostasbariotis/javascript-101/embed?style=light" width="100%" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<br/>\n<p>80% of the talk were studied by <a href="http://www.amazon.com/Professional-JavaScript-Developers-Nicholas-Zakas/dp/1118026691" target="_blank" rel="noreferrer noopener">Professional Javascript Developers from Nikolas Zakas</a>. I strongly recommend this book, but be aware it’s a \'heavy\' one. Even being quite old, it still has some neat advices and can be a great reference for the future.</p>\n<p>I asked <a href="https://twitter.com/adon1sk" target="_blank" rel="noreferrer noopener">Adonis</a> to borrow me his <a href="http://shop.oreilly.com/product/9780596517748.do" target="_blank" rel="noreferrer noopener">Javascript: The Good Parts</a> a week ago but still hasn’t remember it. I took a quick look on it online (using the previews) and stole some examples from there too. I would recommend it.</p>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/" target="_blank" rel="noreferrer noopener">MDN</a> also helped me a lot, being in the first 10 results of Google searches, I always choose it before I dive deeper. (Still avoiding w3school even though I try to support them. Still can’t trust their source. :/)</p>\n<p>You can find Thanasis\'s slides <a href="https://speakerdeck.com/thanpolas/assets-on-the-cloud" target="_blank" rel="noreferrer noopener">here</a> of his <em>Assets on the Cloud</em> talk, which was amazing.</p>\n<p>Finaly, check out the photos(<a href="http://www.meetup.com/Thessaloniki-Node-js-Meetup/photos/26088965/" target="_blank" rel="noreferrer noopener">here</a>, <a href="https://www.flickr.com/photos/christosbacharakis/sets/72157652297259605/" target="_blank" rel="noreferrer noopener">here</a>) we took that night.</p>\n<p>If you were at the <a href="http://www.meetup.com/Thessaloniki-Node-js-Meetup/events/222016697/" target="_blank" rel="noreferrer noopener">meetup</a> and you liked my talk, please ping me on <a href="http://twitter.com/kbariotis" target="_blank" rel="noreferrer noopener">Twitter</a> with notices and suggestions.</p>\n<p>Thank you.</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/references-from-my-javascript-101/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2015-05-01T15:33:19.000Z",path:"/references-from-my-javascript-101/",tags:"javascript, skgnodejs, meetup, node.js",title:"References from my Javascript 101",draft:null}},{excerpt:"I haven't really gotten into  React.js  yet, even though I have heard about it about a year ago. It was this video,  about react-native  and how you can build native iOS apps  with Javascript, that really got me thinking. So, I started searching…",html:'<p>I haven\'t really gotten into <a href="https://facebook.github.io/react/" target="_blank" rel="noreferrer noopener">React.js</a> yet, even though I have heard about it about a year ago. It was this video, <a href="https://www.youtube.com/watch?v=KVZ-P-ZI6W4" target="_blank" rel="noreferrer noopener">about react-native</a> and how you can build native iOS apps  with Javascript, that really got me thinking.</p>\n<p>So, I started searching around, reading the <a href="https://facebook.github.io/react/docs/getting-started.html" target="_blank" rel="noreferrer noopener">docs</a>, reading what others <a href="http://blog.reverberate.org/2014/02/react-demystified.html" target="_blank" rel="noreferrer noopener">think</a> <a href="http://blog.andrewray.me/reactjs-for-stupid-people/" target="_blank" rel="noreferrer noopener">of it</a> and playing with this <a href="https://github.com/RickWong/react-isomorphic-starterkit" target="_blank" rel="noreferrer noopener">amazing piece of code</a>. But before you go too deep, let me straighten out some facts for you.</p>\n<h2 id="what-react-isnt"><a href="#what-react-isnt" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What React isn\'t</h2>\n<p>React is not a complete framework, kit or anything else. From the homepage:</p>\n<blockquote>\n<p>A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES</p>\n</blockquote>\n<p>You won\'t be able to use it on it\'s own. React is a library. People refer to it as the <a href="http://blog.codinghorror.com/understanding-model-view-controller/" target="_blank" rel="noreferrer noopener"><strong>V</strong></a> from the <a href="http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller" target="_blank" rel="noreferrer noopener"><strong>MVC</strong></a>. But even as is, it does a hell of amazing job. Here\'s why.</p>\n<h2 id="react-components"><a href="#react-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Components</h2>\n<p>React consists of components. You may have already heard about <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank" rel="noreferrer noopener">Web Components</a> that  allow us to create custom HTML tags and include them anywhere on the outside world as easile as we include an <code>H1</code> tag. React components work just like this but can only be used inside the React ecosystem.</p>\n<p>Furthermore, Facebook implemented a <a href="http://facebook.github.io/jsx/" target="_blank" rel="noreferrer noopener">new syntax language</a> based on XML in order to compile their new XML based Components into vanilla Javascript. By doing this, we are able to write HTML inside Javascript and not being worry about it.</p>\n<p>What? Did I just say HTML inside Javascript? Isn\'t that against the whole MVC movement? Well sort of... But React\'s team thinks this wa,y we will be able to maintain our code more easily since it exists on fewer files. Newcomers will get their hands on our code more quickly.The new language JSX looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>React<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n\t<span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token punctuation">,</span> world<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">,</span>\n    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'example\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Lets talk a little bit more about the components. A component is basically a Javascript class that only knows how to render itself. A component can also contain child components it communicates with. This can help us write more modular code.</p>\n<p>Think of a <code>List</code> element. We will write a List component that will contain a <code>ListItem</code> component. Every time we need to display it, the <code>List</code> component will render a <code>&#x3C;ul/></code> tag with a bunch of <code>ListItem</code> components,, and each of these <code>ListItem</code>s will render <code>&#x3C;li/></code>, each with their information.</p>\n<p>But wait? Did you said... render... every time? Like every time someone adds something in the list we will rerender it?</p>\n<h2 id="reconciliation"><a href="#reconciliation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reconciliation</h2>\n<p>Enter the <a href="https://facebook.github.io/react/docs/reconciliation.html" target="_blank" rel="noreferrer noopener">Virtual DOM magic, or in React\'s terms, the Reconciliation</a>. The essence of React. React will not render directly to the DOM every time something changes. Instead, it will render to its own internal DOM (the Virtual DOM) and then  compute diffs on the real DOM. React makes only the appropriate changes to the DOM to reflect the new changes. We never have to interact with the DOM again. We may never even have to write external stylesheets. React <a href="http://facebook.github.io/react/tips/inline-styles.html" target="_blank" rel="noreferrer noopener">has you covered</a>.</p>\n<h2 id="conclusion"><a href="#conclusion" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conclusion</h2>\n<p>I would suggest getting your hands on the React\'s documentation as fast as possible. There are a lot of concepts you need to understand in order to grasp its full potential.</p>\n<p>As I said, in the beginning, it was <a href="https://github.com/facebook/react-native" target="_blank" rel="noreferrer noopener">react-native</a> that forced me to play with React. But there are a <a href="http://blog.risingstack.com/from-angularjs-to-react-the-isomorphic-way/" target="_blank" rel="noreferrer noopener">lot</a> <a href="https://facebook.github.io/flux/" target="_blank" rel="noreferrer noopener">more</a> goodies to explore and I haven\'t play with all of them yet.\nUntil next time, take care!</p>\n<p><em>Please let me know if I missed or misunderstood something, since it\'s my second day using React. If you liked my article please share it. :)</em></p>\n<p><em>I have to thank <a href="http://mplewis.com/" target="_blank" rel="noreferrer noopener">Matthew Lewis</a> for reviewing this article. Thank you Matt.</em></p>',
id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/hands-on-react-js/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2015-03-29T17:25:06.000Z",path:"/hands-on-react-js/",tags:"reactjs, javascript, node.js",title:"Hands on React.js",draft:null}}],tag:"javascript",pagesSum:2,page:2}}}});
//# sourceMappingURL=path---tag-javascript-page-2-9287542645ff48ece45e.js.map