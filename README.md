# OpenBash

OpenBash is a web app that takes in natural human language commands and converts them into bash commands using the OpenAI API.

## Prerequisites

- Node.js
- An OpenAI API key

## Setup

1. Clone the repository:

```
git clone https://github.com/juniorvish/OpenBash.git
```

2. Navigate to the project directory:

```
cd OpenBash
```

3. Install the required dependencies:

```
npm install
```

4. Create a `.env` file in the project root and add your OpenAI API key:

```
OPENAI_API_KEY=your_api_key_here
```

## Usage

1. Start the development server:

```
npm start
```

2. Open your browser and navigate to `http://localhost:3000`.

3. Enter a natural language command in the input field and click the "Submit" button.

4. The generated bash command will be displayed in the output area.

## Files

- `index.html`: The main HTML file for the frontend.
- `css/tailwind.css`: The Tailwind CSS file for styling.
- `js/frontend.js`: The frontend JavaScript file for handling user input and displaying the output.
- `js/backend.js`: The backend JavaScript file for processing the natural language command and interacting with the OpenAI API.