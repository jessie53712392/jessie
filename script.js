if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then( () => {
    console.log('Service Worker Registered')
})
})
}
        fetch("https://v2.jokeapi.dev/joke/Any?safe-mode", {method:"GET"})
        .then(hehe => hehe.json())
        .then(hehe => myFunction(hehe));

        function myFunction(jokes){
            let type = jokes.type;  
            if(type === "twopart"){  
                document.getElementById('joke2').hidden = true;
                let joke = jokes.setup;
                let delivery = jokes.delivery;
                
                document.getElementById("joke").innerHTML = `${joke}`;
                document.getElementById("delivery").innerHTML = `${delivery}`;

                document.getElementById('joke').hidden = false;
                document.getElementById('delivery').hidden = false;
            }
            else
            {
                document.getElementById('joke').hidden = true;
                document.getElementById('delivery').hidden = true;
                let joke = jokes.joke;

                document.getElementById("joke2").innerHTML = `${joke}`;

                document.getElementById('joke2').hidden = false;
            }
        }
        function displayJoke(){
            document.getElementById('sudlanan').hidden = false;
            document.getElementById('sudlanan2').hidden = true;
        }
        function anotherJoke(){ 
            fetch("https://v2.jokeapi.dev/joke/Any?safe-mode", {method:"GET"})
            .then(hehe => hehe.json())
            .then(hehe => myFunction(hehe));
        }