<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>project1-color switcher</title>
    <style>
        html{
            margin:0;
        }
        span{
            display:block;
        }
        .canvas{
            margin:100px auto 100px;
            width:80%;
            text-align:center;
        }
        .button{
            width:100px;
            height:100px;
            border:solid black 2px;
            display:inline-block;
        }
        #grey{
            background-color:grey;
        }
        #white{
            background-color: white;
        }
        #blue{
            background-color: blue;
        }
        #yellow{
            background-color: yellow;
        }
        /*.navi{

            width:100px;
            height:100px;
            display:flex;
            
            
        }*/

        .navi1{
            margin:20px;
            width:100px;
            height:60px;
            
            justify-content:center;
            display:inline-block;
            align-items: center;
            text-align: center;
            border:1px solid black;

        }
    .navi2{
           margin:20px;
            width:100px;
            height:60px;
            text-align: center;
            justify-content:center;
            display:inline-block;
            align-items: center;
            border:1px solid black;

    }
        
    </style>
</head>

<body>
    <div class="canvas">
       
        <nav class="navi">
            <a class="navi1">Home</a>
            <a class="navi2" href="https://www.youtube.com/@chaiaurcode">Youtube channel</a>
        </nav>

        <h1 class="para">
Color scheme switcher
        </h1>
        <span class="button" id="grey"></span>
        <span class="button" id="white"></span>
        <span class="button" id="blue"></span>
        <span class="button" id="yellow"></span>
        <h2>Try clicking one of the color above<span><br>

        </span>to change the background color of this page .!</h2>
    </div>
    <script>
const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")
buttons.forEach(function(button){
console.log(button);
button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id=='grey'){
        body.style.backgroundColor=e.target.id
    }
     if(e.target.id=='white'){
        body.style.backgroundColor=e.target.id
    }
    if(e.target.id=='blue'){
        body.style.backgroundColor=e.target.id
    }
    if(e.target.id=='yellowlor'){
        body.style.backgroundColor=e.target.id
    }
})
});
    </script>
</body>



</html>