let c = 0
let a = 1
let b = 1
basic.showNumber(b)
basic.showNumber(a)
basic.forever(function () {
    c = a + b
    basic.showNumber(c)
    a = b
    b = c
})
