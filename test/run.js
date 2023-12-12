function fast() {
    console.log("快跑");
}

function slow() {
    console.log('慢跑');
}

// 第一种暴露方式
// module.exports = {
//     slow,
//     fast
// };


// 第二种暴露方式
exports.fast = fast;
exports.slow = slow;