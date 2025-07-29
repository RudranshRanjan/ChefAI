
import { HfInference } from '@huggingface/inference'
const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients from a user and suggests a recipe using some or all of them. Format your response in markdown.
`;

const hf = new HfInference(import.meta.env.VITE_API_HUGGS)

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}