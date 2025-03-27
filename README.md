# Responsive Website Tester

A simple yet powerful tool to test how websites look on different screen sizes, perfect for ensuring responsive design.

![Responsive Website Tester](https://github.com/mehraankush/responsive-tester/blob/main/public/image.png)

## Features

- **Multiple Device Views**: Quickly test mobile, tablet, and desktop layouts.
- **Custom Dimensions**: Set specific width and height for precise testing.
- **User-Friendly Interface**: Just enter a URL and see the live preview instantly.
- **Visual Indicators**: Clearly displays the current viewport dimensions.
- **Fully Responsive**: The tool itself works seamlessly on all screen sizes.

## How to Use

1. Enter a website URL in the input field (with or without `https://`).
2. Click **"Test Responsiveness"** to load the website in different views.
3. Switch between **mobile, tablet, and desktop** tabs to analyze the design.
4. Use the **custom tab** to test any specific dimensions.

## Technical Notes

- Uses **iframes** to display websites, which may cause issues with sites that have strict Content Security Policies (CSP).
- Works best with sites that allow iframe embedding.
- The **desktop view** is slightly scaled down to fit within the viewport.

## Installation & Development

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/responsive-tester.git
   cd responsive-tester
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the project:
   ```sh
   npm run dev
   ```

## Contributing

Feel free to submit issues or pull requests to improve this tool.
