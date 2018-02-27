webpackJsonp([0xbc1286aa1dda],{553:function(a,n){a.exports={data:{file:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQBAgUD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIB/9oADAMBAAIQAxAAAAGXEfnO2KxXytBY6QBP/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIDEQASIiH/2gAIAQEAAQUC2qMsrDRjkh7U+9ZIKYC8jNp//8QAFxEBAAMAAAAAAAAAAAAAAAAAAAEQIf/aAAgBAwEBPwFlQ//EABkRAAEFAAAAAAAAAAAAAAAAAAABECExQf/aAAgBAgEBPwGWwWz/xAAbEAACAgMBAAAAAAAAAAAAAAAAEQEhAxAxgf/aAAgBAQAGPwK2dsYo5BBWReaRB//EABwQAAICAwEBAAAAAAAAAAAAAAERACExQVFhcf/aAAgBAQABPyHzg5KmRyuAZAwYJ2aHFOw5Qmlybntx2y3CnEl/Z//aAAwDAQACAAMAAAAQOyi8/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERMUH/2gAIAQMBAT8QUXCB6YR//8QAGhEAAgIDAAAAAAAAAAAAAAAAAAERMSFBsf/aAAgBAgEBPxByVkzvonYxY//EAB0QAQEAAwACAwAAAAAAAAAAAAERACFBMVFhcbH/2gAIAQEAAT8Q6uhuUW+P3HKhIpbqr8JMNj2KrvBpVoF3uLYUDX3imLRSGt4ck1onhy7wNT0XD24jIs1n/9k=",aspectRatio:.9657118055555556,src:"/static/avatar-820706df6fdb07a9b021a790449fec17-381d6.jpg",srcSet:"/static/avatar-820706df6fdb07a9b021a790449fec17-62f05.jpg 200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-dc2b4.jpg 400w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-381d6.jpg 800w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-e5d70.jpg 1200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-d14e0.jpg 1600w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-9cc71.jpg 2225w",srcWebp:"/static/avatar-820706df6fdb07a9b021a790449fec17-fefde.webp",srcSetWebp:"/static/avatar-820706df6fdb07a9b021a790449fec17-5eed2.webp 200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-68e3c.webp 400w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-fefde.webp 800w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-300fe.webp 1200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-ed5bd.webp 1600w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-9442a.webp 2225w",sizes:"(max-width: 800px) 100vw, 800px"}}},site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I am Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:"",excerpt:"",frontmatter:{date:"March 10, 2017",path:"/drafts/microservices-lets-talk-about-boundaries/",tags:"MicroServices",title:"Microservices: lets talk about boundaries",draft:!0}}},pathContext:{prev:{excerpt:"Writing CSS is hard! Especially cross browser testing, this is like the least fun game ever. But still, it's a big deal in our day to day life and you always feel good by the outcome. Personally, I am reusing whatever I can get off the internet and…",html:'<p>Writing CSS is hard! Especially cross browser testing, this is like the least fun game ever. But still, it\'s a big deal in our day to day life and you always feel good by the outcome.</p>\n<p>Personally, I am reusing whatever I can get off the internet and the open source community. <a href="http://getbootstrap.com" target="_blank" rel="noreferrer noopener">Bootstrap</a> is an example of this. Bootstrap is a fine set of reusable components you can just plug into your website. The thing is that it\'s quite big and usually you won\'t be needing all of the <a href="http://getbootstrap.com/components/" target="_blank" rel="noreferrer noopener">components</a> it offers.</p>\n<p>Furthermore, the latest version of Bootstrap still requires jQuery which I am trying to avoid. Especially for smaller projects that have a few click events and a contact form, it\'s really not that necessary.</p>\n<p>So, like a true hacker, I am using SASS to build my CSS files and my main file looks like this at first:</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code><span class="token property"><span class="token variable">$bootstrap-sass-asset-helper</span></span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/variables"</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/mixins"</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/normalize"</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/print"</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/glyphicons"</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/scaffolding"</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/type"</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/grid"</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/forms"</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/buttons"</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/utilities"</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/responsive-utilities"</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>I am using <a href="https://webpack.js.org" target="_blank" rel="noreferrer noopener">webpack</a> to parse the files. Here\'s an example configuration of <a href="https://github.com/kbariotis/webpack-patterns" target="_blank" rel="noreferrer noopener">webpack along with Bootstrap</a>.</p>\n<p>The end file will contain only the essentials components I am going to need. You may have already spotted that I don\'t include any <a href="http://getbootstrap.com/javascript/" target="_blank" rel="noreferrer noopener">components that require Javascript</a> thus jQuery. I am not going to include Bootstrap\'s Javascript files either.</p>\n<p>Great, now let\'s write some HTML:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container posts-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row posts-row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col-sm-6 col-md-3 posts-row__post<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>post__title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Post title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col-sm-6 col-md-3 posts-row__post<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>post__title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Another blog post<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Ok it works. But, there is a strong coupling with Bootstrap\'s grid system and our HTML code. Since Bootstrap is a CSS framework, only our CSS code should be dealing with it. This way I could remove Bootstrap in the future and only have to change my CSS code, not the HTML too.</p>\n<p>Let\'s rewrite:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>posts-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>posts-row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>posts-row__post<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>post__title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Post title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>posts-row__post<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>post__title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Another blog post<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Yeap, much cleaner, readable and domain oriented. Now let\'s tie this together with Bootstrap:</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code><span class="token selector">.posts-container </span><span class="token punctuation">{</span>\n  <span class="token keyword">@extend</span> .container<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.posts-row </span><span class="token punctuation">{</span>\n  <span class="token keyword">@include</span> <span class="token function">make-row</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.posts-row__post </span><span class="token punctuation">{</span>\n  <span class="token keyword">@include</span> <span class="token function">make-sm-column</span><span class="token punctuation">(</span>6<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">@include</span> <span class="token function">make-md-column</span><span class="token punctuation">(</span>3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>We either extend a Bootstrap\'s class or using it\'s <a href="https://github.com/twbs/bootstrap-sass/blob/mast../static/stylesheets/bootstrap/mixins/_grid.scss" target="_blank" rel="noreferrer noopener">mixins</a>.</p>\n<p>Now only our CSS knows about Bootstrap. HTML doesn\'t care. Bootstrap can be anyone of your favorite CSS frameworks.</p>\n<p>If I was about to switch to Flexbox for example, I would go like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code><span class="token selector">.posts-row </span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.posts-row__post </span><span class="token punctuation">{</span>\n  <span class="token property">flex</span><span class="token punctuation">:</span> 1 0 200px<span class="token punctuation">;</span>\n  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This is how I always start a CSS codebase for a project. It helps me to create prototypes quickly and once the project hits a more mature stage, I could start rewriting and throwing away dependencies.</p>\n<p>To conclude, try to keep your codebase clean and not mixed-up. Have a vision in your mind of how it is going to evolve in the future. Once you have that, you can start thinking of you can ease the process in the future.</p>\n<p>Leave me a comment if you liked my approach on starting a new custom CSS framework.</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/writing-a-custom-css-framework/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2017-04-04T09:40:42.000Z",path:"/writing-a-custom-css-framework/",tags:"CSS, Bootstrap",title:"Writing a custom CSS framework",draft:null}},next:{excerpt:"It all started when  Adonis  told me that he was looking to contribute to some open source projects. He had a list of projects that he actively uses but he didn't want to always be checking their issues list for new issues that he could get his hands…",html:'<p>It all started when <a href="https://twitter.com/_adonisk" target="_blank" rel="noreferrer noopener">Adonis</a> told me that he was looking to contribute to some open source projects. He had a list of projects that he actively uses but he didn\'t want to always be checking their issues list for new issues that he could get his hands on. So we thought it would be cool if we had a way to watch a GitHub repository for issues of specific tags, e.g. "Need help", "Good first contribution", etc.</p>\n<p>I thought that\'s something I could easily hack in a weekend. So here\'s <a href="https://gityeller.com" target="_blank" rel="noreferrer noopener">GitYeller</a>.</p>\n<h2 id="stack"><a href="#stack" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Stack</h2>\n<p>GitYeller is built using JavaScript. Node.js and React more specifically. It\'s hosted on a <a href="https://m.do.co/c/2b3d657e5315" target="_blank" rel="noreferrer noopener">DigitalOcean droplet</a>, uses a <a href="https://letsencrypt.org/" target="_blank" rel="noreferrer noopener">Let\'s Encrypt</a> certificate, <a href="https://www.mailgun.com" target="_blank" rel="noreferrer noopener">Mailgun</a> for transactional emails and a MongoDB for persistent storage.</p>\n<p>It looks like this:</p>\n<p>\n          <a\n            class="gatsby-resp-image-link"\n            href="undefined"\n            style="display: block"\n            target="_blank"\n            rel="noopener"\n          >\n            <span\n              class="gatsby-resp-image-wrapper"\n              style="position: relative; z-index: -1; display: block; "\n            >\n              <span\n                class="gatsby-resp-image-background-image"\n                style="padding-bottom: 12.254160363086234%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAk0lEQVQI12P4/PHr/28fv/z5/+vf/w+vP1QxQMHzp2+c/gPB+zef8kD8bWuPsJamTGQBYvaqzKmsB3edYwWJf3j/eRFI3fePX/5//fz9JsO3L9+//vnw8e//v//+f3v3aT3MwBfP34WDFH5+/7kZxJ/Vu44baBhvafJE1vK0yTxz+jdwg8S/f/85E6Tu7/uPv0A0ACb7YgF+qZnEAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n              >\n                <img\n                  class="gatsby-resp-image-image"\n                  style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n                  alt=""\n                  title=""\n                  src="/static/GitYellerDiagram-56cb14d1d599ba64fc46546d2ec6c754-34135.png"\n                  srcset="/static/GitYellerDiagram-56cb14d1d599ba64fc46546d2ec6c754-ec056.png 188w,\n/static/GitYellerDiagram-56cb14d1d599ba64fc46546d2ec6c754-44ccd.png 375w,\n/static/GitYellerDiagram-56cb14d1d599ba64fc46546d2ec6c754-34135.png 661w"\n                  sizes="(max-width: 661px) 100vw, 661px"\n                />\n              </span>\n            </span>\n          </a>\n          </p>\n<p>So the Front End app is responsible for gathering emails from the user and inserting them into MongoDB. The worker is continuously traversing the collection and checking them against GitHub to see if there is anything new. It\'s that simple!</p>\n<h2 id="worker"><a href="#worker" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Worker</h2>\n<p>At first, I thought a queue would be a good fit for this since I needed to keep the order that the documents were being created. I knew that the purpose of a queue was to keep the messages processing in order but only to be processed once. I wanted to keep processing the same messages over and over again. So I decided to go with the simplest way possible. Let\'s have a worker continuously fetching a collection over and over again.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">/**\n * Main run function that handles the infinite\n * loop over the database\n */</span>\n<span class="token keyword">const</span> <span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token punctuation">(</span>cursor<span class="token punctuation">,</span> worker<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>cursor<span class="token punctuation">.</span><span class="token function">isClosed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    cursor<span class="token punctuation">.</span><span class="token function">rewind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> cursor\n    <span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>subscription <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>subscription<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'Cursor got to the end\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> subscription<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>subscription <span class="token operator">=></span> worker<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>subscription<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=></span> logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">run</span><span class="token punctuation">(</span>cursor<span class="token punctuation">,</span> worker<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>By passing a <a href="https://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html" target="_blank" rel="noreferrer noopener">MongoDB cursor object</a> and a function that you want to be called with every item, it keeps traversing the collection and gets updated even when a new item is being created. There is no need to restart the connection to MongoDB.</p>\n<p>The <code>setTimeout</code> ensures that the next call will get it\'s own call stack so we don\'t overflow the current one.</p>\n<p><a href="https://github.com/kbariotis/gityeller/blob/master/worker/index.js" target="_blank" rel="noreferrer noopener">Here\'s the complete</a> worker\'s source code.</p>\n<h2 id="check-against-github"><a href="#check-against-github" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Check against GitHub</h2>\n<p>Let\'s see how we are asking GitHub if it has something new to show us. The actual API call is this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>URL: api.github.com/owner/repo?labels=label</code></pre>\n      </div>\n<p>This will return us a list of issues labeled with that specific label of that repository.</p>\n<p>Once we make this request for the first time, we have a timestamp of the latest check. Next time, we will just query with that timestamp, in order to get only the issues that have been created between the last check and now (Actually GitHub returns those issues that have even been updated during that period, so <a href="https://github.com/kbariotis/gityeller/blob/master/worker/worker.js#L89" target="_blank" rel="noreferrer noopener">I have to make some extra checks</a>). Now the query looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>URL: api.github.com/owner/repo?labels=label&since=LATEST_RESPONSE_DATE</code></pre>\n      </div>\n<p>GitHub\'s API has a limit. They allow you to do certain API calls in a certain amount of time. I wanted to minimize the calls as much possible because once I hit that limit I won\'t be able to take the results I wanted so the users will never get notified.</p>\n<p>Each time we are making this request, GitHub will count minus one requests of our available quota. In order to save some juice I am using <a href="https://developer.github.com/v3/#conditional-requests" target="_blank" rel="noreferrer noopener">GitHub\'s conditional requests</a>. The above request will return us an ETag header with a value. We can use that value to validate whether our latest response is outdated or not. If it\'s not, GitHub will respond with a 304 Not Modified status code and an empty body.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>URL: api.github.com/owner/repo?labels=label&since=LATEST_RESPONSE_DATE\nHEADERS: If-None-Match: LATEST_RESPONSE_ETAG</code></pre>\n      </div>\n<p>This way the request won\'t be counted. We saved a request and we will only be charged if there is actually something new.</p>\n<p>Read more about <a href="https://bitworking.org/news/150/REST-Tip-Deep-etags-give-you-more-benefits" target="_blank" rel="noreferrer noopener">ETags and "conditional requests"</a>.</p>\n<h2 id="conclusion"><a href="#conclusion" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conclusion</h2>\n<p>Certainly, the solution is not optimal. Once the collection grows bigger, the time between the checks for each individual item in the collection will also be long. But it was a fun weekend project. I am already watching the <a href="https://github.com/nodejs/node" target="_blank" rel="noreferrer noopener">node.js</a> repo for new issues labeled <code>v7.x</code>.</p>\n<p>Which repo are you going to watch? Leave me a comment if you liked my weekend project. If you think you can help me make it better, please see the <a href="https://github.com/kbariotis/gityeller" target="_blank" rel="noreferrer noopener">source code</a>.</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/gityeller-com-weekend-project/index.md absPath of file >>> MarkdownRemark",timeToRead:4,frontmatter:{date:"2017-03-01T08:49:08.000Z",path:"/gityeller-com-weekend-project/",tags:"node.js, mongodb",title:"GitYeller.com is my latest weekend project",draft:null}}}}}});
//# sourceMappingURL=path---drafts-microservices-lets-talk-about-boundaries-76cb206098f3d94d2ffd.js.map