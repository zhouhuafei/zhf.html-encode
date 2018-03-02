# 把html里面的尖括号字符转义成十进制编码
```
const htmlEncode = require('zhf.html-encode');
htmlEncode('<div>哈哈哈哈</div>'); // &#60;div&#62;哈哈哈哈&#60;/div&#62;
```
