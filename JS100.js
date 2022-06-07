function q1(arr) {
  arr.pop(3);
  arr.pop(4);
  return arr;
}

console.log(q1([100, 200, 300, 400, 500]));

function q2(arr) {
  arr.splice(2, 0, '10000');
  console.log(arr);
}

q2([200, 100, 300]);

//문제3:변수의 타입
console.log(typeof [100, 200, 300]);
console.log(Array.isArray([100, 200, 300]));

//문제4:변수의 타입2
function q4(a) {
  return typeof a;
}

console.log(q4(1));
console.log(q4(2.22));
console.log(q4('p'));
console.log(q4([1, 2, 3]));

//문제5:for문 계산
function q5(a, b) {
  for (let i = 1; i < 5; i += 2) {
    a += i;
  }
  return a + b;
}

console.log(q5(10, 2));

//문제6:False
function q6(a) {
  return !!a;
}

console.log(q6(NaN));
console.log(q6(1));
console.log(q6(''));
console.log(q6(0));
console.log(q6(undefined));

// 문제7:변수명
// const age=10;
// const _age= 10;
// const let = "it be";

let d = {
  height: 180,
  weight: 78,
  weight: 84,
  temperature: 36,
  eyesight: 1,
};

console.log(d['weight']);

// 문제 9 concat을 활용한 출력방법

const year = '2019';
const month = '04';
const day = '26';
const hour = '11';
const minute = '34';
const second = '27';

const result = `${year}/${month}/${day} ${hour}:${minute}:${second}`;

console.log(result);

function q10(num) {
  //1.개행
  // .
  // for(let i=0; i<num; i++){
  //   return
  // }
  //2.별갯수.
  //3.띄어쓰기?
}

let arr = [111, 122, 333];
arr.forEach(item => {
  console.log(`${item}\n`);
});

function q11(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(q11(100));

//문제12:게임 캐릭터 클래스 만들기.
class Wizard {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }
  attack() {
    console.log('파이어볼');
  }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();
//문제 13:몇번째 행성?

function q13(num) {
  let solarSystem = [
    '수성',
    '금성',
    '지구',
    '화성',
    '목성',
    '토성',
    '천왕성',
    '해왕성',
  ];
  return solarSystem[num - 1];
}
console.log(q13(1));

//q14: 3의 배수?
function q14(num) {
  return num % 3 ? num : '짝';
}

console.log(q14(2));
console.log(q14(6));

//q15: 자기소개
function q15(name) {
  return `안녕하세요. 저는 ${name}입니다.`;
}

console.log(q15('김다정'));

//q16:로꾸거

function q16(str) {
  let reversStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversStr += str[i];
  }
  return reversStr;
}

console.log(q16('조수완'));

//17:놀이기구 제한.
function q17(height) {
  return height > 150 ? 'YES' : 'NO';
}

console.log(q17(170));

//18:평균
function q18(korean, math, english) {
  return parseInt((korean + math + english) / 3);
}

console.log(q18(20, 30, 40));

//parseInt와 Math.floor의 차이점. 확인필요.

//19.제곱을 구하자.
function q19(string) {
  let num1 = string.split(' ')[0];
  let num2 = string.split(' ')[1];

  return num1 ** num2;
}

console.log(q19('2 3'));

function q20(string) {
  let num1 = string.split(' ')[0];
  let num2 = string.split(' ')[1];

  return `${parseInt(num1 / num2)} ${num1 % num2}`;
}

console.log(q20('10 2'));

//21.set 만들기.
const set = new Set(); //5
const set1 = new Set([1, 2, 3, 4, 5, 5, 5]);
const set2 = new Set('stringStringString'); //3

console.log(10 / 3);

//24. toUpperCase
function q24(str) {
  return str.toUpperCase();
}

console.log(q24('mary'));

//25.원넓이
function q25(radius) {
  return radius * radius * 3.14;
}

console.log(q25(10));

//26.행성문제2
function q26(str) {
  const solarSystem = {
    수성: 'Mercury',
    금성: 'Venus',
    지구: 'Earth',
    화성: 'Mars',
    목성: 'Jupiter',
    토성: 'Saturn',
    천왕성: 'Uranus',
    해왕성: 'Neptune',
  };
  return solarSystem[str];
}

console.log(q26('지구'));

//27.객체만들기.
function q27(str1, str2) {
  const names = str1.split(' ');
  const scores = str2.split(' ');
  const obj = {};

  names.forEach((el, index) => {
    obj[el] = Number(scores[index]);
  });

  return obj;
}

console.log(q27('Yujin Hyewon', '70 100'));
//객체 순서가 ..음..

//28 2-gram
let str = 'Javascript';

function q28(str) {
  let gramArr = [];
  for (let i = 0; i < str.length - 1; i++) {
    gramArr.push(`${str[i]} ${str[i + 1]}`);
    console.log(gramArr[i]);
  }
  return gramArr;
}

console.log(q28('Javascript'));

//29. 대문자만 지나가세요.
function q29(char) {
  return char === char.toUpperCase() ? 'YES' : 'NO';
}

