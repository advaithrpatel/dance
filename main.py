def dance3():
    basic.show_leds("""
        # # # . .
        # # # . .
        . # . . .
        # # . . .
        . # . . .
        """)
    basic.pause(100)
    basic.show_leds("""
        # # # . .
        # # # . .
        . # . . .
        . # # # .
        . # . . .
        """)
    basic.pause(100)
    basic.show_leds("""
        # # # . .
        # # # . .
        . # . . .
        # # # # .
        . # . . .
        """)
def dance2():
    basic.show_leds("""
        . . # # #
        . . # # #
        . . . # .
        . # # # .
        . . . # .
        """)
    basic.pause(100)
    basic.show_leds("""
        . . # # #
        . . # # #
        . . . # .
        . . . # #
        . . . # .
        """)
    basic.pause(100)
    basic.show_leds("""
        . . # # #
        . . # # #
        . . . # .
        . # # # #
        . . . # .
        """)
def Dance():
    basic.show_leds("""
        . # # # .
        . # # # .
        # . # . #
        . # # # .
        . . # . .
        """)
    basic.pause(100)
    basic.show_leds("""
        . # # # .
        . # # # .
        . . # . .
        # # # . .
        . . # . .
        """)
    basic.pause(100)
    basic.show_leds("""
        . # # # .
        . # # # .
        . . # . .
        . . # # #
        . . # . .
        """)
    basic.pause(100)
    basic.show_leds("""
        . # # # .
        . # # # .
        . . # . .
        # # # # #
        . . # . .
        """)

def on_forever():
    Dance()
    dance2()
    dance3()
basic.forever(on_forever)
