## 4. jQuery Effects Snippets

### 1. Hide () Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

        <link  rel="stylesheet" type="text/css" href="style.css">

    </head>

<body>

    <input type="button" id="hide" value="Hide" />

    <div id="box1"></div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#box1 {
    width: 250px;
    height: 250px;
    border: 2px solid black;
    background-color:red;
}
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#hide").click(function () {

        $('#box1').hide("slow", "linear", function () {

            alert("The animation has been finished");
        })

    });

});

//The hide() is used to hide any element.
//It takes 3 parameters speed,animation effect type,callback.
//Speeds slow fast millisecond 1000 is 1 second.
//effects linear
//callback function
```

### Output

![Banner Image](github-content/example-4-1-0-output.gif/)

### 2. Show () Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

        <link  rel="stylesheet" type="text/css" href="style.css">

    </head>

<body>

    <input type="button" id="show" value="Show" />

    <div id="box1"></div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#box1 {
    width: 250px;
    height: 250px;
    border: 2px solid black;
    background-color:red;

}
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#box1").hide();//It automatically  hides when the document is ready.

    $("#show").click(function () {

        $("#box1").show("slow", "linear", function () {

            alert("It has been showed");
        });

    });

});

//show() is oppasite to hide().
//show() takes  parameters like hide() speed effects callback
//speed slow fast millisecond 1000 = 1 second
//then linear
//callback function.
```

### Output

![Banner Image](github-content/example-4-2-0-output.gif/)

### 3. Toggle () Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

        <link  rel="stylesheet" type="text/css" href="style.css">

    </head>

<body>

    <input type="button" id="toggle" value="Toggle" />

    <div id="box1"></div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#box1 {
    width: 250px;
    height: 250px;
    border: 2px solid black;
    background-color:red;

}
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#toggle").click(function () {

        $("#box1").toggle("slow", "linear", function () {

            alert("Toggle has been finished");
        });
    });
});

//It is almost like hide() and show().
//It does toggle the element form hide to show.
//It takes parameters like hide() and show() speed , effects , callback.
//speed slow, fast milliseconds 1000 = 1 second
//linear
//callback function.
```

### Output

![Banner Image](github-content/example-4-3-0-output.gif/)

### 4. Fade In () Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

        <link  rel="stylesheet" type="text/css" href="style.css">

    </head>

<body>

    <input id="fadein" value="FadeIn" type="button"  /><br />

    <img id="img1" alt="Joker" src="img.jpg" />

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#img1 {
    width:500px;
    height:400px;
    display:none;
}
```

#### JavaScript

```JavaScript
$(function () {

    $("#fadein").click(function () {

        $("#img1").fadeIn(2000, "linear", function () {

            alert("fadeIn() has been completed");
        });

    });

});

//fadeIn() is all most like other effects.
//It takes 3 parameters speed effects callback.
//speed slow , fast milliseconds 1000 =1 second
//effects linear and all/
//callback function.
```

### Output

![Banner Image](github-content/example-4-4-0-output.gif/)

### 5. Fade Out () Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

        <link  rel="stylesheet" type="text/css" href="style.css">

    </head>

<body>

    <p><input id="fadeout" type="button"  value="FadeOut"/> <input type="button" id="fadein" value="FadeIn" /> </p>

    <img id="img1" alt="Joker" src="img.jpg" /><br />

    <h4 id="feedback"></h4>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#img1 {
    width:500px;
    height:400px;

}
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#fadeout").click(function () {

        $("#img1").fadeOut(2000, "linear", function () {

            $("#feedback").html("The image has been hidden");
        });

    });

    $("#fadein").click(function () {

        $("#img1").fadeIn("slow", "linear", function () {

            $("#feedback").text("The image has been showen");
        });

    });

});

//fadeOut() is same as fadeIn() but it fade outs the element.
//It takes parameters like fadeIn();
//Speed slow fast milliseconds 1000 = 1 second.
//effects linear and all.
//callback
//html() can change the html but text() can only change the text.
```

### Output

![Banner Image](github-content/example-4-5-0-output.gif/)

### 6. Fade Toggle () Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

        <link  rel="stylesheet" type="text/css" href="style.css">

    </head>

<body>

   <p><input type="button" id="inout" value="fadeIn and fadeOut" /></p>

    <img id="img1" alt="Joker" src="img.jpg" /><br />

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#img1 {
    width:500px;
    height:400px;

}
```

