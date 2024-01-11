class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");

        g.fillStyle = "#FF0000";
        g.fillRect(0,0,canvas.width,canvas.height);

        g.fillStyle = "black";
        g.fillRect(0,0,10,10);
    }

}

let app = new App();
app.runApplication();

       