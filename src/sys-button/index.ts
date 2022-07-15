import SysButton from './Sysbutton';
import SysDropDown from './SysDropdown';
import { Button } from 'antd';

type SysButtonType = typeof SysButton;
interface SysButtonFace extends SysButtonType {
    /** 下拉按钮 */
    Dropdown: typeof SysDropDown;
    /** antd按钮 */
    Button: typeof Button;
}

let sys_button = SysButton as SysButtonFace;
sys_button.Dropdown = SysDropDown;
sys_button.Button = Button;

export default sys_button;
