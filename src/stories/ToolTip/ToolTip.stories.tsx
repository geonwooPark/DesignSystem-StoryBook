import React from 'react'
import ToolTip from './ToolTop'

export default {
  title: 'COMPONENTS/ToolTip',
  component: ToolTip,
  tags: ['autodocs'],
}

export function Default() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '32px',
      }}
    >
      <div style={{ display: 'flex', gap: '32px' }}>
        <ToolTip direction="top">
          <ToolTip.Trigger>
            <div className="trigger">top</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="topLeft">
          <ToolTip.Trigger>
            <div className="trigger">topLeft</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="topRight">
          <ToolTip.Trigger>
            <div className="trigger">topRight</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="bottom">
          <ToolTip.Trigger>
            <div className="trigger">bottom</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="bottomLeft">
          <ToolTip.Trigger>
            <div className="trigger">bottomLeft</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="bottomRight">
          <ToolTip.Trigger>
            <div className="trigger">bottomRight</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
      </div>
      <div style={{ display: 'flex', gap: '32px' }}>
        <ToolTip direction="left">
          <ToolTip.Trigger>
            <div className="trigger">left</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="leftTop">
          <ToolTip.Trigger>
            <div className="trigger">leftTop</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="leftBottom">
          <ToolTip.Trigger>
            <div className="trigger">leftBottom</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="right">
          <ToolTip.Trigger>
            <div className="trigger">right</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="rightTop">
          <ToolTip.Trigger>
            <div className="trigger">rightTop</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="rightBottom">
          <ToolTip.Trigger>
            <div className="trigger">rightBottom</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
      </div>
      <div style={{ display: 'flex', gap: '32px', overflow: 'hidden' }}>
        <ToolTip direction="left" enterDelay={1000}>
          <ToolTip.Trigger>
            <div className="trigger">enterDelay</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="leftTop" leaveDelay={1000}>
          <ToolTip.Trigger>
            <div className="trigger">leaveDelay</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="leftBottom">
          <ToolTip.Trigger>
            <div className="trigger">hoverNotHidden</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
      </div>
      <div style={{ display: 'flex', gap: '32px', overflow: 'hidden' }}>
        <ToolTip direction="top" leaveDelay={1000}>
          <ToolTip.Trigger>
            <div className="trigger">top</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="example-component">
              <div>Are you sure to delete this task?</div>
              <button>삭제</button>
            </div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="left" leaveDelay={1000}>
          <ToolTip.Trigger>
            <div className="trigger">left</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="example-component">
              <div>Are you sure to delete this task?</div>
              <button>삭제</button>
            </div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="right" leaveDelay={1000}>
          <ToolTip.Trigger>
            <div className="trigger">right</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="example-component">
              <div>Are you sure to delete this task?</div>
              <button>삭제</button>
            </div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="bottom" leaveDelay={1000}>
          <ToolTip.Trigger>
            <div className="trigger">bottom</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="example-component">
              <div>Are you sure to delete this task?</div>
              <button>삭제</button>
            </div>
          </ToolTip.Content>
        </ToolTip>
      </div>
      <div style={{ display: 'flex', gap: '32px', overflow: 'hidden' }}>
        <ToolTip direction="top">
          <ToolTip.Trigger>
            <div className="trigger pink">Pink</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component pink">Pink</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="top">
          <ToolTip.Trigger>
            <div className="trigger yellow">Yellow</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component yellow">Yellow</div>
          </ToolTip.Content>
        </ToolTip>
      </div>
      <div style={{ display: 'flex', gap: '32px', overflow: 'hidden' }}>
        <ToolTip direction="top" disabled>
          <ToolTip.Trigger>
            <div className="trigger" style={{ backgroundColor: 'darkgray' }}>
              Disabled
            </div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">Disabled</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="top">
          <ToolTip.Trigger>
            <div className="trigger">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              asperiores atque
            </div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component" style={{ maxWidth: '240px' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              asperiores atque
            </div>
          </ToolTip.Content>
        </ToolTip>
      </div>
    </div>
  )
}
