// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function setTheme(){
    var cookies = document.cookie;
    if (cookies != undefined)
    {
        var lightTheme = undefined;
        cookies = cookies.split('; ');
        cookies.forEach(i => {
            if (i.indexOf("lightTheme") != -1){
                lightTheme = i.substring(indexOf('='));
                console.log(i);
            }
        })

        if (lightTheme === undefined){//not set
            document.cookie += "; lightTheme=true"
        }
        else if (!lightTheme){//set but is dark so need to change
            setThemeDark();
        }
    }
};
function setThemeLight() {
    var cssLink = document.getElementById("Theme");
    cssLink.href = "/css/Light.css";

    var themeImg = document.getElementById("ThemeImg");
    themeImg.src = "/Light.png";
};
function setThemeDark() {
    var cssLink = document.getElementById("Theme");
    cssLink.href = "/css/dark.css";

    var themeImg = document.getElementById("ThemeImg");
    themeImg.src = "/dark.png";
};

function toggleTheme() {
    var cookies = document.cookie;

    var start = cookies.indexOf("lightTheme");
    start +=11;
    if (start != -1){
        var lightTheme = document.cookie.substring(start, start+3);
        console.log(lightTheme);
        lightTheme == "true" ? setThemeDark() : setThemeLight();
        
        cookies = cookies.split('; ');
        cookies.forEach(i => {
            if (cookies[i].indexOf("lightTheme") != -1){
                lightTheme == "true" ? cookies[i] = "lightTheme=false" : cookies[i] = "lightTheme=true";
            }
        });
        
    }
};

setTheme();