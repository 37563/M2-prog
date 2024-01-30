class App
{
    runApplication()
    {
        console.log("hello world");
    }
}

let app = new App();
app.runApplication();

class Greet
{
    constructor() 
    {
    this.greeting = "greeetings";
    }

    showGreeting()
    {
        console.log("greeting van buiten: " +greet.greeting)
    }
}

let greet = new Greet()
greet.showGreeting();

console.log("greeting van buiten: " +greet.greeting)


class GoodBye
{
    constructor() 
    {
        this.byee = "farewell";
    }
    showBye()
    {
        console.log("farewell van buiten: " +this.byee);
    }
}
let bye = new GoodBye()
bye.showBye();
console.log("farewell van buiten: " +bye.byee);