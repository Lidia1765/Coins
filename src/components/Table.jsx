
import "../App.css";

export function Table({ data, onMore }) {
  const unwraped = (array) => {
    return array.map(value => Object.entries(value))
  }
  let arrayWithNan = [];
  const array = [];
  let resultArray = [];
  //console.log(unwraped(data))
  //const chechArray = unwraped(data).map
  const checkArray = unwraped(data).map(a => {
    for (let i = 0; i < a.length; i++) {
      for (let y = 0; y < a[i].length; y++) {
        array.push(a[i][y])
        arrayWithNan.push(+a[i][y])
        //       console.log(a[i][y])
        //       if (/^[0-9]*[.,]?[0-9]+$/.test(a[i][y])) {
        //         array.push(Number(a[i][y]))
        //       } else {
        //         array.push(a[i][y])
        //       }
      }
    }
  })
  arrayWithNan = arrayWithNan.map(a => Math.round(a))

  //console.log(arrayWithNan)

  function replaceArray(arrayWithNan, array) {
    return arrayWithNan.map((item, i) => isNaN(item) ? array[i] : item)
  }
  console.log(replaceArray(arrayWithNan, array))
  const result = replaceArray(arrayWithNan, array).map((item, i) => {
    if (i % 2 !== 0) {
      resultArray.push(item)
    }
  })
  console.log(resultArray, 'result')


  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map(keys => <th key={keys}>{keys}</th>)}
          </tr>
        </thead>

        <tbody>
          {resultArray.map((item, i) => (
            <tr>
              <td key={i}>{item}</td>
            </tr>
          ))}
          {/* {unwraped(data).map((item, idx) => (
            <tr key={idx}>
              {item.map((value, i) => <td key={i}>{value}</td>)}
              {/* {item.map(([_, value], i) => <td key={i} >{value}</td>)} }

            </tr>}
          ))*/}
        </tbody>
      </table>
      <button
        className="view-more"
        onClick={onMore}>
        View more
      </button>
    </div>
  )
}