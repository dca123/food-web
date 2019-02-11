import Mixin from '@ember/object/mixin';

export default Mixin.create({
  paginateArray(lastVal, selfVal){
    let self = selfVal;
    let last = lastVal || self;
    if (!last) return [];
    let length = 6;
    if (last < length) {
      length = last;
    } else {
      const total = last;
      let start = 0;
      if (last - self <= 3) {
        start = last - 5;
        return [...Array(length).keys()].map(i => i + (start));
      }
    }
    return new Array(length).fill().map((item, index) => index + 1);
  }
});
