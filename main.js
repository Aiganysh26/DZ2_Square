const smallBlock = document.querySelector('.smallBlock')

let positionX = 0;
let positionY = 0;

const moveSmallBlock = () => {
  if (positionX <= 449 && positionY <= 0){
    positionX++
    smallBlock.style.left = `${positionX}px`
    setTimeout(moveSmallBlock, 1)
  } else if (positionX >= 449 && positionY <= 449) {
    positionY++
    smallBlock.style.top = `${positionY}px`
    setTimeout(moveSmallBlock, 1)
  } else if (positionX >= 0 && positionY >= 449) {
    positionX--
    smallBlock.style.left = `${positionX}px`
    setTimeout(moveSmallBlock, 1)
  }else if (positionX <= 0 && positionY >= 0) {
    positionY--
    smallBlock.style.top = `${positionY}px`
    setTimeout(moveSmallBlock, 1)
}
}
moveSmallBlock()