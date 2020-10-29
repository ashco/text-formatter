# AshCo's Text Formatter

This is a simple text formatter application, with a few cool features to boot!

## How to Use

First, input the text that you want to modify into the input field. When no text is present, you can see instructions on how to include variables via placeholder text.

You can insert the following dynamic variables:

- `{INPUT_VARIABLE}` - Wrap a variable name in curly brackets, `{` and `}`, to generate an input field that can be filled in with text to replace in that location.
- `{SELECT_VARIABLE_1&SELECT_VARIABLE_2}` - You can convert an Input Variable into a Multiple Select Variable by separating variables inside curly brackets with the `&` keyword.
- `!DATE` - Dynamically generate and insert the current date.

## Feature List

- Input text caching to localStorage.
- Dynamic variable identification.
- Variable's are identified and highlighted via RegExp.
- Mobile First development process.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
