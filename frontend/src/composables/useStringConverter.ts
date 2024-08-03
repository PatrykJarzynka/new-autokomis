function useStringConverter() {
    function upperCaseFirstLetter(text: string): string {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    return {
        upperCaseFirstLetter,
    }
}

export default useStringConverter;