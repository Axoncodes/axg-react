import style from './style.module.css'

export default function Starts({rate}) {

  const rateArrF = (index) => {
    const arr = []
    for (let i = 0; i < 5; i++) {
      if (i == index) arr.push(1)
      else arr.push(0)
    }
    return arr
  }

  return (
    <div className={`${ rate ? '' : style.stars}`}>
      {rateArrF(rate).map((star, key) => (
        <svg
          key={key}
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          viewBox="0 0 24 24"
          className={`${style.star} ${ rate ? (key < rate ? style.active : '') : style[`star${key}`]}`}
          width="15px"
          height="15px"
        ><g><path d="M0,0h24v24H0V0z" fill="none"></path><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><g><polygon points="12,15.4 8.24,17.67 9.24,13.39 5.92,10.51 10.3,10.13 12,6.1 13.71,10.14 18.09,10.52 14.77,13.4 15.77,17.68"></polygon><path d="M22,9.24l-7.19-0.62L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27L18.18,21l-1.63-7.03L22,9.24z M12,15.4l-3.76,2.27 l1-4.28l-3.32-2.88l4.38-0.38L12,6.1l1.71,4.04l4.38,0.38l-3.32,2.88l1,4.28L12,15.4z"></path></g></g></svg>
      ))}

      {/* {rateArrF(rate).map((star, key) => (
        <p className={`${style.tooltip} ${style[`tooltip${key}`]}`}>poor content</p>
      ))} */}
    </div>
  )
}