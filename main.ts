namespace SpriteKind {
    export const Duck = SpriteKind.create()
}
music.play(music.createSoundEffect(WaveShape.Sine, 1, 5000, 200, 200, 2565, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
let mySprite = sprites.create(assets.image`HP`, SpriteKind.Projectile)
