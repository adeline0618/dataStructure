# 자료구조

## 선형 - 연결리스트

각 노드가 데이터와 포인터를 가지며, 한 줄로 연결되어 있는 방식으로 데이터를 저장하는 자료 구조
빠른시간에 데이터 추가 삭제가 가능하다.

### 구현 메서드

- 노드 개수,비어 있는 지 확인, 노드 출력 : LinkedList.size(), LinkedList.isEmpty(), LinkedList.printNode()

- 노드 추가 : LinkedList.append(), LinkedList.insert()

- 노드 삭제 :LinkedList.remove(), LinkedList..removeAt()

- 데이터 위치 확인 : LinkedList.indexOf()

- data : 실제 값

- next : 또 다른 노드를 가리킬 수 있는 레퍼런스

- head: 실제 노드가 어느 노드부터 시작할 지 정해주는 것 (첫번째 노드를 가리키는 포인터)

- null : 끝 지점
