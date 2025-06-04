# 🍳 Easy Cooking - Intelligent Recipe App

An AI-powered mobile application that transforms your available ingredients into delicious recipes. Built with React Native and powered by Google Gemini AI, Easy Cooking makes meal planning effortless and creative.

## ✨ Features

- **🤖 AI-Powered Recipe Generation**: Enter up to 4 ingredients and meal type, get personalized recipes instantly
- **🍽️ Meal Type Customization**: Generate recipes for breakfast, lunch, dinner, snacks, and more
- **📱 Mobile-First Design**: Optimized for iOS and Android devices
- **⚡ Real-Time Processing**: Fast recipe generation using Google Gemini AI
- **🎯 Ingredient-Based Suggestions**: Make the most of what you have in your kitchen

## 🛠️ Tech Stack

- **React Native** - Cross-platform mobile development framework
- **TypeScript** - Type-safe JavaScript for better development experience
- **Google Gemini API** - Advanced AI model (`gemini-1.5-flash`) for recipe generation
- **Expo** - Development platform for React Native applications

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <REPOSITORY_URL>
   cd easy-cooking
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   GOOGLE_GEMINI_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Run on device/emulator**
   - Scan the QR code with Expo Go app (Android/iOS)
   - Or run `npm run android` / `npm run ios`

## 📱 How to Use

1. **Enter Ingredients**: Add up to 4 ingredients you have available
2. **Select Meal Type**: Choose from breakfast, lunch, dinner, snack, or dessert
3. **Generate Recipe**: Tap the generate button and let AI create your recipe
4. **Cook & Enjoy**: Follow the detailed instructions and enjoy your meal!

## 🔧 Configuration

### Google Gemini API Setup

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add the key to your `.env` file
4. Ensure billing is enabled for your Google Cloud project

## 📂 Project Structure

```
easy-cooking/
├── src/
│   ├── components/       # Reusable UI components
│   ├── screens/         # App screens
│   ├── services/        # API services
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Helper functions
├── assets/              # Images and static files
├── .env                 # Environment variables
└── package.json
```


## 🐛 Known Issues

- Recipe generation may take 5-10 seconds depending on network conditions
- Limited to 4 ingredients per recipe for optimal results

