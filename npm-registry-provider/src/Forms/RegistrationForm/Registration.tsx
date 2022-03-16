import React from "react";
import { JsonForms } from '@jsonforms/react';
import {
  vanillaCells,
  vanillaRenderers,
} from '@jsonforms/vanilla-renderers';
import schema from './schema.json';
import uischema from './uischema.json';
import textboxControlTester from '../../controls/textbox/textboxControlTester';
import TextboxControl from "../../controls/textbox/textbox";

const renderers = [
  ...vanillaRenderers,
  { tester: textboxControlTester, renderer: TextboxControl }
];

const initialData = {
  emailtextbox: '',
};

export const Registration: React.FC<{}> = () => {
  return (
    <>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={initialData}
        renderers={renderers}
        cells={vanillaCells}
        onChange={({ errors, data }) => {
          console.log(data);
          console.log(errors);
        }}
      />
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      </p>
    </>
  );
};


