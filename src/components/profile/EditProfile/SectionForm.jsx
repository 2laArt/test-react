import { Field } from "formik";
import { Input } from "../../repeating/formBlock/InputFrom";

export const SectionFrom = ({ page, name, values, curPage }) => {
  return (
    <div
      name={name}
      className={curPage === name ? "edit_page_active" : "edit_page"}
    >
      {Object.keys(values).map((field) => (
        <Field
          name={`${page}.${field}`}
          placeholder={field
            .match(/[A-Z]?[a-z]+|[0-9]+|[A-Z]+(?![a-z])/g)
            .join(" ")}
          component={Input}
          type="text"
          key={field}
        />
      ))}
    </div>
  );
};
