import { useRef } from "react";

type Props = {
  title?: any;
};

type FormFields = {
  firstname: string;
  lastname: string;
  email: string;
};

const extractFormData = (form: HTMLFormElement) =>
  Object.fromEntries(new FormData(form).entries()) as FormFields;

export default ({ title }: Props) => {
  const form = useRef(null);

  return (
    <>
      {title}
      <form
        ref={form}
        onSubmit={(event) => {
          event.preventDefault();
          extractFormData(form.current as unknown as HTMLFormElement);
        }}
      >
        <div className="grid">
          <label htmlFor="firstname">
            First name
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First name"
              required
            />
          </label>

          <label htmlFor="lastname">
            Last name
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last name"
              required
            />
          </label>
        </div>

        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
          required
        />
        <small>We'll never share your email with anyone else.</small>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
