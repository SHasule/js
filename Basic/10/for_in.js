
let programming={
    js:"javascript",
    j:"java",
    cpp:"c++",
    py:"python"
}
for (const lang in programming){
  //  console.log(programming[lang]);
    console.log(`${lang} and value is ${programming[lang]}`);
}

let name=["hello","world"]
for(const value in name){
    console.log(`${value} value is ${name[value]}`);
}