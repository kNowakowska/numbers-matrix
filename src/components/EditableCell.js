function EditableCell({ value, onChange }) {
  return (
    <td>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          if (e.target.value < 1000) onChange(e.target.value);
        }}
      />
    </td>
  );
}

export default EditableCell;
