# 原生API模拟



## document.getElementById

```
document.getElementById = function(id) {
    var html = document.getElementsByTagName('*')
    var len = html.length
    var ele = []
    while(len) {
        if (html[--len]['id'] === id) {
            ele.unshfit(html[len])
            return ele
        }
    }
}
```

