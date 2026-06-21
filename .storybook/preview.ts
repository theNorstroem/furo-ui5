import  { type Preview, setCustomElementsManifest } from '@storybook/web-components-vite'
import customElements from "../custom-elements.json";
import { setStorybookHelpersConfig, type Options } from "@wc-toolkit/storybook-helpers";

const options: Options = {renderDefaultValues: true };

setStorybookHelpersConfig(options);

// filter private members

customElements.modules.forEach((module: any) => {
  module.declarations.forEach((declaration: any) => {
    if(!declaration.members){
      // console.log(declaration)
    }
    declaration.members?.forEach((member: any,i:number ) => {
      if(member.privacy === "private"){
         delete declaration.members[i]
      }
    })
  })
})


setCustomElementsManifest(customElements);


const preview: Preview = {};

export default preview;
