const CreateEdit = ({setCreate, isCreate}) => {  
 return (
    <div className="my-2 w-full phone:text-center tablet:text-justify">
      <button className={`hover:text-ic-orange bg-ic-disabled text-ic-white opacity-40 tablet:mx-2 rounded-sm tablet:w-2/6 phone:w-2/3`}>Crear producto</button>
    </div>
 ) 
}

export default CreateEdit
