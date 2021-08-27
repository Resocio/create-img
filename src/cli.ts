import { program } from 'commander'
import { coompileTemplate } from './compile';

const runCompiler = async () => {
  program
    .name('create-img')
    .description("Create an image based on a Resoc image template")
    .version(require('../package.json').version)
    .argument('[manifest]', 'Path to the template manifest', (v, p) => v, './image-template-manifest.json')
    .option('-p, --params <parameters...>', 'Parameter values, with <name>=<value> format')
    .option('-o, --output <imagePath>', 'Output image file', './output.png')
    .action(async (manifestPath, options) => {
      console.log("Create image...");
      await coompileTemplate(manifestPath, options.params, options.output);
      console.log("Done!");
    });

  program.parse(process.argv);
};

runCompiler();