import { DoubleLinkedList } from './doubleLinkedList.js';
import { images } from './images.js';

const list = new DoubleLinkedList();

const viewer = document.getElementById('viewer');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

images.forEach((image) => list.push(image));

let length = list.getLength();
let index = 0;

const counter = document.getElementById('counter');
counter.innerHTML = index;

next.addEventListener('click', function () {
  index++;
  if (index == length) index = 0;
  counter.innerHTML = index;
  viewer.src = list.getNodeAtIndex(index).value;
});

prev.addEventListener('click', function () {
  if (index == 0) index = length;
  index--;
  counter.innerHTML = index;
  viewer.src = list.getNodeAtIndex(index).value;
});
