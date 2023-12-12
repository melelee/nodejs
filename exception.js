var a = ''
console.log(a.length)
a = null
try {
    console.log(a.length)
} catch (e) {
    if (e instanceof TypeError){
        console.log('type-error')
    }
    console.log('出错了：' + e)
} finally {
    console.log('finally')
}