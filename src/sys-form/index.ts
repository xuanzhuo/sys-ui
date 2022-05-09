import InternalSysForm, { FormItem, FormInstance } from './SysForm';
import { twoColLayout, fourColLayout, halfFourColLayout, createLayout } from './formLayout';
import { required, max, range } from './sysRules';

type InternalSysFormType = typeof InternalSysForm;

interface SysFormInterface extends InternalSysFormType {
    FormItem: typeof FormItem;
    twoColLayout: typeof twoColLayout;
    fourColLayout: typeof fourColLayout;
    halfFourColLayout: typeof halfFourColLayout;
    createLayout: typeof createLayout;
    required: typeof required;
    max: typeof max;
    range: typeof range;
}

const SysForm = InternalSysForm as SysFormInterface;
//表单布局
SysForm.twoColLayout = twoColLayout;
SysForm.fourColLayout = fourColLayout;
SysForm.halfFourColLayout = halfFourColLayout;
SysForm.createLayout = createLayout;

//校验规则
SysForm.required = required;
SysForm.max = max;
SysForm.range = range;

export type { FormInstance }

export default SysForm;
