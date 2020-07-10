import * as indexApi from './service';

export default {
  namespace: 'count',
  state: {
    count: 0
  },

  reducers: {
   
    add(state) {
      console.log(state)
      return {...state, count: state.count + 1}
    },
    sub(state) {
      console.log(state)
      return {...state, count: state.count -1}
    }
  },

};
