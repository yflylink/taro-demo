/**
 * pages模版快速生成脚本,执行命令 npm run tep `文件名`
 */

const fs = require('fs');
const { dirname } = require('path');

const dirName = process.argv[2];

if (!dirName) {
  console.log('文件夹名称不能为空！');
  console.log('示例：npm run tep test');
  process.exit(0);
}

// 页面模版
const indexTep = `import Taro, { useDidShow, useEffect } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

const ${titleCase(dirName)} = (props) => {
  useDidShow(() => {
    Taro.setNavigationBarTitle({
      title: '${dirName}'
    })
  })

  useEffect(() => {

  }, [])

  return (
    <View className="${dirName}-page">
      ${dirName}
    </View>
  )
}
export default connect((${dirName}) => ({...${dirName}}))(${titleCase(dirName)})
`;

// scss文件模版
const scssTep = `@import "../../styles/mixin";

.${dirName}-page {
  @include wh(100%, 100%);
}
`;

// model文件模版
const modelTep = `import * as ${dirName}Api from './service';

export default {
  namespace: '${dirName}',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { status, data } = yield call(${dirName}Api.demo, {});
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
  },

};
`;


// service页面模版
const serviceTep = `import Request from '../../utils/request';

export const demo = data => Request({
  url: '路径',
  method: 'POST',
  data,
});
`;



fs.mkdirSync(`./src/pages/${dirName}`); // mkdir $1
process.chdir(`./src/pages/${dirName}`); // cd $1

fs.writeFileSync('index.js', indexTep);
fs.writeFileSync('index.scss', scssTep);
fs.writeFileSync('model.js', modelTep);
fs.writeFileSync('service.js', serviceTep);

console.log(`模版${dirName}已创建,请手动增加models`);

function titleCase(str) {
  const array = str.toLowerCase().split(' ');
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length);
  }
  const string = array.join(' ');
  return string;
}

process.exit(0);
