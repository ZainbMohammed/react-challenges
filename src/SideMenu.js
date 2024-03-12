import './tagButtonStyle.css'
import TagButton from './TagButton'
import logo from './logo.svg'
import logo2 from './logo-icon.png'
export default function SideMenu() {
  const buttons = [
    {
      id: 1,
      title: 'أخر المقالات',
      c: (
        <div>
          <span>😃😃😃</span>
        </div>
      ),
    },
    {
      id: 2,
      title: 'الاكثر قراءه',
      c: (
        <div>
          <hr></hr>
          <img style={{ width: '100px', height: '100px' }} src={logo2}></img>
        </div>
      ),
    },
    {
      id: 3,
      title: 'الاكثر قراءه',
      c: <img src={logo}></img>,
    },
    {
        id: 4,
        title: 'الاكثر قراءه',
        c: (<div>
            <h4>Click Me</h4>
            <span>👍🏻</span>
          </div>)
      },
  ]

  const buttonsList = buttons.map((button) => {
    return <TagButton key ={button.id} title={button.title}>
        {button.c}
        </TagButton>
  })
  return (
    <div style={{ border: 'solid teal 3px', margin: '25px' }}>
      {/* <TagButton title="أخر المقالات">
        <div>
          <span>😃😃😃</span>
        </div>
      </TagButton>
      <TagButton title="الاكثر قراءه">
        <div>
          <hr></hr>
          <img style={{ width: '100px', height: '100px' }} src={logo2}></img>
        </div>
      </TagButton>
      <TagButton title="أخر المقالات">
        <img src={logo}></img>
      </TagButton>
      <TagButton title="أخر المقالات">
        <div>
          <h4>Click Me</h4>
          <span>👍🏻</span>
        </div>
      </TagButton>
      <TagButton title="hello"></TagButton>
      <TagButton title=""></TagButton>
      <TagButton title="hi"></TagButton>
      <TagButton></TagButton> */}
      {buttonsList}
    </div>
  )
}
