jquery-bj_modal
====
基于jQuery的模态框插件

使用说明
====
开始使用
----

使用前需要引入以下文件：

`jquery-bj_modal.min.js`

`jquery-bj_modal.min.css`

**由于本插件是基于jQuery编写的，所以在引入js文件前，先引入jQuery，否则会报错。**


实例
----
以下是一个常规实例

html
```HTML
<a href="#" data-toggle='bj-modal' data-target='my-modal'>点击这里</a>
<div class="bj-modal-warp" id="my-modal">
	<div class="bj-modal">
		<div class="bj-modal-header">
			<a href="#" class="bj-modal-close" data-close='bj-modal'>&times;</a>
			<h4 class="bj-modal-title">这是标题</h4>
		</div>
		<div class="bj-modal-body">
			<p>这是内容。。。。。</p>
		</div>
		<div class="bj-modal-footer">
			<a class="bj-btn bj-btn-light" href="#" data-close='bj-modal'>取消</a>
			<a class="bj-btn bj-btn-dark" href="#">确定</a>
		</div>
	</div>
 </div>
````

js
```JavaScript
  $("#my-modal").bj_modal();//插件初始化
```

方法
----
`.bj_modal(options)`

用于初始化插件，options参数如下

| 参数名称 | 类型 | 默认值 | 描述 |
| -----|----| -----|----|
| animationType | string | fade | 设置模态框过场动画类型，可选值如下：<br><br>fade：默认效果，淡出淡进；<br>flip：轻弹效果；<br>zoom：放大显现效果；<br>slide-left：向左滑动显现；<br>slide-right：向右滑动显现；<br>slide-up：向上滑动显现；<br>slide-down：向下滑动显现。|
| modal | boolean | true | 设置窗口是否为模态，true为模态，false为非模态 |
| scrollable | boolean | false | 窗口显示时是否允许滚动页面 |
| width | number/string | auto | 设置窗口宽度，默认为css样式宽度 |
| height | number/string | auto | 设置窗口高度，默认为css样式高度 |

`.bj_modal('show')`

手动显示模态框窗口

`.bj_modal('hide')`

手动隐藏模态框窗口


`.bj_modal('toggle')`

手动显示或隐藏模态框窗口

事件
----
| 事件名称 | 描述 |
| -----|----|
| bj.modal.show | 模态框显示后触发改事件 |
| bj.modal.hide | 模态框隐藏后触发改事件 |

版本更新
====
1.0
----
实现一个基础的模态框
