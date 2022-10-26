interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

// const InputField = ({ todo, setTodo }: Props) => { Or
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <div>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <br />
        <textarea cols={20} rows={10}></textarea>
        <br />
        <button type="submit">Go</button>
      </form>
    </div>
  );
};

export default InputField;
