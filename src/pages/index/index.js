import Taro, { useDidShow, useEffect } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

const Index = (props) => {
  useDidShow(() => {
    Taro.setNavigationBarTitle({
      title: 'index'
    })
  })

  useEffect(() => {
    console.log('====>', props)
  }, [])

  return (
    <View className="index-page">
        <View>
            {props.count}

            <Button onClick={() => props.dispatch({type: 'count/add'})}>add</Button>
            <Button onClick={() => props.dispatch({type: 'count/sub'})}>sub</Button>
        </View>

        <View>
          <Button onClick={() => Taro.navigateTo({url: '/pages/user/index'})}>Todos</Button>
        </View>

        <View>
          <Button onClick={() => Taro.navigateTo({url: '/pages/rate/index'})}>rate</Button>
        </View>
        <View>
          <Button onClick={() => Taro.navigateTo({url: '/pages/reqs/index'})}>reqs</Button>
        </View>
    </View>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  const {count} = state.count
  return {
    count,
    loading: state.loading.models.count
  }
}
export default connect(mapStateToProps)(Index)
