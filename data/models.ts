export const models = [
    {
        id: "gpt-4-turbo",
        name: "GPT-4 Turbo",
        provider: "OpenAI",
        description: "The latest generation of OpenAI's premier model, featuring 128k context window and improved instruction following.",
        tags: ["Reasoning", "Coding", "Creative"],
        stats: {
            contextClient: "128k",
            params: "1.76T (Est.)"
        }
    },
    {
        id: "gemini-1.5-pro",
        name: "Gemini 1.5 Pro",
        provider: "Google",
        description: "Google's mid-size multimodal powerhouse with a massive 1M+ token context window.",
        tags: ["Multimodal", "Long Context", "Analysis"],
        stats: {
            contextClient: "1M+",
            params: "Unknown"
        }
    },
    {
        id: "claude-3.5-sonnet",
        name: "Claude 3.5 Sonnet",
        provider: "Anthropic",
        description: "Exceptional reasoning and coding capabilities, often outperforming larger models.",
        tags: ["Coding", "Nuance", "Safety"],
        stats: {
            contextClient: "200k",
            params: "Unknown"
        }
    },
    {
        id: "llama-3-70b",
        name: "Llama 3 70B",
        provider: "Meta",
        description: "The most capable open-weights model, rivaling top-tier proprietary systems.",
        tags: ["Open Weights", "Chat", "Efficient"],
        stats: {
            contextClient: "8k",
            params: "70B"
        }
    },
    {
        id: "mistral-large",
        name: "Mistral Large",
        provider: "Mistral AI",
        description: "Top-tier capabilities from Europe's leading AI lab, strong in multilingual tasks.",
        tags: ["Multilingual", "Reasoning", "Europe"],
        stats: {
            contextClient: "32k",
            params: "Unknown"
        }
    },
    {
        id: "grok-1.5",
        name: "Grok-1.5",
        provider: "xAI",
        description: "With enhanced reasoning and a 128k context length, integrated with real-time knowledge.",
        tags: ["Real-time", "Uncensored", "Fun"],
        stats: {
            contextClient: "128k",
            params: "Unknown"
        }
    }
];
