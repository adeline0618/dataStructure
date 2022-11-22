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
  //연결리스트 반복문으로 탐색
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }
  //끝에는 null
  console.log('null');
};

// append(): 연결 리스트 가장 끝에 노드 추가
/**
 * 데이터를 입력받아 해당 노드를 연결리스트 끝에 추가
 * @param {any} value node의 데이터
 */
LinkedList.prototype.append = function (value) {
  let node = new Node(value),
    current = this.head;

  //순차탐색을 하면서 노드를 연결해준다.

  //헤드가 널이면 헤드는 노드를 참조해야한다.
  if (this.head === null) {
    this.head = node;
    //처음이 아니라면 넥스트가 없을때까지 순회하다가
  } else {
    while (current.next != null) {
      current = current.next;
    }
    // 널이되면 노드를 참조해야한다.
    current.next = node;
  }
  //노드가 추가 되었으므로 길이도 증가
  this.length++;
};
// insert(): position 위치에 노드 추가
LinkedList.prototype.insert = function (value, position = 0) {
  //포지션 범위 체크
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

let ll = new LinkedList();

ll.insert(1);
ll.printNode(); //1 -> null
ll.insert(10);
ll.printNode(); //10 -> 1 -> null
ll.insert(100);
ll.printNode(); // 100 -> 10 -> 1 -> null

ll.insert(5, 1);
ll.printNode(); //100 -> 5 -> 10 -> 1 -> null
ll.insert(7, 3);
ll.printNode(); //100 -> 5 -> 10 -> 7 -> 1 -> null