#### JavaScript

```JavaScript
$(function () {

    $("#inout").click(function () {

        $("#img1").fadeToggle(1000, "linear", function () {

            alert("Animation has been completed");
        });

    });

});

//This fade Toggle
//It takes parameter values like fadeIn() and fadeOut().
//speed slow fast milliseconds 1000 = 1 second.
//Animation type (effects) linear and all.
//callback function.
```

### Output

![Banner Image](github-content/example-4-6-0-output.gif/)

### 7. Fade to () Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

        <link  rel="stylesheet" type="text/css" href="style.css">

    </head>

<body>

    <img class="imgs" src="img.jpg" />

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#box1 {

    width:250px;
    height:250px;
    background-color:red;
    border:2px solid black;

}
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $(".imgs").click(function () {

        $(this).fadeTo("slow", 0.5, function () {//$(this) means current element.

            $(this).css("border", "5px solid red");

        });

    });

});

//The fadeTo() is use to fade an image to a certain opacity.
//It takes 3 parameters speed opacity value callback.
```

### Output

![Banner Image](github-content/example-4-7-0-output.gif/)

### Example 1

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

        <link  rel="stylesheet" type="text/css" href="style.css">

    </head>

<body>

    <img class="imgs" src="img.jpg" />
    <img class="imgs" src="img.jpg" />

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#box1 {

    width:250px;
    height:250px;
    background-color:red;
    border:2px solid black;

}
```

#### JavaScript

```JavaScript
$(function () {

    var speed = 500;

    $(".imgs").css("opacity", 0.5);

    $(".imgs").mouseover(function () {

        $(this).fadeTo(speed, 1) //$(this) means the current element that the user overs it.

        $(".imgs").not(this).fadeTo(speed, 0.4);//not(this) means not apply to the current element.

    });

});

//The fadeTo() is use to fade an image to a certain opacity.
//It takes 3 parameters speed opacity value callback.
```

### Output

![Banner Image](github-content/example-4-7-1-output.gif/)

### 8. Slide Down () Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

        <link  rel="stylesheet" type="text/css" href="style.css">

    </head>

<body>

    <div id="loginPage">

        <h3></h3>

    </div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#loginPage {

    width:750px;
    height:100px;
    border:2px solid red;
    background-color:black;
    margin-left:auto;
    margin-right:auto;
    color:white;
    font-size:20px;
    text-align:center;
    display:none;

}

body{
margin-top:0;

}
```

#### JavaScript

```JavaScript
$(function () {

    $("#loginPage").slideDown(500, "linear", function () {

        $("#loginPage h3").text("You need to login first if you want to access the website");
    });

});

//The slideDown() almost like fadeIn() but it has a diffrent animation effect.
//It takes 3 parameters values
//Speed slow fast milliseconds 1000 = 1 second
//Animation type linear and all.
//It has a callback function.
```

### Output

![Banner Image](github-content/example-4-8-0-output.gif/)

### 9. Slide Up () Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

        <link  rel="stylesheet" type="text/css" href="style.css">

    </head>

<body>

    <div id="loginPage">

        <h3></h3>
        <a href="#" id="hideMsg">No,Thanks</a>

    </div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#loginPage {

    width:750px;
    height:100px;
    border:2px solid red;
    background-color:black;
    margin-left:auto;
    margin-right:auto;
    color:white;
    font-size:20px;
    text-align:center;
    display:none;

}

body{
margin-top:0;

}
```

#### JavaScript

```JavaScript
$(function () {

    var speed = 500;

    $("#loginPage").slideDown(speed, "linear", function () {

        $("#loginPage h3").text("You need to login first if you want to access the website");

    });

    $("#hideMsg").click(function () {

        $("#loginPage").slideUp(speed, "linear", function () {

            alert("Sorry You can't access the website untill you login");

            window.open("www.google.lk", "_self");
        });

    });

});

//The slideUp() is oppasite to slideDown().
//It takes 3 parameters like speed animation type(effects) and callback.
//speed slow fast milliseconds 1000 = 1 second.
//Animation type linear and others
//It has callback function.
```

