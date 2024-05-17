export function Search({handleInput, search}){  
  return(
    <div className='input'>
      <input
        type='text'
        placeholder='Search'
        onChange={(e) =>
          handleInput(e)
        }
        value={search}
      />
    </div>    
  )
}