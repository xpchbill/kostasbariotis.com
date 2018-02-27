webpackJsonp([0xabc4f8ea1ee8],{541:function(a,e){a.exports={data:{file:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQBAgUD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIB/9oADAMBAAIQAxAAAAGXEfnO2KxXytBY6QBP/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIDEQASIiH/2gAIAQEAAQUC2qMsrDRjkh7U+9ZIKYC8jNp//8QAFxEBAAMAAAAAAAAAAAAAAAAAAAEQIf/aAAgBAwEBPwFlQ//EABkRAAEFAAAAAAAAAAAAAAAAAAABECExQf/aAAgBAgEBPwGWwWz/xAAbEAACAgMBAAAAAAAAAAAAAAAAEQEhAxAxgf/aAAgBAQAGPwK2dsYo5BBWReaRB//EABwQAAICAwEBAAAAAAAAAAAAAAERACExQVFhcf/aAAgBAQABPyHzg5KmRyuAZAwYJ2aHFOw5Qmlybntx2y3CnEl/Z//aAAwDAQACAAMAAAAQOyi8/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERMUH/2gAIAQMBAT8QUXCB6YR//8QAGhEAAgIDAAAAAAAAAAAAAAAAAAERMSFBsf/aAAgBAgEBPxByVkzvonYxY//EAB0QAQEAAwACAwAAAAAAAAAAAAERACFBMVFhcbH/2gAIAQEAAT8Q6uhuUW+P3HKhIpbqr8JMNj2KrvBpVoF3uLYUDX3imLRSGt4ck1onhy7wNT0XD24jIs1n/9k=",aspectRatio:.9657118055555556,src:"/static/avatar-820706df6fdb07a9b021a790449fec17-381d6.jpg",srcSet:"/static/avatar-820706df6fdb07a9b021a790449fec17-62f05.jpg 200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-dc2b4.jpg 400w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-381d6.jpg 800w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-e5d70.jpg 1200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-d14e0.jpg 1600w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-9cc71.jpg 2225w",srcWebp:"/static/avatar-820706df6fdb07a9b021a790449fec17-fefde.webp",srcSetWebp:"/static/avatar-820706df6fdb07a9b021a790449fec17-5eed2.webp 200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-68e3c.webp 400w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-fefde.webp 800w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-300fe.webp 1200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-ed5bd.webp 1600w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-9442a.webp 2225w",sizes:"(max-width: 800px) 100vw, 800px"}}},site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I am Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:'<p>A common dis-functionality of <a title="Composer PHP " href="https://getcomposer.org" target="_blank">Composer </a>is that when it just hangs while installing or updating dependencies. Especially when using heavy packages like these of Symfony, Composer is going to run hard.</p>\n<p>This issue is not new, and while there is been <a title="Composer freezing when installing symfony vendors" href="http://stackoverflow.com/questions/17138319/composer-freezing-when-installing-symfony-vendors" target="_blank">some </a><a title="Slow updating of composer dependencies, despite --prefer-dist flag" href="http://stackoverflow.com/questions/19316650/slow-updating-of-composer-dependencies-despite-prefer-dist-flag" target="_blank">discussion </a><a title="Running an update just hangs #1959" href="https://github.com/composer/composer/issues/1959" target="_blank">about </a><a title="Composer seems hanged on &quot;Updating dependencies&quot; #2378" href="https://github.com/composer/composer/issues/2378" target="_blank">it</a> i still encounter issues running on a generally old machine with 4GB ram and a Core2Duo CPU.</p>\n<p>Whilst i tried all of the suggested solution i ended up discovering that the problem is when you use the wildcard(*) for choosing the vendor package version.</p>\n<p>Prefer using the latest version of the package you want instead of the wildcard(*) the next time you encounter the same problem.</p>\n<p>Instead of writing</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code>&amp;quot<span class="token punctuation">;</span>require&amp;quot<span class="token punctuation">;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\n    &amp;quot<span class="token punctuation">;</span>monolog/monolog&amp;quot<span class="token punctuation">;</span><span class="token operator">:</span>&amp;quot<span class="token punctuation">;</span><span class="token number">1</span>.*&amp;quot<span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>\n\n...\n</code></pre>\n      </div>\n<p>write</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code>...\n\n&amp;quot<span class="token punctuation">;</span>require&amp;quot<span class="token punctuation">;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\n    &amp;quot<span class="token punctuation">;</span>monolog/monolog&amp;quot<span class="token punctuation">;</span><span class="token operator">:</span>&amp;quot<span class="token punctuation">;</span><span class="token number">1.10</span>.<span class="token number">0</span>&amp;quot<span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>\n\n...\n</code></pre>\n      </div>\n<p> </p>\n<p>You can also try cleaning your Composer cache which is located at %APPDATA%/local/composer/ on Windows and using -<a title="Composer Install Dependencies CLI options" href="https://getcomposer.org/doc/03-cli.md#install" target="_blank">-prefer-dist</a> flag which tries to download a zip file of the package whenever one is available.</p>\n<p>Last but not least, use --vvv flag for a more <a title="Composer CLI Global Options" href="https://getcomposer.org/doc/03-cli.md#global-options" target="_blank">verbose </a>output of the Composer and --profile displaying some hardware information at the end.</p>',excerpt:"A common dis-functionality of  Composer  is that when it just hangs while installing or updating dependencies. Especially when using heavy…",frontmatter:{date:"August 09, 2014",path:"/composer-hangs-while-installingupdating-dependencies/",tags:null,title:"Composer hangs while installing/updating dependencies",draft:null}}},pathContext:{prev:{excerpt:"Are you always in the wild trying to find the most awesome PHP projects? Are your bookmarks a mess? Here is a  curated list  of amazingly awesome PHP libraries, resources and shiny things. Everything under a category, not every resource but the most…",html:'<p>Are you always in the wild trying to find the most awesome PHP projects? Are your bookmarks a mess?</p>\n<p>Here is a <a title="Awesome PHP" href="https://github.com/ziadoz/awesome-php" target="_blank">curated list</a> of amazingly awesome PHP libraries, resources and shiny things.</p>\n<p>Everything under a category, not every resource but the most promising that will definitely do your job.</p>\n<p>What are your thoughts?</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/a-collection-of-php-libraries-you-should-know/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2014-08-22T14:33:27.000Z",path:"/a-collection-of-php-libraries-you-should-know/",tags:null,title:"A collection of PHP libraries you should know",draft:null}},next:{excerpt:"Here's a female experience on a technical conference. Makes me sad.",html:"<p>Here's a female experience on a technical conference. Makes me sad.</p>",id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/my-first-oscon/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2014-08-04T17:49:07.000Z",path:"/my-first-oscon/",tags:null,title:"My first OSCON",draft:null}}}}}});
//# sourceMappingURL=path---composer-hangs-while-installingupdating-dependencies-31e659df9553813776c2.js.map