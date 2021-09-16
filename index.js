function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
 return `This Monday, I will ${activity}.`
}

function wrapAdjective(h = "*") {
    return function(a = "special") {
      return `You are ${h}${a}${h}!`
    }
  }
  let result = wrapAdjective()
let emphatic = result("a hard worker")
console.log("test1", emphatic);
let r = wrapAdjective("||");
let e = r("a dedicated programmer");
console.log("test2", e);