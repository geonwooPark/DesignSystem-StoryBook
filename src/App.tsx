import React from 'react'
import ToolTip from './stories/ToolTip/ToolTop'

function App() {
  return (
    <div className="mx-auto w-[200px] text-center">
      <ToolTip direction="bottomLeft">
        <ToolTip.Trigger>123</ToolTip.Trigger>
        <ToolTip.Content>
          <div className="size-[100px] bg-pink-400">123</div>
        </ToolTip.Content>
      </ToolTip>
      <ToolTip direction="bottom">
        <ToolTip.Trigger>123</ToolTip.Trigger>
        <ToolTip.Content>
          <div className="size-[100px] bg-pink-400">123</div>
        </ToolTip.Content>
      </ToolTip>
      <ToolTip direction="bottomRight">
        <ToolTip.Trigger>123</ToolTip.Trigger>
        <ToolTip.Content>
          <div className="size-[100px] bg-pink-400">123</div>
        </ToolTip.Content>
      </ToolTip>
      <ToolTip direction="topLeft">
        <ToolTip.Trigger>123</ToolTip.Trigger>
        <ToolTip.Content>
          <div className="size-[100px] bg-pink-400">123</div>
        </ToolTip.Content>
      </ToolTip>
      <ToolTip direction="top">
        <ToolTip.Trigger>123</ToolTip.Trigger>
        <ToolTip.Content>
          <div className="size-[100px] bg-pink-400">123</div>
        </ToolTip.Content>
      </ToolTip>
      <ToolTip direction="topRight">
        <ToolTip.Trigger>123</ToolTip.Trigger>
        <ToolTip.Content>
          <div className="size-[100px] bg-pink-400">123</div>
        </ToolTip.Content>
      </ToolTip>
      <ToolTip direction="leftTop">
        <ToolTip.Trigger>123</ToolTip.Trigger>
        <ToolTip.Content>
          <div className="size-[100px] bg-pink-400">123</div>
        </ToolTip.Content>
      </ToolTip>
      <ToolTip direction="left">
        <ToolTip.Trigger>123</ToolTip.Trigger>
        <ToolTip.Content>
          <div className="size-[100px] bg-pink-400">123</div>
        </ToolTip.Content>
      </ToolTip>
      <ToolTip direction="leftBottom">
        <ToolTip.Trigger>123</ToolTip.Trigger>
        <ToolTip.Content>
          <div className="size-[100px] bg-pink-400">123</div>
        </ToolTip.Content>
      </ToolTip>
      <ToolTip direction="rightTop">
        <ToolTip.Trigger>123</ToolTip.Trigger>
        <ToolTip.Content>
          <div className="size-[100px] bg-purple-400">123</div>
        </ToolTip.Content>
      </ToolTip>
      <ToolTip direction="right">
        <ToolTip.Trigger>123</ToolTip.Trigger>
        <ToolTip.Content>
          <div className="size-[100px] bg-pink-400">123</div>
        </ToolTip.Content>
      </ToolTip>
      <ToolTip direction="rightBottom">
        <ToolTip.Trigger>123</ToolTip.Trigger>
        <ToolTip.Content>
          <div className="size-[100px] bg-pink-400">123</div>
        </ToolTip.Content>
      </ToolTip>
    </div>
  )
}

export default App
