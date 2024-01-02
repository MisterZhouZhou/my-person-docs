import{_ as s,o as a,c as n,X as l}from"./chunks/framework.28451963.js";const C=JSON.parse('{"title":"WKWebView简介","description":"","frontmatter":{},"headers":[],"relativePath":"phone/oc/wkwebview.md","filePath":"phone/oc/wkwebview.md","lastUpdated":1704191114000}'),o={name:"phone/oc/wkwebview.md"},p=l(`<h1 id="wkwebview简介" tabindex="-1">WKWebView简介 <a class="header-anchor" href="#wkwebview简介" aria-label="Permalink to &quot;WKWebView简介&quot;">​</a></h1><h2 id="_1、简介" tabindex="-1">1、简介 <a class="header-anchor" href="#_1、简介" aria-label="Permalink to &quot;1、简介&quot;">​</a></h2><p><code>WKWebView</code>是苹果公司提供的一种新的<code>Web视图</code>，它是基于WebKit内核的，提供了更好的性能和更多的功能。 <code>WKWebView</code>可以加载H5页面、视频、音频等多媒体资源，也可以与原生应用进行交互。</p><h2 id="加载离线包" tabindex="-1">加载离线包 <a class="header-anchor" href="#加载离线包" aria-label="Permalink to &quot;加载离线包&quot;">​</a></h2><div class="language-Objective-C"><button title="Copy Code" class="copy"></button><span class="lang">Objective-C</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">-(</span><span style="color:#C792EA;">void</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">addWkWebview </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    WKWebView </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">webview </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[[</span><span style="color:#F07178;">WKWebView </span><span style="color:#82AAFF;">alloc</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">initWithFrame</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">CGRectMake</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> kScreenWidth</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">400</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">self</span><span style="color:#F07178;">.view </span><span style="color:#82AAFF;">addSubview</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">webview</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">webview</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">navigationDelegate</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 加载离线包</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">NSString</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">bundPath </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">@&quot;</span><span style="color:#C3E88D;">/User/xxx/xxx/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">NSString</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">h5Path </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">NSString</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">stringWithFormat</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">@&quot;</span><span style="color:#C3E88D;">%@/%@</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> bundPath</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">@&quot;</span><span style="color:#C3E88D;">bundle1.2/index.html#/car</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">NSURL</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">fileUrl </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">NSURL</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">URLWithString</span><span style="color:#89DDFF;">:[</span><span style="color:#FFCB6B;">NSString</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">stringWithFormat</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">@&quot;</span><span style="color:#C3E88D;">file://%@</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> h5Path</span><span style="color:#89DDFF;">]];</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">NSURL</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">accessURL </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">NSURL</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fileURLWithPath</span><span style="color:#89DDFF;">:[[</span><span style="color:#F07178;">h5Path </span><span style="color:#82AAFF;">componentsSeparatedByString</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">@&quot;</span><span style="color:#C3E88D;">/index.html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">firstObject</span><span style="color:#89DDFF;">]];</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">webview </span><span style="color:#82AAFF;">loadFileURL</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">fileUrl </span><span style="color:#82AAFF;">allowingReadAccessToURL</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">accessURL</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#82AAFF;">NSLog</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">@&quot;</span><span style="color:#C3E88D;">@@@@@@@@@@@@@@@@@@@ wkwebivew load start ---------%f</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CFAbsoluteTimeGetCurrent</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 网络请求开始的代理方法</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">void</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">webView:</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">WKWebView </span><span style="color:#89DDFF;">*)</span><span style="color:#A6ACCD;">webView didStartProvisionalNavigation:</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">WKNavigation </span><span style="color:#89DDFF;">*)</span><span style="color:#A6ACCD;">navigation </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//NSLog(@&quot;@@@@@@@@@@@@@@@@@@@ wkwebivew load start ---------%f&quot;, CFAbsoluteTimeGetCurrent());</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 网络请求结束的代理方法，网络请求成功或者失败都会调用，需要在navigation里面获取response响应判断statusCode</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">void</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">webView:</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">WKWebView </span><span style="color:#89DDFF;">*)</span><span style="color:#A6ACCD;">webView didFinishNavigation:</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">WKNavigation </span><span style="color:#89DDFF;">*)</span><span style="color:#A6ACCD;">navigation </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#82AAFF;">NSLog</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">@&quot;</span><span style="color:#C3E88D;">@@@@@@@@@@@@@@@@@@@ wkwebivew load end ---------%f</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CFAbsoluteTimeGetCurrent</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,5),e=[p];function t(F,c,r,D,y,i){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};
