const htmlEncode = require('../dist/index.min');

test(`把html里面的尖括号字符转义成十进制编码`, () => {
    const str = htmlEncode('<div>哈哈哈哈</div>');
    expect(str).toEqual('&#60;div&#62;哈哈哈哈&#60;/div&#62;');
});
