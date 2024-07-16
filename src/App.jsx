import { useState } from 'react'

import Paper1 from './assets/components/paper1'
import Paper2 from './assets/components/paper2'
 
const defaultValue = `
# Gle ovo prekul
## Mozes pisat u ovaj prozor
### i editat donji

\`\`\`
// Gle cak pises svoj mini kod
   function anotherExample(firstLine, lastLine) {
  if (firstLine == asd && lastLine == asd) {
    return multiLineCode;
  }
}
\`\`\`
**Debela**... slova,
_kosa!_ => **_oboje?!_**

~~Ovo mi treba za to-do app~~

- word 
 - document
   - lookin
      - ass

1. Nez 
1. Vise


  Mozes linkat [links](https://www.freecodecamp.org), i
> Pisat blokove


![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
Pisanje inline koda  \`<div></div>\`

`




function App() {
  const [value, setValue] = useState(defaultValue);


  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <main>
      <Paper1  value={value} onChange={handleChange}/>
      <Paper2 value={value}/>
    </main>
  )
}

export default App
