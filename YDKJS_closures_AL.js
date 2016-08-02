//Chapter1
//function foo(a) {
//    console.log( a ); // 2
//}

//foo( 2 );

//Quiz Answers
//LHS = (c=)(a=2)(parameter assingment)(b=)
//RHS = (foo()), (=a),(a+b)
//function foo(a) {
//    console.log( a + b );
//}

//var b = 2;
//
//foo( 2 );



//Chapter2
//function foo(a) {

//    var b = a * 2;

//    function bar(c) {
//        console.log( a, b, c );
//    }

//    bar(b * 3);
//}

//foo( 2 );
//function foo(str, a) {
//    eval( str );
//    console.log( a, b );
//}

//var b = 2;

//foo( "var b = 3;", 1 );

//function foo(str) {
//   "use strict";
//   eval( str );
//   console.log( a );
//}

//foo( "var a = 2" );

//var obj = {
//    a: 1,
//    b: 2,
//    c: 3
//};

//obj.a = 2;
//obj.b = 3;
//obj.c = 4;

//with (obj) {
//    a = 3;
//    b = 4;
//    c = 5;
//}

//function foo(obj) {
//    with (obj) {
//        a = 2;
//    }
//}

//var o1 = {
//    a: 3
//};

//var o2 = {
//    b: 3
//};

//foo( o1 );
//console.log( o1.a );

//foo( o2 );
//console.log( o2.a );
//console.log( a );




//Chapter3

//function foo(a) {
//    var b = 2;

//    function bar() {

//    }

//    var c = 3;
//}
//function doSomething(a) {
//    b = a + doSomethingElse( a * 2 );

  //  console.log( b * 3 );
//}

//function doSomethingElse(a) {
//    return a - 1;
//}

//var b;

//doSomething( 2 );
//function doSomething(a) {
//    function doSomethingElse(a) {
//        return a - 1;
//    }

//    var b;

//    b = a + doSomethingElse( a * 2 );

//    console.log( b * 3 );
//}

//doSomething( 2 );

//var a = 2;

//function foo() {

//    var a = 3;
//    console.log( a ); // 3

//}
//foo();

//console.log( a ); // 2
//var a = 2;

//(function foo(){

//    var a = 3;
//    console.log( a );

//})();

//console.log( a );

//var a = 2;

//(function foo(){

//    var a = 3;
//    console.log( a );

//})();

//console.log( a );
//var a = 2;

//(function IIFE(){

//    var a = 3;
//    console.log( a );

//})();

//console.log( a );
//var a = 2;

//(function IIFE( global ){

//    var a = 3;
//    console.log( a );
//    console.log( global.a );

//})( window );

//console.log( a );

//undefined = true;

//(function IIFE( undefined ){

//    var a;
//    if (a === undefined) {
//        console.log( "Undefined is safe here!" );
//    }

//})();
//var a = 2;

//(function IIFE( def ){
//    def( window );
//})(function def( global ){

//    var a = 3;
//    console.log( a );
//    console.log( global.a );

//});
//try {
//    undefined();
//}
//catch (err) {
//    console.log( err );
//}

//console.log( err );
//var foo = true;

//if (foo) {
//    let bar = foo * 2;
//    bar = something( bar );
//    console.log( bar );
//}

//console.log( bar );
//var foo = true;

//if (foo) {
//    var a = 2;
//    const b = 3;

//    a = 3;
//    b = 4;
//}

//console.log( a );
//console.log( b );



//Chapter 4
//a = 2;

//var a;

//console.log( a );
//foo();

//function foo() {
//    console.log( a );

//    var a = 2;
//}
//function foo() {
//    var a;

//    console.log( a );

//    a = 2;
//}

//foo();
//foo();
//bar();

//var foo = function bar() {

//};
//function foo() {
//    console.log( 1 );
//}

//foo();

//foo = function() {
//    console.log( 2 );
//};
//foo();

//function foo() {
//    console.log( 1 );
//}

//var foo = function() {
//    console.log( 2 );
//};

//function foo() {
//    console.log( 3 );
//}
//foo();

