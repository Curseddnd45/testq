namespace SpriteKind {
    export const Teeth = SpriteKind.create()
}
info.onCountdownEnd(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Teeth, function (sprite, otherSprite) {
    game.gameOver(true)
})
let mySprite = sprites.create(img`
    . . . . . . b b b b a a . . . . 
    . . . . b b d d d 3 3 3 a a . . 
    . . . b d d d 3 3 3 9 3 3 a a . 
    . . b d d 3 3 3 7 3 3 5 3 3 a . 
    . b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
    . b 3 3 5 3 3 a a 3 3 2 3 3 a b 
    b 3 3 3 3 3 a a 3 3 3 7 d a 4 b 
    b 3 3 3 3 b a 3 3 3 9 3 d a 4 b 
    b 3 3 3 3 3 3 2 3 5 3 d a 4 4 e 
    a 3 9 3 3 3 3 3 3 3 d a 4 4 4 e 
    a 3 3 3 3 3 7 3 d d a 4 4 4 e . 
    a a 3 3 3 d d d a a 4 4 4 e e . 
    . e a a a a a a 4 4 4 4 e e . . 
    . . e e b b 4 4 4 4 b e e . . . 
    . . . e e e e e e e e . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
controller.moveSprite(mySprite)
let mySprite2 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f d d d d d d d d d d d d f f 
    f f d 1 1 1 d f d 1 1 1 1 d f f 
    f f d 1 1 1 d f d 1 1 1 1 d f f 
    f f d 1 1 1 d f d 1 1 1 1 d f f 
    f f d d d d d f d d d d d d f f 
    f f f f f f f f f f f f f f f f 
    f f d d d d f d d d f d d d f f 
    f f d 1 1 d f d 1 d f d 1 d f f 
    f f d 1 1 d f d 1 d f d 1 d f f 
    f f d 1 1 d f d 1 d f d 1 d f f 
    f f d 1 1 d f d 1 d f d 1 d f f 
    f f d 1 1 d f d 1 d f d 1 d f f 
    f f d d d d d d d d d d d d f f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Teeth)
mySprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
info.startCountdown(10)
