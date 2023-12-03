export const useShape = () => {

  const hand = {
    posX: 0,
    posY: 0,
    shape: [
      [2,0],
      [1,1],
      [0,2],
      [3,1],
      [2,2],
      [1,3],
      [6,0],
      [5,1],
      [4,2],
      [3,3],
      [2,4],
      [5,3],
      [4,4],
      [3,5],
      [6,4],
      [5,5],
      [4,6]
    ]
  }

  const cube = {
    posX: 1,
    posY: 0,
    shape: [
      [0,4],
      [1,5],
      [4,4],
      [3,5],
      [2,6],
      [2,0],
      [1,1],
      [0,2],
      [3,1],
      [4,2],
    ]
  }

  const seven = {
    posX: 1,
    posY: 0,
    shape: [
      [2,0],
      [3,1],
      [4,2],
      [3,3],
      [2,4],
      [1,5],
      [0,6],
    ]
  }

  const key = {
    posX: 0,
    posY: 0,
    shape: [
      [2,0,true],
      [3,1],
      [2,2],
      [0,2],
      [1,3],
      [3,3],
      [4,4],
      [6,4],
      [5,5],
      [6,6],
    ]
  }

  return {
    hand,
    cube,
    seven,
    key
  }
    
}