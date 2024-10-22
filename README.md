# J-Fashion 101
## Overview
J-Fashion 101 is a web application that explores Japanese fashion subcultures, providing information on origins, brands, influencers, and style basics. 
Users can search for specific subcultures.

## Features
- Learn about different Japanese fashion subcultures
- Filter content by subculture
- Search functionality to find specific subcultures
- Responsive design for desktop and mobile views
- Subtle animation with key frames
- Image hover transform 

## Prerequisites
Before you can run this project, install the following:

- Node.js 
- npm (comes with Node.js)

## Installation Instructions
1. Clone the repository
2. Open an integrated terminal and hit npm install
3. Then in the terminal write npx json-server --watch data.json --port 3000
4. Open index.html in the web browser or "go live" in your code editor.

## Usage Instructions
- Navigate to the main page in your web browser.
- Use the dropdown menu under "Subcultures" to filter content by specific subcultures.
- Use the search bar to find specific fashion subcultures.

## Branching Strategy
In past projects I have struggled in creating too many branches and cross my wires in terms of updates, making the branches meaningless. 
With this project I wanted to focus on tight and simple. I made two branches, one for the API and one for for the client. This had more success in keeping separation which I aim to build on. 
I tried to commit whenever I made a significant change, with my comments reflecting what had changed so if anything broke I could go through my git history and pin point the error.

## Additional Notes
This project uses a custom JSON file as the data source. If you wish to edit or add new subcultures, modify the JSON file located in the data directory.

## Troubleshooting
If you encounter any issues with the project setup, ensure all prerequisites are installed and check that you have the latest versions of Node.js and npm.
