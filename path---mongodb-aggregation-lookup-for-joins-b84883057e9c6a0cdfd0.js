webpackJsonp([0x5b1d48fadf58],{598:function(e,t){e.exports={data:{file:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQBAgUD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIB/9oADAMBAAIQAxAAAAGXEfnO2KxXytBY6QBP/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIDEQASIiH/2gAIAQEAAQUC2qMsrDRjkh7U+9ZIKYC8jNp//8QAFxEBAAMAAAAAAAAAAAAAAAAAAAEQIf/aAAgBAwEBPwFlQ//EABkRAAEFAAAAAAAAAAAAAAAAAAABECExQf/aAAgBAgEBPwGWwWz/xAAbEAACAgMBAAAAAAAAAAAAAAAAEQEhAxAxgf/aAAgBAQAGPwK2dsYo5BBWReaRB//EABwQAAICAwEBAAAAAAAAAAAAAAERACExQVFhcf/aAAgBAQABPyHzg5KmRyuAZAwYJ2aHFOw5Qmlybntx2y3CnEl/Z//aAAwDAQACAAMAAAAQOyi8/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERMUH/2gAIAQMBAT8QUXCB6YR//8QAGhEAAgIDAAAAAAAAAAAAAAAAAAERMSFBsf/aAAgBAgEBPxByVkzvonYxY//EAB0QAQEAAwACAwAAAAAAAAAAAAERACFBMVFhcbH/2gAIAQEAAT8Q6uhuUW+P3HKhIpbqr8JMNj2KrvBpVoF3uLYUDX3imLRSGt4ck1onhy7wNT0XD24jIs1n/9k=",aspectRatio:.9657118055555556,src:"/static/avatar-820706df6fdb07a9b021a790449fec17-381d6.jpg",srcSet:"/static/avatar-820706df6fdb07a9b021a790449fec17-62f05.jpg 200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-dc2b4.jpg 400w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-381d6.jpg 800w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-e5d70.jpg 1200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-d14e0.jpg 1600w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-9cc71.jpg 2225w",srcWebp:"/static/avatar-820706df6fdb07a9b021a790449fec17-fefde.webp",srcSetWebp:"/static/avatar-820706df6fdb07a9b021a790449fec17-5eed2.webp 200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-68e3c.webp 400w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-fefde.webp 800w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-300fe.webp 1200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-ed5bd.webp 1600w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-9442a.webp 2225w",sizes:"(max-width: 800px) 100vw, 800px"}}},site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I am Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:'<p>As of MongoDB 3.2, a <a href="https://docs.mongodb.org/manual/reference/operator/aggregation/lookup/" target="_blank" rel="noreferrer noopener">new feature</a> has been added that introduces a left outer join for the first time.</p>\n<p><code>$lookup</code> is part of the MongoDB aggregation pipeline. It\'s a separate stage and the syntax is really simple:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>db<span class="token punctuation">.</span>orders<span class="token punctuation">.</span><span class="token function">aggregate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      $lookup<span class="token punctuation">:</span>\n        <span class="token punctuation">{</span>\n          <span class="token keyword">from</span><span class="token punctuation">:</span> <span class="token string">"inventory"</span><span class="token punctuation">,</span>\n          localField<span class="token punctuation">:</span> <span class="token string">"item"</span><span class="token punctuation">,</span>\n          foreignField<span class="token punctuation">:</span> <span class="token string">"sku"</span><span class="token punctuation">,</span>\n          <span class="token keyword">as</span><span class="token punctuation">:</span> <span class="token string">"inventory_docs"</span>\n        <span class="token punctuation">}</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>The above command will fetch every document from the orders collection with the inventory_docs field in each one of them, populated with the matched documents from the inventory collection.</p>\n<p>One will first notice that there is no way to specify matching conditions for the records to be joining the document. My hypothesis is that you\'re using an SQL data store in case you have many and complex relations between your entities. But in case that you are using a MongoDB data store while having that much relations, you will be disappointed.</p>\n<p>Mongo\'s <code>$lookup</code> stage isn\'t coming to a step closer to traditional SQL join. It seems like a nice tool to have in your aggregation toolbox, but it won\'t cover you full if you need to do relational queries.</p>',excerpt:"As of MongoDB 3.2, a  new feature  has been added that introduces a left outer join for the first time. $lookup  is part of the MongoDB…",frontmatter:{date:"January 28, 2016",path:"/mongodb-aggregation-lookup-for-joins/",tags:"mongodb",title:"MongoDB Aggregation: $lookup for JOINs",draft:null}}},pathContext:{prev:{excerpt:"I started playing with  Golang(or just Go)  this week for the first time. Go is a compiled, statically typed language and I thought it would be a great fit for situations where Node.js, my primary go-to stack, won't be a great candidate for the job…",html:'<p>I started playing with <a href="http://golang.org" target="_blank" rel="noreferrer noopener">Golang(or just Go)</a> this week for the first time. Go is a compiled, statically typed language and I thought it would be a great fit for situations where Node.js, my primary go-to stack, won\'t be a great candidate for the job. For heavy processing and problems where concurrent-first solutions must be applied.</p>\n<p>The first thing I did was to check the <a href="https://tour.golang.org/welcome/1" target="_blank" rel="noreferrer noopener">online tour</a> on the official site. It\'s very well structured and has also some exercises to get you started. Wrapping my head around the language was very easy since it has a lot of well-known concepts like pointers and structs, similar to C.</p>\n<p>After playing a bit around I thought I would make something using my new learnings and Go. I found a <a href="https://github.com/willnorris/imageproxy" target="_blank" rel="noreferrer noopener">really cool project</a> and wanted to contribute to it. So I thought I will fork it and create a bootstrap application and try to import my fork. But that strange message appeared on my console:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>package github.com/kbariotis/imageproxy: code in directory /Users/Bariotis/golang/src/github.com/kbariotis/imageproxy expects import "willnorris.com/go/imageproxy"</code></pre>\n      </div>\n<p>what this basically means is that my repo had an explicit [canonical import path]<a href="https://golang.org/cmd/go/#hdr-Import_path_checking" target="_blank" rel="noreferrer noopener">https://golang.org/cmd/go/#hdr-Import<em>path</em>checking</a>) set that was forcing the consumer to download it from a <a href="https://github.com/willnorris/imageproxy/blob/master/imageproxy.go#L17" target="_blank" rel="noreferrer noopener">particular place</a> and that was the original author\'s site.</p>\n<p><a href="https://texlution.com/post/golang-canonical-import-paths/" target="_blank" rel="noreferrer noopener">This post</a> explains even more how this works. Since the Go command allows one to import packages from remote servers and a package may live in various places or it can be moved from one place to another, the maintainer must explicitly set the default URL that others must use to import the library, in order to avoid the <a href="https://en.wikipedia.org/wiki/Link_rot" target="_blank" rel="noreferrer noopener">link rot</a>.</p>\n<p>But that confused me a bit since I do this all the time with <code>npm</code>. I can fork a library and import it from my fork directly.</p>\n<p>I searched a bit around and found that the simplest thing to do (and didn\'t think of it) was to import the original repository and the Go command will clone it into my $GOPATH/src directory. From there I could change the git remotes URLs and send any changes onto my fork. Then make a PR to the original repo or change the canonical import path annotation if I wanted to use my fork directly.</p>\n<p>Keep this in mind if you\'re just starting with the Go language. Btw, <a href="https://tour.golang.org/concurrency/1" target="_blank" rel="noreferrer noopener">Goroutines are awesome!</a></p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/go-canonical-import-paths-github-forks/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2016-02-27T15:49:31.000Z",path:"/go-canonical-import-paths-github-forks/",tags:"Golang, Github",title:"Go canonical import paths & Github forks",draft:null}},next:{excerpt:"I gave a talk entitled  TDD with Node.js  in the  latest   SKGNode.js meetup . I explained the concept of TDD and described my tools of choice for integrating the TDD flow with Node.js. It was great. I didn't got into GUI testing and I saw a major…",html:'<p>I gave a talk entitled <a href="http://slides.com/kostasbariotis/tdd-nodejs" target="_blank" rel="noreferrer noopener">TDD with Node.js</a> in the <del>latest</del> <a href="https://www.meetup.com/Thessaloniki-Node-js-Meetup/" target="_blank" rel="noreferrer noopener">SKGNode.js meetup</a>. I explained the concept of TDD and described my tools of choice for integrating the TDD flow with Node.js. It was great.</p>\n<p>I didn\'t got into GUI testing and I saw a major interest on that. So I decided to take a look at the current state of GUI testing. Here are the main tools that I came up with:</p>\n<h2 id="zombiejs"><a href="#zombiejs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Zombie.js</h2>\n<p><a href="http://zombie.js.org/" target="_blank" rel="noreferrer noopener">Zombie</a> uses <a href="https://github.com/tmpvar/jsdom" target="_blank" rel="noreferrer noopener">jsdom</a> to parse the required HTML and Javascript and then simulate the desired behaviour. I find it a great tool for testing basic functionality in small apps.</p>\n<p>JSDom will create an in memory representation of the DOM and execute any Javascript dependencies so you can do a real testing scenario. Since it doesn\'t uses a real browser engine you can\'t find abnormalities of real world situations. So you can\'t rely on it for cross browser compatibility.</p>\n<p>I got very frustrated while trying to test AJAX powered pages. For SPA apps, Zombie wouldn\'t be an ideal solution.</p>\n<h2 id="casperjs"><a href="#casperjs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Casper.js</h2>\n<p><a href="http://casperjs.org/" target="_blank" rel="noreferrer noopener">Casper</a> on the other hand, is a wrapper around <a href="http://phantomjs.org/" target="_blank" rel="noreferrer noopener">Phantom.js</a> which utilises a <a href="https://webkit.org/" target="_blank" rel="noreferrer noopener">Webkit</a> headless browser and will do a full rendering of your web page in order to test it. Since you will have a full representation of your site you can even <a href="https://github.com/sindresorhus/pageres" target="_blank" rel="noreferrer noopener">take screenshots for easier QA</a>.</p>\n<p>Casper.js has neat documentation and it\'s API is really easy to follow and adopt.</p>\n<h2 id="nightwatchjs"><a href="#nightwatchjs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nightwatch.js</h2>\n<p>Now, on the heavy side, we have <a href="http://www.seleniumhq.org/" target="_blank" rel="noreferrer noopener">Selenium</a>. Selenium is a set of projects. It started off by auto running browsers and injecting code into them so we can test it. Since then, browsers vendors kept evolving and expose a full set of control over their browsers so Selenium has native support over those, with the <a href="http://www.seleniumhq.org/projects/webdriver/" target="_blank" rel="noreferrer noopener">Selenium WebDriver</a>.</p>\n<p>You will have to install all the browsers you need to test locally and then use Selenium to run tests on them. It\'s pretty basic.</p>\n<p>Selenium\'s internals and configuration is a bit overcomplicated and if you don\'t need it, you don\'t have to get into it. <a href="http://nightwatchjs.org/" target="_blank" rel="noreferrer noopener">Nightwatch</a> is a great layer of abstraction on top of Selenium that will do all the heavy work for you.</p>\n<h1 id="at-the-end"><a href="#at-the-end" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>At the end</h1>\n<p>I am sure there are tone of other solutions out there. Although, you will have to do a research on your own before starting your GUI testing journey, at then end just pick one and start.</p>\n<p>Are you using something already? What\'s that?</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/automated-gui-testing-solutions/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2016-01-08T06:03:02.000Z",path:"/automated-gui-testing-solutions/",tags:"GUI, javascript, Testing, node.js",title:"Automated GUI Testing Solutions",draft:null}}}}}});
//# sourceMappingURL=path---mongodb-aggregation-lookup-for-joins-b84883057e9c6a0cdfd0.js.map