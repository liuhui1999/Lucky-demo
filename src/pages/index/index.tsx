import React, { Component } from 'react';
import { SlotMachine } from '@lucky-canvas/taro/react'
import { View } from '@tarojs/components';
class SlotMachiner extends Component {
    myLucky: any
    constructor(props) {
        super(props);
        this.myLucky = React.createRef()
    }
    playGame = () => {
        this.myLucky.current.play()
        setTimeout(() => {
            // 假设 4 种结果
            const res = [
                [9, 9, 6],
                [0, 0, 7],
                [6, 6, 6],
                [8, 8, 8]
            ]
            // 随机取一组数据
            const index = res[Math.random() * 4 >> 0]
            // 调用 stop 方法停止游戏
            this.myLucky.current.stop(index)
        }, 500);
    }
    render() {
        return (
            <>
                <SlotMachine
                    ref={this.myLucky}
                    width={240}
                    height={180}
                    blocks={[
                        { padding: '10px', background: '#617df2' },
                        { padding: '10px', background: '#869cfa' },
                        { padding: '10px', background: '#afc8ff' },
                        { padding: '10px', background: '#e9e8fe' },
                    ]}
                >
                </SlotMachine>
                <View onClick={() => this.playGame()}>开始抽奖</View>
            </>
        );
    }
}

export default SlotMachiner;