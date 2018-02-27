webpackJsonp([47854764387320],{669:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I am Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}}},pathContext:{posts:[{excerpt:"Linting and auto-formatting are a well known process among JavaScript developers, although due to the lack of a standard tool, lots of folks are not aware of it. While a linter analyzes your code and warns you for potential issues, a formatter can…",html:'<p>Linting and auto-formatting are a well known process among JavaScript developers, although due to the lack of a standard tool, lots of folks are not aware of it. While a linter analyzes your code and warns you for potential issues, a formatter can auto format it based on your preferences.</p>\n<p>\n          <a\n            class="gatsby-resp-image-link"\n            href="undefined"\n            style="display: block"\n            target="_blank"\n            rel="noopener"\n          >\n            <span\n              class="gatsby-resp-image-wrapper"\n              style="position: relative; z-index: -1; display: block; "\n            >\n              <span\n                class="gatsby-resp-image-background-image"\n                style="padding-bottom: 38.9937106918239%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsSAAALEgHS3X78AAABKklEQVQY012R627DIAyF8zhbS24QsCEhAdqkl0XVLtr7v8oOdH82C1nHINufTXUqFmNclkUr1dR103Zt1zWwLPpe6a6XuC7nj1UpRWYOIYzOXb33xth48ee7nZMN65iu7JMyfHh9qUX9P5mtRQ9DpKQ8O+eJbNjC7d2vuwsbzyeaIqPQsgJBCFE3pX/xlS2G5kTUtW1+EKIwt039ZO+AXcjxchTHQ/HHnLxtWwhxXdcUY3KOlSKPPmeaguaJlxO0ttNAoxnnfjCYwjgPjaLVNHnsxTpntN7nOVo3rnt8+wL5GC/z5ZH273j/DLcPVJGajPVYYicVsCrkGKXgQaelzHyaBnZYEiQ8jtQsBxrIFU1gzsMDeyF64J+Ynxfid7AcFS2yfobZ/077tB/ilGSN1nfSQQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n              >\n                <img\n                  class="gatsby-resp-image-image"\n                  style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n                  alt="ESLint Output example"\n                  title=""\n                  src="/static/eslint-example-858d80105fac915ba80799e9d22f1018-cd462.png"\n                  srcset="/static/eslint-example-858d80105fac915ba80799e9d22f1018-92f91.png 188w,\n/static/eslint-example-858d80105fac915ba80799e9d22f1018-dc30f.png 375w,\n/static/eslint-example-858d80105fac915ba80799e9d22f1018-cd462.png 750w,\n/static/eslint-example-858d80105fac915ba80799e9d22f1018-1de4a.png 1125w,\n/static/eslint-example-858d80105fac915ba80799e9d22f1018-a9764.png 1272w"\n                  sizes="(max-width: 750px) 100vw, 750px"\n                />\n              </span>\n            </span>\n          </a>\n          </p>\n<p>Plenty of times, I had to deal with a JavaScript codebase that was missing proper styleguide and rules. The coding style was varying across the project, unused or implicit globals variables and unused required dependencies were lying everywhere.</p>\n<p>On this post, I will share my plan on how to add a proper toolchain and a process to a codebase that has none but doing it in a controlled and progressive way. I will use <a href="https://eslint.org" target="_blank" rel="noreferrer noopener">ESLint</a> as the linter and <a href="https://prettier.io" target="_blank" rel="noreferrer noopener">Prettier</a> as the formatter (but as a plugin to ESLint) with the recommended set of rules. ESLint has come a long way and there is massive adoption by the community with lots of plugins. Prettier ... well, it\'s prettier than the <a href="https://eslint.org/docs/user-guide/command-line-interface#--fix" target="_blank" rel="noreferrer noopener">fix mode of ESLint</a>.</p>\n<h2 id="the-problem"><a href="#the-problem" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The problem</h2>\n<p>The first thing that came to my mind when I first faced a situation was to stop everything and work exclusively on adding a linter and fixing and refactoring the whole codebase. I immediately dropped that option.</p>\n<p>While refactoring is fun (at least for me), no one really likes doing it for a long period of time, let alone the fact that we can\'t stop releasing features to customers regardless. The bigger the codebase, the longer will take to restructure it as a whole.</p>\n<p>But even if we had the luxury to do it, major changes in a codebase may lead to unexpected behavior that may lead to major bugs that will certainly lead to hours and hours wasted in debugging.</p>\n<blockquote>\n<p>...Since each refactoring is small, it\'s less likely to go wrong. The system is also kept fully working after each small refactoring, reducing the chances that a system can get seriously broken during the restructuring.</p>\n</blockquote>\n<p>With that statement <a href="https://refactoring.com/" target="_blank" rel="noreferrer noopener">by Martin Fowler</a> in my mind, I proposed to start fixing the code progressively, refactoring only the affected code on every feature branch each of our team members was working on.</p>\n<p>This way we would have total control over the changes that would break our code and we would fix them before they were released.</p>\n<h2 id="the-plan"><a href="#the-plan" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The plan</h2>\n<p>Simple. We will first have to discuss and agree (if in a team) on the styleguide we want to follow and then put a configuration file for our tools to follow.</p>\n<p>Then we want to run the process once and let the formatter fix the easy stylish parts (missing spaces, semicolons, etc..) hoping that no human intervention would be required for those changes.</p>\n<p>The last part will be to setup a pre-commit git hook that will trigger the linting and refuse to commit if it didn\'t pass. This way we would be sure that no "bad" code enters the codebase.</p>\n<p>Let\'s start by installing dependencies:</p>\n<p><code>npm i --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier</code></p>\n<p>Then add your <code>.eslintrc</code> file with contents. This is just an example setup I hacked for simplicity purposes. It follows the recommended rules by ESLint and also extends Prettier to work with ESLint seamlessly. Last I have added some custom rules of mine.</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">"eslint:recommended"</span><span class="token punctuation">,</span>\n    <span class="token string">"plugin:prettier/recommended"</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">"parserOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"ecmaVersion"</span><span class="token operator">:</span> <span class="token number">6</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">"rules"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"prettier/prettier"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">"warn"</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">"singleQuote"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token property">"trailingComma"</span><span class="token operator">:</span> <span class="token string">"es5"</span><span class="token punctuation">,</span>\n        <span class="token property">"printWidth"</span><span class="token operator">:</span> <span class="token number">100</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The configuration applies the recommended by ESLint set of rules and also the Prettier plugin which will both override ESLint\'s formatting rules and also run Prettier whenever ESLint is run. Then we override Prettier\'s default rules to match our preferences.</p>\n<p>Now that our configuration is in place, let\'s run it and see how it goes. Add this your <code>package.json</code> (we will use it later) and run <code>npm run lint</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  ...\n\n  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"lint"</span><span class="token operator">:</span> <span class="token string">"./node_modules/.bin/eslint --ext .js --ext .jsx src"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n\n  ...\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>If everything went well, you will see a bunch of errors on your console but you will also notice that Prettier formatted your code!</p>\n<p>Now you have some work to do. First of all, run your tests and/or do some manual testing to ensure that everything works as before. Then, inspect the errors in your console and make sure you\'re happy with them. Remember that they won\'t stay there forever. The styleguide can change and adapt, so don\'t waste time figuring out particular edge cases.</p>\n<p>Once you are done, commit all of your changes cause that will be the last time you committed code with errors in your codebase.</p>\n<p>Now we want to setup the linter to run on pre-commit only on the modified files. Let\'s install some dependencies again that will help us do that.</p>\n<p><code>npm i --save-dev husky lint-staged</code></p>\n<p>Then modify your <code>package.json</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  ...\n\n  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"precommit"</span><span class="token operator">:</span> <span class="token string">"lint-staged"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  ...\n\n  <span class="token property">"lint-staged"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"*.{js,jsx}"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">"./node_modules/.bin/eslint --fix"</span><span class="token punctuation">,</span>\n      <span class="token string">"git add"</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n\n  ...\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><a href="https://github.com/typicode/husky" target="_blank" rel="noreferrer noopener">Husky</a> will add the <code>precommit</code> script as a precommit hook to Git. Every time you are going to commit a bunch of files will run the <a href="https://github.com/okonet/lint-staged" target="_blank" rel="noreferrer noopener">lint-staged</a> which in turn will list all the currently staged files and run ESLint with every each of them. If one fails, the hook will fail.</p>\n<p>Now try to modify a file and commit it. Husky will run the precommit hook only for the file that you tried to modify. You won\'t be able to commit unless the linter says so.</p>\n<h2 id="the-results"><a href="#the-results" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The results</h2>\n<p>The plan worked great and after a few weeks, the whole codebase changed radically. We weren\'t bothering with formatting our code while writing it and we could be sure on every commit that we didn\'t forget to initialize a variable before using it.</p>\n<p>What would you do in a similar position?</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/progressive-linting/index.md absPath of file >>> MarkdownRemark",timeToRead:5,frontmatter:{date:"2018-02-11",path:"/progressive-javascript-linting/",tags:"JavaScript, Linting",title:"Progressive JavaScript Linting",draft:null}}],tag:"Linting",pagesSum:1,page:1}}}});
//# sourceMappingURL=path---tag-linting-8731ad70103e1d17c7e0.js.map