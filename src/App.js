import React, { useEffect, useRef, useState } from 'react'
import './App.css';
import ChatList from './components/ChatList';
// import { useTheme } from '@emotion/react'
// import { Checkbox, createTheme, FormControl, FormControlLabel, FormGroup, ThemeProvider } from '@mui/material'
// import Button from '@mui/material/Button';
// import PropTypes from 'prop-types'
import Message from './components/Message';

// const darkTheme = createTheme({
//   palette:{
//     mode: 'dark'
//   }
// })

// const lightTheme = createTheme({
//   palette:{
//     mode: 'light',
//     primary:{
//       main:'#a032a8'
//     },
//     secondary:{
//       main: '#d8addb'
//     },
//     background:{
//       paper: '#000'
//     },
//     text:{
//       primary: '#173A5E'
//     }
//   }
// })

function App() {
  // const obj = {
  //   title: 'name',
  //   count: 1
  // }
  // const arr = [1,2,3]
  // const [isdark, setIsDark] = useState(false)
  return (
    // <ThemeProvider theme={isdark ? darkTheme : lightTheme}>
      <div className="App">
       {/* <SampleForVirtualDom />
       <InputautoFocus data={obj}/>
       <Button variant="contained" onClick={() => {setIsDark(prevState => !prevState)}}>Cменить тему</Button> */}
        <Message/>
        <ChatList/>
    {/* <RenderTree/> */} 
      </div>
    // </ThemeProvider>
    
  );
}

export default App;

// const SampleForVirtualDom = ({data = []}) => {
//   const theme = useTheme()
//   // console.log(data)
//   return (
//     <div style={{background:theme.palette.primary.main}}>
//       Какой-то текст
//       <br/>
//       {data}
//     </div>
//   )
// }

// SampleForVirtualDom.propTypes = {
//   data: PropTypes.array
// }

// SampleForVirtualDom.defaultProps = {
//   data: []
// }
// {<Button variant='contained'>Outlined</Button>}

{/* <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Label"/>
</FormGroup> */}

// const InputautoFocus = ({data}) => {
//   const ref = useRef(null)
//   useEffect(() => {
//     ref.current?.focus()
//     // ref.current?.addEventListener('mouseover', (e) => {
//     //   e.target.style.border = "4px solid red"
//     // })
//   },[])
//   return (
//     <>
//       <input ref={ref} onMouseEnter={() => {console.log('hover')}}/>
//       <div>{data.id?.map(e => e)}</div>
//     </>
//   )
// }




// const RenderTree = () => {
//   console.log('render parent')
//   return (
//     <div>
//       <RenderTreeChild1/>
//       <RenderTreeChild2/>
//     </div>
//   )
// }

// const RenderTreeChild1 = () => {
//   const [state, setState] = useState(false)
//   console.log('child1')
//   return (
//     <button onClick={() => {setState(p => !p)}}>child1</button>
//   )
// }

// const RenderTreeChild2 = () => {
//   const [state, setState] = useState(false)
//   console.log('child2')
//   return (
//     <div>
//       <button onClick={() => {setState(p => !p)}}>child2</button>
//       {state ? <RenderTreeChild3/> : <p>Другой тип тега</p>}
//       <RenderTreeChild4/>
//     </div>
//   )
// }

// const RenderTreeChild3 = () => {
//   useEffect(() => {
//     console.log('child 3 render(only if mounted not update)')
//   },[])
//   return (
//     <h1>Cаб-чайлд</h1>
//   )
// }

// const RenderTreeChild4 = () => {
//   const [classesName, setClasses] = useState('default')
//   console.log('child 4')
//   useEffect(() => {
//     console.log('child 4 render(only if mounted not update)')
//   },[])
//   return (
//     <>
//       <h2 className={classesName} id='child4'>Саб-чайлд</h2>
//       <button onClick={() => {setClasses('changed')}}>Изменить имя класса</button>
//     </>
//   )
// }