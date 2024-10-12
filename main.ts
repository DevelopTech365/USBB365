namespace SpriteKind {
    export const Duck = SpriteKind.create()
}
scene.setBackgroundColor(1)
let mySprite = sprites.create(assets.image`Duckey`, SpriteKind.Duck)
forever(function () {
    mySprite.setBounceOnWall(true)
})
