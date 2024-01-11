class App
{
runApllication()
{
     this.appNaam = "Test"
     this.Versie = 0.1
     this.makeOrigin = 21/11/2023 + "ATM" + 11.56
     this.Author = "ZV"
     this.copyright = "ZV inc."
     this.darkmode = false   
}
}

let app = new App();
app.runApllication();

console.log("hello world!");
console.log("appNaam:" + app.appNaam);
console.log("versienummer:" + app.Versie);
console.log("Last updated:"+ app.makeOrigin);
console.log("Author:" + app.Author);
console.log("copyright:" + app.copyright);
console.log("Darkmode:" + app.darkmode);   