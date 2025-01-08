const InputForm = ({
  type,
  forName,
  name,
  id,
  defaultValue,
  allowEdit,
  titleLabel,
  onChange,
}) => {
  return (
    <>
      <label for={forName} className="text-ic-gray text-xl mt-auto">
        {titleLabel}:
      </label>
      <input
        defaultValue={defaultValue}
        id={id}
        name={name}
        type={type}
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled={!allowEdit}
        onChange={onChange}
      />
    </>
  );
};

export default InputForm;
