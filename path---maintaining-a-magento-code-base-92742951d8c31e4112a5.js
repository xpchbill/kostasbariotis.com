webpackJsonp([0xd184777668a1],{594:function(e,t){e.exports={data:{file:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQBAgUD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIB/9oADAMBAAIQAxAAAAGXEfnO2KxXytBY6QBP/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIDEQASIiH/2gAIAQEAAQUC2qMsrDRjkh7U+9ZIKYC8jNp//8QAFxEBAAMAAAAAAAAAAAAAAAAAAAEQIf/aAAgBAwEBPwFlQ//EABkRAAEFAAAAAAAAAAAAAAAAAAABECExQf/aAAgBAgEBPwGWwWz/xAAbEAACAgMBAAAAAAAAAAAAAAAAEQEhAxAxgf/aAAgBAQAGPwK2dsYo5BBWReaRB//EABwQAAICAwEBAAAAAAAAAAAAAAERACExQVFhcf/aAAgBAQABPyHzg5KmRyuAZAwYJ2aHFOw5Qmlybntx2y3CnEl/Z//aAAwDAQACAAMAAAAQOyi8/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERMUH/2gAIAQMBAT8QUXCB6YR//8QAGhEAAgIDAAAAAAAAAAAAAAAAAAERMSFBsf/aAAgBAgEBPxByVkzvonYxY//EAB0QAQEAAwACAwAAAAAAAAAAAAERACFBMVFhcbH/2gAIAQEAAT8Q6uhuUW+P3HKhIpbqr8JMNj2KrvBpVoF3uLYUDX3imLRSGt4ck1onhy7wNT0XD24jIs1n/9k=",aspectRatio:.9657118055555556,src:"/static/avatar-820706df6fdb07a9b021a790449fec17-381d6.jpg",srcSet:"/static/avatar-820706df6fdb07a9b021a790449fec17-62f05.jpg 200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-dc2b4.jpg 400w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-381d6.jpg 800w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-e5d70.jpg 1200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-d14e0.jpg 1600w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-9cc71.jpg 2225w",srcWebp:"/static/avatar-820706df6fdb07a9b021a790449fec17-fefde.webp",srcSetWebp:"/static/avatar-820706df6fdb07a9b021a790449fec17-5eed2.webp 200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-68e3c.webp 400w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-fefde.webp 800w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-300fe.webp 1200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-ed5bd.webp 1600w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-9442a.webp 2225w",sizes:"(max-width: 800px) 100vw, 800px"}}},site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I am Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:'<p>Magento is hard. No doubt about it. But this is not an excuse. Beside that (and a few other issues) it\'s still the number one e-commerce solution. It\'s proven.</p>\n<p>So, i wanted to talk a little about how i maintaining my Magento projects.</p>\n<p><strong>1) I am keeping everything under version control</strong></p>\n<p>Magento\'s folder structure brings a lot of frustration. An extension can place it\'s files almost anywhere it\'s developer wants. It can be in base package theme either in package default theme. It can be in media folder for permanent files you want to keep under control either in /js folder for Javascript global libraries.</p>\n<p>Keeping a .gitignore with all the Project\'s specific files is almost impossible.</p>\n<p>Also, you can\'t carry with you your Project\'s modules, except using <a title="Composer with Magento" href="https://github.com/magento-hackathon/magento-composer-installer" target="_blank">Composer with Magento </a>which it\'s also complicate to work with. (Still struggling with it on Windows)</p>\n<p>So, what i do is keep everything under version control, except temporary files like cache, logs, etc. etc.</p>\n<p><strong>2) Never touch core files</strong></p>\n<p>By never touching core files like in folders:</p>\n<ul>\n\t<li>app/code/core</li>\n\t<li>app/locale/</li>\n\t<li>app/design/frontend/(base|default|rwd)</li>\n\t<li>app/design/adminhtml/</li>\n\t<li>js/ (initial folders only)</li>\n\t<li>lib/ (initial folders only)</li>\n\t<li>skin/frontend/(base|default|rwd)</li>\n\t<li>includes/</li>\n</ul>\nyou make sure that, when a feature release is out, you can just copy paste above you project and everything still works fine.\n<p>Keeping your Magento always up to date can save you from big disasters. I must make sure that feature releases wont be a pain to get.</p>\n<p><strong>3) Extend everything</strong></p>\n<p>In case you need to extend a Magento\'s core functionality or make it behave different, you are covered.</p>\n<p>Magento\'s team had a purpose and only one. To make the most extensible e-commerce framework out there. They even sacrifice performance on this purpose. Now, some may argue that that was stupid or they didn\'t success after all. I will have to disagree with both.</p>\n<p>Magento is a true PHP OOP project, powered by the most powerful framework, the <a title="Zend Framework" href="http://framework.zend.com/" target="_blank">Zend Framework</a>.</p>\n<p>As about performance, these days you have a lot of tools in order to create a fast website. You may be hosted at an AWS super server, use fast caching methods, etc, etc.</p>\n<p><strong>4) Keep a local Magento with stuff i use a lot</strong></p>\n<p>After a few projects, i realized that a lot of processes were repeated again and again. The same modules i will installed on every fresh Magento install, the same configuration i would do. So i keep a private(yet!) Magento repository were i have all of my Modules and a clean Database dump with my configuration set.</p>\n<p>How do you deal with your Magento projects? Share your tactics and technics with me on <a title="Kostas Bariotis on Twitter" href="http://twitter.com/kbariotis" target="_blank">Twitter </a>or bellow in the comments.</p>',excerpt:"Magento is hard. No doubt about it. But this is not an excuse. Beside that (and a few other issues) it's still the number one e-commerce…",frontmatter:{date:"September 08, 2014",path:"/maintaining-a-magento-code-base/",tags:"magento, codebase, e-commerce",title:"Maintaining a Magento code base",draft:null}}},pathContext:{prev:{excerpt:"My journey on e-commerce starts a little while after the start of 2014. I had the chance to got my hands on the popular e-commerce platform Magento, during of which i developed 3 big and demanding sites and published some open source Magento…",html:'<p>My journey on e-commerce starts a little while after the start of 2014. I had the chance to got my hands on the popular e-commerce platform Magento, during of which i developed 3 big and demanding sites and published some open source Magento extensions.</p>\n<p>snipcart.io</p>\n<p>molt.in</p>\n<p>shopify</p>\n<p>magento EE</p>\n<p><a href="http://ecommercesoftwarereviews.net/shopify-alternatives/" target="_blank" rel="noreferrer noopener">http://ecommercesoftwarereviews.net/shopify-alternatives/</a></p>\n<p><a href="https://e60696416b5235dfd15e2b9bfc5dab0e3b37ade2.googledrive.com/host/0B28BnxIvH5DueUxvWVNsQXd5dU0/index.html" target="_blank" rel="noreferrer noopener">https://e60696416b5235dfd15e2b9bfc5dab0e3b37ade2.googledrive.com/host/0B28BnxIvH5DueUxvWVNsQXd5dU0/index.html</a></p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/how-does-the-future-of-e-commerce-looks-like/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2014-09-09T19:08:50.000Z",path:"/drafts/how-does-the-future-of-e-commerce-looks-like/",tags:null,title:"How does the future of e-commerce looks like?",draft:!0}},next:{excerpt:"— Ivan Chepurnyi (@IvanChepurnyi)  September 6, 2014",html:'<blockquote class="twitter-tweet" lang="en">Magento 2 release plan. Seems like stable is end of next year. <a href="http://t.co/bg8kwqshuI">pic.twitter.com/bg8kwqshuI</a>\n<p>— Ivan Chepurnyi (@IvanChepurnyi) <a href="https://twitter.com/IvanChepurnyi/status/508185778761900032">September 6, 2014</a></blockquote></p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/magento-2-roadmap-long-walk-to-freedom/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2014-09-06T07:07:26.000Z",path:"/magento-2-roadmap-long-walk-to-freedom/",tags:null,title:"Magento 2 Roadmap : Long walk to freedom",draft:null}}}}}});
//# sourceMappingURL=path---maintaining-a-magento-code-base-92742951d8c31e4112a5.js.map