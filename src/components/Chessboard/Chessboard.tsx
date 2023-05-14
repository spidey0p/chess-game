import React, { useRef } from "react";
import Tile from "../Tile/Tile";
import "./Chessboard.css";


const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

interface Piece {
  image: string;
  x: number;
  y: number;
}

const pieces: Piece[] = [];

for(let p = 0;p<2;p++){
  const type = p === 0 ? "b" : "w";
  const y = p === 0 ? 7 : 0;

  //Rooks
pieces.push({image: `assets/images/rook_${type}.png`,x:0,y});
pieces.push({image: `assets/images/rook_${type}.png`,x:7,y});
//Bishops
pieces.push({image: `assets/images/bishop_${type}.png`,x:2,y});
pieces.push({image: `assets/images/bishop_${type}.png`,x:5,y});
//Knight
pieces.push({image: `assets/images/knight_${type}.png`,x:1,y});
pieces.push({image: `assets/images/knight_${type}.png`,x:6,y});

//Queen piece
pieces.push({image: `assets/images/queen_${type}.png`,x:3,y});
//King piece
pieces.push({image: `assets/images/king_${type}.png`,x:4,y});
}


//for black pawn.
for(let i = 0; i<8; i++){
pieces.push({image: "assets/images/pawn_b.png",x:i,y:6})
}

//for white pawn.
for(let i = 0;i<8;i++){
  pieces.push({image: "assets/images/pawn_w.png",x:i,y:1});
}


export default function Chessboard() {
const chessboardRef = useRef<HTMLDivElement>(null);

let activePice: HTMLElement | null = null; 

function grabPiece(e: React.MouseEvent){
    const element = e.target as HTMLElement;
    if(element.classList.contains("chess-piece")){
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;

      activePice = element;
    }
}

function movePiece(e: React.MouseEvent){ 
  const chessboard = chessboardRef.current;
  if(activePice && chessboard){
      const minX = chessboard.offsetLeft - 25;
      const minY = chessboard.offsetTop;
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      activePice.style.position = "absolute";
      // activePice.style.left = `${x}px`;
      // activePice.style.top = `${y}px`;

      console.log(chessboard);

      if(x<minX){
        activePice.style.left = `${minX}px`;
      } else {
        activePice.style.left = `${x}px`;
      }

      activePice.style.left = 
        x < minX
          ? (activePice.style.left = `${minX}px`)
          :(activePice.style.left = `${x}px`);
  }
}

function dropPiece(e: React.MouseEvent){
  if(activePice){
    activePice = null;
  }
}

  let board = [];

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
        const number = j + i + 2;
        let image = undefined;
        pieces.forEach(p => {
          if(p.x === i && p.y === j){
            image = p.image;
          } 
        })

        board.push(<Tile key={`${j},${i}`} image={image} number={number} />);

    }
  }

  return (
    <div 
    onMouseMove={(e) => movePiece(e)} 
    onMouseDown={(e) => grabPiece(e)}
    onMouseUp={(e) => dropPiece(e)}
    ref={chessboardRef}
    id="chessboard">
    
      {board}
    </div>
  );
}