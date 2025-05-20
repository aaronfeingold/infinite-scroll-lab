import { useState } from "react";
import Button from "./Button";
import type { MockItem } from "../utils/fetchMockData";

interface FormProps {
  onSubmit: (data: Omit<MockItem, "id">) => void;
  onCancel: () => void;
}

const Form = ({ onSubmit, onCancel }: FormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2 text-white">
        <label htmlFor="Title" className="block text-sm font-medium text-white">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="bg-slate-400 text-stone-950 mt-1 w-full border border-green-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-white"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="bg-slate-400 mt-1 w-full border border-green-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button text="Cancel" onClick={onCancel} variant="secondary" />
        <Button text="Submit" type="submit" variant="primary" />
      </div>
    </form>
  );
};

export default Form;
