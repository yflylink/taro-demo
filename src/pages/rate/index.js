import Taro, { useDidShow, useEffect, useState } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import { AtRate, AtImagePicker, Image } from 'taro-ui';

const Rate = (props) => {
  useDidShow(() => {
    Taro.setNavigationBarTitle({
      title: 'rate'
    })
  })

  useEffect(() => {
    console.log('------->', props)
  }, [props.time])

  const [files, setFiles] = useState()
  const changePick = (file) => {
    console.log(file)
    setFiles(file)
  }

  return (
    <View className="rate-page">
      title
      <View className='at-row'>
        <View className='at-col'>
          <AtRate
          value={props.atrate[1]}
          onChange={(v) => props.dispatch({type: 'rate/changeRate', payload: {val: v, id: 1}})}
        />

        <AtRate
          value={props.atrate[2]}
          onChange={(v) => props.dispatch({type: 'rate/changeRate', payload: {val: v, id: 2}})}
        />

         <AtRate
          value={props.atrate[3]}
          onChange={(v) => props.dispatch({type: 'rate/changeRate', payload: {val: v, id: 3}})}
        />
        </View>
        {props.atrate[1]},,,{props.atrate[2]}
      </View>

      <View>
          <AtImagePicker
            onChange={(f, t, idx) => props.dispatch({type: 'rate/changePick', payload: {id: 1, files: f, type: t, idx: idx}})}
            files={props.files[1]}
            showAddBtn={props.isShow[1]}
          ></AtImagePicker>
          

          <AtImagePicker
            onChange={(f, t, idx) => props.dispatch({type: 'rate/changePick', payload: {id: 2, files: f, type: t, idx: idx}})}
            files={props.files[2]}
            showAddBtn={props.isShow[2]}
          ></AtImagePicker>

          {props.time}
      </View>
    </View>
  )
}

const mapStateToProps = (state) => {
  const {atrate, time, files, isShow, files1} = state.rate
  return {
    atrate,
    time,
    files,
    isShow,
    files1,
    loading: state.loading.models.rate
  }
}
export default connect(mapStateToProps)(Rate )
