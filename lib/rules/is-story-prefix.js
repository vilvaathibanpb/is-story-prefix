module.exports = {
    meta: {
        messages: {
            customMessageId: "Storybook files should have the prefix"
        },
        type: "problem",
        schema: [{
            type: "object",
            properties: {
                customPrefix: {
                    type: "string"
                }
            },
            additionalProperties: false
        }]
    },
    create(context) {
        return {
            Program(node) {
                const fileNamePath = context.getFilename();
                const fileName = fileNamePath.split("/")[fileNamePath.split("/").length - 1]
                if(!fileName.startsWith( context.options[0].customPrefix  || "STORY_") && fileName.endsWith("stories.jsx")) {
                    context.report({
                        node,
                        messageId: 'customMessageId'
                    })
                }
            },
        }
    }
}