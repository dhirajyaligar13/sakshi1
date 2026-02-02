
import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client with the API key from environment variables as required
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateLoveNote = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Generate a short, extremely adorable, and romantic 'Yes' message for a Valentine's proposal. It should be sweet, include emojis, and make the recipient feel very special. Maximum 3 sentences.",
      config: {
        temperature: 0.9,
      },
    });
    return response.text || "I knew you would say yes! ❤️ You've made me the happiest person in the world!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I knew you would say yes! ❤️ You've made me the happiest person in the world!";
  }
};
