// ASYNC BASICS EXERCISE

// 1
let name1 = "Luke Skywalker";

function lukeName() {
  console.log(`Question 1`);
  console.log(name1);
}

function luke(n) {
  setTimeout(() => {
    name1 = n;
  }, 1000);
}
luke(`Mark Hamill`);
lukeName();

// 2
let name2 = "Han Solo";

function hanName() {
  console.log(`Question 2`);
  console.log(name2);
}

function han(n) {
  setTimeout(() => {
    name2 = n;
  }, 2000);
}
han(`Harrison Ford`);
hanName();

// 3
let name3 = "Leia Organa";

function leiaName() {
  console.log(`Question 3`);
  console.log(name3);
}

function leia(n){
  setTimeout(() => {
    name3 = n;
  }, 3000);
}
leia('Carrie Fisher');
leiaName();

/////BEGINNING EXERCISE

//1

luke = (name, callback) => {
  setTimeout(() => {
    callback (name);
  }, 1000);
}

luke(`Mark Hamill`, n => {
    p1.innerText = n;
}); 

luke(`Mark Hamill`);
lukeName();

//2

function han (n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            name2 = n;
        }, 2000);
    })
}

han(`Harrison Ford`)
.then(n => p2.innerText = n);

//3

function leia(name){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
    resolve(name);
  }, 3000);  
});
}

async function leia(){
    p3.innerText = await leia(`Carrie Fischer`);
}
leiaName();