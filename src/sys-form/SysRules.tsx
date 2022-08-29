const required = { required: true, message: '此项必须填写' };
const max = function (len: number) {
    return { max: len, message: `最大长度不能超过${len}` };
};

const range = function (min: number, max: number, isFloat = false) {
    const message = `只能输入大于等于${min}，小于等于${max}的${isFloat ? '浮点数' : '整数'}！`;
    const pattern = isFloat ? /^-?(\d{1}|[1-9]+\d+)(\.\d*)?$/ : /^-?(\d{1}|[1-9]+\d+)$/;
    return {
        validator(rule: any, value: any) {
            if (!value) {
                return Promise.resolve();
            }
            if (pattern.test(value) && value >= min && value <= max) {
                return Promise.resolve();
            }
            return Promise.reject(new Error(message));
        },
    };
};

export { required, max, range };
