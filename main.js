$(window).mousemove(function (evt) {
  let x = evt.pageX
  let y = evt.pageY
  console.log(x + "," + y)
  let deer_x = $("#head").offset().left + $("#head").width() / 2
  let deer_y = $("#head").offset().top + $("#head").width() / 2
  // console.log(x - deer_x, y - deer_y)
  let distance_y = y - deer_y
  let distance_x = x - deer_x
  if (Math.abs(distance_x) < 90 && -90 < distance_y && distance_y < 0) {
    $("#head").css("transform", "translateX(3px) rotate(-10deg)")
    $("#nose").css("transform", "rotate(40deg) translate(2px,-2px)")

  } else {
    $("#head").css("transform", "translateX(0px) rotate(0deg)")
    $("#nose").css("transform", "rotate(30deg) translate(0px,0px)")
  }

  console.log("posX: " + x)
  console.log("posY: " + y)

  let windowWidth = $(window).width()
  let windowHeight = $(window).height()
  // console.log("windowWidth: " + windowWidth)
  // console.log("(x - (windowWidth / 2))/5: ", (x - (windowWidth / 2)) / 5)
  // console.log("y - (windowHeight / 2): ", y - (windowHeight / 2))
  // console.log(Math.abs(x - (windowHeight / 2)) / 3.5)
  // console.log(Math.abs(x - (windowWidth / 2)) / 5 * -1)
  let rotatevalueH = 0
  let rotatevalueV = 0

  // //左
  // if (x - (windowWidth / 2) < -50) {
  //   rotatevalueH = Math.abs(x - (windowWidth / 2)) / 8
  // }
  // //右
  // if (x - (windowWidth / 2) > 50) {
  //   rotatevalueH = Math.abs(x - (windowWidth / 2)) / 8 * -1
  // }
  // //上
  // if (y - (windowHeight / 2) < -50) {
  //   rotatevalueV = Math.abs(y - (windowHeight / 2)) / 8 * -1
  // }
  // //下
  // if (y - (windowHeight / 2) > 50) {
  //   rotatevalueV = Math.abs(y - (windowHeight / 2)) / 8
  // }

  // $(".container").css("transform", "rotateY(" + rotatevalueH + "deg) rotateX(" + rotatevalueV + "deg)")

  // if (rotatevalueH >= 90 || rotatevalueV >= 90) {
  //   $(".container").css("transform", "rotateY(89deg) rotateX(89deg)")
  // }

  // if (rotatevalueH <= -90 || rotatevalueV <= -90) {
  //   $(".container").css("transform", "rotateY(-89deg) rotateX(-89deg)")
  // }
  console.log("rotatevalueH:" + rotatevalueH, "rotatevalueV: " + rotatevalueV)
})

