const test = require('ava')
const LinkedList = require('../src/linked-list')

test('LinkedList length increases as items are added', t => {
  const list = new LinkedList()

  for (let i = 0; i < 10; i++) {
    list.add(i)
  }

  t.is(list._length, 10)
})

test('LinkedList nodes point to next node', t => {
  const list = new LinkedList()
  list.add('one')
  list.add('two')

  t.is(list.head.next.data, 'two')
})


test('get() throws error if index is out of range', t => {
  const list = new LinkedList()

  t.throws(() => list.get(50), 'out of range')
})
test('get(0) returns the LinkedList head', t => {
  const list = new LinkedList()

  list.add('first value')

  t.is(list.get(0).data, 'first value')
})
test('get() gets a value from the list by index', t => {
  const list = new LinkedList()

  for (let i = 100; i < 200; i++) {
    list.add(i.toString())
  }

  t.is(list.get(50).data, '150')
})


test('remove() throws error if index is out of range', t => {
  const list = new LinkedList()

  t.throws(() => list.remove(50), 'out of range')
})
test('remove() returns the deleted node', t => {
  const list = new LinkedList()
  list.add('one')

  const deletedNode = list.remove(0)

  t.is(deletedNode.data, 'one')
  t.is(deletedNode.next, null)
})
test('remove(0) sets second node as head', t => {
  const list = new LinkedList()
  list.add('one')
  list.add('two')

  list.remove(0)

  t.is(list.head.data, 'two')
})
test('remove() can remove nodes from the middle of the list', t => {
  const list = new LinkedList()
  list.add('one')
  list.add('two')
  list.add('three')
  list.add('four')
  list.add('five')

  list.remove(2)
  const last = list.get(2)

  t.is(last.data, 'four')
  t.is(last.next.data, 'five')
})
test('remove(lastIndex) removes last node in list', t => {
  const list = new LinkedList()
  list.add('one')
  list.add('two')
  list.add('three')
  list.add('four')

  list.remove(3)
  const last = list.get(2)

  t.is(last.data, 'three')
  t.is(last.next, null)
})
