const aa = [{x:1}, 3]
// 淺拷貝(shallow clone)
const ab = [...aa]

// 可多拷貝一層
const ac = aa.map(v => { return {...v} })


console.log(aa, ab, ac)

aa[1] = 999

console.log(aa, ab, ac)

aa[0].x = 888

console.log(aa, ab, ac)