// @ts-ignore
import React from "react";

import { Description, Primary,  Subtitle, Title,Controls } from "@storybook/addon-docs/blocks";


interface DocsPageArgs {
  component: string;
  since?: string;
  guideline?: string;
  warning?: string;
}

const DocumentationTemplate = (args: DocsPageArgs) => {


  return () => (
    <>
      <header>

          <Title />

        {args.since && (
          <span className="sb-ui5-component-heading-since">
            since: <b>{args.since?`v${args.since}`:"14.08.2020"}</b>
          </span>
        )}

        {args.guideline && (
          <a className="extlink" href={args.guideline} target="_blank">
            GUIDELINE
          </a>
        )}
      </header>
      {args.warning && (
        <div>
          <b>WARNING:</b> {args.warning}
        </div>
      )}

        <b>@furo/ui5/dist/{args.component}.js</b>
      <Subtitle />
      <Description />
      <br />
      <Primary />
<Controls />

    </>
  );
};

export default DocumentationTemplate
