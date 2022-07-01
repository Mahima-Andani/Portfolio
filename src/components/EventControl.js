import { useFrame } from '@react-three/fiber'

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
const cursor = {
    x: 0,
    y: 0
}
let scrollY = window.scrollY

function EventControl(props) {
    window.addEventListener("mousemove", (event) => {
        cursor.x = event.clientX / sizes.width - 0.5
        cursor.y = event.clientY / sizes.height -0.5
    })

    window.addEventListener('scroll', () =>{
        scrollY = window.scrollY
    })

    useFrame(() => {
        props.refProp.current.position.z = Math.sin(cursor.x * Math.PI * 2)
        props.refProp.current.position.y = cursor.y * -5
        props.refProp.current.position.z =  (scrollY / sizes.height)*0.010 -0.5
    })

  return (
    <></>
  )
}

export default EventControl