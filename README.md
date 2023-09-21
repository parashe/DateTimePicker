This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.




### MultiSelectDropdown Component
The MultiSelectDropdown component accepts the following props:

options (array): An array of options to be displayed in the dropdown. Each option should have a value and a label.

value (array): An array of currently selected values.

onChange (function): A callback function to handle changes in selected values.

label (string, optional): An optional label to display above the dropdown.

errorMessage (string, optional): An optional error message to display.

isEmpty (boolean, optional): An optional boolean to indicate if the dropdown is empty.

required (boolean, optional): An optional boolean to indicate if the dropdown is required.


### Dropdown Select Component

Installation
Clone or download this repository to your project directory.

Import the DropDownSelect component from the appropriate location in your project, depending on your folder structure.

Ensure that you have React and the necessary dependencies installed in your project.

Props
The DropDownSelect component accepts the following props:

options (required): An array of objects representing the available options in the dropdown. Each object should have a value and a label property.

value (required): The currently selected value. Should be a string.

onChange (required): A callback function that is called when an option is selected. It receives the selected value as a parameter.

label (optional): A string to display as the label above the dropdown.

errorMessage (optional): A string to display as an error message.

isEmpty (optional): A boolean to indicate if the dropdown should be empty.

disabled (optional): A boolean to disable the dropdown.

className (optional): A string to specify additional CSS classes for styling.

required (optional): A boolean to indicate if the field is required.