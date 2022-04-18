---
title: SysModal
nav:
    title: 组件
    path: /components
    order: 0
group:
    path: /common
    title: 通用
    order: 1
---

# SysModal

模态框（弹出框）

# 代码演示

## 基础用法

<code src="./demo/Basic.tsx">

## 提示消息框

<code src="./demo/Message.tsx">

## 可拖动

<code src="./demo/Draggable.tsx">

## 可最大化

<code src="./demo/Maximizable.tsx">

## 收集数据

<code src="./demo/CollectData.tsx" title="收集数据" desc="功能尚未完善,谨慎使用！">

## API
### SysModal的方法

| 方法名 | 说明 |
| ------ | ---- |
| SysModal.show  | 唤起弹出框 |
| SysModal.success  | 消息框-成功 |
| SysModal.error  | 消息框-错误 |
| SysModal.warning  | 消息框-警告 |
| SysModal.confirm  | 消息框-询问 |
| SysModal.collect  | 收集数据 |

### `SysModal.show` 的参数配置
<API src="./show.tsx" hideTitle></API>

### `SysModal.collect` 的参数配置
<API src="./formMethods.tsx" hideTitle ></API>


