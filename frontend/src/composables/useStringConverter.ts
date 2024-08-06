import getEnv from "@/utils/env";

function useStringConverter() {
    function upperCaseFirstLetter(text: string): string {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    function createImagePath(localPath: string): string {
        const appUrl = getEnv('VITE_APP_URL');
        return `${appUrl}/${localPath}`
    }

    return {
        upperCaseFirstLetter,
        createImagePath
    }
}

export default useStringConverter;