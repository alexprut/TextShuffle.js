$.fn.textShuffle = function (options) {
    new TextShuffle({
        bindElement: this,
        animationSpeed: options.animationSpeed,
        bindEvent: options.bindEvent,
        chars: options.chars
    });
    return this;
};
