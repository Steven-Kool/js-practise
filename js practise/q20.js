class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.order = [];
  }

  get(key) {
    if(this.map.has(key)) {
      this.order.splice(this.order.indexOf(key), 1);
      this.order.push(key);
      return this.map.get(key);
    }
    return -1;
  }

  set(key, value) {
    if(this.map.size >= this.capacity) {
      this.map.delete(this.order.shift());
    }

    this.map.set(key, value);
    this.order.push(key);
  }
}

const cache = new LRUCache(3);
cache.set(2, 5);
cache.set(3, 10);
cache.set(10, 10);
console.log(cache.get(3));
cache.set(5, 5);
console.log(cache.map);
console.log(cache.order);
