function amanda() {
    
    // window.open('http://127.0.0.1:8887/Photo_Gallary/images/Amanda_cerny/1-52.jpg');
    let amanda = './';

    let x = 27;

    while (x>0){
        let img = document.createElement("img");

        img.src = amanda + '1 (' + x + ').jpg';
        // img.width = 430;
        // img.height = 530;
        img.style = "height:40%;width:40%;margin:5px;border-radius: 25px;"
        document.body.appendChild(img);
        x--;
        }

    
}

function mazzelo() {
    
    // window.open('http://127.0.0.1:8887/Photo_Gallary/images/Amanda_cerny/1-52.jpg');
    let mazzelo = './';
    let x = 25;

    while (x>0){
        let img = document.createElement("img");

        img.src = mazzelo + '1 (' + x + ').jpg';
        // img.width = 430;
        // img.height = 530;
        img.style = "height:40%;width:40%;margin:5px;border-radius: 25px;"
        document.body.appendChild(img);
        x--;
        }

    
}


function issa() {
    
    // window.open('http://127.0.0.1:8887/Photo_Gallary/images/Amanda_cerny/1-52.jpg');
    let issa = './';
    let x = 32;

    while (x>0){
        let img = document.createElement("img");

        img.src = issa + '1 (' + x + ').jpeg';
        console.log(img.src);
        img.style = "height:40%;width:40%;margin:5px;border-radius: 25px;"

        document.body.appendChild(img);
    x--;
        }

    
}