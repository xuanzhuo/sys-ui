import Base from './base';
import { DatePickerProps } from 'antd';

export interface SysDataPickerProps extends Omit<Base, 'defaultPickerValue'> {
    /**
     * @description 默认面板日期
     * @default -
     * @type moment
     */
    defaultPickerValue?: DatePickerProps['defaultPickerValue'];
    /**
     * @description 默认日期，如果开始时间或结束时间为 null 或者 undefined，日期范围将是一个开区间
     * @default -
     * @type moment
     */
    defaultValue?: DatePickerProps['defaultValue'];

    /**
     * @description 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 moment.js，支持自定义格式
     * @default YYYY-MM-DD
     * @type string | (value: moment) => string | (string | (value: moment) => string)[]
     */
    format?: DatePickerProps['format'];
    /**
     * @description 在面板中添加额外的页脚
     * @default -
     */
    renderExtraFooter?: <Mode>(mode: Mode) => React.ReactNode;
    /**
     * @description 当设定了 showTime 的时候，面板是否显示“此刻”按钮
     * @default -
     */
    showNow?: boolean;
    /**
     * @description 是否展示“今天”按钮
     * @default true
     */
    showToday?: boolean;
    /**
     * @description 日期
     * @default -
     * @type moment|string
     */
    value?: DatePickerProps['value'] | string;
    /**
     * @description 时间发生变化的回调
     * @default -
     */
    onChange?: (datastring: string) => void;
    /**
     * @description 点击确定按钮回调
     * @default -
     */
    onOk?: () => void;
    /**
     * @description 日期面板变化时的回调
     * @default -
     */
    onPanelChange?: <Props>(props: Props) => void;
}
// type Moment = DatePickerProps['defaultPickerValue'];
type Moment = any;
type EventValue = any;
type DisabledTimes = any;
export interface RangePickerProps<RangeValue>
    extends Omit<Base, 'disabled' | 'placeholder' | 'defaultPickerValue'> {
    mode?: any;
    picker?: any;
    placeholder?: [string, string] | undefined;
    /**
     * @description 允许起始项部分为空
     * @default [false, false]
     */
    allowEmpty?: [boolean, boolean];
    /**
     * @description 自定义日期单元格的内容。info
     * @default - <Moment>(currentDate: Moment, today: Moment, info) => React.ReactNode
     */
    dateRender?: DatePickerProps['dateRender'];
    /**
     * @description 默认面板日期
     * @default -
     * @type moment []
     */
    defaultPickerValue?: [Moment, Moment];
    /**
     * @description 默认日期
     * @default -
     */
    defaultValue?: Moment | undefined;
    /**
     * @description 禁用起始项
     * @default -
     */
    disabled?: boolean | [boolean, boolean];
    /**
     * @description 不可选择的时间
     * @default -
     * @type ((date: EventValue<Moment>, type: RangeType) => DisabledTimes)
     */
    disabledTime?: ((date: Moment, type: Moment) => DisabledTimes) | undefined;
    /**
     * @description 展示的日期格式
     * @default YYYY-MM-DD HH:mm:ss
     */
    format?: string;
    /**
     * @description 预设时间范围快捷选择
     * @default -
     * @type { [range: string]: moment[] } | { [range: string]: () => moment[] }
     */
    ranges?: Record<string, [Moment, Moment] | (() => [Moment, Moment])> | undefined;

    /**
     * @description  在面板中添加额外的页脚
     * @default -
     */
    renderExtraFooter?: () => React.ReactNode;
    /**
     * @description 设置分隔符
     * @default -
     */
    separator?: () => React.ReactNode;
    /**
     * @description  待选日期发生变化的回调。
     * @default -
     */
    // onCalendarChange?: (
    //     values: RangeValue<Moment>,
    //     formatString: [string, string],
    //     info: RangeInfo,
    // ) => void;
    onCalendarChange?:
        | ((values: Moment, formatString: [string, string], info: any) => void)
        | undefined;
    /**
     * @description 日期范围发生变化的回调
     * @default -
     */
    onChange?: ((values: Moment, formatString: [string, string]) => void) | undefined;
    showTime?: Object | boolean;
}
