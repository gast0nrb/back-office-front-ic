

const SectionCategory = ({}) => {
  return (
<div className="tablet:basis-5/12 grid grid-cols-1 mx-2">
    <h3 className="text-xl text-ic-message font-semibold text-center">Categorizacion</h3>
    <label for="codigo" class="text-ic-gray text-xl mt-auto">Categoria: </label>
    <input
      id="codigo"
      className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
      disabled
    />
    <label for="barra" class="text-ic-gray text-xl mt-auto">Subcategoria: </label>
    <input
      id="barra"
      className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
      disabled
    />
    <label for="title" class="text-ic-gray text-xl mt-auto">Activo: </label>
    <input
      id="title"
      className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
      disabled
    />
 <label for="title" class="text-ic-gray text-xl mt-auto">Stock: </label>
    <input
      id="title"
      className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
      disabled
    />
  </div>
  )
}

export default SectionCategory