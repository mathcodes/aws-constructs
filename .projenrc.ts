import { awscdk } from "projen";
const project = new awscdk.AwsCdkConstructLibrary({
  author: "Jon Christie",
  authorAddress: "jonpchristie@gmail.com",
  cdkVersion: "2.50.0",
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.0.0",
  name: "aws-constructs",
  projenrcTs: true,
  repositoryUrl: "https://github.com/mathcodes/aws-constructs.git",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();