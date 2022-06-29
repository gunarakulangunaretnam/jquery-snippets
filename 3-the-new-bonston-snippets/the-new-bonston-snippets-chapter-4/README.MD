### 9. jQuery Plugins Snippets

### 1. Basic Template Snippets

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

    <input id="btn1" type="button" value="helo" />

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="plugin1.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#btn1").click(function () {

        $("#btn1").al();
    });
});
```

```JavaScript
$(document).ready(function () {

    $("#btn1").click(function () {

        $("#btn1").al();
    });
});
```

### Output

![Banner Image](github-content/example-9-1-0-output.gif/)

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

    <input id="k" type="password" />
    <input id="btn1" type="button" value="helo" />

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="plugin1.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#btn1").click(function () {

        $("#k").pass();
    });
});
```

```JavaScript
(function ($) {

    $.fn.pass = function () {

        $("input[type='password']").attr("type", "text");

    }

})(jQuery);
```
### Output

![Banner Image](github-content/example-9-1-1-output.gif/)

### 2. Target Links () Snippets

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

    <a href="www.google.lk">Google</a>
    <a href="www.facebook.lk">facebook</a>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="targetLinks.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("a").targetLinks();

});
```

```JavaScript
(function ($) {

    $.fn.targetLinks = function () {//targetLinks is the name of this plugins.

        var target = $(this).attr("target");

        if (target == undefined ) {

            $(this).attr("target", "_blank");

        }
    };

})(jQuery);

//This is the basic template to create plugins.
```

### Output

![Banner Image](github-content/example-9-2-0-output.gif/)

### 3. Highlight () Snippets

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

    <h1 id="h1">This is kuna</h1>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="plugin1.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#h1").highlight({color:"yellow",foreground:"red"});

});

//highlight is plugin that i made.
```

```JavaScript
(function ($) {

    $.fn.highlight = function (options) {

        var settings = {

            'color': null,
            'foreground':null

    }

        if (options) {

            $.extend(settings, options);

		   //$.extend(settings, options) means if options are avaliable just overwirte the settings with avaliable options.
            //This code means we join options(parameters) with settings object.
            //We need to give paramter's values like color:red,foreground:"black".
            // $.extend keyword join them together.
            //if the programmer provides anything thats will be change in the settings object.
            //The programmer will provide an object as a parameter value.
        }

        this.css("background-color", settings.color).css("color", settings.foreground);

    }

})(jQuery);
```

### Output

![Banner Image](github-content/example-9-3-0-output.png/)

### 4. Count Down () Snippets

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

    <div id="place"></div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="plugin1.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
(function ($) {

    $.fn.countDown = function (options,callback) {

        var settings = {

            form: null,

        }

        if (options) {

            $.extend(settings, options)

            /*
            $.extend(settings, options) means if options are avaliable just overwirte the settings with avaliable options.

             */

        }

        var current = settings.form;
        var display = this;//We need to make the this keyword as globel variable.

        function countExu() {

            current = current - 1;
            display.text(current);

            if (current == 0) {//if it is == 0.

                clearInterval(interVal);
                callback();//we call the function.
            }
        }

        var interVal = setInterval(countExu, 1000);

    };

})(jQuery);
```

### Output

![Banner Image](github-content/example-9-4-0-output.png/)

### 5. Tooltip () Snippets

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

    <a href="http://www.google.lk" title="Google is the powerful serach engine">Google</a><br />
    <a href="http://www.w3schools.com" title="A great webiste for learnig web development">W3schools</a>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="plugin1.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#hoverText {

    display:none;
    position:absolute;
    padding:8px;
    background-color:gray;
    border:1px solid black;
    color:white;
}
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("a").toolTip();

});
```

```JavaScript
(function ($) {

    $.fn.toolTip = function () {

        $(this).after("<div id='hoverText'></div>");//We placed a div element after the current a element.

        $(this).mouseover(function () {//When the user mouse is over the element run bellow codes.

            title = $(this).attr("title");//title is a globel variable.It has the title value.
            $(this).attr("title", "");//then we sat it to blank because by default it has a tooltip.We remove that by using this Technique.

        }).mousemove(function (e) {//When the mouse is moving

            var top = e.clientY + 10;//We got the position Dynamically we add 10 to looks nice.
            var left = e.clientX + 10;

            $("#hoverText").css("top", top).css("left", left).text(title).show();

        }).mouseout(function () {

            $(this).attr("title", title);//We need to give the title value back
            $("#hoverText").hide();

        });

    };

})(jQuery);
```

