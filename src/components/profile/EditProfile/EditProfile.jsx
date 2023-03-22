import { Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";

import { EditSideBar } from "./EditSideBar";
import { SectionFrom } from "./SectionForm";
import { PATHS } from "../../../router/paths";

const EditProfileForm = (props) => {
  const { curPage, pages, values } = props;
  return (
    <>
      <Form className="form form_mrg_none">
        {pages.map((page) => (
          <SectionFrom
            page={page}
            curPage={curPage}
            values={values[page]}
            name={page}
            key={page}
          />
        ))}
        {props.error && <div className="form_error">{props.error}</div>}
        <button className="button" type="submit">
          sing in
        </button>
      </Form>
    </>
  );
};

export const EditProfile = ({
  pages,
  initialValues,
  userData,
  changeProfileInfo,
}) => {
  const navigate = useNavigate();
  const { page } = useParams();
  return (
    <div className="edit_profile">
      <div className="edit_profile_container">
        <h3 className="title_3">Edit Profile</h3>

        <EditSideBar curPage={page} pages={pages} />
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            const obj = {
              ...values.main,
              userId: userData.userId,
              contacts: values.contacts,
            };
            const result = await changeProfileInfo(obj);
            result && navigate(`${PATHS.PROFILE}`);
          }}
        >
          {(props) => (
            <EditProfileForm pages={pages} curPage={page} {...props} />
          )}
        </Formik>
      </div>
    </div>
  );
};
