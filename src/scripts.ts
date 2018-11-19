export function applyStyle(style: any) {
    Word.run(function(context) {
        const doc = context.document;
        let target = null;
        const selectedRange: Word.Range = doc.getSelection();
        selectedRange.load("isEmpty");

        return context
            .sync()
            .then(function() {
                if (selectedRange.isEmpty) {
                    const selectedParagraphs = selectedRange.paragraphs;
                    const firstParagraph = selectedParagraphs.getFirst();
                    target = firstParagraph;
                } else {
                    target = selectedRange;
                }

                target.font.set({
                    name: style.fontFamily,
                    size: style.fontSize
                });
            })
            .then(context.sync);
    }).catch(function(error) {
        console.log("Error: " + error);
        if (error instanceof OfficeExtension.Error) {
            console.log("Debug info: " + JSON.stringify(error.debugInfo));
        }
    });
}
