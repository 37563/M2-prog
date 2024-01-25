class App
{

    runApplication()
    {
        console.log("hello world!");
        GlobalFunction();
    }
}

let app = new App();
app.runApplication();

function GlobalFunction()
{
    console.log("global");
    console.log("y");
}

GlobalFunction();
GlobalFunction();
GlobalFunction();


function aanroep()
{

}
 aanroep();

