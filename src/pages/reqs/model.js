import * as reqsApi from './service';

export default {
  namespace: 'reqs',
  state: {
    time: ''
  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { status, data } = yield call(reqsApi.demo, {});
      if (status === 'ok') {
        yield put({ type: 'save',
          payload: {
            topData: data,
          } });
      }
    },
    *init(_, {call, put}) {
      const res = yield call(reqsApi.init)
      if(res.status === 0) {
        yield put({
          type: 'initData',
          payload: res.data
        })
      }
    }
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    initData(state, {payload}) {
      console.log('===>', state, payload)
      return {...state, ...payload, time: new Date().getTime()}
    }
  },

};
