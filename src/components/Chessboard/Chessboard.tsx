import React from "react";
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
//for black pawn.
for(let i = 0; i<8; i++){
pieces.push({image: "assets/images/pawn_b.png",x:i,y:6})
}
//Rooks
pieces.push({image: "assets/images/rook_b.png",x:0,y:7});
pieces.push({image: "assets/images/rook_b.png",x:7,y:7});
//Bishops
pieces.push({image: "assets/images/bishop_b.png",x:2,y:7});
pieces.push({image: "assets/images/bishop_b.png",x:5,y:7});
//Knight
pieces.push({image: "assets/images/knight_b.png",x:1,y:7});
pieces.push({image: "assets/images/knight_b.png",x:6,y:7});

//Queen piece
pieces.push({image: "assets/images/queen_b.png",x:3,y:7});
//King piece
pieces.push({image: "assets/images/king_b.png",x:4,y:7});


//for white pawn.
for(let i = 0;i<8;i++){
  pieces.push({image: "assets/images/pawn_w.png",x:i,y:1});
}

//Rooks
pieces.push({image: "assets/images/rook_w.png",x:0,y:0});
pieces.push({image: "assets/images/rook_w.png",x:7,y:0});
//Bishops
pieces.push({image: "assets/images/bishop_w.png",x:2,y:0});
pieces.push({image: "assets/images/bishop_w.png",x:5,y:0});
//Knight
pieces.push({image: "assets/images/knight_w.png",x:1,y:0});
pieces.push({image: "assets/images/knight_w.png",x:6,y:0});

//Queen piece
pieces.push({image: "assets/images/queen_w.png",x:3,y:0});
//King piece
pieces.push({image: "assets/images/king_w.png",x:4,y:0});




export default function Chessboard() {
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

        board.push(<Tile image={image} number={number} />);

    }
  }

  return <div id="chessboard">{board}</div>;
}