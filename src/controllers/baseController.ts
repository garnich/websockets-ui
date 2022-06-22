import { WebSocket } from 'ws';

import { moveUp, moveDown, moveLeft, moveRight, getPosition } from './mouseController';
import { drawCircle, drawRectangle, drawSquare } from './drawController';
 
import { WRONG_PARAM_MSG, MOUSE, DRAW } from '../constants';

export const baseController = (ws: WebSocket, data: string) => {
  const param = data.split(' ');
  
  const coordParam = Number(param[1]);
  const multiParam = param.length === 3 ? [Number(param[1]), Number(param[2])] : [];
  
  switch (param[0]) {
    case MOUSE.UP:
        moveUp(coordParam, ws);
        break;
    case MOUSE.DOWN:
        moveDown(coordParam, ws);
        break;
    case MOUSE.LEFT:
        moveLeft(coordParam, ws);
        break;
    case MOUSE.RIGHT:
        moveRight(coordParam, ws);
        break;
    case MOUSE.POS:
        getPosition(ws);
        break;
    case DRAW.CIRCLE:
        drawCircle(coordParam, ws);
        break;
    case DRAW.SQUARE:
        drawSquare(coordParam, ws);
        break;
    case DRAW.RECTANGLE:
        drawRectangle(multiParam, ws);
        break;
    default:
      console.log(WRONG_PARAM_MSG);
  }
};