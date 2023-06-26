let s = {
  speed:50,
  eng:100,
  color:"Green",
};

function fn(){
}

fn.prototype = s;

const test = new fn();

test.speed=500;
test.eng=1000;

console.log(test.__proto__);
