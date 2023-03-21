// 変数
let unko = 'hello world!';

unko = 'Hello world2!!';
// 定数

const bigUnko = 'He...Hell Hello world!';
// bigUnko = 'helloworld2'

// 配列
let inoki = ['イーチ', 'にーい', 'さーん']

// ループ文
// let index = 0;
// while(index < inoki.length){
//   console.log(inoki[index]);
//   index++;
// }

// if / else
// if(inoki.length >= 5){
//  console.log('ボンバイエ！')
// } else {
//   console.log('ボンバ！！！！')
// }

// 関数
const test = (arg)=> {
  if(inoki.length >= arg){
    console.log('ボンバイエ！');
   } else {
     console.log('ボンバ！！！！');
   }
};

// オブジェクト
const unko2 = {
  color: 'pink',
  size: 'small',
  purfume: 'mint',
  goToilet: () => {
    console.log('hello world');
  }
};

document.getElementsByTagName('button')[3].addEventListener('click', () => {
  window.alert('hello hello')
})

