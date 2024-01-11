class App {
    runAplication() {
        let title = document.getElementById("newstitle");
        console.log(title);

        let random = Math.random();
        console.log(random);

        if (random < 0.2) {
            title.style.backgroundColor = "red";
        } else {
            title.style.backgroundColor = "green";
        }

        let newsitem2 = document.getElementsByClassName("headline")[0]; 

        if (random < 0.2) {
             newsitem2.style.backgroundColor = "purple";
        } else {
             newsitem2.style.backgroundColor = "brown";
        }
        
        let newsitem3 = document.getElementsByClassName("gamenews")[1]; 

        if (random < 0.2) {
            newsitem3.style.backgroundColor = "pink";
       } else {
           newsitem3.style.backgroundColor = "yellow";
       }
    }
}

let app = new App();
app.runAplication();

