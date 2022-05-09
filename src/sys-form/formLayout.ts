interface ColProps {
    span: number;
}
interface StyleProps {
    width: string;
}
export interface FormLayoutProps {
    labelCol: ColProps;
    wrapperCol: ColProps;
    style: StyleProps;
}

const formLayout = ({ col = 2, scale = [1, 3], half = false } = {}) => {
    let labelSpan = 24 * (scale[0] / (scale[0] + scale[1]));
    let wrapperSpan = 24 * (scale[1] / (scale[0] + scale[1]));
    let style = { width: '100%' };
    if (col === 4) {
        if (half) {
            style = { width: '50%' };
        } else {
            labelSpan = (24 / 2) * (scale[0] / (scale[0] + scale[1]));
            wrapperSpan = 24 - labelSpan;
        }
    }
    return {
        labelCol: { span: labelSpan },
        wrapperCol: { span: wrapperSpan },
        style,
    };
};

const createLayout = (scale: number[] | undefined = undefined) => {
    return {
        twoColLayout: formLayout({ scale }),
        fourColLayout: formLayout({ col: 4, scale }),
        halfFourColLayout: formLayout({ col: 4, scale, half: true }),
    };
};

const { twoColLayout, fourColLayout, halfFourColLayout } = createLayout();

export { twoColLayout, fourColLayout, halfFourColLayout, createLayout };