### Output

![Banner Image](github-content/example-9-5-0-output.gif/)

### 10. jQuery Applications Snippets

### 1. Slide Down MSG Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

             <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>  

    <div id="msgBox"></div>

    <div id="mainContant">

        <h1>Settings</h1>

        <input id="save" type="button" value="Save">
        <input id="delete" type="button" value="Delete">

    </div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="slideDown.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#msgBox{
    display:none;
    position: absolute;
    left:0;
    top:0;
    width:100%;
    height:50px;
    background-color:lightgray;
    padding:0;

}

    #msgBox h3 {

        text-align:center;

    }

#mainContant {
    position:relative;
    top:50px;

}
```

#### JavaScript

```JavaScript
$(function () {

    $("#save").click(function () {

        slideDownFunction("The settings Have been saved");

    });

    $("#delete").click(function () {

        slideDownFunction("The change has been deleted");

    });

});
```

```JavaScript
function slideDownFunction(text) {

    $("#msgBox").html("<h3>"+text+"<h3>").slideDown("slow").delay(2000).slideUp();

}
```

### Output

![Banner Image](github-content/example-10-1-0-output.gif/)

###  2. Redirect Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

    <div id="time"></div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="slideDown.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
function redirect(time,url) {

    var interval = setInterval(function () {

        $("#time").text(time);

        time = time - 1;//time--

        if (time == 0) {//when the time is == 0

            clearInterval(interval);//stop the interval
            window.location = url;//go to the site. same as window.open("www.google.lk","_self")

        }

    }, 1000);//one sec

}

$(document).ready(function () {//When the document is loaded successfully

    redirect(5, "http://www.google.lk");

});
```

### Output

![Banner Image](github-content/example-10-2-0-output.png/)

### 3. Multiple File Upload Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

             <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

    <form id="file_upload" method="get" action="#" enctype="multipart/form-data">

        <p><input type="file" name="file_1" /></p>

        <p>
            <input type="submit" value="Upload" />
            <a id="add_more" href="#">Add More</a>
        </p>

    </form>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>

    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#add_more").click(function () {

        var file_lenght=$("input[type='file']").length//I got the length of file element.
        var next_ele = file_lenght + 1;//I add one more with it.
        $("#file_upload").prepend("<p><input type='file' name='file_"+next_ele+"' /></p>")//i prepend this with diffrent numbers dynamically.

    });

});
```

### Output

![Banner Image](github-content/example-10-3-0-output.gif/)

### 4. POP Up Follows Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

    <div id="popUpBox">

        <h4>Hello</h4>
        <a href="#">Please click This link</a>

    </div>

    <h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
    <h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
    <h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
    <h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
    <h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
    <h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
    <h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
    <h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
    <h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1><h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
<h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
<h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
<h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
<h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
<h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
<h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
<h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
<h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>

    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#popUpBox {

    position: absolute;
    top:10px;
    left:20px;
    width: 200px;
    height: 350px;
    background-color: #f0f0f0;
    border:1px solid black;
    display:none;

}
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#popUpBox").fadeIn(1000).click(function () {//By default the popUpBox is hidden.You need to fadeIn() it.

      $(this).fadeOut(1000)//If the user clicks the box the box will be disappered.

    });

    $(window).scroll(function () {//This event run while scrolling.

        var top=$(window).scrollTop();//We got the window scrollTop in this variable.

        $("#popUpBox").css("top", top + 10);//This will change while we are scrolling.

    });

});
```

### Output

![Banner Image](github-content/example-10-4-0-output.gif/)

### Example 1

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

             <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

    <div id="popUpBox">

        <h4>Hello</h4>
        <a href="#">Please click This link</a>

    </div>

    <h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
    <h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
    <h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
    <h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
    <h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
    <h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
    <h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
    <h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
    <h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1><h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
