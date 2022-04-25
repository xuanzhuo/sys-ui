import Base from './base';
import { DatePickerProps } from 'antd';

export interface DataPickerProps extends Base {
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
     * @description 不可选择的时间
     * @default -
     * @type function(date)
     */
    disabledTime?: DatePickerProps['disabledTime'];
    /**
     * @description 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 moment.js，支持自定义格式
     * @default YYYY-MM-DD
     * @type string | (value: moment) => string | (string | (value: moment) => string)[]
     */
    format?: DataPickerProps['format'];
    /**
     * @description 在面板中添加额外的页脚
     * @default -
     */
    renderExtraFooter?: (mode) => React.ReactNode;
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
     * @type moment
     */
    value?: DataPickerProps['value'];
    /**
     * @description 时间发生变化的回调
     * @default -
     */
    onChange?: <Props>(props: Props, datastring: string) => void;
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

export interface RangePickerProps extends Base {
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
     * @default -
     */
    dateRender?: <Moment>(currentDate: Moment, today: Moment, info) => React.ReactNode;
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
    defaultValue?: RangeValue<Moment> | undefined;
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
    disabledTime?: DatePickerProps['disabledTime'];
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
    ranges?:
        | Record<
              string,
              | [EventValue<Moment>, EventValue<Moment>]
              | (() => [EventValue<Moment>, EventValue<Moment>])
          >
        | undefined;

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
    onCalendarChange?: (
        values: RangeValue<Moment>,
        formatString: [string, string],
        info: RangeInfo,
    ) => void;
    /**
     * @description 日期范围发生变化的回调
     * @default -
     */
    onChange?: (values: RangeValue<Moment>, dateStrings: [string, string]) => void;
    showTime?: Object | boolean;
}
