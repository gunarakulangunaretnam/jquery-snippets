# jQuery

## 01.Basic Syntax

```javascript

$(document).ready(function(){

   // jQuery methods go here...

});

```

## 02.Selectors

```javascript
1.$("*") //This will select all elements.

2.$(this)

3.$("p.intro")

4.$("p:first")

5.$("p:last")

6.$("ul li:first")

7.$("ul li:first-child")

8.$("[href]")

9.$("a[target='_blank']")

10.$(".intro,.demo")

11.$("h1,div,p")

12.$(":input")

13.$(":text")

14.$(":password")

15.$(":radio")

16.$(":checkbox")

17.$(":submit")

18.$(":button")

19.$(":disabled")

20.$(":checked")

```

## 03.Events

```javascript
01.on({});

@1.Mouse Events

01.onclick
02.ondblclick
03.oncontextmenu
04.onmousedown
05.onmouseup
06.onmouseenter
07.onmouseover
08.onmousemove
09.onmouseleave
10.onmouseout

@2.Keyboard Events

01.onkeydown
02.onkeypres
03.onkeyup




@3.Form Events.

01.onfocus
02.onblur
03.oninput
04.onchange
05.onselect
06.onsubmit


@04.Touch Events

01.ontouchstart
02.ontouchmove
03.ontouchcancel
04.ontouchend


@05.MouseEvent Object

01.button
02.detail
03.clientX
04.clientY


@06KeyboardEvent Object

01.key
02.keyCode
03.charCode



@07.Frame/Object Events

01.onerror
02.onresize
03.onscroll

@08.Media Events

01.onplay
02.onpause
03.onended

@09.Clipboard Events

01.oncopy
02.oncut
03.onpaste

```
