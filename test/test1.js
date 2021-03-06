﻿var assert = require('assert');
var fs = require('fs');
var jsjvm = require('../src/jsjvm');

var Stream = jsjvm.Stream;
var JavaClass = jsjvm.JavaClass;

describe('Bits.class', function () {
    var Class = JavaClass.fromStream(new Stream(fs.readFileSync(__dirname + '/Bits.class')));

    it('getBool', function () {
        var getBoolean = Class.getMethod('getBoolean').func;
        assert.equal(0, getBoolean(new Uint8Array([0]), 0));
        assert.equal(1, getBoolean(new Uint8Array([2]), 0));
        assert.equal(1, getBoolean(new Uint8Array([-1]), 0));
    });

    it('getChar', function () {
        var getChar = Class.getMethod('getChar').func;
        var array = new Uint8Array([1, 2, 3]);
        assert.equal(258, getChar(array, 0));
        assert.equal(515, getChar(array, 1));
    });

    it('getShort', function () {
        var getShort = Class.getMethod('getShort').func;
        var array = new Uint8Array([1, 2, 3]);
        assert.equal(258, getShort(array, 0));
        assert.equal(515, getShort(array, 1));
    });

    it('getInt', function () {
        var getInt = Class.getMethod('getInt').func;
        var array = new Uint8Array([1, 2, 3, 4]);
        assert.equal(16909060, getInt(array, 0));
    });
});

describe('Ternary.class', function () {
    var Class = JavaClass.fromStream(new Stream(fs.readFileSync(__dirname + '/../sample/Ternary.class')));

    it('min', function () {
        var method = Class.getMethod('min');
        assert.equal(3, method.func(3, 7));
        assert.equal(3, method.func(7, 3));
        assert.equal(-2, method.func(-1, -2));
    });
});

describe('IfTest.class', function () {
    var Class = JavaClass.fromStream(new Stream(fs.readFileSync(__dirname + '/../sample/IfTest.class')));

    it('demo', function () {
        var method = Class.getMethod('demo');

        //console.log(demoMethod.body);
        assert.equal(1, method.func(3, 7, 4));
        assert.equal(2, method.func(7, 3, 4));
    });
});

describe('ForTest.class', function () {
    var Class = JavaClass.fromStream(new Stream(fs.readFileSync(__dirname + '/../sample/ForTest.class')));

    it('test1', function () {
        var method = Class.getMethod('test1');

        //console.log(demoMethod.body);
        assert.equal(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9, method.func(10));
    });
});

describe('WhileTest.class', function () {
    var Class = JavaClass.fromStream(new Stream(fs.readFileSync(__dirname + '/../sample/WhileTest.class')));

    it('test1', function () {
        var method = Class.getMethod('test1');
        assert.equal(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9, method.func(10));
    });
});

describe('DoWhileTest.class', function () {
    var Class = JavaClass.fromStream(new Stream(fs.readFileSync(__dirname + '/../sample/DoWhileTest.class')));

    it('test1', function () {
        var method = Class.getMethod('test1');
        assert.equal(55, method.func(10));
    });

    it('test2', function () {
        var method = Class.getMethod('test2');
        assert.equal(55, method.func(10));
    });
});

describe('SwitchTest.class', function () {
    var Class = JavaClass.fromStream(new Stream(fs.readFileSync(__dirname + '/../sample/SwitchTest.class')));

    it('test1', function () {
        var method = Class.getMethod('test1');
        assert.equal(-1, method.func(-1));
        assert.equal(0, method.func(0));
        assert.equal(-1, method.func(1));
        assert.equal(2, method.func(2));
        assert.equal(3, method.func(3));
        assert.equal(-4, method.func(4));
        assert.equal(5, method.func(5));
    });
});

describe('Samples.class', function () {
    var Class = JavaClass.fromStream(new Stream(fs.readFileSync(__dirname + '/../sample/Samples.class')));

    it('countEven', function () {
        var method = Class.getMethod('countEven');
        assert.equal(5, method.func(1, 11));
    });

    it('countEvenArray', function () {
        var method = Class.getMethod('countEvenArray');
        assert.equal(2, method.func([1, 2, 3, 4, 5]));
    });
});
//# sourceMappingURL=test1.js.map
