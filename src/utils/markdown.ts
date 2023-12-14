export class MarkdownRenderer {
    renderCodeBlocks(text: string): string {
        const codeBlockRegex = /```([\s\S]*?)```/g;

        // Identify and process code blocks
        const processedText = text.replace(codeBlockRegex, (match, codeBlock) => {
            // Extract code and language (if provided)
            const lines = codeBlock.split('\n');
            const lang = lines[0].trim();
            const code = lines.slice(1).join('\n');

            // Format code
            const formattedCode = this.formatCode(lang, code);

            // Replace original code block with formatted code
            return formattedCode;
        });

        return processedText;
    }

    private formatCode(lang: string, code: string): string {
        // You can add your code formatting logic here based on the language
        // For simplicity, this example just wraps the code in <pre> tags
        return `<pre>${code}</pre>`;
    }
}

// Example usage
// const markdownText = `
// # Sample Markdown

// \`\`\`typescript
// console.log("Hello, World!");
// \`\`\`

// This is a paragraph.
// `;

// const renderer = new MarkdownRenderer();
// const renderedText = renderer.renderCodeBlocks(markdownText);
// console.log(renderedText);
