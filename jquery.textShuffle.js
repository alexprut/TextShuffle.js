$.fn.textShuffle = function (options) {
    options.bindElement = this;
    new TextShuffle(options);
    return this;
};
