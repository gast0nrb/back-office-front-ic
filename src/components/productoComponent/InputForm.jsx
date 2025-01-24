const InputForm = ({
  type,
  forName,
  name,
  id,
  value,
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
        value={value}
        id={id}
        name={name}
        type={type}
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        onChange={onChange}
      />
    </>
  );
};

export default InputForm;
