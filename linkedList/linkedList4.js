// Node(): data와 point를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

// LinkedList(): head와 length를 가지고 있는 객체
function LinkedList() {
  this.head = null;
  this.length = 0;
}

// size(): 연결 리스트 내 노드 개수 확인
LinkedList.prototype.size = function () {
  return this.length;
};

// isEmpty(): 객체 내 노드 존재 여부 파악
LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

// printNode(): 노드 출력
LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }
  console.log('null');
};

// append(): 연결 리스트 가장 끝에 노드 추가
LinkedList.prototype.append = function (value) {
  let node = new Node(value),
    current = this.head;

  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }

  this.length++;
};

// insert(): position 위치에 노드 추가
LinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }

  let node = new Node(value),
    current = this.head,
    index = 0,
    prev;

  if (position === 0) {
    node.next = current;
    this.head = node;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    node.next = current;
    prev.next = node;
  }

  this.length++;

  return true;
};

// remove(): value 데이터를 찾아 노드 삭제
LinkedList.prototype.remove = function (value) {
  let current = this.head,
    prev = current;

  //while문을 돌면서 current의 data가 입력값인 value와 같은 지 비교

  //값이 다르거나 리스트가 끝날때까지 순회
  while (current.data != value && current.next != null) {
    prev = current;

    current = current.next;
    console.log(`prev : ${prev.data}, current:${current.data}`);
  }
  //멈췄다면 값을 찾았거나, 끝지점일 것이다.

  //입력받은 value 데이터가 없는 경우
  if (current.data != value) {
    return null;
  }

  //값이 같을 때 (값을 찾은 경우)
  if (current === this.head) {
    this.head = current.next;
  } else {
    prev.next = current.next;
  }

  this.length--;

  return current.data;
};

let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode(); //100 -> 2 -> 10 -> 3 -> 1 -> null

console.log(ll.remove(1000)); //null
ll.printNode(); //100 -> 2 -> 10 -> 3 -> 1 -> null
console.log(ll.remove(1)); //1
ll.printNode(); //100 -> 2 -> 10 -> 3 -> null
console.log(ll.remove(2)); //2
ll.printNode(); //100 -> 10 -> 3 -> null
console.log(ll.remove(100)); //100
ll.printNode(); //10 -> 3 -> null
console.log(ll.size()); //2
