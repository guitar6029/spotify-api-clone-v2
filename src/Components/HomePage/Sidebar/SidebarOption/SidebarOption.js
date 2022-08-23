import './SidebarOption.css';

function SidebarOption({Icon, text}) {
  return (
    <div className='sidebar__option'>
        { (Icon) ? <Icon /> : null}
        {text}
    </div>
  )
}

export default SidebarOption