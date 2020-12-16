class EventEmitter {
    constructor() {
        this.events = {};
    }
    // 实现订阅
    on(type, callBack) {
        if (!this.events) this.events = Object.create(null);

        if (!this.events[type]) {
            this.events[type] = [callBack];
        } else {
            this.events[type].push(callBack);
        }
    }
    // 删除订阅
    off(type, callBack) {
        if (!this.events[type]) return;
        if (!callBack) {
            this.events[type] = [];
            return;
        }
        this.events[type] = this.events[type].filter(item => {
            return item !== callBack;
        });
    }
    // 只执行一次订阅事件
    once(type, callBack) {
        function fn(...args) {
            callBack(...args);
            this.off(type, fn);
        }
        this.on(type, fn);
    }
    // 触发事件
    emit(type, ...rest) {
        this.events[type] &&
        this.events[type].forEach(fn => fn.apply(this, rest));
    }
}

// 使用如下
const event = new EventEmitter();

const handle = (...args) => {
    console.log(...args);
};

const handle2 = (...args) => {
    console.warn(...args);
};

const handle3 = (...args) => {
    console.error(...args);
};

// 一. 基本使用 on, emit, off
event.on("click", handle);
event.emit("click", 1,2,3); // 打印 1 2 3
event.off("click", handle);
event.emit("click", 1, 2); // off 后这个就不会打印了





// 二. once 的使用 VS on 的使用
event.once("click2", handle);
event.emit("click2", 1,2,3); // 1 2 3
event.emit("click2", 1,2,3); // 不会打印了，因为是 once

event.on("click3", handle);
event.emit("click3", 1,2,3,4); // 1 2 3 4
event.emit("click3", 1,2,3,4); // 1 2 3 4





// 三. on 多次，取消某次
event.on("click4", handle);
event.on("click4", handle2);
event.on("click4", handle3);
event.emit("click4", 5,6); // log warn error 都有
console.log('====================');
event.off("click4", handle);
event.emit("click4", 5,6); // log 没了
console.log('====================');
event.off("click4");
event.emit("click4", 5,6); // 全没了
console.log('====================');

