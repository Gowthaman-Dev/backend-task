const Showdata = ({showui}) => {
    console.log(showui);    
  
    return (
    <>
    {showui.map((e)=>(
        <div key={e._id}>
            {e.departments_name}
            {e.district_name}
        </div>
    ))}
    </>
  )
}

export default Showdata