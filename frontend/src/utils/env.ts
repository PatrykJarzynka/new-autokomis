export default function getEnv(name: string): string {
    return import.meta.env[name];
}