/**
 * enchant();
 * Preparation for using enchant.js.
 * (Exporting enchant.js class to global namespace.
 *  ex. enchant.Sprite -> Sprite etc..)
 *
 * enchant.js を使う前に必要な処理。
 * (enchant.js 本体や、読み込んだプラグインの中で定義されている enchant.Foo, enchant.Plugin.Bar などのクラスを、
 *  それぞれグローバルの Foo, Bar にエクスポートする。)
 */
enchant();

window.onload = function () {
    //console.log('Hello World');    
      var core = new Core(320, 320);
    core.preload('chara1.png');
    core.onload = function() {
        var bear = new Sprite(32, 32);
        bear.image = core.assets['chara1.png'];
        bear.x = 0;
        bear.y = 0;

        bear.addEventListener('enterframe', function()
        {
            this.x +=10;
            if(this.x > 439) this.x = 0;
            this.rotate(2);
            this.scale(1.01, 1.01);
        });

        core.rootScene.addChild(bear);
    };
    core.start();

};