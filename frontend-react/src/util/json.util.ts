import { ListSection } from '../model/json.model';

export const loadJson = async (filePath: string): Promise<ListSection> => {
    const response = await fetch(filePath);
    if (!response.ok) {
        throw new Error('Failed to load ListSection');
    }
    return response.json();
}
