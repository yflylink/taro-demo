import Taro, { useDidShow, useEffect } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

const Reqs = (props) => {
  useDidShow(() => {
    Taro.setNavigationBarTitle({
      title: 'reqs'
    })
    props.dispatch({
      type: 'reqs/init'
    })
  })

  useEffect(() => {
    console.log('===>', props.reqs.router)
  }, [props.reqs.time])

  return (
    <View className="reqs-page">
      reqs
    </View>
  )
}
export default connect((reqs) => ({...reqs}))(Reqs)
