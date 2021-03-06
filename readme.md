# Bosco 

![Bosco] (https://github.com/darkoverlordofdata/bosco/raw/master/web/res/favicon.png)


           __  __         ___                            ___  ___
          / /_/ /  ___   / _ \___ _    _____ ____  ___  / _/ / _ )___  ___ _______
         / __/ _ \/ -_) / ___/ _ \ |/|/ / -_) __/ / _ \/ _/ / _  / _ \(_-</ __/ _ \
         \__/_//_/\__/ /_/   \___/__,__/\__/_/    \___/_/  /____/\___/___/\__/\___/

Bosco game harness.

## Config

bosco.start(config);

    namespace       game top level object
    controllers     controller classes
    fullscreen      true/false
    scale           false or {x, y}
    stats           true/false - use mrdoob's stats
    storage         true/false - use local storage
    properties      default storage values
    width           game renderer width
    height          game renderer height
    options         PIXI renderer options
    assets          assets for PIXI loader
    resources       bosco prefabs
    theme           EZGUI theme name
    ezgui           EZGUI component definitions

## Bosco Stack

    stats.js        *
    pixi.js         ~3.0.8
    localstoragedb  git://github.com/knadh/localStorageDB
    bosco           git://github.com/darkoverlordofdata/bosco
    ezgui           git://github.com/Ezelia/EZGUI/

## Demo

https://darkoverlordofdata.com/bosco/?debug=true


# MIT License

Copyright (c) 2015-2016 Bruce Davidson &lt;darkoverlordofdata@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
