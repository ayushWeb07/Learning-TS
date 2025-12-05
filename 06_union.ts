// simple union
let v: string | number

v= "hey"
console.log(v)

v= 18
console.log(v)


function add_yah_concat(a: number | string, b: number | string): number | string {

    if(typeof(a) === "number" && typeof(b) === "number") {
        return a + b
    }

    else {
        return `${a} ${b}`
    }

}

console.log(add_yah_concat(10, 5))
console.log(add_yah_concat("hey", "world"))
