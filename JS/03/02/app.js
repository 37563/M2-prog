class App
{
    runApllication()
    {
        //hier komt je code
        let Title= document.getElementById("newstitle");
        console.log(newstitle);

        let random = math.random();
        console.log(random);
        if(random < 0.2){
            Title.style.backgroundColor = "red"
        }
            
        }
    }
}

let app = new App();
app.runApllication();
