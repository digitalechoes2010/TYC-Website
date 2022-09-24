import type { InputHTMLAttributes } from "react";
import { Field } from "react-final-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  showImage: any;
}

const FileField = ({ name, ...props }: Props) => (
  <Field name={name}>
    {({ input: { value, onChange, ...input } }) => (
      <input
        {...input}
        type="file"
        onChange={({ target }) => {
          onChange(target.files);
          props.showImage(target.files);
        }} // instead of the default target.value
        {...props}
      />
    )}
  </Field>
);

export default FileField;
