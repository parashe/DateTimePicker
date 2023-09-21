import Image from 'next/image'

import { Index } from './MultiPickerDropdown'
import { ParentDropDownselect } from './SingleSelectDropdown'


export default function Home() {
  return (
<div className='container mx-auto flex'>

  <Index/>
  <ParentDropDownselect/>
  </div>
  )
}
