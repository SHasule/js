
for (let i = 0; i <= 10; i++) {
    let value = i;
    if (i == 5) {
        console.log("5 is here");
        continue;
    }
    console.log(value);
}

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`inner loop ${j}`);
        //   console.log(`i + j = ${i*j}`);
        console.log(i + '*' + j + '=' + i * j);

    }
}


let array1 = ["one", "two", "three"]
console.log(array1.length);
for (let i = 0; i < array1.length; i++) {
    const element = array1[i];
    console.log(element);

}

for (let keyword = 0; keyword < 10; keyword++) {
    if (keyword == 5) {
        //   break;
        continue;
    }
    console.log(keyword);
}


// for breaking controlflow we use break