//var a = true;
//if (a) {
//   function foo() { console.log( "a" ); }
//}
//else {
//   function foo() { console.log( "b" ); }
//}



//CHapter5
//function foo() {
//    var a = 2;

//    function bar() {
//        console.log( a );
//    }

//    bar();
//}

//foo();
//function foo() {
//    var a = 2;

//    function bar() {
//        console.log( a );
//    }

//    return bar;
//}

//var baz = foo();

//baz();
//function foo() {
//    var a = 2;

//    function baz() {
//        console.log( a );
//    }

//    bar( baz );
//}

//function bar(fn) {
//    fn();
//}

//function wait(message) {

//    setTimeout( function timer(){
//        console.log( message );
//    }, 1000 );

//}

//wait( "Hello, closure!" );

//function setupBot(name,selector) {
//    $( selector ).click( function activator(){
//        console.log( "Activating: " + name );
//    } );
//}

//setupBot( "Closure Bot 1", "#bot_1" );
//setupBot( "Closure Bot 2", "#bot_2" );

//var a = 2;

//(function IIFE(){
//    console.log( a );
//})();
//for (var i=1; i<=5; i++) {
//    setTimeout( function timer(){
//        console.log( i );
//    }, i*1000 );
//}
//for (var i=1; i<=5; i++) {
//    (function(){
//        var j = i;
//        setTimeout( function timer(){
//            console.log( j );
//        }, j*1000 );
//    })();
//}

//for (let i=1; i<=5; i++) {
//    setTimeout( function timer(){
//        console.log( i );
//    }, i*1000 );
//}

//function foo() {
//    var something = "cool";
//    var another = [1, 2, 3];

//    function doSomething() {
//        console.log( something );
//    }

//    function doAnother() {
//        console.log( another.join( " ! " ) );
//    }
//}
//function CoolModule() {
//    var something = "cool";
//    var another = [1, 2, 3];

//    function doSomething() {
//        console.log( something );
//    }

//    function doAnother() {
//        console.log( another.join( " ! " ) );
//    }

//    return {
//        doSomething: doSomething,
//        doAnother: doAnother
//    };
//}

//var foo = CoolModule();

//foo.doSomething();
//foo.doAnother();
//function CoolModule(id) {
//    function identify() {
//        console.log( id );
    }

//    return {
        identify: identify
//    };
//}

//var foo1 = CoolModule( "foo 1" );
//var foo2 = CoolModule( "foo 2" );

//foo1.identify();
//foo2.identify();

//var foo = (function CoolModule(id) {
//    function change() {

//        publicAPI.identify = identify2;
//    }

//    function identify1() {
//        console.log( id );
//    }

//    function identify2() {
//        console.log( id.toUpperCase() );
//    }

//    var publicAPI = {
//        change: change,
//        identify: identify1
//    };

//    return publicAPI;
//})( "foo module" );

//foo.identify();
//foo.change();
//foo.identify();

//var MyModules = (function Manager() {
//    var modules = {};

//    function define(name, deps, impl) {
//        for (var i=0; i<deps.length; i++) {
//            deps[i] = modules[deps[i]];
//        }
//        modules[name] = impl.apply( impl, deps );
//    }

//    function get(name) {
//        return modules[name];
//    }

//    return {
//        define: define,
//        get: get
//    };
//})();
//MyModules.define( "bar", [], function(){
//    function hello(who) {
//        return "Let me introduce: " + who;
//    }

//    return {
//        hello: hello
//    };
//} );

//MyModules.define( "foo", ["bar"], function(bar){
//    var hungry = "hippo";

//    function awesome() {
//        console.log( bar.hello( hungry ).toUpperCase() );
//    }

//    return {
//        awesome: awesome
//    };
//} );

//var bar = MyModules.get( "bar" );
//var foo = MyModules.get( "foo" );

//console.log(
//    bar.hello( "hippo" )
//);

//foo.awesome();
//import hello from "bar";

//var hungry = "hippo";

//function awesome() {
//    console.log(
//        hello( hungry ).toUpperCase()
//    );
//}

//export awesome;
