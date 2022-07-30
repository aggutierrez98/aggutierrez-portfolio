import { ChangeEvent, useCallback, useState } from "react";

export const useForm = <T extends Object>(initState: T) => {
  const [state, setState] = useState(initState);

  const onChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const setFormValues = useCallback((form: T) => {
    setState(form);
  }, []);

  return {
    ...state,
    form: state,
    onChange,
    setFormValues,
  };
};
