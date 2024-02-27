import React, { FC } from "react";
import Input from "../input/Input";

type MesType = {
  value: string;
  setValue: (value: string) => void;
};

const MessageForm: FC<MesType> = ({ value, setValue }) => {
  return <Input name="message" value={value} onChange={(v) => setValue(v)} />;
};

export default MessageForm;