### Output

![Banner Image](github-content/example-4-9-0-output.gif/)

### 10. Slide Toggle () Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

        <link  rel="stylesheet" type="text/css" href="style.css">

    </head>

<body>

    <input id="slidetoggle" type="button" value="SlideToggle" />

    <div id="box1"></div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#box1 {

    width:250px;
    height:250px;
    background-color:red;
    border:2px solid black;

}
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#slidetoggle").click(function () {

        $("#box1").slideToggle(600, "linear", function () {

            alert("Finished");
        });

    });

});

//The slideToggle() is same as fadeToggle but diffrent animation.
//It takes 3 parameters like speed slow fast milliseconds 1000 = 1 second
//Animation types linear
//It has a callback function.
```

### Output

![Banner Image](github-content/example-4-10-0-output.gif/)

### 11. Stop () Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

        <link  rel="stylesheet" type="text/css" href="style.css">

    </head>

<body>

    <p><input id="start" type="button" value="Start" /><input id="stop" type="button" value="Stop" /></p>

    <p><img id="img1"  src="img.jpg" alt="Joker" /></p>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#box1 {

    width:250px;
    height:250px;
    background-color:red;
    border:2px solid black;

}
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#start").click(function () {

        $("#img1").slideToggle(3000);
    });

    $("#stop").click(function () {

        $("#img1").stop();

    });

});

//The stop() keyword is used to stop animations.
```

### Output

![Banner Image](github-content/example-4-11-0-output.gif/)

### 12. Delay () Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

        <link  rel="stylesheet" type="text/css" href="style.css">

    </head>

<body>

  <input id="start" type="button" value="Start" />

    <p id="someText">This is JokerHcker</p>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#box1 {

    width:250px;
    height:250px;
    background-color:red;
    border:2px solid black;

}
```

#### JavaScript

```JavaScript
$(function () {

    $("#start").click(function () {

        $("#someText").delay(3000).fadeOut();

    });

});

//The delay() function is used to give some certain times to delay the animation.
//delay() takes milliseconds 1000= 1 second.
```

### Output

![Banner Image](github-content/example-4-12-0-output.gif/)

### Example 0

#### HTML

```HTML

```

#### CSS

```CSS

```

#### JavaScript

```JavaScript

```

### Output

![Banner Image](github-content/example-4-0-0-output.gif/)

### Example 1

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

        <link  rel="stylesheet" type="text/css" href="style.css">

    </head>

<body>

  <input id="start" type="button" value="Start" />

    <p id="someText">This is JokerHcker</p>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#box1 {

    width:250px;
    height:250px;
    background-color:red;
    border:2px solid black;

}
```

#### JavaScript

```JavaScript
$(function () {

    $("#start").click(function () {

        $("#someText").fadeOut().delay(3000).fadeIn();

    });

});

//In this example first the element will be disappeared than after 3 seconds it will appaear
//The delay() function is used to give some certain times to delay the animation.
//delay() takes milliseconds 1000= 1 second.
```

### Output

![Banner Image](github-content/example-4-12-1-output.gif/)

### 13. Resize () Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

		<link  rel="stylesheet" type="text/css" href="style.css">

	</head>

<body>

    <div id="veryCenter"></div>

	<script src="jquery-3.2.1.min.js" type="text/javascript"></script>
	<script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#veryCenter {

    width:250px;
    height:150px;
    background-color:black;
    position:absolute;

}
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    function div_center() {

        var window_height = $(window).height();
        var window_width = $(window).width();

        var obj_height = $("#veryCenter").height();
        var obj_width = $("#veryCenter").width();

        $("#veryCenter").css('top', (window_height / 2) - (obj_height / 2)).css("left", (window_width / 2) - (obj_width / 2));//We got death center of the object by dividing by 2.

    }

     div_center();

     $(window).resize(function () {

         div_center();
     })
});

//We need to subtract the window height and width by object window height and width.
//before this want to divide window height and width and object height and width by 2.
//The resize() events runs everytime when the user resize the page.
//in a nutshall we need get the death center of the objects and window than we subtract them.
```

### Output

![Banner Image](github-content/example-4-13-0-output.gif/)
