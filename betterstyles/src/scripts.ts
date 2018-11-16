export function applyStyle(style: any) {
    Word.run(function(context) {
        const doc = context.document;
        let selectedRange: any = doc.getSelection();
        const selectedParagraphs = selectedRange.paragraphs;

        // if (selectedParagraphs.items.length == 1) {
        //     selectedRange = selectedParagraphs.getFirst();
        // }

        selectedRange.font.set({
            name: style.fontFamily,
            size: style.fontSize
        });

        return context.sync();
    }).catch(function(error) {
        console.log("Error: " + error);
        if (error instanceof OfficeExtension.Error) {
            console.log("Debug info: " + JSON.stringify(error.debugInfo));
        }
    });
}
