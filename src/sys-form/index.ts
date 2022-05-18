import InternalSysForm, { FormItem, FormInstance, useForm} from './SysForm';
import { twoColLayout, fourColLayout, halfFourColLayout, createLayout } from './formLayout';
import { required, max, range } from './SysRules';

type InternalSysFormType = typeof InternalSysForm;

interface SysFormInterface extends InternalSysFormType {
    FormItem: typeof FormItem;
    useForm: typeof useForm;
    twoColLayout: typeof twoColLayout;
    fourColLayout: typeof fourColLayout;
    halfFourColLayout: typeof halfFourColLayout;
    createLayout: typeof createLayout;
    required: typeof required;
    max: typeof max;
    range: typeof range;
}

const SysForm = InternalSysForm as SysFormInterface;
SysForm.FormItem = FormItem
SysForm.useForm = useForm

//表单布局
SysForm.twoColLayout = twoColLayout;
SysForm.fourColLayout = fourColLayout;
SysForm.halfFourColLayout = halfFourColLayout;
SysForm.createLayout = createLayout;

//校验规则
SysForm.required = required;
SysForm.max = max;
SysForm.range = range;

export type { FormInstance as SysFormInstance}

export default SysForm;
