$.fn.textShuffle = function (options) {
    options = $.extend(
        {bindElement: this},
        options
    );

    return new TextShuffle(options);
};
