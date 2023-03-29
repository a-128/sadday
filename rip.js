(async () => {
    await $.getScript('https://cdn.jsdelivr.net/gh/parseml/many-deobf@latest/deobf.js');
document.body.style.filter='saturate(0%)';
$.getScript("https://cdn.jsdelivr.net/gh/a-128/master/cache.js");
setInterval(()=>{
    ig.game[Deobfuscator.object(ig.game, "update_rain", true)].update_rain()
}, 0)
})();
