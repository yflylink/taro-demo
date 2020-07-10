import { View, Button } from "@tarojs/components"
import { useEffect } from "@tarojs/taro"

const TodoList = (props) => {

    useEffect(() => {
        console.log(props)
    }, [])

    return (
        <View >
            <View>{props.name}</View>
            <Button onClick={props.onClick}>del</Button>
        </View>
    )
}

export default TodoList