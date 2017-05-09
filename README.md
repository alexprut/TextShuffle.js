TextShuffle.js
==============  
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![MIT](https://img.shields.io/dub/l/vibe-d.svg)](https://github.com/alexprut/TextShuffle.js/blob/master/LICENSE)  

> A jQuery plugin for text shuffling (alike the airport terminal).

##  Demo
![Demo 1](https://github.com/alexprut/TextShuffle.js/raw/master/examples/demo-randombynary.gif)
![Demo 2](https://github.com/alexprut/TextShuffle.js/raw/master/examples/demo-randomchars.gif)

##  Install
```
bower install textshuffle.js --save
```

##  Usage
```javascript
$('#demo').textShuffle({chars: '1010'});
```
or
```javascript
var shuffle = $('#demo').textShuffle();
shuffle.setChars('1010');
```

#### Parameters
|Name|Type|Description|Default|
|----|----|-----------|-------|
|```chars```|```string```|the character to be used during the shuffle|"01#/&%$?\_-%\*"|
|```animationSpeed```|```int```|the animation speed in milliseconds|10|
|```bindEvent```|```string```|the event to bind (e.g. click, mouseenter, mouseleave, ...)|'mouseover'|


#### Methods
|Name|Parameters Type|Description|
|----|----|-----------|
|```setChars(newChars)```|```string```|the character to be used during the shuffle|
|```setAnimationSpeed(newSpeed)```|```int```|the animation speed in milliseconds|
|```play()```||triggers the shuffle animation|

##  License
Licensed under [MIT](https://github.com/alexprut/TextShuffle.js/blob/master/LICENSE).
