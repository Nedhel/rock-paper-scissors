let game
function play (){
    document.getElementById('play').disabled = true
    game = setInterval(()=>{
        let img=document.getElementById('img-player2').alt
        switch(img){
            case '0':
                document.getElementById('img-player2').src='rock.jpg'
                document.getElementById('img-player2').alt='1'
                break;
            case '1': 
                document.getElementById('img-player2').src='paper.jpg'
                document.getElementById('img-player2').alt='2'    
                break;
            case '2':
                document.getElementById('img-player2').src='scissors.jpg'
                document.getElementById('img-player2').alt='3'
                break;
            case '3':
                document.getElementById('img-player2').src='rock.jpg'
                document.getElementById('img-player2').alt='1'
                break;
        }
    },100)
}
function stop(){
    clearInterval(game)
    document.getElementById('play').disabled = false
    whoWon()
}
function whoWon(){
    const games = new Map([["3", "2"],["2", '1'],["1", '3']]);
    let player1 = document.getElementById('img-player1').alt
    let player2 = document.getElementById('img-player2').alt
    if(player1==player2){
        document.getElementById('results').innerHTML='Empate'
    }else if(games.get(player1)==player2){
    document.getElementById('results').innerHTML='Gana Jugador 1'
    }else{
        document.getElementById('results').innerHTML='Gana Jugador 2'
    }
}
function handPlayer(id){
    switch(id){
        case 'rock':
            document.getElementById('img-player1').src='rock.jpg'
            document.getElementById('img-player1').alt='1'
            break;
        case 'paper':
            document.getElementById('img-player1').src='paper.jpg'
            document.getElementById('img-player1').alt='2'
            break;
        case 'scissors':
            document.getElementById('img-player1').src='scissors.jpg'
            document.getElementById('img-player1').alt='3'
            break;
    }
}

window.addEventListener('load',()=>{
    document.getElementById('play').
        addEventListener('click',()=>{
            play()
            setTimeout(stop,Math.floor(Math.random() * (5000 - 500)) + 500)
        })
    document.getElementById('rock').
        addEventListener('change',()=>{
            handPlayer('rock')
        })
    document.getElementById('paper').
        addEventListener('change',()=>{
            handPlayer('paper')
        })
    document.getElementById('scissors').
        addEventListener('change',()=>{
            handPlayer('scissors')
        })
})