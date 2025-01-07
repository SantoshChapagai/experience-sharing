import { Form, Formik } from "formik";
import { ShareSchema, ShareSchemaType } from "../../validation/shareSchema";
import Button from "../../ui/components/Button";

export const Share = () => {
  const handleShare = (values: ShareSchemaType) => {
    console.log("share values", values);
  };
  return (
    <div className="max-w-[820px] w-full mx-auto mt-16 bg-neutral-20 rounded-xl">
      <Formik
        initialValues={{
          name: "",
          country: "",
          title: "",
          experience: "",
        }}
        validationSchema={ShareSchema}
        onSubmit={handleShare}
      >
        {({ getFieldProps, errors, touched }) => (
          <Form className="flex flex-col p-4 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                placeholder="Enter your full name"
                {...getFieldProps("name")}
                className="p-2 rounded border"
              />
              {errors.name && touched.name && (
                <div className="text-warning-30">{errors.name}</div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="country">Country</label>
              <input
                id="country"
                placeholder="Country"
                {...getFieldProps("country")}
                className="p-2 rounded border"
              />
              {errors.country && touched.country && (
                <div className="text-warning-30">{errors.country}</div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                placeholder="Enter your experience heading"
                {...getFieldProps("title")}
                className="p-2 rounded border"
              />
              {errors.title && touched.title && (
                <div className="text-warning-30">{errors.title}</div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Experience</label>
              <textarea
                maxLength={5000}
                placeholder="Enter your experience"
                rows={8}
                {...getFieldProps("experience")}
                className="border p-2 overflow-y-auto rounded"
              />
              {errors.experience && touched.experience && (
                <div className="text-warning-30">{errors.experience}</div>
              )}
            </div>
            <div className="mt-2 flex justify-end">
              <Button text="Submit" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
