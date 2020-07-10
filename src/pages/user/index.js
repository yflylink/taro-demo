import Taro, { useDidShow, useEffect } from '@tarojs/taro';
import { View, Input, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import TodoList from './components/TodoList';

const User = (props) => {
  useDidShow(() => {
    Taro.setNavigationBarTitle({
      title: 'user'
    })
  })

  useEffect(() => {
      console.log(props)
  }, [])

  return (
    <View className="user-page">
        <View>
          <Input value={props.text} placeholder='请输入代办事项' onChange={(e) => props.dispatch({type: 'user/change', payload: e.detail.value})}></Input>
          <Button onClick={() => props.dispatch({type: 'user/add'})}>Add</Button>
        </View>

        <View className='user-list'>
          {
            props.list && props.list.map(v => (
              <TodoList key={v.id} {...v} onClick = {() => props.dispatch({type: 'user/del', payload: v.id})}></TodoList>
            ))
          }
        </View>
    </View>
  )
}

const mapStateToProps = (state) => {
  const {list, text} = state.user
  return {
    list,
    text,
    loading: state.loading.models.user
  }
}

export default connect(mapStateToProps)(User )
