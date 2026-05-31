// @ts-ignore
import React from "react";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Primary,  Subtitle, Title,Controls, Source } from "@storybook/addon-docs/blocks";
import {getCustomElements } from "@storybook/web-components-vite";



interface DocsPageArgs {
  component: string;
  since?: string;
  guideline?: string;
  warning?: string;
  originalComponent?: string;
}

interface Module {
  declarations: Declaration[];
}

interface Declaration {
  tagName?: string;
  description?: string;
}

const DocumentationTemplate = (args: DocsPageArgs) => {
  function resolveDescription(component:string):string {
    let description = "";
     getCustomElements().modules.find((m:Module)=> {
      return m.declarations.find((d:Declaration)=>{
      if(d?.tagName === component){
        description = d.description || "No description found.";
        return true
      }
      return false
      })
    })

    return description
  }

  const markdown = resolveDescription(args.component)
  return () => (
    <>
      <header>

          <Title />
<table width="100%">
<tbody>
  <tr>
    <td width={"*"}> <b>@furo/ui5/dist/{args.component}.js</b></td>
    <td width={"120"}><b>since:</b> {args.since?`v${args.since}`:`14.08.2020`}</td>
    <td width={"120"}> {args.originalComponent && (
      <a className="extlink" href={args.originalComponent} target="_blank">
        ORIGINAL
      </a>
    )}</td>
    <td width={"120"}> {args.guideline && (
      <a className="extlink" href={args.guideline} target="_blank">
        GUIDELINE
      </a>
    )}</td>
  </tr>
</tbody>
</table>




      </header>
      {args.warning && (
        <div>
          <b>WARNING:</b> {args.warning}
        </div>
      )}


      <Subtitle />
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          pre: ({ children }) => <>{children}</>,
          code({ className, children, ...rest }) {
            const m = /language-(\w+)/.exec(className || "");
            return m ? (
              <Source dark language={m[1] as React.ComponentProps<typeof Source>["language"]} code={String(children).replace(/\n$/, "")} />
            ) : (
              <code className={className} {...rest}>{children}</code>
            );
          },
        }}
      >{markdown}</Markdown>
      <br />
      <Primary />
<Controls />

    </>
  );
};

export default DocumentationTemplate
