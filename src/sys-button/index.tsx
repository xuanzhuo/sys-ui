import SysButton from "./Sysbutton";
import SysDropDown from './SysDropdown'
type SysButtonType = typeof SysButton
interface SysButtonFace extends SysButtonType {
    Dropdown?: typeof SysDropDown
}
let sys_button = SysButton as SysButtonFace
sys_button.Dropdown =  SysDropDown
export default SysButton;
