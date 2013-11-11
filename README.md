scrollpage
==========

a jquery plugin for scrollpage
//import this plugin css and js
<link rel="stylesheet" type="text/css" href="../css/scrollpage.css">
<script type="text/javascript" src="../js/scrollpage.js"></script>

//init this plugin at page ready,if use jquerymobile,put in  mobileinit function
<script type="text/javascript">
$(document).ready(function(e){
	$("#scrollBox").scrollpage({currentPage:1,pageHeight:390,speed:300});
});
</script>
<code>
<pre>
<div data-role="page" data-fullscreen="true">
		<div data-role="content">
			<div class="scroll-box"  id="scrollBox">
					<div>
							<ul>
								<li><div class="block folder" title=""><span class="title">收件箱10</span><span class="counter"></span></div></li>
								<li><div class="block folder" title=""><span class="title">收件箱11</span><span class="counter"></span></div></li>
								<li><div class="block folder" title=""><span class="title">收件箱12</span><span class="counter"></span></div></li>
								<li><div class="block folder" title=""><span class="title">收件箱13</span><span class="counter"></span></div></li>
								<li><div class="block folder" title=""><span class="title">收件箱14</span><span class="counter"></span></div></li>
								<li><div class="block folder" title=""><span class="title">收件箱15</span><span class="counter"></span></div></li>
								<li><div class="block folder" title=""><span class="title">收件箱21</span><span class="counter"></span></div></li>
								<li><div class="block folder" title=""><span class="title">收件箱22</span><span class="counter"></span></div></li>
								<li><div class="block folder" title=""><span class="title">收件箱23</span><span class="counter"></span></div></li>
								<li><div class="block folder" title=""><span class="title">收件箱24</span><span class="counter"></span></div></li>
								<li><div class="block folder" title=""><span class="title">收件箱25</span><span class="counter"></span></div></li>
								<li><div class="block folder" title=""><span class="title">收件箱26</span><span class="counter"></span></div></li>
								<li><div class="block folder" title=""><span class="title">收件箱32</span><span class="counter"></span></div></li>
								<li><div class="block folder" title=""><span class="title">收件箱32</span><span class="counter"></span></div></li>
								<li><div class="block folder" title=""><span class="title">收件箱33</span><span class="counter"></span></div></li>
								<li><div class="block folder" title=""><span class="title">收件箱34</span><span class="counter"></span></div></li>
								<li><div class="block folder" title=""><span class="title">收件箱35</span><span class="counter"></span></div></li>
								<li><div class="block folder" title=""><span class="title">收件箱36</span><span class="counter"></span></div></li>
								<li><div class="block folder" title=""><span class="title">收件箱41</span><span class="counter"></span></div></li>
								<li><div class="block folder" title=""><span class="title">收件箱42</span><span class="counter"></span></div></li>
								<li><div class="block folder" title=""><span class="title">收件箱43</span><span class="counter"></span></div></li>
							</ul>
					</div>
			</div>
		</div>
	</div>
</pre>
</code>