<h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
<h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
<h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
<h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
<h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
<h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
<h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>
<h1>This is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everythingThis is Jokerhacker I can Hack everything</h1>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>

    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#popUpBox {

    position: absolute;
    top:10px;
    left:20px;
    width: 200px;
    height: 350px;
    background-color: #f0f0f0;
    border:1px solid black;
    display:none;

}
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    var speed = 1000;//I have stored the milliscounds in this variable.
    var defaultTop = parseInt($("#popUpBox").css("top"));//I have got the top form css and removed the px by using parseInt().

    $("#popUpBox").fadeIn(speed).click(function () {

        $(this).fadeOut(speed);//If the user clicks the box this will fade out.

    });

    $(window).scroll(function () {//This will run while scrolling.

        var WindowTop = $(window).scrollTop();//We got the window scrollTop while scrolling and stored in this variable.
        $("#popUpBox").css("top", WindowTop + defaultTop);

    });

});
```

### Output

![Banner Image](github-content/example-10-4-1-output.gif/)

### 5. Text Area Emotion Text Inserter Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

             <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

    <p>Type a comment for <br /><textarea id="comment"></textarea></p>

   <p>

       Add Emoticom:
       <input class="icon" type="button" value=":(" />
       <input class="icon" type="button" value="):" />
       <button class="icon" value=":D">:D</button>

   </p>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>

    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#comment {

   width:360px;
   height:80px;

}
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $(".icon").click(function () {

        var textArea_val =jQuery.trim($("#comment").val());//jQuery.trim() will remove whitespces left and right sides.
        var icon_val = $(this).val();//this means the currently click button.

        if (textArea_val == "") {//If the textarea is empty

            var sp = ""
            //inside if block the variable won't be loacl.

        } else {

            var sp=" "

        }

        $("#comment").focus().val(textArea_val + sp + icon_val + sp);
        //if the user clicks the button the focus will not be applied so we used focus() to focus the textarea.

    });
});
```

### Output

![Banner Image](github-content/example-10-5-0-output.gif/)

### 6. Show Hide Password In Field Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

             <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

    <input type="password" class="pass" id="password" name="user_password" maxlength="12" />

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>

    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("input[type='password']").after('<input type="checkbox" class="sp_checkbox">Show Password');

    $(".sp_checkbox").change(function () {//We use change for checkboxes radio and all not click.

        var prevEle = $(this).prev();

        var value = prevEle.val();
        var type = prevEle.attr("type");

        var classes = prevEle.attr("class");
        var id = prevEle.attr("id");
        var name = prevEle.attr("name");
        var maxL = prevEle.attr("maxlength");

       var newType = (type == "password") ? "text" : "password";//the same code is bellow but in diffrent maner.

        /*/
        if (type == "password") {

            var newType = "text";

        } else if (type = "text") {

        var newType = "password";

        }

        */
        prevEle.remove();

        $(this).before("<input type='"+newType+"' id='"+id+"' class='"+classes+"' name='"+name+"' maxlength='"+maxL+"' value='"+value+"' >")

    });

});
```

### Output

![Banner Image](github-content/example-10-6-0-output.gif/)

### 7. Submit a Form on Element Change Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

    <form action="file.php" method="post" enctype="multipart/form-data">

        <input type="file" name="file" />

    </form>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>

    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("input[type='file']").change(function () {//not click we basicly give change for form elements.

        $(this).parent().submit();

    });

});

//parent() means the form element.
//submit() is used to submit something to the server.
```

### Output

![Banner Image](github-content/example-10-7-0-output.gif/)

### Example 1

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

            <link href="style.css" rel="stylesheet" type="text/css" />

</head>

<body>

     <form action="file.php" method="get">

        <select id="options">

            <option value="default">Choose</option>
            <option value="Opt1">Option 1</option>
            <option value="Opt2">Option 2</option>
            <option value="Opt3">Option 3</option>

        </select>

    </form>  

   <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>

    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#options").change(function () {//not click we basicly give change for form elements.

        var value = $(this).val();//current element value.

        if (value != "default") {

            $(this).parent().submit();

        }

    });

});

//parent() means the form.
//submit() is used for submiting forms.
```

### Output

![Banner Image](github-content/example-10-7-1-output.png/)
