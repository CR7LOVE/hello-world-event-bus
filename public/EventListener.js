document.body.onload = function () {
    let body = document.body;
    console.log('body 第一次', body);

    const handleClick1 = () => console.log('click11111111111111');
    body.addEventListener('click', handleClick1);
    body.remove();
    console.log('body 第二次', body); // 奇迹发生了，这里是有值的，感觉是 js 自己存了一份 dom 副本，只是将页面标签删除了
    console.log('body click', body.click);
    body.click(); // 这里会触发 handleClick1，所以，可以证实，即使将元素删除，元素上绑定的事件也在

    // 解绑办法
    // 1. removeEventListener
    body.removeEventListener('click', handleClick1);
    body.click(); // 不会再触发回调了

    // 2. null
    // body = null;
    // body && body.click && body.click(); // body 都成 null 了，自然没有 click 方法了


    // 注意：
    // document.body.addEventListener('click', handleClick1);
    // document.body.remove();
    // document.body.click(); // 傻逼写法，会报错，因为 document.body 没了
};
