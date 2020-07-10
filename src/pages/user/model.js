import * as userApi from './service';

export default {
  namespace: 'user',
  state: {
    list: [
      {id: 1, name: 'java'}
    ],
    text:''
  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { status, data } = yield call(userApi.demo, {});
      if (status === 'ok') {
        yield put({ type: 'save',
          payload: {
            topData: data,
          } });
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    change(state, {payload}) {
      console.log('change:', state, payload)
      return {...state, text: payload}
    },
    add(state) {
      
      return {...state, list: [{id: new Date().getTime(), name: state.text}, ...state.list], text: ''}
    },
    del(state, {payload}) {
      let ns = state.list
      ns.map((v, k) => {
        if(v.id === payload) {
          ns.splice(k, 1)
        }
      })
      return {...state, list: [...ns]}
    }
  },

};
