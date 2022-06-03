document.addEventListener("DOMContentLoaded", () => {

    // sets variables used throughout entire program. 
    const grid = document.querySelector(".grid");
    let squares = [];
    let isGameOver = false;
    let bombAmount = 20
    let flags = 0;
    let width = 10;

    // this function runs the entire program. its called down belowwwww
    function createBoard() {
        // creates an array of 20 bombs
        const bombsArray = Array(bombAmount).fill("bomb");
        // array of 80 empty or "valid" squares
        const emptyArray = Array(width * width - bombAmount).fill("valid");
        // adds bombs and valids together
        const gameArray = emptyArray.concat(bombsArray);
        // bombs and valids are shuffled together
        const shuffledArray = gameArray.sort(() => Math.random() - .5);



        // populates the grid with squares 
        for(let i = 0; i < width * width; i++){ 
            //creates divs with id attributes for the grid then appends them as children. also pushes them into squares array
            const square = document.createElement("div");
            square.setAttribute("id", i);
            square.classList.add(shuffledArray[i]);
            grid.appendChild(square);
            squares.push(square);
            
            // each square will be populated with its own event listener for a left click.
            square.addEventListener("click", function(e) {
                click(square);
            })

            // disables the normal left-click function and uses addFlag() instead
            square.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                addFlag(square);
            });
        }
        for (let i = 0; i < squares.length; i++) {
            // if i%width(10) == 0 then the div is on the left edge. 
            const isLeftEdge = i % width == 0;
            // if i%width(10) == 10-1   then the div is on the right edge.
            const isRightEdge = i % width == width - 1;
            let total = 0;
            if (squares[i].classList.contains("valid")) {
                // checks W square 
                if (i > 0 && !isLeftEdge && squares[i - 1].classList.contains("bomb")) total++;
                // checks NW square 
                if (i > width && !isLeftEdge && squares[i - width - 1].classList.contains("bomb")) total++;
                // checks N square
                if (i > width - 1 && squares[i - width].classList.contains("bomb")) total++;
                // checks NE square 
                if (i > width - 1 && !isRightEdge && squares[i - width + 1].classList.contains("bomb")) total++;
                // checks E square
                if (!isRightEdge && squares[i + 1].classList.contains("bomb")) total++;
                // checks SE square
                if (i + width < squares.length && !isRightEdge && squares[i + width + 1].classList.contains("bomb")) total++;
                // checks S square
                if (i + width < squares.length && squares[i + width].classList.contains("bomb")) total++;
                // checks SW square
                if (i + width < squares.length && !isLeftEdge && squares[i - 1 + width].classList.contains("bomb")) total++;
                squares[i].setAttribute("data", total);
            }
        }
    }    
    // THIS RUNS EVERYTHING BABY
    createBoard();



    // ADDS FLAGS
    function addFlag(square) {
        // If game over is true it just leaves the entire function and quits it all.
        if (isGameOver) return;
        // if the square isnt checked and you still have flags remaining do this
        if (!square.classList.contains("checked") && (flags < bombAmount)){
            // if the square doesnt contain flag do this
            if(!square.classList.contains("flag")) {
                // adding flag to html class and changing innerHTML into an image. also increments flags 
                square.classList.add("flag");
                square.innerHTML = "<img src='https://cdn.glitch.global/e889571b-a5fa-425a-82d0-5fed5f5928ea/Dominos%20solid%20Logo.jpg?v=1646969870518' alt='dominos'>";
                flags++;
                checkForWin();
            } else {
                // self-explanitory. removes flags and nullifies the image of a flag. also decrements flags
                square.classList.remove("flag");
                square.innerHTML = "";
                flags--;
            }
        }
    }

    // upon left clicking a square
    function click(square) {
        let currentId = square.id;
        // if isgameover == true this function won't do a thing.
        if (isGameOver) return;

        // if square contains checked OR flag do nothing
        if (square.classList.contains("checked") || square.classList.contains("flag")) return;
        // if square contains bomb then lose the game
        if (square.classList.contains("bomb")) {
            gameOver(square);
        } else {
            // if square doesn't contain bomb set innerHTML to the previously calculated data attribute.
            let total = square.getAttribute("data");
            if (total != 0) {
                square.classList.add("checked");
                square.innerHTML = "<span class='danger'>" + total + "</span>";
                //returns out of function before recursion occurs.
                return;
            }
          //calls our recursive function
            checkSquare(square, currentId);
        }
        square.classList.add("checked");
    }

    // This is our wild recursive method thats kind of too recursive. It is only called if the square that was clicked does not have a data attribute
    function checkSquare(square, currentId) {
        //checking to see if the square is on the edge same as above.
        const isLeftEdge = (parseInt(currentId) % width == 0);
        const isRightEdge = (parseInt(currentId) % width == width -1);

        // using timeout to prevent looping forever. I don't know how else to prevent a forever loop without the recursive function calling itself with a bunch of arguements. TBH I'm beginning to think we shouldn't have used recursion.
        setTimeout(() => {
        //     // checks W
            if (currentId > 0 && !isLeftEdge) {
                const newId = squares[parseInt(currentId) - 1].id;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            //checks N
            if (currentId >= width) {
                const newId = squares[parseInt(currentId) - width].id;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            //checks E 
            if (currentId < squares.length && !isRightEdge) {
                const newId = squares[parseInt(currentId) + 1].id;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            //checks S
            if (parseInt(currentId) + width < squares.length) {
                const newId = squares[parseInt(currentId) + width].id;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
        }, 10);
    }

    // this is only called if you click on a bomb. alerts you with a failure and shows papajohn on "bombs"
    function gameOver() {
        isGameOver = true;
        alert("YOU GOT GOT!");
        squares.forEach(square => {
            if (square.classList.contains("bomb")) {
                square.innerHTML = "<img src='https://cdn.glitch.global/e889571b-a5fa-425a-82d0-5fed5f5928ea/papajohns100.png?v=1646969882420'>";
            }
        });
    }

    // this is only called once all flags are placed 
    function checkForWin() {
        let matches = 0;
        let goGet = false;
        // checks to see if all bombs have been flagged properly. if matches == bombAmount then the game is won. 
        for (let i = 0; i < squares.length; i++) {
            if(squares[i].classList.contains("flag") && squares[i].classList.contains("bomb")) {
                matches++;
            }
            if (matches == bombAmount) {
                goGet = true;
            }
        }
        if (goGet) alert("WE GO GET!");
    }
  
    cheatButton.addEventListener("click", function() {
        const code = document.getElementById("cheatCode").value.toLowerCase();
        console.log(code);
        if (code == "dominos"){
          for (let i = 0; i < squares.length; i++) {
            if(squares[i].classList.contains("bomb")) squares[i].classList.add("cheat");
          }
        }
    });

    function changeBombAmount(e) {
        let value = document.getElementById('rangeinput').value;
        if(value > 0 && value < 5){
            alert('success')
        } else {
            alert('success')
        }
    }

    resetButton.addEventListener('click', resetBoard())

    function resetBoard(e){
        isGameOver = false
        createBoard()
    }
})