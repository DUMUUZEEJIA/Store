# 让人琢磨不透的"女人"—this

* 有对象的人对女人琢磨不透，没有对象的人对女人更加琢磨不透
* 今天我们就解开如水一般的神秘女人

##  对"女人"了解多少

* 善变  `谁用就跟谁` `动态绑定`
* 温柔 `从来不始终如一`  `动态创建`
* 方向感差  `容易迷路，跑丢，找不到方向` `碰到回调就丢失`
* 人人都爱她 `是个码奴都爱this一下`

### **特征**

* 回调丢失

* 动态绑定，易丢失

* 动态创建

* 一定要记住我调用的位置，不是赋值的位置 `稍后分析`

* this 是在函数执行的过程中自动创建的一个指向一个对象的内部指针。确切的说，this并不是一个对象，而是指向一个已经存在的对象的指针，也可以认为是this就是存储了**某个对象的地址**。

  this的指向不是固定的，会根据**调用的不同，而指向不同的地方**。

### 常见回调丢失

```javascript
// 例子-01
var name = 'window'
var obj = {
    name: 'obj',
    fn: function () {
        setTimeout(function() {
            console.log(this.name) // this 已丢失
        }, 1000)
    }
}
obj.fn()
```

```javascript
// 例子-02
var name = 'window'
var obj = {
    name：’obj‘，
    init: function() {
        this.ajax(this.makeHtml)
    },
    makeHtml：function() {
        console.log(this.name）
        ....
    },
    ajax: function(cb) {
        $.ajax({
            url: '',
            type: 'GET',
            success:function(res) {
                cb && cb() // this在这里已丢失
            }
        })
    }
 }
obj.init()
```



## 对this的了解有多少

### 宏观角度

#### 执行环境

* Execution Context 
* 一门语言在运行的时候，需要一个`环境`，叫做`宿主环境`，执行上下文
* 在函数里执行叫变量活动对象
* this的执行一定弄清执行上下文

#### this的执行环境

1. node
2. 浏览器

####  node

* global 和 this的区别

* 在node环境里，如果使用REPL(Read-Eval-Print Loop，简称REPL:读取-求值-输出,是一个简单的，交互式的编程环境)来执行程序,this并不是最高级的命名空间，最高级的是global.

```
> this
{ ArrayBuffer: [Function: ArrayBuffer],
  Int8Array: { [Function: Int8Array] BYTES_PER_ELEMENT: 1 },
  Uint8Array: { [Function: Uint8Array] BYTES_PER_ELEMENT: 1 },
  ...
> global === this
true
```

* 在node环境里，如果执行一个js脚本，在全局范围内，this以一个空对象开始作为最高级的命名空间，这个时候，它和global不是等价的。

```
 1 test.js脚本内容：
 2 
 3 console.log(this);
 4 console.log(this === global);
 5 
 6 REPL运行脚本：
 7 
 8 $ node test.js
 9 {}
10 false

```

* 但是如果你不是用REPL执行脚本文件，而是直接执行代码，结果和在浏览器里面是一样的(神坑)

```
1 > var foo = "bar";
2 > this.foo
3 bar
4 > global.foo
5 bar
6 this === global
```

**总结**共两种情况

1. js代码一行一行的执行 `global === this`
2. RRPL执行 ` global !== this`



#### 浏览器

* window 和 this 是一样

```javascript
console.log(window === this)

var name = 'window'
console.log(this.name)
console.log(window.name)
console.log(this.name === window.name)
```



### 微观角度

#### 主要分为8种

1. function this

2. prototype this

3. object this

4. DOM event this

5. html this

6. jQuery this

7. width this

8. thisArg this

