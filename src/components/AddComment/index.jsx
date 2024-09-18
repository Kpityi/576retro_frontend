import './index.scss';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const AddComment = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Kérem adja meg a nevét!'),
    comment: Yup.string().required('írjon valamit a játékról!'),
  });

  return (
    <div className="new-comment">
      <h3 className="new-comment__title">Mondj valamit!</h3>
      <Formik
        initialValues={{
          name: '',
          comment: '',
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, handleChange, handleSubmit, handleBlur, isSubmitting }) => (
          <div className="new-comment__form-container">
            <Form className="new-comment__form">
              <label className="new-comment__form-element" htmlFor="name">
                Név:
              </label>
              <Field
                className="new-comment__form-element"
                id="name"
                name="name"
                type="text"
                placeholder="Név/ Keresztnév/Nick név"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <ErrorMessage name="name" render={(msg) => <div className="new-comment__error-message">{msg}</div>} />

              <label className="new-comment__form-element" htmlFor="comment">
                Vélemény:
              </label>
              <Field
                className="new-comment__form-element"
                id="comment"
                name="comment"
                component="textarea"
                rows="6"
                cols="40"
                value={values.comment}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <ErrorMessage name="comment" render={(msg) => <div className="new-comment__error-message">{msg}</div>} />
              <button
                className="new-comment__form-element"
                type="submit"
                onSubmit={handleSubmit}
                disabled={isSubmitting || !Object.keys(touched)?.length || Object.keys(errors)?.length}
              >
                Küld
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AddComment;