console.log(q29('A'));
console.log(q29('b'));
console.log(q29('a'));

//30. 문자열 속 문자 찾기

function q30(str, target) {
  //   //target을 기준으로 string을 나눈다.
  //   let arr = str.split(target);
  //  //배열의 첫번째 요소의 길이가 target의 인덱스가 됨.
  //   // console.log(arr);
  //   // console.log(arr[0].length);
  //   return arr[0].length;
  return str.indexOf(target);
}

console.log(q30('pineapple is yummy', 'apple'));

//indexOf는 문자 하나가 아니라도 시작점의 인덱스를 반환하는구나.

// 31. JS 자료형의 복잡도.

//32. 문자열 만들기
function q32(str) {
  return str.split(' ').length;
}

console.log(q32('안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.'));

//33.거꾸로 출력하기.
function q33(nums) {
  // let reversNums = [];
  // for (let i = nums.length - 1; i >= 0; i--) {
  //   if (nums[i] === ' ') continue;
  //   reversNums.push(Number(nums[i]));
  // }
  // let result = reversNums.join(' ');
  // return result;
  const data = nums.split(' ').reverse();
  let result = '';

  for (let i = 0; i < nums.length; i++) {
    result += data[i];
  }

  return result;
}

console.log(q33('1 2 3 4 5'));

//34 sort 구현하기~
function q34(low) {
  let height = low.split(' ');
  return height.sort((a, b) => a - b).join(' ') === low ? 'YES' : 'NO';
}

console.log(q34('176 156 155 165 166 169'));
console.log(q34('155 156 165 166 169 176'));

//35 Factory 함수 사용하기.   //클로져
function one(n) {
  function two(n2) {
    return n2 ** n;
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));

//36 구구단 출력하기
function q36(num) {
  let result = `${num}`;
  for (let i = 2; i <= 9; i++) {
    result += ` ${num * i}`;
  }
  return result;
}
console.log(q36(2));

//37 반장선거.
//개표결과 내놓기.
//return=`${}(이)가 총 ${}표로 반장이 되었습니다.`
function q37(...cadidate) {
  let elected = '';
  let turnout = 0;
  console.log(cadidate);
  let obj = cadidate.reduce((prev, cur) => {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
  //prev[cur] : 리듀스를 실행하는 배열의 요소가 키 된다.
  //(prev[cur]||0) +1 :
  console.log(obj);
  for (let name in obj) {
    if (obj[name] > turnout) {
      turnout = obj[name];
      elected = name;
    }
  }
  return `${elected}(이)가 총 ${turnout}표로 반장이 되었습니다.`;
}
console.log(
  q37('원범', '원범', '혜원', '혜원', '혜원', '혜원', '유진', '유진')
);

//38 호준이의 아르바이트
//원하는 값, 입력받은 숫자들중 3번째로 높은 수까지는 몇개잇냐
//입력값은 숫자 중복 허용.  count 변수를 활용?
//first, second, third, 변수 활용?

function q38(...scores) {}
console.log(q38(97, 86, 75, 66, 55, 97, 85, 97, 97, 95)); //6
//39 오타수정.  ==> 정규표현식으로 해보기.
function q39(string, target, goal) {
  return string.replaceAll(target, goal);
}
console.log(q39('querty', 'q', 'e'));
console.log(q39('hqllo my namq is hyqwon', 'q', 'e'));

//40 놀이동산에 가자.
function q40(limit, people, ...weight) {
  console.log(limit);
  console.log(people);
  console.log(weight);
  let sum = 0;
  let limitIndex = 0;
  weight.forEach((el, index) => {
    sum += el;
    if (sum <= limit) limitIndex = index;
  });
  // console.log()
  return limitIndex + 1;
}

console.log(q40(50, 5, 20, 20, 20, 20, 20));

//41 소수판별
function isPrime(num) {
  //1보다 큰 양의 정수.
}

//42 2020년
//두 수 a,b 20년 a월 b일의 요일 리턴.
//20년은 윤년 (윤년은 4나 400으로 나눠지는 날.?)
//a,b는 실제 있는 날.

function getDate(a, b) {
  let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  console.log(new Date());
  let dayOfWeek = week[new Date(`2020-${a}-${b}`).getDay()];
  return dayOfWeek;
}

console.log(getDate(5, 24));

//new Date()함수 알아보기.
//43 10진수 ->2진수

function getBinaryNum(decimalNum) {
  return decimalNum.toString(2);
}
console.log(getBinaryNum(2));

//44 각 자리수의 합
function SumEach(num) {
  let string = '' + num;
  let arr = string.split('');
  let result = 0;
  arr.forEach(item => {
    result += +item;
  });
  return result;
}
console.log(SumEach(18234));

//45 getTimt() 사용하기.

const day45 = new Date();
console.log(day45);

let year45 = day45.getTime();
year45 = Math.floor((year45 / 60) * 60 * 24 * 365 * 1000) + 1970;
console.log(year45);

const d = new Date();
let year1111 = d.getTime();
year1111 = Math.floor( / (3600 * 24 * 365 * 1000)) + 1970;

console.log();