[参考资料https://segmentfault.com/a/1190000002640298#articleHeader5](https://segmentfault.com/a/1190000002640298#articleHeader5)

#### DOM event this

1. 在一个HTML DOM事件处理程序里面，this始终指向这个处理程序被所绑定到的HTML DOM节点
2. 除非你自己通过bind切换了上下文

```javascript
// 例子-01
<div id="box" onclick="console.log(this);"></div> // this -> box ele

// 例子-02
box.onclick=function() {
    console.log(this) // this -> box ele
}

// 例子-03

function Listener() {
   document.getElementById("box").addEventListener("click",this.handleClick)
}
Listener.prototype.handleClick = function (event) {
    console.log(this) //logs "<div id="box"></div>" 
}
 
var listener = new Listener()
document.getElementById("box").click()

// 例子-04 
$('#box').on('click', function(){
    console.log(this)
    console.log($(this))
})

```

* bind 改变

```javascript
box.onclick=function() {
    console.log(this) // this -> Numbder{0}
}.bind(0) // 
```

### this的四种绑定

* this 的指向，始终坚持一个原理：**this 永远指向最后调用它的那个对象** 记住这句话，this 你已经了解一半了。

1. 默认绑定
2. 隐藏绑定
3. 显示绑定
4. new 绑定

#### 默认绑定

* 非严格模式下，this -> window
* use strict , this  === undefined

```javascript
// 例子-01
var name = 'window'
function fn () {
    var name = 'fn'
    console.log(this.name) // this -> window
}
fn() // window

// 例子-02
‘use strict’
fn() // this === undefined

```

```javascript
// 例子-03
var a = 0;
var obj = {
    a: 2,
    foo:function(){
       function test(){
          console.log(this.a);
        }
       test(); 
    }
}
obj.foo();//0

// 闭包
var a = 0;
function foo(){
    function test(){
        console.log(this.a);
    }
    return test;
};
var obj = {
    a : 2,
    foo:foo
}
obj.foo()();//0


// iife
var a = 0;
function foo(){
    (function test(){
        console.log(this.a);
    })()
};
var obj = {
    a : 2,
    foo:foo
}
obj.foo();//0
```

#### 隐式绑定

* **this 永远指向最后调用它的那个对象**
* 函数的调用是在某个对象上触发的，即调用位置上存在上下文对象。`context`
* 函数调用一定要看**他调用的位置**，而不是**赋值的位置**

```javascript
// 例子-01
var name = 'window'
function fn () {
    var name = 'fn'
    console.log(this.name) // this -> window
}
fn() // window
window.fn() // this -> window 在全局下任何变量都成为window的属性
// 其实 默认绑定 也是 隐式绑定

// 例子-02
var name = "windowsName"
function fn() {
    var name = 'Cherry'
    innerFunction() // 调用的位置
    function innerFunction() {
        console.log(this.name)      // windowsName
    }
}
fn()
```

* 对象属性链中只有最后一层会影响到调用位置。

```javascript
// 例子-02
var name = ‘window’
function sayHi(){
    console.log('Hello,', this.name)
}
var person2 = {
    name: 'person2',
    sayHi: sayHi
}
var person1 = {
    name: 'person1',
    friend: person2 // preson2.sayHi()
}
person1.friend.sayHi() // this -> person2 

```

```javascript
// 例子-03
var name = ‘window’
function sayHi(){
    console.log('Hello,', this.name)
}
var person = {
    name: 'YvetteLau',
    sayHi: sayHi
}
var Hi = person.sayHi // sayHi === Hi
Hi() // this -> window

// 例子
var a = 0;
function foo(){
    function test(){
        console.log(this.a);
    }
    return test;
};
var obj = {
    a : 2,
    foo:foo
}
obj.foo()();//0  obj.foo() 返回一个新对象

// 例子
function foo() {
    console.log( this.a );
}
var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };
o.foo(); // 3
//将o.foo函数赋值给p.foo函数，然后立即执行。相当于仅仅是foo()函数的立即执行
(p.foo = o.foo)(); // 2 foo()  （foo)()
// 在看看

```

* **碰到回调就丢失**

```javascript
// 例子-04
setTimeout(function foo(){
    console.log(this);
},100);// this > window

var name ='window'
function sayHi(){
    console.log('Hello,', this.name)
}
var person1 = {
    name: 'YvetteLau',
    sayHi: function(){
        setTimeout(function(){
            console.log('Hello,',this.name) // this -> window
        })
    }
}
var person2 = {
    name: 'Christina',
    sayHi: sayHi
}
person1.sayHi() // this 丢失
setTimeout(person2.sayHi,100) // 回调 丢失 其实这里就是把 sayHi这个函数传进去了 跟 person2 没有任何关系
setTimeout(function(){
    person2.sayHi() // this -> preson2
},200);
```

#### 显示绑定

* 主要更改this的指向，解决this的丢失的问题

* 主要的几种方法

  1. 使用 ES6 的箭头函数
  2. self  = _this  = that = this  
  3. 使用 `apply`、`call`、`bind`
  4. new 实例化一个对象`构造函数`

* `apply`、`call`、`bind`区别

  ```javascript
  call(this, arg,arg, ...) // 只能一个个参数添加，可是是多个
  apply(this, []) // 可以使用数组，只有两个参数
  ```

* `bind() `方法会创建一个新函数，称为绑定函数，返回函数必须手动调用`bind(this, arg)()`

```javascript
var a = {
    name : "Cherry",
    fn : function (a,b) {
        console.log(this)
        console.log(a + b)
    }
}

var b = a.fn
b.bind(a, 1, 2) // 没有任何反应
b.bind(a, 1, 2)() //  this -> a
b.bind('', 1, 2)() // this -> String{''}  0 false  指向一个对象
```

* 回调丢失解决

```javascript
// 例子-01
//call 绑定
var name = 'window'
var obj = {
    name: 'obj',
    fn: function () {
        setTimeout(function() {
            console.log(this.name) // this -> obj
        }.call(this), 1000) // this -> obj
    }
}
obj.fn()

// self = this
var obj = {
    name: 'obj',
    fn: function () {
        var self = this // 将this存起来，其实就是将 obj 存起来
        setTimeout(function() {
            console.log(self.name) // slef -> this -> obj
        }, 1000)
    }
}
obj.fn()

// =>
var obj = {
    name: 'obj',
    fn: function () {
        // setTimeout(function() {
        setTimeout(() => {
            console.log(this.name) // slef -> this -> obj
        }, 1000)
    }
}
obj.fn()
```

```
// 例子-02
var name = 'window'
var obj = {
    name:'obj',
    init: function() {
        // this.ajax(() => {
            this.makeHtml()
        })
        this.ajax(this.makeHtml.bind(this))
    },
    makeHtml：function() {
        console.log(this.name)
    },
    ajax: function(cb) {
        $.ajax({
            url: '',
            type: 'GET',
            success:function(res) {
                cb && cb() // this在这里已丢失
            }
        })
    }
 }
obj.init()
```

* => 函数

```javascript
var obj = {
    hi: function(){
        console.log(this)
        return () => {
            console.log(this)
        }
    },
    sayHi: function(){
        return function() {
            console.log(this)
            return ()=>{
                console.log(this)
            }
        }
    },
    say: ()=>{
        console.log(this)
    }
}
let hi = obj.hi() // this -> obj 返回 一个箭头函数
hi()              // this -> obj 箭头函数的this 和 外层函数保持一致
let sayHi = obj.sayHi() // 返回一个普通函数
let fun1 = sayHi() // this -> window  默认绑定 返回一个箭头
fun1()            //  保持一致
obj.say()        // 箭头函数 this 指向 window

```

* 箭头函数中的this真的是静态的吗？ 非也

```javascript
var obj = {
    hi: function(){
        console.log(this);
        return ()=>{
            console.log(this);
        }
    },
    sayHi: function(){
        return function() {
            console.log(this);
            return ()=>{
                console.log(this);
            }
        }
    },
    say: ()=>{
        console.log(this);
    }
}
let sayHi = obj.sayHi();
let fun1 = sayHi(); //输出window
fun1();             //输出window

let fun2 = sayHi.bind(obj)();// sayHi 指定绑定在了 obj上 并返回了一个新的函数
fun2();                      // this -> obj

let fun3 = sayHi.call(obj) //
fun3() // this -> obj

```

* 使用了硬绑定，是不是意味着不会出现隐式绑定所遇到的绑定丢失呢？

```javascript
function sayHi(){
    console.log('Hello,', this.name)
}
var person = {
    name: 'YvetteLau',
    sayHi: sayHi
}
var name = 'Wiliam'
var Hi = function(fn) {
    fn() // fn = person.sayHi 赋值 没有任何的前缀，所以一定要注意调用的位置
}
Hi.call(person, person.sayHi)
```

* 我们希望绑定不会丢失，要怎么做？

```
function sayHi(){
    console.log('Hello,', this.name)
}
var person = {
    name: 'YvetteLau',
    sayHi: sayHi
}
var name = 'Wiliam'
var Hi = function(fn) {
    fn.call(this) // 从新将this -> person
}
Hi.call(person, person.sayHi)
```

* 原生js 、jQuery 和 Zepto 是怎么做的？

```javascript
// 原生
[1,2,3].map(function(index, item) {
    console.log(this) // this -> '' | this
}, '' | this)

// zepto
map: function(fn){
  return $($.map(this, function(el, i){ return fn.call(el, i, el) })) // 传回调都默认指向ele
},
slice: function(){
  return $(slice.apply(this, arguments))
},

```

* 防抖 和 节流

```javascript
// 防抖
function debounce(func, wait) {
    let timeout;
    return function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);
        
        timeout = setTimeout(() => {
            func.apply(context, args) // 都默认apply下
        }, wait);
    }
}
box.onmousemove = debounce(count,1000)

// 节流
function throttle(func, wait) {
    var previous = 0;
    return function() {
        let now = Date.now();
        let context = this;
        let args = arguments;
        if (now - previous > wait) {
            func.apply(context, args); // 都默认apply下
            previous = now;
        }
    }
}
box.onmousemove = throttle(count,1000)
```



#### new 绑定

* 主要看一个函数是不是通过new 创建一个新对象
* new Fn() , this  ->  这个新对象
* Fn() ,将普通函数调用 this -> window

```javascript
function sayHi(name){
    this.name = name;
	
}
var Hi = new sayHi('Yevtte');
console.log('Hello,', Hi.name);

sayHi() // this -> window

```

#### 绑定优先级

* new绑定 > 显式绑定 > 隐式绑定 > 默认绑定 `没试过`

**隐式绑定和显式绑定优先级比较**

```javascript
// 例子
function foo(a){
    console.log(this.a)
}

var obj1 = {
    a: 2,
    foo: foo
}

var obj2 = {
    a: 3,
    foo: foo
}

obj1.foo(); // 2
obj2.foo(); // 3

obj1.foo.call(obj2); // 3 
obj2.foo.call(obj1); // 2
```

可以看到，`显式绑定`优先级更高，也就是说在判断时应当先考虑是否可以存在显式绑定。

**new绑定和隐式绑定的优先级谁高谁低**

```javascript
function foo(a){
    this.a = a
}

var obj1 = {
    foo: foo
}

var obj2 = {}

obj1.foo(2); 
console.log(obj1.a); // 2 给obj1 添加了一个属性

obj1.foo.call(obj2,3); // 给obj2 添加了一个属性
console.log(obj2.a); // 3

var bar = new obj1.foo(4)
console.log(obj1.a); // 2 
console.log(bar.a); // 4
```

可以看到`new绑定`比`隐式绑定`优先级高。

**但是new绑定和显式绑定谁的优先级更高呢？**

```javascript
function foo(something){
    this.a = something
}

var obj1 = {}

var bar = foo.bind(obj1)
bar(2);
console.log(obj1.a) // 2

var baz = new bar(3)
console.log(obj1.a)  // 2
console.log(baz.a)   // 3
```

可以看到，`new绑定`修改了`硬绑定`中的this，所以`new绑定`的优先级比`显式绑定`更高。

之所以要在new中使用硬绑定函数，主要目的是预先设置函数的一些参数，这样在使用new进行初始化时就可以只传入其余的参数。bind(...)的功能之一就是可以把除了第一个参数（第一个参数用于绑定this）之外的其他参数都传给下层的函数（这种技术称为“部分应用”，是“`柯里化`”的一种）。举例来说：

```javascript
function foo(p1,p2){
    this.val = p1 + p2;
}

// 之所以使用null是因为在本例中我们并不关心硬绑定的this是什么
// 反正使用new时this会被修改
var bar = foo.bind(null,'p1');

var baz = new bar('p2');

baz.val; // p1p2
}
```

[参考](https://github.com/SimonZhangITer/MyBlog/issues/12)

#### 绑定例外

* 凡事都有例外，this的规则也是这样。

* null或undefined传入call、apply或者是bind,这些值在调用时会被忽略，实际应用的是默认绑定规则。

```javascript
function sayHi(){
    console.log(this) // this -> window
}
sayHi.call(null)
```

## 总结下

1. **this 永远指向最后调用它的那个对象**
2. 回调函数this易丢失
3. call，apply，bind改变this指向
4. 箭头函数没有this指向，永远指向外层的函数的this
5. **函数调用一定要看调用的位置，不要看赋值的位置**



是否对这个"女人"参透了



**资料**

[前端小姐姐](https://juejin.im/post/5c96d0c751882511c832ff7b#heading-11)

[sunshine小小倩](https://juejin.im/post/59bfe84351882531b730bac2#heading-4)

[子非](https://juejin.im/post/5b9f176b6fb9a05d3827d03f#heading-3)

[守候i](https://juejin.im/post/5ab4ab126fb9a028d4448365)

[OBKoro1](https://juejin.im/post/5b3715def265da59af40a630#heading-5)

[最骚的就是你](https://www.cnblogs.com/libin-1/p/6069031.html)

[https://github.com/SimonZhangITer/MyBlog/issues/12](https://github.com/SimonZhangITer/MyBlog/issues/12)

[https://www.cnblogs.com/xiaohuochai/p/5735901.html](https://www.cnblogs.com/xiaohuochai/p/5735901.html)
