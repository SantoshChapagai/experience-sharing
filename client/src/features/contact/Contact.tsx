import { Form, Formik } from "formik";
import {
  ContactSchema,
  ContactSchemaType,
} from "../../validation/ContactSchema";
import Button from "../../ui/components/Button";

export const Contact = () => {
  const handleContact = (values: ContactSchemaType) => {
    console.log("handle contact", values);
  };
  return (
    <div className="max-w-[820px] w-full mx-auto mt-16 bg-neutral-20 rounded-xl">
      <Formik
        initialValues={{
          name: "",
          email: "",
          phoneNumber: "",
          subject: "",
          message: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={handleContact}
      >
        {({ getFieldProps, errors, touched }) => (
          <Form className="flex flex-col py-4 px-8 gap-4">
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
              <label htmlFor="email">Email</label>
              <input
                id="cemail"
                placeholder="Email address"
                {...getFieldProps("email")}
                className="p-2 rounded border"
              />
              {errors.email && touched.email && (
                <div className="text-warning-30">{errors.email}</div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Phone number</label>
              <input
                id="phone"
                placeholder="Your phone number"
                {...getFieldProps("phone")}
                className="p-2 rounded border"
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <div className="text-warning-30">{errors.phoneNumber}</div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                placeholder="Subject"
                {...getFieldProps("subject")}
                className="p-2 rounded border"
              />
              {errors.subject && touched.subject && (
                <div className="text-warning-30">{errors.subject}</div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Message</label>
              <textarea
                placeholder="Write your message"
                rows={5}
                {...getFieldProps("message")}
                className="border p-2 overflow-y-auto rounded"
              />
              {errors.message && touched.message && (
                <div className="text-warning-30">{errors.message}</div>
              )}
            </div>
            <div className="flex justify-end mt-2">
              <Button text="Submit" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
