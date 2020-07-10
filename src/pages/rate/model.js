import * as rateApi from './service';

export default {
  namespace: 'rate',
  state: {
    atrate: {},
    time:'',
    files: {
      
    },
    files1:[
      {url: "blob:http://192.168.1.20:10086/1b54e369-7d11-4b93-b939-5955fdcfe9d0"},
    ],
    isShow: {}
  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { status, data } = yield call(rateApi.demo, {});
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
    changeRate(state, {payload}) {
      console.log(state, payload)
      let rn = state.atrate
      rn[payload.id] = payload.val

      return {...state, atrate: rn, time: new Date().getTime()}
    },
    changePick(state, {payload}) {
      console.log(state, payload)
      let nf = state.files
      // if(nf[payload.id]) {
      //   nf[payload.id].push({url: payload.files[0].url})
      // } else {
      //   nf[payload.id] = []
      //   nf[payload.id].push({url: payload.files[0].url})
      // }
      nf[payload.id] = payload.files
      let ns = state.isShow
      if(payload.files.length < 4) {
          ns[payload.id] = true
      } else {
        ns[payload.id] = false
      }
      return {...state, files: nf, isShow: ns, time: new Date().getTime()}
    }
  },

};
