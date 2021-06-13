function dance3 () {
    basic.showLeds(`
        # # # . .
        # # # . .
        . # . . .
        # # . . .
        . # . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # . .
        # # # . .
        . # . . .
        . # # # .
        . # . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # . .
        # # # . .
        . # . . .
        # # # # .
        . # . . .
        `)
}
function dance2 () {
    basic.showLeds(`
        . . # # #
        . . # # #
        . . . # .
        . # # # .
        . . . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # # #
        . . # # #
        . . . # .
        . . . # #
        . . . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # # #
        . . # # #
        . . . # .
        . # # # #
        . . . # .
        `)
}
function Dance () {
    basic.showLeds(`
        . # # # .
        . # # # .
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        . # # # .
        . . # . .
        # # # . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        . # # # .
        . . # . .
        . . # # #
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        . # # # .
        . . # . .
        # # # # #
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . # # # .
        # . # . #
        `)
}
basic.forever(function () {
    Dance()
    dance2()
    dance3()
})
