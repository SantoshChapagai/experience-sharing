import { Form, Formik } from "formik";
import { SignupSchema, SignupSchemaType } from "../../validation/signupSchema";
import Button from "../../ui/components/Button";

export const Signup = () => {
  const handleSignup = (values: SignupSchemaType) => {
    console.log("sign up values", values);
  };
  return (
    <div className="max-w-[820px] w-full mx-auto mt-16 bg-neutral-20 rounded-xl">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSignup}
      >
        {({ getFieldProps, errors, touched }) => (
          <Form className="p-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                placeholder="Enter your First name"
                {...getFieldProps("firstName")}
                className="p-2 rounded border"
              />
              {errors.firstName && touched.firstName && (
                <div className="text-warning-30">{errors.firstName}</div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                placeholder="Enter your last name"
                {...getFieldProps("lastName")}
                className="p-2 rounded border"
              />
              {errors.lastName && touched.lastName && (
                <div className="text-warning-30">{errors.lastName}</div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                placeholder="Email address"
                {...getFieldProps("email")}
                className="p-2 rounded border"
              />
              {errors.email && touched.email && (
                <div className="text-warning-30">{errors.email}</div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                placeholder="Your phone number"
                {...getFieldProps("password")}
                className="p-2 rounded border"
              />
              {errors.password && touched.password && (
                <div className="text-warning-30">{errors.password}</div>
              )}
            </div>
            <div className="text-center mt-4">
              <Button text="Submit" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
