class Counter {
    constructor() {
       this.count = 5
    }
    copy() {
      const copy = new Counter()
      copy.count = this.count
      return copy
    }
  }
  const originalCounter = new Counter()
  const copiedCounter = originalCounter.copy()
  console.log(originalCounter.count) // 5
  console.log(copiedCounter.count) // 5
  copiedCounter.count = 7
  console.log(originalCounter.count) // 5
  console.log(copiedCounter.count) // 7