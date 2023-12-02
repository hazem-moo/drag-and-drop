import { useEffect, useRef } from 'react'

export default function Home() {
  let btn = useRef(null)
  let input = useRef(null)
  let drag = null
  
  let addCourse = e => {
    e.preventDefault()
    const boxs = Array.from(document.querySelectorAll('.boxs'))
    if (input.current.value !== '') {
      boxs[0].innerHTML += `<h3 draggable='true'>${ input.current.value }</h3>`
      
      input.current.value = ''
    }
    dragItems()
  }

  let dragItems = () => {
    let items = document.querySelectorAll('h3')
    items.forEach(el => el.addEventListener('dragstart', () => {
      drag = el
      el.style.opacity = '.5' 
    }))

    items.forEach(el => el.addEventListener('dragend', () => {
      el.style.opacity = 1   
    }))

    let boxs = document.querySelectorAll('.boxs')
    boxs.forEach(box => {
      // drag over 
      box.addEventListener('dragover', e => {
        e.preventDefault()
      })
      box,addEventListener('dragleave', () => {
        
      })

      // drop 
      box.addEventListener('drop', () => {
        box.append(drag)
      })
    })
  }

  return (
    <section>
      <h1>drag annd drop</h1>
      <form>
        <input 
          type='text' 
          placeholder='add course' 
          ref={ input } 
          autoFocus
          maxLength={10}
        />
        <button 
          onClick={addCourse} 
          ref={ btn }>
            add couses
        </button>
      </form>
      <div className='list'>
        <div className='boxs' >
          <h2>boxs</h2>
        </div>
        <div className='boxs' >
          <h2>boxs</h2>
        </div>
        <div className='boxs' >
          <h2>boxs</h2>
        </div>
      </div>
    </section> 
  )
}
