interface LabelProps {
  name: string;
}

export function Label({ name }: LabelProps) {
  return (
    <div className="text-white flex-grow sm:flex-grow-0 py-1 px-3  bg-gray-800 rounded-lg hover:font-bold duration-200">
      {name}
    </div>
  );
}
